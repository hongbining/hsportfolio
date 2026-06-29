import * as React from "react"

import type { CodeHighlight } from "@/lib/types"

// 라이브러리 없이 짧은 스니펫에 안전하게 동작하는 경량 하이라이터.
// (주석 · 문자열 · 어노테이션 · 키워드 · 숫자만 색칠)
const KEYWORDS: Record<string, string[]> = {
  java: [
    "public", "private", "protected", "class", "interface", "void", "return",
    "new", "for", "if", "else", "throw", "throws", "try", "catch", "final",
    "static", "this", "import", "package", "null", "true", "false", "int",
    "boolean", "extends", "implements",
  ],
  typescript: [
    "const", "let", "var", "function", "return", "if", "else", "for", "await",
    "async", "new", "type", "interface", "export", "import", "from", "class",
    "extends", "public", "private", "null", "undefined", "true", "false", "void",
  ],
  sql: [
    "SELECT", "UPDATE", "SET", "WHERE", "FROM", "INSERT", "INTO", "VALUES",
    "AND", "OR", "JOIN", "ON", "DELETE", "LIMIT",
  ],
  bash: [],
}

function tokenize(line: string, language: string): React.ReactNode[] {
  const keywords = KEYWORDS[language] ?? []
  const keywordAlt = keywords.length
    ? `\\b(?:${keywords.join("|")})\\b`
    : "(?!x)x" // matches nothing
  const commentPattern =
    language === "bash" ? "#.*$" : language === "sql" ? "--.*$" : "\\/\\/.*$"
  const re = new RegExp(
    `(${commentPattern})|("(?:[^"\\\\]|\\\\.)*"|'(?:[^'\\\\]|\\\\.)*')|(@\\w+)|(${keywordAlt})|(\\b\\d[\\d._]*\\b)`,
    "g"
  )

  const out: React.ReactNode[] = []
  let last = 0
  let key = 0
  let match: RegExpExecArray | null

  while ((match = re.exec(line)) !== null) {
    if (match.index > last) out.push(line.slice(last, match.index))
    const [full, comment, str, annotation, keyword, num] = match
    let className = ""
    if (comment) className = "text-muted-foreground italic"
    else if (str) className = "text-emerald-600 dark:text-emerald-400"
    else if (annotation) className = "text-sky-600 dark:text-sky-400"
    else if (keyword) className = "text-violet-600 dark:text-violet-400"
    else if (num) className = "text-amber-600 dark:text-amber-400"
    out.push(
      <span key={key++} className={className}>
        {full}
      </span>
    )
    last = match.index + full.length
    if (full.length === 0) re.lastIndex++
  }
  if (last < line.length) out.push(line.slice(last))
  return out
}

/** 실제 핵심 로직을 미니 에디터 형태로, 경량 신택스 하이라이트와 함께. */
export function CodeBlock({ code }: { code: CodeHighlight }) {
  const lines = code.code.replace(/\n+$/, "").split("\n")

  return (
    <figure className="overflow-hidden rounded-xl border border-border bg-muted/30">
      <figcaption className="flex items-center justify-between gap-3 border-b border-border bg-muted/50 px-4 py-2.5">
        <div className="flex items-center gap-2.5">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-muted-foreground/30" />
            <span className="size-2.5 rounded-full bg-muted-foreground/30" />
            <span className="size-2.5 rounded-full bg-muted-foreground/30" />
          </span>
          {code.filename ? (
            <span className="font-mono text-xs text-muted-foreground">
              {code.filename}
            </span>
          ) : null}
        </div>
        <span className="font-mono text-[11px] tracking-wide text-muted-foreground/70 uppercase">
          {code.language}
        </span>
      </figcaption>

      <div className="overflow-x-auto">
        <pre className="min-w-full py-4 text-[13px] leading-6">
          <code className="grid font-mono">
            {lines.map((line, index) => (
              <span key={index} className="grid grid-cols-[2.75rem_1fr]">
                <span
                  aria-hidden="true"
                  className="pr-4 text-right text-muted-foreground/40 select-none"
                >
                  {index + 1}
                </span>
                <span className="pr-4 whitespace-pre">
                  {line.length ? tokenize(line, code.language) : " "}
                </span>
              </span>
            ))}
          </code>
        </pre>
      </div>

      {code.caption ? (
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground text-pretty">
          {code.caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
