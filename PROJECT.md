# GHS Portfolio — 프로젝트 컨텍스트 (AI용 요약)

> 이 문서는 AI/개발자가 이 저장소를 빠르게 이해하고 안전하게 수정하도록 정리한 지도입니다.
> 프로젝트 철학·규칙은 `AGENTS.md`(및 이를 import하는 `CLAUDE.md`)를 함께 참고하세요.

## 1. 개요
- **무엇**: 8년 이상 경력 풀스택 개발자 **길홍석**의 취업용 **한국어 포트폴리오** 웹사이트.
- **타겟 독자**: 국내 기업 CTO · 개발팀장 · Tech Lead (30초 안에 "면접 보고 싶다").
- **성격**: 예쁜 사이트가 아니라 **엔지니어링 케이스 스터디** 중심. "기능을 만드는 개발자"가 아니라 "시스템을 설계·운영하는 시니어"로 읽히게.
- **배포**: Vercel, `main` 브랜치 push 시 자동 배포 → **https://hsportfolio-henna.vercel.app**
- **저장소**: `github.com/hongbining/hsportfolio` (기본 브랜치 `main`).
- **연락**: gilhongsuk@gmail.com

## 2. 기술 스택 & 실행
- **Next.js 16** (App Router, React Server Components) · **React 19** · **TypeScript(strict)**
- **Tailwind CSS v4** · **shadcn/ui**(`radix-ui` 통합 패키지 기반) · **Framer Motion**(은은한 fade만) · **lucide-react**
- 패키지 매니저: **npm**
- 스크립트: `npm run dev` / `npm run build` / `npm run start` / `npm run lint`
- **빌드 게이트(수정 후 항상 통과해야 함)**: `npx tsc --noEmit` → `npm run lint` → `npm run build`
- 모든 라우트는 **정적 생성**(Static / SSG). `/work/[slug]`는 `generateStaticParams`로 4개 프리렌더.
- 작업 디렉터리: 저장소 루트는 `ghs-portfolio/` (그 상위 `hong_portfolio/`가 아님).

## 3. 디렉터리 구조
```
app/
  layout.tsx            루트 레이아웃(폰트 Geist, 메타데이터/OG/robots, 테마, 스킵링크, 헤더/푸터), <html lang="ko">
  page.tsx              홈: Hero → CoreStrengths → CaseStudies → Approach → About → ContactCta
  work/[slug]/page.tsx  케이스 스터디 상세(단일 렌더러). 서사 아크로 렌더
  globals.css           Tailwind v4 + shadcn 토큰 + 한국어 가독성(word-break: keep-all) + prefers-reduced-motion
  icon.svg              favicon(원형 "길" 마크, 라이트/다크 대응)
  opengraph-image.tsx   OG 이미지(next/og + Noto Sans KR 폰트 로드, 실패 시 라틴 폴백)
  not-found.tsx / robots.ts / sitemap.ts
components/
  sections/             홈 섹션들 (hero, core-strengths, case-studies, case-study-card, approach, about, contact-cta,
                        architecture-background(hero 배경))  ※ capabilities, tech-stack = 휴면(10장 참고)
  layout/               logo, main-nav, mobile-nav, site-header, site-footer, theme-provider, theme-toggle
  architecture-flow.tsx 아키텍처 파이프라인 다이어그램(로고/아이콘 노드 + 화살표)
  troubleshooting.tsx   Problem·Cause·Solution·Result 카드
  career-timeline.tsx   경력 타임라인(역할·담당·성장)
  tech-stack-groups.tsx 기술 스택 6그룹
  project-overview.tsx  케이스 스터디 Overview 카드(역할/기간/팀규모/배포환경/기술)
  overline / section / section-heading / container / social-links / motion/reveal(Framer fade)
  icons/brand-icons.tsx GitHub/LinkedIn/X SVG(현재 소셜 미노출로 사실상 휴면)
  seo/profile-json-ld.tsx  Person JSON-LD
  ui/                   shadcn 프리미티브 (badge, button, card, separator)
lib/
  site-config.ts        사이트 전역 콘텐츠(신원/네비/Hero/역량/원칙/기술/경력) — 단일 소스
  projects.ts           4개 케이스 스터디 데이터(Project[]) + 조회 헬퍼
  types.ts              모든 도메인 타입
  utils.ts              cn()
public/logos/           브랜드 로고 SVG: nextjs, spring, mysql, cloudflare (devicon)
```

