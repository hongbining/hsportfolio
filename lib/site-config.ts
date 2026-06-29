import type {
  Capability,
  ExperienceItem,
  NavItem,
  Principle,
  SkillGroup,
  SocialLink,
} from "@/lib/types"

// 플레이스홀더 콘텐츠입니다. 아래 값을 실제 정보로 교체하세요.
// 신원 정보(이름·이메일·도메인 등)는 실수로 가짜 정보가 배포되지 않도록 TODO로 남겨 둡니다.
const url = "https://your-domain.com" // TODO
const email = "you@example.com" // TODO

const nav: NavItem[] = [
  { title: "프로젝트", href: "#work" },
  { title: "일하는 방식", href: "#approach" },
  { title: "소개", href: "#about" },
  { title: "연락처", href: "#contact" },
]

const socials: SocialLink[] = [
  { platform: "github", label: "GitHub", href: "https://github.com/hongbining" },
  {
    platform: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/your-handle",
  },
  { platform: "x", label: "X", href: "https://x.com/your-handle" },
  { platform: "email", label: "이메일", href: `mailto:${email}` },
]

/** 히어로 영역에 노출되는 주요 기술 스택. */
const techStack: string[] = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "GraphQL",
  "AWS",
  "Docker",
]

const capabilities: Capability[] = [
  {
    key: "architecture",
    title: "아키텍처 · 시스템 설계",
    description:
      "트래픽과 팀이 커져도 단순함을 유지하도록 서비스 경계, 데이터 모델, API를 설계합니다.",
  },
  {
    key: "delivery",
    title: "풀스택 개발",
    description:
      "프론트엔드부터 백엔드, 그 아래 인프라까지 기능을 끝까지 책임지고 출시합니다.",
  },
  {
    key: "leadership",
    title: "엔지니어링 리더십",
    description:
      "기술 방향을 정하고, 품질 기준을 높이며, 함께 성장하도록 동료를 멘토링합니다.",
  },
]

const principles: Principle[] = [
  {
    title: "비즈니스 문제에서 출발한다",
    description:
      "모든 기술적 결정은 결국 비즈니스가 원하는 결과로 이어집니다.",
  },
  {
    title: "변화를 염두에 두고 설계한다",
    description:
      "당장의 기능이 아니라, 다음 분기에 마주할 변경을 기준으로 최적화합니다.",
  },
  {
    title: "품질을 기본값으로 만든다",
    description:
      "타입·테스트·관측 가능성으로 올바른 길이 가장 쉬운 길이 되게 합니다.",
  },
  {
    title: "트레이드오프를 분명히 한다",
    description:
      "왜 그렇게 했는지 기록하고, 비용을 드러내며, 되돌릴 수 있게 남겨 둡니다.",
  },
]

const skills: SkillGroup[] = [
  { category: "언어", items: ["TypeScript", "JavaScript", "SQL", "Go"] },
  { category: "프론트엔드", items: ["React", "Next.js", "Tailwind CSS"] },
  { category: "백엔드", items: ["Node.js", "NestJS", "PostgreSQL", "Redis"] },
  { category: "인프라", items: ["AWS", "Docker", "Terraform", "CI/CD"] },
]

const experience: ExperienceItem[] = [
  {
    role: "시니어 풀스택 엔지니어",
    company: "회사명", // TODO
    period: "2021 — 현재",
    description:
      "빌링·플랫폼 서비스를 끝까지 책임지며, 변경 리드타임을 며칠에서 몇 시간으로 줄이고 매출에 영향을 주던 장애 유형을 제거한 재설계를 주도했습니다.",
  },
  {
    role: "풀스택 엔지니어",
    company: "이전 회사", // TODO
    period: "2017 — 2021",
    description:
      "고객용 기능과 그 뒤의 API를 출시하고, 팀이 지금도 사용하는 테스트·관측 가능성 관행을 도입했습니다.",
  },
]

export const siteConfig = {
  name: "홍길동", // TODO: 실제 이름으로 교체
  initials: "홍",
  role: "풀스택 개발자",
  yearsOfExperience: 8,
  /** 기본 메타 설명. 160자 내외 권장. */
  description:
    "8년간 엔터프라이즈·B2B 팀을 위한 안정적이고 확장 가능한 웹 플랫폼을 설계하고 만들어 온 풀스택 개발자입니다.",
  /** 히어로 제목과 보조 문구. */
  headline: "엔터프라이즈 팀을 위한 신뢰할 수 있는 시스템을 만듭니다.",
  subheadline:
    "데이터 모델과 API부터 고객이 매일 마주하는 화면까지 — 8년간 프로덕션 시스템을 설계하고 운영해 온 풀스택 개발자입니다.",
  location: "대한민국, 서울", // TODO
  email,
  url,
  /** 노출하지 않으려면 null로 설정. */
  availability: "시니어·스태프 엔지니어 포지션을 찾고 있습니다" as string | null,
  about: [
    "저는 제품과 플랫폼이 만나는 지점에서 가장 잘 일하는 풀스택 개발자입니다. 모호한 비즈니스 문제를, 규모가 커져도 안정적으로 동작하는 시스템으로 풀어냅니다.",
    "지난 8년간 데이터 모델과 API, 그것을 움직이는 서비스, 그리고 고객이 매일 마주하는 화면까지 스택 전반을 만들어 왔습니다. 데모에서는 잘 드러나지 않는 부분 — 관측 가능성, 테스트, 명확한 경계 — 에 특히 신경 쓰는데, 그것이 팀을 계속 빠르게 움직이게 하기 때문입니다.",
  ],
  nav,
  socials,
  techStack,
  capabilities,
  principles,
  skills,
  experience,
} as const

export type SiteConfig = typeof siteConfig
