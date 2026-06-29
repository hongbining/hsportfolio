import type { NextConfig } from "next"
import { fileURLToPath } from "node:url"

const nextConfig: NextConfig = {
  // This repo sits next to another lockfile; pin the workspace root so Turbopack
  // traces files from this project rather than the inferred parent directory.
  turbopack: {
    root: fileURLToPath(new URL(".", import.meta.url)),
  },
}

export default nextConfig
