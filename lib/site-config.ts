import type {
  Capability,
  ExperienceItem,
  NavItem,
  Principle,
  SkillGroup,
  SocialLink,
} from "@/lib/types"

// (전화번호·주소 등 개인정보는 노출하지 않습니다.)
const url = "https://hsportfolio-henna.vercel.app"
const email = "gilhongsuk@gmail.com"

const nav: NavItem[] = [
  { title: "프로젝트", href: "#work" },
  { title: "일하는 방식", href: "#approach" },
  { title: "경력", href: "#about" },
  { title: "연락처", href: "#contact" },
]

const socials: SocialLink[] = [
  { platform: "github", label: "GitHub", href: "https://github.com/hongbining" },
  { platform: "email", label: "이메일", href: `mailto:${email}` },
]

/** 히어로 영역에 노출되는 주요 기술 스택. */
const techStack: string[] = [
  "Java",
  "Spring Boot",
  "Next.js",
  "TypeScript",
  "MySQL",
  "Docker",
  "AWS",
  "GitLab CI/CD",
]

const capabilities: Capability[] = [
  {
    key: "architecture",
    title: "B2B 시스템 · 업무 프로세스 설계",
    description:
      "사업자 인증부터 주문·배송·정산까지, 실제 업무 흐름을 운영 가능한 시스템으로 설계합니다. (KH 폐쇄몰)",
  },
  {
    key: "delivery",
    title: "까다로운 · 대용량 기술",
    description:
      "GeoTIFF/GDAL 기반 GIS 이미지 파이프라인처럼 흔치 않은 문제를 끝까지 구현합니다. (CJ 골프장 GIS)",
  },
  {
    key: "leadership",
    title: "설계~운영 단독 책임 · 팀 리딩",
    description:
      "기획·개발·배포·운영을 혼자 책임지고, 개발 팀장으로 주요 프로젝트를 이끌었습니다.",
  },
]

const principles: Principle[] = [
  {
    title: "비즈니스 문제에서 출발한다",
    description:
      "KH는 '커머스'가 아니라 '인증·가격 노출 제어' 문제로 봤습니다. 기술보다 업무 흐름이 먼저입니다.",
  },
  {
    title: "정합성은 DB에 둔다",
    description:
      "재고·정산처럼 돈이 걸린 정합성은 애플리케이션이 아니라 DB 제약과 원자적 연산으로 보장합니다.",
  },
  {
    title: "팀 규모에 맞는 기술을 고른다",
    description:
      "혼자 운영하는 시스템에 마이크로서비스는 부채입니다. 운영 가능성을 기준으로 선택합니다.",
  },
  {
    title: "트레이드오프를 기록한다",
    description:
      "왜 그 선택을 했고 무엇을 포기했는지 남깁니다. 되돌릴 수 있게.",
  },
]

const skills: SkillGroup[] = [
  {
    category: "Backend",
    items: ["Java", "Spring Boot", "Spring MVC", "Spring Security", "MyBatis", "JPA"],
  },
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "JSP", "jQuery"],
  },
  {
    category: "Database",
    items: ["MySQL", "Oracle", "MS SQL Server"],
  },
  {
    category: "Infrastructure",
    items: ["AWS (EC2 · S3 · CloudFront)", "Cloudflare R2", "Nginx"],
  },
  {
    category: "DevOps",
    items: ["Docker", "GitLab CI/CD", "Git · SVN"],
  },
  {
    category: "GIS · 특화",
    items: ["GDAL", "GeoTIFF", "Leaflet", "대용량 이미지 처리", "B2B Commerce", "Enterprise CMS"],
  },
]

/** Hero 영역의 핵심 지표 타일. (검증 가능한 사실만) */
const stats: { value: string; label: string }[] = [
  { value: "8+", label: "년 경력 · Full Stack" },
  { value: "단독", label: "설계·개발·배포·운영 (KH)" },
  { value: "팀장", label: "개발 리딩 경험" },
  { value: "4", label: "엔터프라이즈 프로젝트" },
]

/** Hero 영역의 핵심 키워드 칩. */
const heroKeywords: string[] = [
  "Java",
  "Spring Boot",
  "Next.js",
  "AWS",
  "GDAL · GIS",
  "Docker",
  "System Architecture",
]

