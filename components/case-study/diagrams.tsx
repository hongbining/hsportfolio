import type {
  ArchitectureBlock,
  EntitiesBlock,
  FlowBlock,
  StatesBlock,
} from "@/lib/case-studies/types"

export function ArchitectureDiagram({ block }: { block: ArchitectureBlock }) {
  return (
    <figure className="my-6">
      <div className="flex flex-col gap-2">
        {block.layers.map((layer, index) => (
          <div key={layer.name}>
            <div className="rounded-xl border border-border bg-muted/30 p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                <div className="sm:w-44 sm:shrink-0">
                  <p className="text-sm font-medium">{layer.name}</p>
                  {layer.description ? (
                    <p className="mt-0.5 text-xs text-muted-foreground text-pretty">
                      {layer.description}
                    </p>
                  ) : null}
                </div>
                <ul className="flex flex-wrap gap-2">
                  {layer.components.map((component) => (
                    <li
                      key={component.name}
                      className="rounded-lg border border-border bg-background px-3 py-2"
                    >
                      <p className="text-sm font-medium">{component.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {component.role}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {index < block.layers.length - 1 ? (
              <div aria-hidden="true" className="flex justify-center py-1 text-muted-foreground/50">
                ↓
              </div>
            ) : null}
          </div>
        ))}
      </div>
      {block.notes?.length ? (
        <figcaption className="mt-3 space-y-1">
          {block.notes.map((note) => (
            <p key={note} className="text-xs text-muted-foreground text-pretty">
              {note}
            </p>
          ))}
        </figcaption>
      ) : null}
    </figure>
  )
}

export function FlowDiagram({ block }: { block: FlowBlock }) {
  return (
    <figure className="my-6">
      {block.title ? (
        <p className="mb-4 text-sm font-medium">{block.title}</p>
      ) : null}
      <ol className="space-y-4 border-l border-border pl-6">
        {block.steps.map((step) => (
          <li key={step.step} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[31px] flex size-6 items-center justify-center rounded-full border border-border bg-background font-mono text-xs tabular-nums"
            >
              {step.step}
            </span>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="flex flex-wrap items-center gap-2">
                {step.actor ? (
                  <span className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                    {step.actor}
                  </span>
                ) : null}
                <p className="text-sm font-medium">{step.title}</p>
                {step.state ? (
                  <span className="ml-auto rounded-md border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground">
                    {step.state}
                  </span>
                ) : null}
              </div>
              <p className="mt-1.5 text-sm text-muted-foreground text-pretty">
                {step.detail}
              </p>
              {step.branches?.length ? (
                <ul className="mt-2 space-y-1">
                  {step.branches.map((branch) => (
                    <li
                      key={branch}
                      className="flex gap-2 text-xs text-muted-foreground text-pretty"
                    >
                      <span aria-hidden="true">↳</span>
                      <span>{branch}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </figure>
  )
}

export function StatesDiagram({ block }: { block: StatesBlock }) {
  return (
    <figure className="my-6">
      {block.title ? (
        <p className="mb-4 text-sm font-medium">{block.title}</p>
      ) : null}
      <ul className="grid gap-3 sm:grid-cols-2">
        {block.states.map((state) => (
          <li
            key={state.state}
            className="rounded-lg border border-border bg-card p-4"
          >
            <p className="font-mono text-sm font-medium">{state.state}</p>
            <p className="mt-1 text-sm text-muted-foreground text-pretty">
              {state.description}
            </p>
            {state.transitions?.length ? (
              <ul className="mt-3 space-y-1">
                {state.transitions.map((transition) => (
                  <li
                    key={`${transition.on}-${transition.to}`}
                    className="flex flex-wrap items-center gap-1.5 text-xs"
                  >
                    <span className="rounded bg-muted px-1.5 py-0.5 font-mono text-muted-foreground">
                      {transition.on}
                    </span>
                    <span aria-hidden="true" className="text-muted-foreground">
                      →
                    </span>
                    <span className="font-mono text-foreground">
                      {transition.to}
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </figure>
  )
}

export function EntitiesDiagram({ block }: { block: EntitiesBlock }) {
  return (
    <figure className="my-6">
      <div className="grid gap-4 md:grid-cols-2">
        {block.entities.map((entity) => (
          <div
            key={entity.name}
            className="overflow-hidden rounded-lg border border-border bg-card"
          >
            <div className="border-b border-border bg-muted/40 px-4 py-2.5">
              <p className="font-mono text-sm font-semibold">{entity.name}</p>
              {entity.description ? (
                <p className="mt-0.5 text-xs text-muted-foreground text-pretty">
                  {entity.description}
                </p>
              ) : null}
            </div>
            <table className="w-full text-left text-xs">
              <tbody>
                {entity.fields.map((field) => (
                  <tr
                    key={field.name}
                    className="border-b border-border/60 last:border-b-0"
                  >
                    <td className="py-1.5 pr-2 pl-4 font-mono font-medium">
                      {field.name}
                    </td>
                    <td className="py-1.5 pr-2 font-mono text-muted-foreground">
                      {field.type}
                    </td>
                    <td className="py-1.5 pr-4 text-muted-foreground text-pretty">
                      {field.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {entity.relations?.length ? (
              <div className="flex flex-wrap gap-1.5 border-t border-border px-4 py-2.5">
                {entity.relations.map((relation) => (
                  <span
                    key={relation}
                    className="rounded bg-muted px-1.5 py-0.5 text-xs text-muted-foreground"
                  >
                    {relation}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </figure>
  )
}
