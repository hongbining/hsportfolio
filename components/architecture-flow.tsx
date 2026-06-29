import {
  Bell,
  Cloud,
  Code2,
  CreditCard,
  Database,
  FileImage,
  Globe,
  HardDrive,
  Layers,
  LayoutDashboard,
  Leaf,
  Map,
  Server,
  Settings2,
  ShieldCheck,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react"

import type { ArchitectureNode } from "@/lib/types"
import { cn } from "@/lib/utils"

const icons: Record<string, LucideIcon> = {
  code2: Code2,
  shield: ShieldCheck,
  spring: Leaf,
  layers: Layers,
  database: Database,
  storage: Cloud,
  hdd: HardDrive,
  settings: Settings2,
  image: FileImage,
  cdn: Globe,
  map: Map,
  users: Users,
  server: Server,
  payment: CreditCard,
  cms: LayoutDashboard,
  automation: Workflow,
  notify: Bell,
}

// 로고가 없는 노드는 브랜드 컬러 아이콘으로. (literal 클래스 → Tailwind가 생성)
const iconColor: Record<string, string> = {
  hdd: "text-[#FF9900]", // AWS S3
  cdn: "text-[#8C4FFF]", // CloudFront
  map: "text-[#199900]", // Leaflet
}

/**
 * 시스템 아키텍처를 브랜드 로고/아이콘 노드 파이프라인으로 시각화합니다.
 * 모바일 세로(↓) · 데스크톱 가로(→). 정적 SVG 에셋만 사용, 라이브러리 없음.
 */
export function ArchitectureFlow({
  nodes,
  className,
}: {
  nodes: ArchitectureNode[]
  className?: string
}) {
  return (
    <figure
      aria-label="시스템 아키텍처 흐름"
      className={cn(
        "flex flex-col items-stretch gap-2 sm:flex-row sm:flex-wrap sm:items-stretch sm:gap-0",
        className
      )}
    >
      {nodes.map((node, index) => {
        const Icon = node.icon ? icons[node.icon] : undefined
        return (
          <div key={node.label} className="contents">
            <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-3.5 py-3">
              {node.logo ? (
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white ring-1 ring-border/60">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={node.logo}
                    alt=""
                    aria-hidden="true"
                    width={22}
                    height={22}
                    className="size-[22px]"
                  />
                </span>
              ) : Icon ? (
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted">
                  <Icon
                    className={cn(
                      "size-[18px]",
                      (node.icon && iconColor[node.icon]) || "text-foreground/80"
                    )}
                    aria-hidden="true"
                  />
                </span>
              ) : null}
              <span className="flex flex-col">
                <span className="text-sm leading-tight font-medium">
                  {node.label}
                </span>
                {node.tech ? (
                  <span className="mt-0.5 font-mono text-[11px] text-muted-foreground">
                    {node.tech}
                  </span>
                ) : null}
              </span>
            </div>
            {index < nodes.length - 1 ? (
              <div
                aria-hidden="true"
                className="flex items-center justify-center self-center px-1.5 text-muted-foreground/40 sm:px-2"
              >
                <span className="sm:hidden">↓</span>
                <span className="hidden sm:inline">→</span>
              </div>
            ) : null}
          </div>
        )
      })}
    </figure>
  )
}
