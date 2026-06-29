import {
  ArchitectureDiagram,
  EntitiesDiagram,
  FlowDiagram,
  StatesDiagram,
} from "@/components/case-study/diagrams"
import type { Block, CalloutTone } from "@/lib/case-studies/types"
import { cn } from "@/lib/utils"

const calloutTone: Record<CalloutTone, string> = {
  note: "border-l-border bg-muted/40",
  warning: "border-l-amber-500/50 bg-amber-500/[0.06]",
  insight: "border-l-foreground/30 bg-foreground/[0.03]",
}

const calloutLabel: Record<CalloutTone, string> = {
  note: "Note",
  warning: "Watch out",
  insight: "Insight",
}

function RenderBlock({ block }: { block: Block }) {
  switch (block.kind) {
    case "lead":
      return (
        <p className="text-lg text-muted-foreground text-pretty">{block.text}</p>
      )
    case "prose":
      return (
        <div className="space-y-4">
          {block.paragraphs.map((paragraph, index) => (
            <p key={index} className="leading-relaxed text-pretty">
              {paragraph}
            </p>
          ))}
        </div>
      )
    case "bullets":
      return (
        <ul className="my-4 space-y-2">
          {block.items.map((item, index) => (
            <li key={index} className="flex gap-3 text-pretty">
              <span
                aria-hidden="true"
                className="mt-2.5 size-1 shrink-0 rounded-full bg-muted-foreground/50"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    case "numbered":
      return (
        <ol className="my-4 space-y-2">
          {block.items.map((item, index) => (
            <li key={index} className="flex gap-3 text-pretty">
              <span className="font-mono text-sm text-muted-foreground tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      )
    case "table":
      return (
        <figure className="my-6 overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border">
                {block.columns.map((column) => (
                  <th key={column} className="px-3 py-2 font-medium">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-b border-border/60 align-top">
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="px-3 py-2 text-muted-foreground text-pretty"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {block.caption ? (
            <figcaption className="mt-2 text-xs text-muted-foreground">
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      )
    case "code":
      return (
        <figure className="my-6">
          <div className="overflow-hidden rounded-lg border border-border bg-muted/30">
            {block.caption ? (
              <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-2">
                <p className="text-xs text-muted-foreground">{block.caption}</p>
                <span className="font-mono text-[11px] tracking-wide text-muted-foreground/70 uppercase">
                  {block.language}
                </span>
              </div>
            ) : null}
            <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
              <code className="font-mono">{block.code}</code>
            </pre>
          </div>
        </figure>
      )
    case "callout":
      return (
        <div
          className={cn(
            "my-6 rounded-lg border border-border border-l-2 p-4",
            calloutTone[block.tone]
          )}
        >
          <p className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
            {block.title ?? calloutLabel[block.tone]}
          </p>
          <p className="mt-1.5 text-sm text-pretty">{block.body}</p>
        </div>
      )
    case "definitions":
      return (
        <dl className="my-6 divide-y divide-border rounded-lg border border-border">
          {block.definitions.map((definition) => (
            <div
              key={definition.term}
              className="grid gap-1 p-4 sm:grid-cols-[200px_1fr] sm:gap-6"
            >
              <dt className="text-sm font-medium">{definition.term}</dt>
              <dd className="text-sm text-muted-foreground text-pretty">
                {definition.description}
              </dd>
            </div>
          ))}
        </dl>
      )
    case "stats":
      return (
        <dl className="my-6 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {block.metrics.map((metric) => (
            <div key={metric.label} className="bg-background p-5">
              <dd className="font-heading text-2xl font-semibold tracking-tight">
                {metric.value}
              </dd>
              <dt className="mt-1 text-sm text-muted-foreground">
                {metric.label}
              </dt>
              {metric.delta ? (
                <p className="mt-1 text-xs text-muted-foreground">
                  {metric.delta}
                </p>
              ) : null}
              {metric.note ? (
                <p className="mt-1 text-xs text-muted-foreground/80 text-pretty">
                  {metric.note}
                </p>
              ) : null}
            </div>
          ))}
        </dl>
      )
    case "architecture":
      return <ArchitectureDiagram block={block} />
    case "flow":
      return <FlowDiagram block={block} />
    case "states":
      return <StatesDiagram block={block} />
    case "entities":
      return <EntitiesDiagram block={block} />
    default:
      return null
  }
}

/** Renders an ordered list of case-study content blocks. */
export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, index) => (
        <RenderBlock key={index} block={block} />
      ))}
    </>
  )
}
