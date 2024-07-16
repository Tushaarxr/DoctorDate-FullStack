import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default withSentryConfig(nextConfig, {
  org: "javascript-mastery",
  project: "care-pulse",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  // tunnelRoute: "/monitoring",
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});
