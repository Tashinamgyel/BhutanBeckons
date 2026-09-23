import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Intentionally bundled for the browser-only Telegram enquiry flow.
  env: {
    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN ?? "",
    TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID ?? "",
  },
  images: {
    localPatterns: [{ pathname: "/photos/**" }],
  },
};

export default nextConfig;
