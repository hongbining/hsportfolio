import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/container"

export default function NotFound() {
  return (
    <Container>
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 py-24 text-center">
        <p className="font-mono text-sm text-muted-foreground">404</p>
        <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          페이지를 찾을 수 없습니다
        </h1>
        <p className="max-w-md text-muted-foreground text-pretty">
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
        </p>
        <Button asChild size="xl" className="mt-2">
          <Link href="/">홈으로 돌아가기</Link>
        </Button>
      </div>
    </Container>
  )
}
