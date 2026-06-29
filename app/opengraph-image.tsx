import { ImageResponse } from "next/og"

import { siteConfig } from "@/lib/site-config"

export const alt = `${siteConfig.name} — ${siteConfig.role}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const subtitle = `${siteConfig.role} · ${siteConfig.yearsOfExperience}년`

// Load only the glyphs we need (text-subset) so the Korean font stays tiny.
async function loadKoreanFont(text: string): Promise<ArrayBuffer> {
  const api = `https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@700&text=${encodeURIComponent(
    text
  )}`
  const css = await fetch(api, {
    headers: { "User-Agent": "Mozilla/5.0" },
  }).then((res) => res.text())
  const url = css.match(/src:\s*url\((.+?)\)/)?.[1]
  if (!url) throw new Error("Failed to resolve Korean font URL")
  return fetch(url).then((res) => res.arrayBuffer())
}

// ImageResponse (Satori) only supports inline styles — Tailwind is not available
// in this rendering context, so inline styles here are required, not a violation.
export default async function OpengraphImage() {
  const text = `${siteConfig.name}${siteConfig.initials}${siteConfig.headline}${subtitle}`

  let fonts: { name: string; data: ArrayBuffer; weight: 700; style: "normal" }[]
  try {
    fonts = [
      {
        name: "Noto Sans KR",
        data: await loadKoreanFont(text),
        weight: 700,
        style: "normal",
      },
    ]
  } catch {
    // Latin fallback below renders correctly without the Korean font.
    fonts = []
  }

  const fontFamily = fonts.length ? '"Noto Sans KR", sans-serif' : "sans-serif"
  const showKorean = fonts.length > 0

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          color: "#fafafa",
          padding: "80px",
          fontFamily,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 28,
            color: "#a1a1a1",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              backgroundColor: "#fafafa",
              color: "#0a0a0a",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            {showKorean ? siteConfig.initials : "HB"}
          </div>
          {showKorean ? siteConfig.name : "Portfolio"}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: 60,
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              maxWidth: "960px",
            }}
          >
            {showKorean
              ? siteConfig.headline
              : "Reliable systems for enterprise teams."}
          </div>
          <div style={{ fontSize: 30, color: "#a1a1a1" }}>
            {showKorean ? subtitle : "Full Stack Developer · 8 yrs"}
          </div>
        </div>
      </div>
    ),
    { ...size, fonts }
  )
}
