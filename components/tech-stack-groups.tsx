import { Badge } from "@/components/ui/badge"
import { Overline } from "@/components/overline"
import { siteConfig } from "@/lib/site-config"

/** 기술을 영역별로 그룹핑해 보여줍니다. (나열이 아니라 구조) */
export function TechStackGroups() {
  return (
    <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
      {siteConfig.skills.map((group) => (
        <div key={group.category}>
          <Overline as="dt">{group.category}</Overline>
          <dd className="mt-2.5">
            <ul className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li key={item}>
                  <Badge variant="outline" className="font-normal">
                    {item}
                  </Badge>
                </li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  )
}
