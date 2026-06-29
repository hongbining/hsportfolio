import type { ArchitectureNode } from "@/lib/types"
import { cn } from "@/lib/utils"

/**
 * 시스템 아키텍처를 단계 파이프라인으로 시각화합니다.
 * 모바일에서는 세로(↓), 데스크톱에서는 가로(→)로 흐릅니다. 의존성 없이 순수 CSS.
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
        "flex flex-col items-stretch gap-1.5 sm:flex-row sm:flex-wrap sm:items-stretch sm:gap-0",
        className
      )}
    >
      {nodes.map((node, index) => (
        <div key={node.label} className="contents">
          <div className="flex flex-col justify-center rounded-lg border border-border bg-card px-3.5 py-2.5">
            <span className="text-sm leading-tight font-medium">{node.label}</span>
            {node.tech ? (
              <span className="mt-0.5 font-mono text-[11px] text-muted-foreground">
                {node.tech}
              </span>
            ) : null}
          </div>
          {index < nodes.length - 1 ? (
            <div
              aria-hidden="true"
              className="flex items-center justify-center self-center px-2 text-muted-foreground/50 sm:px-2.5"
            >
              <span className="sm:hidden">↓</span>
              <span className="hidden sm:inline">→</span>
            </div>
          ) : null}
        </div>
      ))}
    </figure>
  )
}
