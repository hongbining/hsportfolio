import type { Project } from "@/lib/types"

// 플레이스홀더 케이스 스터디입니다. 구조는 프로덕션 수준이며, 문구·지표·링크는
// 실제 작업 내용으로 교체하세요.
const projects: Project[] = [
  {
    slug: "billing-platform",
    title: "빌링 플랫폼 재설계",
    domain: "B2B SaaS · 결제",
    year: 2024,
    role: "리드 풀스택 엔지니어",
    summary:
      "취약하던 빌링 모놀리스를, 팀이 매일 안전하게 바꿀 수 있는 이벤트 기반 원장(ledger)으로 교체했습니다.",
    problem:
      "인보이싱 로직이 모놀리스에 묶여 있어 변경에 며칠이 걸렸고, 고객 규모가 커지면서 과금 오류가 발생해 매출과 신뢰를 위협했습니다.",
    architecture:
      "빌링을 추가 전용(append-only) 원장 기반의 이벤트 드리븐 서비스로 분리하고, 타입이 보장된 API 게이트웨이를 앞단에 두어 스트랭글러 패턴으로 점진 이관했습니다.",
    decisions: [
      {
        title: "이벤트 소싱 원장",
        rationale:
          "추가 전용 원장으로 모든 잔액을 언제든 재구성·감사할 수 있게 되어, 상태 손상 버그 한 부류를 통째로 제거했습니다.",
      },
      {
        title: "스트랭글러 이관",
        rationale:
          "트래픽을 점진적으로 옮겨 빅뱅 전환 위험 없이 매주 프로덕션에 배포할 수 있었습니다.",
      },
      {
        title: "경계에서의 컨트랙트 테스트",
        rationale:
          "소비자 주도 컨트랙트로 신규 서비스와 레거시 호출부가 함께 진화하면서도 어긋나지 않게 유지했습니다.",
      },
    ],
    tradeoffs: [
      {
        choice: "원장에 이벤트 소싱 채택",
        cost: "리드 모델 복잡도와 최종 일관성 엣지 케이스가 늘어, 팀이 이를 설계 단계에서 감안해야 했습니다.",
      },
      {
        choice: "전면 재작성 대신 스트랭글러 이관",
        cost: "두 분기 동안 레거시와 신규 빌링 경로를 병행 운영하며 이중 운영 부담을 졌습니다.",
      },
    ],
    troubleshooting: [
      {
        issue: "재시도 폭주 시 원장에 중복 항목이 쌓였습니다.",
        resolution:
          "핸들러를 멱등하게 만들고 (aggregateId, requestId) 중복 제거 키를 애플리케이션이 아닌 데이터베이스 레벨에서 강제했습니다.",
      },
      {
        issue: "이관 도중 레거시 시스템과 잔액이 어긋났습니다.",
        resolution:
          "두 원장을 대조해 불일치 시 알림을 보내는 야간 섀도우 비교 작업을 추가하고, 그 후에야 트래픽을 옮겼습니다.",
      },
    ],
    lessonsLearned: [
      "멱등성 키는 우회할 수 없는 스키마에 두어야 합니다 — 애플리케이션 코드가 아니라.",
      "섀도우 비교 도구가 어떤 스테이징 테스트보다 이관에 대한 확신을 더 줬습니다.",
    ],
    impact: [
      "빌링 변경 리드타임을 며칠에서 몇 시간으로 단축",
      "신규 경로에서 이중 과금 장애 제거",
      "정산 대조 시간 약 80% 감소",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Kafka", "AWS"],
    links: [
      {
        type: "case-study",
        label: "전체 케이스 스터디 보기",
        href: "/work/billing-platform",
      },
    ],
    featured: true,
  },
  {
    slug: "design-system",
    title: "디자인 시스템 · 컴포넌트 플랫폼",
    domain: "엔터프라이즈 · 개발자 경험",
    year: 2023,
    role: "시니어 풀스택 엔지니어",
    summary:
      "다섯 개 제품 화면을 접근성 있고 버전 관리되는 하나의 컴포넌트 라이브러리로 통합했습니다.",
    problem:
      "다섯 팀이 제각각 UI를 만들면서 작업이 중복되고, 엔터프라이즈 고객에게 일관성 없고 접근성이 떨어지는 경험을 제공했습니다.",
    architecture:
      "토큰 기반의 헤드리스 컴포넌트 라이브러리를 만들고, 자동 접근성 검사와 버전 릴리스 파이프라인을 붙여 모든 제품이 공유하도록 했습니다.",
    decisions: [
      {
        title: "디자인 토큰을 단일 진실 공급원으로",
        rationale:
          "토큰으로 테마를 구성해 각 제품이 컴포넌트를 포크하지 않고도 스타일을 바꿀 수 있었습니다.",
      },
      {
        title: "헤드리스 프리미티브",
        rationale:
          "동작과 스타일을 분리해 접근성은 정확히 유지하면서 팀별 디자인은 자유롭게 가져갔습니다.",
      },
      {
        title: "CI에서 접근성 자동 게이트",
        rationale:
          "회귀를 CI에서 잡아 접근성을 사후 작업이 아닌 기본값으로 만들었습니다.",
      },
    ],
    tradeoffs: [
      {
        choice: "스타일 완비 키트 대신 헤드리스 프리미티브",
        cost: "초기에 연결 코드를 더 작성하는 대신, 포크되지 않는 접근성과 테마를 얻었습니다.",
      },
      {
        choice: "단일 버전 패키지",
        cost: "파괴적 변경 시 일괄 업그레이드가 필요해, 코드모드와 엄격한 디프리케이션 정책에 투자했습니다.",
      },
    ],
    troubleshooting: [
      {
        issue: "중첩 다이얼로그에서 포커스 트랩이 제품별로 깨졌습니다.",
        resolution:
          "포커스 관리 프리미티브를 하나로 표준화하고, 보조기기 기반 회귀 테스트를 추가했습니다.",
      },
      {
        issue: "적용이 넓어지자 번들 크기가 회귀했습니다.",
        resolution:
          "컴포넌트별 엔트리 포인트와 트리 셰이킹 예산을 CI 게이트로 강제했습니다.",
      },
    ],
    lessonsLearned: [
      "디자인 토큰은 계약입니다 — 팀이 신뢰하기 시작하면 리스타일링은 더 이상 이관 작업이 아닙니다.",
      "접근성은 CI에서 검증해야만 유지됩니다. 문서만으로는 회귀합니다.",
    ],
    impact: [
      "두 분기 만에 5개 제품팀이 도입",
      "신규 UI 구축 시간 약 40% 단축",
      "감사 시점 치명적 접근성 이슈 0건",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Radix UI", "Storybook"],
    links: [
      {
        type: "case-study",
        label: "전체 케이스 스터디 보기",
        href: "/work/design-system",
      },
    ],
    featured: true,
  },
  {
    slug: "observability",
    title: "관측 가능성 · 장애 대응",
    domain: "플랫폼 · 안정성",
    year: 2022,
    role: "풀스택 엔지니어",
    summary:
      "온콜 엔지니어가 고객이 알아채기 전에 문제를 찾아 고칠 수 있도록 신호 체계를 만들었습니다.",
    problem:
      "여러 서비스에 걸친 장애를 짚어낼 트레이스와 지표가 없어 평균 복구 시간(MTTR)이 길었습니다.",
    architecture:
      "서비스를 OpenTelemetry로 계측하고 구조적 로깅을 표준화했으며, 실행 가능한 페이징 알림이 붙은 SLO 대시보드를 구축했습니다.",
    decisions: [
      {
        title: "전 구간 OpenTelemetry",
        rationale:
          "벤더 중립 표준이라 향후 백엔드를 바꿔도 트레이싱이 살아남았습니다.",
      },
      {
        title: "SLO 기반 알림",
        rationale:
          "사용자 영향 SLO에 알림을 걸어 노이즈를 줄이고 온콜을 곧장 영향 지점으로 안내했습니다.",
      },
    ],
    tradeoffs: [
      {
        choice: "벤더 중립 OpenTelemetry",
        cost: "턴키 에이전트보다 초기 계측 비용이 컸지만, 장기적 이식성을 얻었습니다.",
      },
      {
        choice: "SLO 기반 페이징",
        cost: "알림을 조정하기 전에 제품과 엔지니어링이 사용자 관점 목표에 합의해야 했습니다.",
      },
    ],
    troubleshooting: [
      {
        issue: "비동기 큐 경계에서 트레이스 컨텍스트가 유실됐습니다.",
        resolution:
          "메시지 헤더로 컨텍스트를 명시적으로 전파하고, 스팬 연속성을 검증하는 컨트랙트 테스트를 추가했습니다.",
      },
      {
        issue: "증상 기반 규칙으로 인한 알림 피로가 심했습니다.",
        resolution:
          "호스트·CPU 기반 알림을 SLO 번레이트(burn-rate) 알림으로 교체해 노이즈를 크게 줄였습니다.",
      },
    ],
    lessonsLearned: [
      "측정하기 쉬운 것이 아니라, 사용자가 체감하는 것에 알림을 거세요.",
      "트레이싱은 가장 약한 전파 경계만큼만 좋습니다 — 이음새를 테스트하세요.",
    ],
    impact: [
      "MTTR 약 60% 단축",
      "커버리지는 늘면서 페이지 호출은 감소",
      "SLO를 팀 공통의 안정성 언어로 정착",
    ],
    stack: ["Node.js", "OpenTelemetry", "Grafana", "PostgreSQL", "AWS"],
    links: [
      {
        type: "case-study",
        label: "전체 케이스 스터디 보기",
        href: "/work/observability",
      },
    ],
    featured: true,
  },
]

/** 모든 케이스 스터디를 최신순으로 반환합니다. */
export function getAllProjects(): Project[] {
  return [...projects].sort((a, b) => b.year - a.year)
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
