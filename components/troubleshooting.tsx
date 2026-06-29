import type { TroubleshootingItem } from "@/lib/types"
import { cn } from "@/lib/utils"

const rows = [
  { key: "problem", label: "Problem" },
  { key: "cause", label: "Cause" },
  { key: "solution", label: "Solution" },
  { key: "result", label: "Result" },
] as const

/**
 * Problem → Cause → Solution → Result. 면접관이 가장 오래 보는 섹션이라
 * 카드로 또렷하게, Solution을 강조해 보여줍니다.
 */
export function Troubleshooting({ items }: { items: TroubleshootingItem[] }) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-xl border border-border bg-card"
        >
          <ul className="divide-y divide-border">
            {rows.map((row) => {
              const emphasized = row.key === "solution"
              return (
                <li
                  key={row.key}
                  className={cn(
                    "grid gap-1 px-4 py-3 sm:grid-cols-[92px_1fr] sm:gap-4 sm:px-5",
                    emphasized && "bg-muted/40"
                  )}
                >
                  <span
                    className={cn(
                      "font-mono text-[11px] tracking-wide uppercase",
                      emphasized ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {row.label}
                  </span>
                  <p
                    className={cn(
                      "text-sm leading-relaxed text-pretty",
                      emphasized ? "text-foreground" : "text-foreground/80"
                    )}
                  >
                    {item[row.key]}
                  </p>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </div>
  )
}