const experience: ExperienceItem[] = [
  {
    role: "IT 책임연구원 · 개발 팀장",
    company: "큐브에이",
    period: "2024.02 ~ 2026.04",
    description:
      "개발 팀장으로 팀을 이끌며 주요 프로젝트의 설계·기획·개발을 총괄했습니다.",
    highlights: [
      "휴그린·TV조선 리뉴얼, CJ 골프장 GIS 등 주요 프로젝트의 설계·기획·개발 총괄.",
      "개발 팀장으로 팀을 리딩 — 동료와 문제를 공유하며 프로젝트를 끌고 감.",
      "Spring Boot 기반 CMS·결제·GIS까지 다루는 도메인 폭을 넓힘.",
    ],
  },
  {
    role: "웹 개발자 (대리)",
    company: "트라이코코리아",
    period: "2022.11 ~ 2023.11",
    description: "Java/Spring 기반 사내 웹 개발·유지보수를 담당했습니다.",
    highlights: [
      "연말정산 기능 개발, 고객 메일링 서비스(Admin Job Scheduler) 구축.",
      "Apache PDFBox로 PDF 인증서 서명, Clip Report 기반 계약서·보고서 개발.",
      "레거시 코드 리팩터링과 홈페이지 리뉴얼.",
    ],
  },
  {
    role: "연구원 (대리)",
    company: "라온텍",
    period: "2020.02 ~ 2022.08",
    description: "관공서 교통 시스템(BIS/ITS)을 개발·운영했습니다.",
    highlights: [
      "버스 운영(BIS)·지능형 교통(ITS) 시스템 개발 (천안·하남·남양주·고양·청주·목포 등).",
      "Kakao/Naver 지도 API, Wowza 영상 스트리밍, HighChart 통계, Spring Security 적용.",
      "날씨 연계 시스템을 JPA 기반으로 설계·개발, 설계~구현~테스트~감리까지 수행.",
    ],
  },
  {
    role: "IT (미국 뉴저지)",
    company: "BEAUTY PLUS (USA)",
    period: "2016.10 ~ 2018.11",
    description:
      "무역회사 ERP 환경에서 IT 지원과 시스템 유지보수를 담당했습니다.",
    highlights: [
      "세일즈맨별 매출 보고서, UPS·ERP 시스템 맵핑, 바코드 재고 입출 프로세스 처리.",
      "VBA 자동화로 반복 업무를 줄이고 리턴 섹션 프로세스를 최적화.",
    ],
  },
]

export const siteConfig = {
  name: "길홍석",
  initials: "길",
  role: "풀스택 개발자",
  yearsOfExperience: 8,
  /** 기본 메타 설명. */
  description:
    "8년차 풀스택 개발자 길홍석. Java·Spring Boot와 Next.js로 B2B 플랫폼, GIS 시스템, 콘텐츠 서비스, Enterprise CMS를 설계부터 운영까지 직접 수행했습니다.",
  /** 히어로 제목과 보조 문구. */
  headline: "기업의 업무를 운영 가능한 시스템으로 구현하는 8년차 풀스택 개발자입니다.",
  subheadline:
    "B2B 플랫폼, GIS 시스템, 콘텐츠 서비스, Enterprise CMS를 설계부터 개발, 배포, 운영까지 직접 수행했습니다.",
  location: "서울",
  email,
  url,
  availability:
    "B2B SaaS · 엔터프라이즈 백엔드/풀스택 포지션을 찾고 있습니다" as string | null,
  about: [
    "저는 8년차 풀스택 개발자입니다. Spring Boot 기반 웹 서비스와 엔터프라이즈 시스템을 만들어 왔고, SI·공공·콘텐츠 플랫폼·GIS 등 다양한 도메인에서 단순 개발을 넘어 설계와 운영까지 수행했습니다.",
    "최근에는 건강기능식품 B2B 폐쇄몰을 기획부터 배포·운영까지 혼자 만들고 있습니다. 화려한 기능보다 시스템 구조 개선·자동화·운영 효율에 관심이 많고, 확장 가능한 아키텍처를 지향합니다. 개발 팀장으로 주요 프로젝트를 이끈 경험도 있습니다.",
  ],
  nav,
  socials,
  techStack,
  stats,
  heroKeywords,
  capabilities,
  principles,
  skills,
  experience,
} as const

export type SiteConfig = typeof siteConfig