## 4. 콘텐츠 모델 (텍스트를 바꾸려면 여기만 고치면 됨)
### `lib/site-config.ts` → `siteConfig`
- 신원: `name`("길홍석"), `initials`("길"), `role`, `yearsOfExperience`(8), `email`, `url`, `location`, `description`(메타), `headline`(Hero 제목), `subheadline`, `availability`
- `about[]` (소개 문단), `nav[]`(앵커: #work/#approach/#about/#contact), `socials[]`(**현재 빈 배열** → 아이콘 미노출)
- `techStack[]`(Hero 칩), `stats[]`(Hero 지표 타일, 예: 8+/단독/팀장/4), `heroKeywords[]`
- `coreStrengths[]`(Core Strength 7개 카드, `icon`은 lucide 키) — **홈에서 사용**
- `principles[]`(일하는 방식 5개 원칙) — Approach에서 사용
- `skills[]`(기술 스택 6그룹) — TechStackGroups에서 사용
- `experience[]`(경력 4곳: 큐브에이/트라이코코리아/라온텍/BEAUTY PLUS, `highlights[]` 포함) — CareerTimeline에서 사용
- `capabilities[]` — **휴면(미사용)**. CoreStrengths가 대체함.

### `lib/projects.ts` → `Project[]` (4개, `getAllProjects`/`getProjectBySlug`/`getProjectSlugs`)
각 프로젝트는 **케이스 스터디 서사 아크**로 렌더됩니다. 필드(타입은 `lib/types.ts`):
```
slug, title, domain, order, year, period, role, teamSize, deployment,
capability(증명 역량 뱃지), focus(핵심 한 줄), focusType('architecture'|'features'),
interviewQuestion(유도 질문),
summary,
problem(문제), constraints[](제약조건), decisions[](판단=기술 선택 이유: {title, rationale}),
architecture(설계 설명 문자열), architectureFlow[](다이어그램 노드: {icon?, logo?, label, tech?}),
coreFeatures[](구현: {title, detail}),
tradeoffs[]({choice, cost}), troubleshooting[]({problem, cause, solution, result}),
impact[](결과/성과 — 검증 가능한 사실만), lessonsLearned[](회고),
stack[], links[], featured, codeHighlight(**휴면**: 데이터만 있고 렌더 안 함)
```
`architectureFlow` 노드: `logo`가 있으면 `/public/logos/*.svg`(흰 칩), 없으면 `icon`(lucide) + 일부 브랜드 컬러(aws/leaflet 등).

## 5. 페이지 & 정보구조(IA)
### 홈 (`app/page.tsx`) — 위→아래
1. **Hero**: 상태 뱃지 + 헤드라인 + 보조문구 + 지표 타일(8+/단독/팀장/4) + 키워드 칩 + CTA(대표 프로젝트 보기 / 이력 살펴보기) + 아키텍처 그리드 배경
2. **핵심 역량(CoreStrengths)**: 7개 카드
3. **대표 프로젝트(CaseStudies)**: 4개 균형 카드 → 클릭 시 `/work/[slug]`
4. **일하는 방식(Approach)**: 원칙 5개(에디토리얼 2단 레이아웃, 큰 번호)
5. **소개/경력(About)**: 소개 문단 + 경력 타임라인 + 기술 스택 6그룹
6. **연락처(ContactCta)**: 이메일 버튼

### 케이스 스터디 상세 (`app/work/[slug]/page.tsx`)
뒤로가기 → 헤더(capability·domain / 제목 / 요약) → **Overview 카드** → **"이 프로젝트의 핵심"**(focus; `focusType==='architecture'`면 여기서 다이어그램) → 서사 아크 섹션:
**문제 → 제약조건 → 기술 선택 이유 → 설계(+아키텍처 다이어그램) → 구현 → 트레이드오프 → 트러블슈팅(P/C/S/R 카드) → 결과 → 회고** → CTA.

## 6. 케이스 스터디(프로젝트) 요약
| slug | 제목 | 역량/포커스 | 팀 |
|---|---|---|---|
| `kh-wholesale-platform` | KH 건강기능식품 B2B 폐쇄몰 | B2B 비즈니스·업무 설계 (Spring Boot+Next.js) | 1인 단독(기획~운영) |
| `cj-gis-platform` | CJ 골프장 GIS 관리 시스템 | 기술 난이도(GeoTIFF/GDAL/S3/CloudFront) | 4명(본인·퍼블·프론트·CJ AI 연구원), GIS·백엔드 담당 |
| `tvchosun` | TV조선 계열 6개 사이트 리뉴얼 | 운영 서비스(VOD·이니시스 결제·정기결제 배치) | 4명, 본인 개발 리드 |
| `hugreen` | 휴그린 홈페이지 리뉴얼 | 풀스택 리뉴얼(사용자 페이지+CMS+운영 자동화) | 3명, 본인 팀장 |

경력(케이스 카드 아님, About 타임라인에만): 큐브에이(개발 팀장)·트라이코코리아(연말정산·PDF 서명·Clip Report)·라온텍(관공서 BIS/ITS 교통)·BEAUTY PLUS(미국).

## 7. 개발 규칙/컨벤션 (중요)
- **모든 UI는 한국어.** 기술명/식별자/코드만 영어. `Overview/Challenge/Solution` 같은 영어 라벨 금지.
- **거짓/과장 금지.** 지어낸 지표·아키텍처·팀 규모·트래픽 사용 안 함. 검증 가능한 사실만(예: KH 543 커밋·428 클래스·테스트 115). KH는 아직 런칭 전이라 매출 지표 없음.
- **경력 표기는 "8년 이상 / 8+"로 통일** ("8년차"·"9년" 사용 금지).
- **Server Components 기본.** `"use client"`는 상호작용에만: `theme-provider`, `theme-toggle`, `mobile-nav`, `motion/reveal`.
- **Tailwind만 사용, 인라인 스타일 금지.** 예외: `opengraph-image.tsx`(Satori가 인라인 스타일만 지원).
- **새 라이브러리 추가 금지.** 다이어그램·코드블록·로고 모두 순수 CSS/정적 SVG로 구현.
- Framer Motion은 fade/subtle만(`Reveal`).
- 컴포넌트는 재사용 가능하게 분리, 파일 200줄 내외 지향, 접근성(ARIA)·SEO·모바일 우선.

## 8. Next.js 16 주의사항 (하드-원)
- `params`/`searchParams`는 **Promise** → `await` 필요.
- `lucide-react` v1.22는 **브랜드 아이콘(Github/Linkedin/Twitter) 미제공** → `components/icons/brand-icons.tsx`에 인라인 SVG.
- 문서의 `unstable_instant` / Cache Components 힌트는 **이 정적 사이트엔 함정** → 추가하지 말 것.
- `app/globals.css`는 `--font-sans: var(--font-geist-sans)`로 폰트 변수 연결(초기 스캐폴드 버그 수정됨).
- OG 이미지·favicon은 한글 렌더 처리 필요(OG는 Noto Sans KR fetch, favicon은 SVG 텍스트).

## 9. 배포 & 워크플로
- `main`에 push → Vercel 자동 배포. 커밋 메시지 말미에 Co-Authored-By 트레일러 사용.
- Windows/Git Bash 환경(CRLF 경고는 무시 가능).

## 10. 휴면(미사용) 코드 — 있지만 어디서도 import 안 됨
아래는 과거 구조의 잔재로 **현재 렌더되지 않음**. 새로 추가 시 중복 주의, 필요 없으면 삭제 후보:
- `components/sections/capabilities.tsx` (+ `siteConfig.capabilities`) — CoreStrengths로 대체됨
- `components/sections/tech-stack.tsx` (`TechStack`) — TechStackGroups로 대체됨
- `components/code-block.tsx` (+ `Project.codeHighlight` 데이터) — 코드 하이라이트 섹션 제거됨
- `components/page-header.tsx`
- `components/icons/brand-icons.tsx` — `social-links.tsx`가 import하나 `siteConfig.socials`가 빈 배열이라 렌더 결과 없음
- `public/`의 create-next-app 기본 SVG(file/globe/next/vercel/window)
```
