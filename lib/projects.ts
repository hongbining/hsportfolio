import type { Project } from "@/lib/types"

// 실제 경력 기반. 매출 등 미발생/미확인 지표는 지어내지 않고, 검증 가능한 사실만 사용.
const projects: Project[] = [
  {
    slug: "kh-wholesale-platform",
    title: "KH — 건강기능식품 B2B 폐쇄몰",
    domain: "B2B 커머스 · 폐쇄몰",
    order: 1,
    year: 2026,
    period: "2026.04 ~ 현재 · 약 3개월 · 543 커밋",
    role: "1인 풀스택 (기획·설계·BE·FE·DB·배포·운영 단독)",
    capability: "B2B 비즈니스 · 업무 프로세스 설계",
    interviewQuestion: "왜 이런 업무 흐름으로 설계했나요?",
    summary:
      "사업자 인증을 거친 회원만 거래하고, 비로그인 사용자에게는 도매가·재고를 노출하지 않는 건강기능식품 B2B 폐쇄몰. 주문·결제·배송·정산·세무까지 도매 전 과정을 혼자 설계·구현하고 Docker/GitLab CI로 배포·운영했습니다.",
    problem:
      "건강기능식품 도매는 거래처(약국·소매점)마다 받는 가격이 다르고, 아무에게나 도매가를 노출하면 안 됩니다. 사업자 인증 전에는 가격은 물론 카탈로그·재고도 보여줄 수 없습니다. 일반 오픈마켓 구조로는 '누구나 보는 상품'과 '인증된 거래처만 보는 가격'을 동시에 만족할 수 없었습니다. 결국 이건 커머스가 아니라 인증·가격 노출 제어 문제였고, 사용자도 공급사·구매자(약국/소매점)·관리자 3종으로 권한과 화면이 갈립니다.",
    constraints: [
      "개발자 1명이 약 3개월(543 커밋) 동안 기획부터 배포·운영까지 단독 수행.",
      "운영 인력이 비개발자 — 모든 운영을 관리자 CMS 안에서 처리할 수 있어야 함.",
      "인프라 예산 제약 — 마이크로서비스·Kafka·관리형 검색엔진은 선택지에서 제외.",
      "도매 관행상 무통장 입금·세금계산서가 기본이라 PG 자동결제를 전제할 수 없음.",
    ],
    decisions: [
      {
        title: "Spring Boot 단일 애플리케이션",
        rationale:
          "혼자 개발·운영하므로 분산 시스템의 운영 비용을 감당할 수 없었습니다. 주문·재고·정산의 트랜잭션 무결성을 한 프로세스 안에서 보장하는 편이 안전했습니다.",
      },
      {
        title: "MyBatis + 직접 SQL",
        rationale:
          "거래처 등급별 가격·정산 쿼리가 복잡해, ORM의 추상화보다 SQL을 직접 통제하는 쪽이 정확하고 디버깅이 쉬웠습니다.",
      },
      {
        title: "MySQL + Flyway",
        rationale:
          "혼자 배포하므로 스키마 변경을 코드로 버전 관리하고 롤백할 수 있어야 했습니다. 마이그레이션 89개를 형상관리했습니다.",
      },
      {
        title: "Cloudflare R2 + S3 추상화",
        rationale:
          "상품 이미지 조회 트래픽이 꾸준해 S3 egress 비용을 피하려 R2를 썼고, 스토리지 인터페이스를 추상화해 벤더 종속을 낮췄습니다.",
      },
      {
        title: "Spring Security 세션 인증",
        rationale:
          "폐쇄몰 특성상 서버가 모든 요청의 인증 상태를 신뢰성 있게 통제해야 해서, 토큰보다 서버 세션으로 일관되게 게이트를 걸었습니다.",
      },
    ],
    architecture:
      "프론트엔드(Next.js 16 RSC)에서 인증에 따라 갈리는 데이터를 1차로 거르고, Spring Security 세션이 모든 요청의 인증을 통제합니다. 도메인은 Spring Boot 428개 클래스(서비스 122·컨트롤러 71·매퍼 50)로, MyBatis를 통해 MySQL과 통신하며, 이미지·문서는 Cloudflare R2/S3로 추상화했습니다. 공통 응답 규격(ApiResponse)·전역 예외 핸들러·DTO/엔티티 분리를 컨벤션으로 세웠고, 프론트는 90개 페이지·77개 컴포넌트, Flyway 89개를 형상관리합니다.",
    architectureFlow: [
      { label: "Next.js 16", tech: "App Router · RSC" },
      { label: "Spring Security", tech: "세션 인증 게이트" },
      { label: "Spring Boot", tech: "도메인 428 클래스" },
      { label: "MyBatis", tech: "직접 SQL" },
      { label: "MySQL", tech: "Flyway 89" },
      { label: "Cloudflare R2 / S3", tech: "이미지·문서" },
    ],
    coreFeatures: [
      {
        title: "주문·배송 자동 분리",
        detail:
          "한 주문에 여러 공급사 상품이 섞이면 공급사별 배송건(shipment)으로 자동 분리하고, 공급사는 자기 배송건만 독립 발송(택배사·송장)합니다. 무통장 입금·당일배송 컷오프·입금기한 자동취소, 6개 택배사 배송조회 딥링크를 지원합니다.",
      },
      {
        title: "폐쇄몰 가격 마스킹 (defense-in-depth)",
        detail:
          "비로그인 사용자에게는 API 응답 단계에서 공급가·재고·할인을 제거하고, 프론트는 useMe() 분기로 '로그인 후 가격 확인' CTA를 렌더합니다. 옵션 상품과 SSR 경로까지 누출 지점을 막았습니다.",
      },
      {
        title: "공급사 자가서비스 + 관리자 승인 워크플로",
        detail:
          "공급사가 상품을 CRUD하면 승인 대기 → 관리자 승인/거부(사유)로 이어지고, 가격 등 민감 필드를 수정하면 재승인으로 재진입합니다. 옵션(variant)·엑셀 일괄 등록(Apache POI)·일괄 정리/영구삭제를 제공합니다.",
      },
      {
        title: "사업자 회원 인증 게이트",
        detail:
          "회원가입 시 국세청 사업자등록정보 진위확인 API로 검증하고, 사업자등록증 파일을 multipart로 받아 R2 private에 저장한 뒤 presigned URL로만 열람합니다. 관리자 승인 게이트를 통과해야 거래가 열립니다.",
      },
      {
        title: "운영 · 정산 · 세무",
        detail:
          "공급사/관리자 매출 대시보드(Recharts)와 분석 페이지, 세금계산서·현금영수증 발행 보조, 매입원가·정산을 제공합니다.",
      },
      {
        title: "메일 · 알림 + 운영 cron · 다국어 · 검색",
        detail:
          "DB 템플릿 기반 발송에 카테고리/이벤트 On-Off·야간 차단·발송 로그를 두고, 미승인 회원·입금 미확인·배송 지연·재고 임박을 cron으로 Email/Slack에 알립니다. 한/영/일/중 4개국어, MySQL FULLTEXT(ngram) 한글 검색도 구현했습니다.",
      },
    ],
    tradeoffs: [
      {
        choice: "모듈러 모놀리스 (단일 배포)",
        cost: "독립 배포·수평 확장을 포기하는 대신 혼자 운영 가능성과 트랜잭션 무결성을 얻었고, 모듈 경계는 패키지 컨벤션과 셀프 리뷰로 강제했습니다.",
      },
      {
        choice: "MyBatis 직접 SQL",
        cost: "JPA 대비 보일러플레이트가 늘었지만, 복잡한 가격·정산 쿼리의 통제력과 디버깅 편의를 택했습니다.",
      },
      {
        choice: "무통장 입금 기반",
        cost: "PG 자동결제의 즉시성을 포기하는 대신 도매 관행(세금계산서)에 맞췄고, 입금 확인·기한 자동취소 배치로 공백을 메웠습니다.",
      },
      {
        choice: "MySQL FULLTEXT(ngram) 검색",
        cost: "Elasticsearch의 검색 품질을 포기하는 대신 1인 운영 비용을 줄였고, 한글 검색 요구는 ngram으로 충족했습니다.",
      },
    ],
    troubleshooting: [
      {
        problem:
          "동시에 들어온 주문이 같은 재고를 차감하거나, 같은 주문번호를 발급받아 충돌했습니다.",
        cause:
          "재고 확인과 차감이 분리돼 check-then-write 레이스가 났고, 주문번호 채번도 경쟁 상태였습니다. 트랜잭션이 롤백돼도 이미 보낸 메일·알림은 되돌릴 수 없었습니다.",
        solution:
          "재고는 `UPDATE ... SET stock = stock - :qty WHERE stock >= :qty` 단일 원자 UPDATE로 차감하고, 주문번호 충돌은 DuplicateKeyException 재시도로 처리했습니다. 동시성 충돌은 500이 아니라 409로 매핑하고, 메일·알림 같은 외부 효과는 @TransactionalEventListener(AFTER_COMMIT)로 커밋 이후에만 실행하도록 분리했습니다.",
        result:
          "오버셀이 구조적으로 차단되고, 롤백 시 오발송이 사라졌으며, 동시성 충돌이 일관된 409로 노출됐습니다.",
      },
      {
        problem: "운영 배포 중 Flyway 마이그레이션이 실패하며 무한 재시도에 빠졌습니다.",
        cause:
          "프로덕션 MySQL 8.0(8.0.29 이전)이 DROP INDEX IF EXISTS를 지원하지 않고, FK 백업 인덱스를 단독 삭제하면 errno 1553가 발생했습니다.",
        solution:
          "'ADD 먼저 → DROP' 순서로 ALTER를 재배치해 FK 의존을 깨지 않도록 하고, 자동 복구 빈(repairThenMigrate)을 도입해 실패 상태를 정리한 뒤 재마이그레이션하도록 했습니다.",
        result:
          "운영 DB 버전 차이로 인한 배포 중단이 사라지고, 마이그레이션이 멱등하게 안정화됐습니다.",
      },
      {
        problem: "사업자등록증 등 파일 업로드가 에러 없이 조용히 실패했습니다.",
        cause:
          "axios 인스턴스의 기본 Content-Type이 FormData 전송 시 boundary 없는 multipart/form-data로 헤더를 덮어써, 서버가 파트를 파싱하지 못했습니다.",
        solution:
          "해당 요청의 Content-Type을 undefined로 두어 브라우저가 boundary를 포함한 multipart 헤더를 자동 설정하도록 위임했습니다.",
        result: "파일 업로드가 정상화되고, 무음 실패가 제거됐습니다.",
      },
      {
        problem:
          "관리자가 휴대폰에서 회원 승인 시 모달 본문이 화면을 넘쳐 승인 버튼에 닿지 못했습니다.",
        cause:
          "flex 스크롤 컨테이너의 자식이 min-height 기본값 때문에 축소되지 않아 본문이 넘쳤습니다.",
        solution:
          "스크롤 컨테이너에 min-height:0를 보강하고, 주요 액션을 sticky footer로 옮기고 safe-area 패딩을 더했습니다. Playwright 모바일 뷰포트로 회귀를 검증했습니다.",
        result: "모바일에서 승인 동선이 복구되고, E2E로 재발을 막았습니다.",
      },
      {
        problem: "boolean 필드의 JSON 키가 어긋나고, Windows 환경에서 한글이 깨졌습니다.",
        cause:
          "Lombok의 boolean isXxx 필드를 Jackson이 잘못된 키로 추론했고, 빌드/요청 인코딩이 MS949였습니다.",
        solution:
          "@JsonProperty로 키를 명시해 전수 대응하고, 빌드·요청 인코딩을 UTF-8로 강제하는 설정을 표준화했습니다.",
        result: "프론트-백엔드 직렬화 불일치와 인코딩 깨짐이 제거됐습니다.",
      },
    ],
    impact: [
      "혼자 약 3개월·543 커밋으로 기획부터 배포·운영까지 단독 완성.",
      "백엔드 428개 클래스(서비스 122·컨트롤러 71·매퍼 50), 프론트 90개 페이지·77개 컴포넌트, Flyway 89개.",
      "JUnit5·MockMvc·Playwright 테스트 115개로 주문~정산 핵심 흐름을 회귀 자동화.",
      "원자적 재고 차감으로 오버셀을 구조적으로 차단하고, 운영 알림 cron으로 운영 부담을 줄임.",
    ],
    lessonsLearned: [
      "정합성은 애플리케이션 코드가 아니라 DB 제약과 원자적 연산에 둬야 살아남는다는 걸 재확인했습니다.",
      "메일·알림 같은 외부 효과는 반드시 커밋 이후로 분리해야 롤백이 안전합니다.",
      "마이그레이션은 로컬뿐 아니라 운영 DB 버전 호환성까지 봐야 무한 재시도 같은 사고를 막습니다.",
      "다시 한다면 결제(PG)·검색(ES)은 트래픽이 붙는 시점에 단계적으로 도입할 계획입니다.",
    ],
    stack: [
      "Java 17",
      "Spring Boot 3.5",
      "Spring Security",
      "MyBatis",
      "MySQL",
      "Flyway",
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Cloudflare R2",
      "Docker",
      "GitLab CI/CD",
      "JUnit5",
      "Playwright",
    ],
    links: [],
    featured: true,
  },
  {
    slug: "cj-gis-platform",
    title: "CJ 골프장 GIS 관리 시스템",
    domain: "GIS · 대용량 이미지",
    order: 2,
    year: 2025,
    period: "2025.05 ~ 2025.09",
    role: "웹 1인 개발 (CJ AI 연구원 협업)",
    capability: "기술 난이도 — GIS · GDAL · 대용량 이미지",
    interviewQuestion: "GeoTIFF를 어떻게 서비스 가능한 지도 형태로 변환했나요?",
    summary:
      "골프장(나인브리지) 코스를 항공·위성 기반 지도로 관리하는 시스템. 수백 MB~수 GB의 GeoTIFF 원본을 서비스 가능한 지도 타일로 변환하는 파이프라인과 현장 작업 관리 CMS를 단독 개발했습니다.",
    problem:
      "골프장 코스 관리에는 고해상도 항공/위성 이미지가 필요한데, GeoTIFF 원본은 수백 MB에서 수 GB라 그대로 웹에 띄울 수 없습니다. 좌표계가 제각각이라 지도 위에 정확히 얹으려면 변환이 필요하고, 코스·작업·병해 모니터링은 비개발자인 현장 운영자가 매일 다뤄야 했습니다.",
    constraints: [
      "웹 파트 1인 개발 — CJ AI 연구원과 협업.",
      "대용량 GeoTIFF를 메모리에 통째로 올릴 수 없음.",
      "현장 운영자는 비개발자 — 코스·작업·모니터링을 관리자 CMS로 처리.",
    ],
    decisions: [
      {
        title: "GDAL 기반 타일링·좌표 변환",
        rationale:
          "GeoTIFF를 표준 좌표계로 재투영하고 지도 타일로 잘라, 브라우저가 보이는 영역의 타일만 내려받게 했습니다. 원본을 통째로 다루지 않도록 GDAL로 전처리했습니다.",
      },
      {
        title: "AWS S3 + CloudFront",
        rationale:
          "생성한 타일·이미지를 S3에 두고 CloudFront로 캐싱·배포해 조회 지연과 원본 부하를 줄였습니다.",
      },
      {
        title: "Leaflet 지도 렌더 + Docker",
        rationale:
          "타일 기반 렌더에 적합한 Leaflet으로 코스 보기를 구현하고, GDAL 같은 네이티브 의존성은 Docker로 고정해 환경 차이를 없앴습니다.",
      },
    ],
    architecture:
      "GeoTIFF 원본을 GDAL로 재투영·타일링해 표준 지도 타일로 만들고, S3에 저장한 뒤 CloudFront로 캐싱·배포합니다. 브라우저는 Leaflet으로 보이는 영역의 타일만 받아 렌더하고, 그 위에 코스 보기·작업 일지·병해 모니터링 사용자 페이지와 현장 작업 관리 CMS를 올렸습니다. 전체는 Docker로 배포했습니다.",
    architectureFlow: [
      { label: "GeoTIFF 원본", tech: "수백 MB~수 GB" },
      { label: "GDAL", tech: "재투영 · 타일링" },
      { label: "AWS S3", tech: "타일 저장" },
      { label: "CloudFront", tech: "캐싱 · 배포" },
      { label: "Leaflet", tech: "지도 렌더" },
    ],
    coreFeatures: [
      {
        title: "GeoTIFF → 지도 타일 파이프라인",
        detail:
          "GDAL로 좌표 변환·타일링해 서비스 가능한 지도 형태로 변환하고 S3/CloudFront로 배포합니다.",
      },
      {
        title: "코스 보기 · 작업 일지 · 병해 모니터링",
        detail: "현장 운영자가 매일 사용하는 사용자 페이지를 개발했습니다.",
      },
      {
        title: "현장 작업 관리 CMS",
        detail: "관리자용 CMS로 코스·작업을 관리합니다.",
      },
    ],
    tradeoffs: [
      {
        choice: "전처리(타일링) 후 서빙",
        cost: "업로드·변환 시점의 비용이 들지만, 조회 시 브라우저·서버 부하를 크게 줄였습니다.",
      },
    ],
    troubleshooting: [
      {
        problem: "수백 MB~수 GB의 GeoTIFF를 웹에서 그대로 띄울 수 없었습니다.",
        cause:
          "원본을 메모리에 통째로 로드하면 처리 비용이 크고, 좌표계가 제각각이라 지도에 정확히 얹기 어려웠습니다.",
        solution:
          "업로드·전처리 시점에 GDAL로 재투영·타일링해 표준 타일로 만들고, S3에 저장한 뒤 CloudFront로 배포해 브라우저가 보이는 영역의 타일만 받도록 했습니다.",
        result:
          "조회 시 브라우저·서버 부하가 크게 줄고, 대용량 이미지를 서비스 가능한 지도로 제공했습니다.",
      },
    ],
    impact: [
      "GeoTIFF→타일 파이프라인으로 대용량 이미지를 서비스 가능한 지도로 변환.",
      "GDAL 전처리 + S3/CloudFront로 조회 부하를 최소화.",
      "GIS·대용량 이미지·AWS 인프라 설계를 1인으로 수행.",
    ],
    lessonsLearned: [
      "대용량 이미지는 '언제 변환하느냐'가 성능을 가른다 — 조회 시점이 아니라 업로드·전처리 시점으로 옮겼습니다.",
      "GIS·GDAL은 흔치 않은 도메인이라 표준 좌표계·타일 규격을 정확히 맞추는 게 핵심이었습니다.",
    ],
    stack: [
      "GeoTIFF",
      "GDAL",
      "Leaflet",
      "AWS S3",
      "CloudFront",
      "Docker",
      "Java",
      "Spring Boot",
    ],
    links: [],
    featured: true,
  },
  {
    slug: "tvchosun",
    title: "TV조선 홈페이지 리뉴얼",
    domain: "콘텐츠 서비스 · 결제",
    order: 3,
    year: 2024,
    period: "2024.07 ~ 2025.06",
    role: "주요 시스템 개발 (설계·기획 회의 참여)",
    capability: "운영 서비스 — CMS · VOD · 정기결제",
    interviewQuestion:
      "운영 중인 콘텐츠 서비스를 개발하면서 가장 어려웠던 점은 무엇이었나요?",
    summary:
      "운영 중인 방송 콘텐츠 플랫폼 리뉴얼. VOD·패키지 다시보기, 이니시스 결제와 구독 정기결제 배치, 회원/CRM, 관리자 CMS, YouTube API 연동을 개발했습니다.",
    problem:
      "이미 운영 중인 콘텐츠 서비스를 리뉴얼하면서 VOD 다시보기·유료 결제·구독 정기결제를 끊김 없이 제공해야 했습니다. 결제와 콘텐츠가 얽혀 있어 한쪽의 실패가 사용자 경험을 그대로 깨뜨릴 수 있었습니다.",
    constraints: [
      "운영 중 서비스 — 기존 사용자·콘텐츠를 유지하며 전환.",
      "이니시스 결제·YouTube API 등 외부 의존성을 전제.",
    ],
    decisions: [
      {
        title: "단건 결제와 정기결제 분리",
        rationale:
          "이니시스 단건 결제와 구독 정기결제를 분리하고, 정기결제는 배치로 주기 실행해 실패·재시도를 운영 가능하게 했습니다.",
      },
      {
        title: "패키지 단위 시청권",
        rationale:
          "VOD·패키지 다시보기를 콘텐츠 패키지 단위 시청권으로 관리해 결제와 연결했습니다.",
      },
      {
        title: "YouTube API 연동",
        rationale: "외부 영상 자산을 끌어와 콘텐츠를 보강했습니다.",
      },
    ],
    architecture:
      "사용자(VOD·구독) 요청을 Spring Boot가 받아 콘텐츠 시청권과 결제를 연결합니다. 결제는 이니시스 단건과 정기결제 배치로 분리하고, 회원/CRM·관리자 CMS·YouTube API를 연동했습니다.",
    architectureFlow: [
      { label: "사용자", tech: "VOD · 구독" },
      { label: "Spring Boot", tech: "시청권 · 회원" },
      { label: "이니시스", tech: "단건 · 정기결제 배치" },
      { label: "DB / CMS", tech: "콘텐츠 · CRM" },
    ],
    coreFeatures: [
      { title: "VOD · 패키지 다시보기", detail: "다시보기 시스템을 개발했습니다." },
      {
        title: "이니시스 결제 · 구독 정기결제 배치",
        detail: "단건 결제와 정기결제 배치를 구현·운영했습니다.",
      },
      {
        title: "회원관리 · CRM 연동",
        detail: "회원/CRM 시스템과 연동 개발했습니다.",
      },
      {
        title: "관리자 CMS · YouTube API",
        detail: "운영용 CMS와 YouTube API 연동을 개발했습니다.",
      },
    ],
    tradeoffs: [
      {
        choice: "외부 PG(이니시스) + 배치 정기결제",
        cost: "외부 의존성·배치 운영 부담을 지는 대신 검증된 결제·정기결제를 빠르게 확보했습니다.",
      },
    ],
    troubleshooting: [
      {
        problem:
          "외부 결제(이니시스)와 구독 정기결제가 실패하면 사용자 결제·시청 경험이 깨질 수 있었습니다.",
        cause:
          "단건 결제와 정기결제가 한 흐름에 얽혀 있고, 외부 API·배치는 실패가 잦습니다.",
        solution:
          "단건 결제와 정기결제를 분리하고, 정기결제는 배치로 주기 실행하며 실패·재시도를 운영 가능하게 구성했습니다.",
        result:
          "결제·콘텐츠 장애 전파를 줄이고, 정기결제를 운영 가능한 형태로 안정화했습니다.",
      },
    ],
    impact: [
      "결제 + 콘텐츠 통합 플랫폼 구조를 설계·개발.",
      "단건/정기결제 분리로 장애 전파를 차단.",
      "외부 API(YouTube)·정기결제 배치 운영 경험.",
    ],
    lessonsLearned: [
      "운영 중 서비스는 '전환 중에도 멈추지 않는 것'이 가장 어렵다 — 결제와 콘텐츠를 분리해 장애 전파를 줄였습니다.",
    ],
    stack: ["Java 17", "Spring Boot", "JSP", "jQuery", "이니시스", "YouTube API"],
    links: [],
    featured: true,
  },
  {
    slug: "hugreen",
    title: "휴그린 홈페이지 리뉴얼 · Enterprise CMS",
    domain: "Enterprise CMS · 운영 자동화",
    order: 4,
    year: 2025,
    period: "2025.04 ~ 2025.06",
    role: "프론트·백엔드 전반 기획·개발 (개발 팀장)",
    capability: "Enterprise CMS · 운영 자동화",
    interviewQuestion:
      "관리자가 실제 사용하는 시스템을 설계할 때 어떤 점을 고려했나요?",
    summary:
      "Spring Boot 기반 관리자 CMS와 운영 시스템 리뉴얼. 사용자/대리점 관리, 상담·통계, 알림톡/메일, 운영 자동화 구조를 설계해 관리 효율을 높였습니다.",
    problem:
      "관리자가 매일 쓰는 운영 시스템은 '기능이 많은 것'보다 '실수 없이 빠르게 처리되는 것'이 중요합니다. 사용자·대리점·상담·통계·발송이 흩어져 있어 운영 업무가 수작업으로 반복됐습니다.",
    constraints: [
      "실제 운영자가 매일 사용 — 관리자 UX와 안정성이 우선.",
      "여러 운영 기능을 하나의 CMS로 통합해야 함.",
    ],
    decisions: [
      {
        title: "다수 기능 통합 CMS",
        rationale:
          "흩어진 운영 기능을 하나의 CMS로 묶어 운영자의 동선과 학습 비용을 줄였습니다.",
      },
      {
        title: "운영 자동화 기반 구조",
        rationale:
          "발송·통계 같은 반복 운영 업무를 자동화 구조로 옮겨 관리 효율을 높였습니다.",
      },
      {
        title: "알림톡 · 메일 발송 연동",
        rationale: "고객 커뮤니케이션을 시스템에서 일관되게 처리했습니다.",
      },
    ],
    architecture:
      "관리자/대리점 요청을 Spring Boot CMS가 받아 사용자·상담·통계를 일원화하고, 운영 자동화(스케줄/배치)로 반복 업무를 줄이며, 알림톡·메일 발송을 연동했습니다.",
    architectureFlow: [
      { label: "관리자 / 대리점", tech: "운영 주체" },
      { label: "Spring Boot CMS", tech: "통합 관리" },
      { label: "운영 자동화", tech: "스케줄 · 배치" },
      { label: "알림톡 / 메일", tech: "고객 커뮤니케이션" },
    ],
    coreFeatures: [
      { title: "관리자 CMS", detail: "관리자 시스템을 설계·개발했습니다." },
      { title: "사용자/대리점 관리", detail: "대리점 시스템을 구축했습니다." },
      {
        title: "상담 · 통계",
        detail: "상담 및 통계 데이터 시스템을 개발했습니다.",
      },
      { title: "알림톡 · 메일", detail: "발송 시스템을 연동했습니다." },
    ],
    tradeoffs: [
      {
        choice: "다수 기능 통합 CMS",
        cost: "단일 시스템의 복잡도는 늘지만, 운영자의 동선과 학습 비용을 줄였습니다.",
      },
    ],
    troubleshooting: [
      {
        problem:
          "사용자·대리점·상담·통계·발송이 흩어져 운영 업무가 수작업으로 반복됐습니다.",
        cause:
          "기능이 분리돼 있어 운영자가 여러 시스템을 오가며 같은 일을 반복했습니다.",
        solution:
          "기능을 하나의 CMS로 통합하고, 발송·통계 같은 반복 업무를 운영 자동화 구조(스케줄/배치)로 옮겼습니다.",
        result: "운영 동선이 단축되고 관리 효율이 개선됐습니다.",
      },
    ],
    impact: [
      "흩어진 운영 기능을 통합 CMS로 일원화.",
      "반복 업무 자동화로 관리 효율을 개선.",
      "대리점·상담·통계·발송까지 운영 자동화 구조를 설계.",
    ],
    lessonsLearned: [
      "관리자 시스템은 화려함보다 '실수 없이 빠른 처리'가 핵심 — 운영 동선을 기준으로 설계했습니다.",
    ],
    stack: ["Java 17", "Spring Boot", "JSP", "jQuery", "알림톡", "메일"],
    links: [],
    featured: true,
  },
]

/** 홈 정렬 순서대로 반환. */
export function getAllProjects(): Project[] {
  return [...projects].sort((a, b) => a.order - b.order)
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((project) => project.featured)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getProjectSlugs(): string[] {
  return projects.map((project) => project.slug)
}
