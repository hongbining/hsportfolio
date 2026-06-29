import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/container"

export default function NotFound() {
  return (
    <Container>
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 py-24 text-center">
        <p className="font-mono text-sm text-muted-foreground">404</p>
        <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          Page not found
        </h1>
        <p className="max-w-md text-muted-foreground text-pretty">
          The page you’re looking for doesn’t exist or may have moved.
        </p>
        <Button asChild size="xl" className="mt-2">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </Container>
  )
}
