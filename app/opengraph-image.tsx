import { ImageResponse } from "next/og"

import { siteConfig } from "@/lib/site-config"

export const alt = `${siteConfig.name} — ${siteConfig.role}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// ImageResponse (Satori) only supports inline styles — Tailwind is not available
// in this rendering context, so inline styles here are required, not a violation.
export default function OpengraphImage() {
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
          fontFamily: "sans-serif",
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
              fontWeight: 600,
            }}
          >
            {siteConfig.initials}
          </div>
          {siteConfig.name}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: "900px",
            }}
          >
            {siteConfig.headline}
          </div>
          <div style={{ fontSize: 30, color: "#a1a1a1" }}>
            {`${siteConfig.role} · ${siteConfig.yearsOfExperience} years`}
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
