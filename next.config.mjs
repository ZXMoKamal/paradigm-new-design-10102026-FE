/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  //  output: 'export',
  trailingSlash: true,
//  skipTrailingSlashRedirect: true,
  // Without this, Vercel's file tracing can exclude private-videos/hero.mp4
  // from the deployed function bundle (since it's outside /public and not
  // imported anywhere in code) — the route would then 404 or crash trying
  // to read a file that never actually shipped.
  outputFileTracingIncludes: {
    "/api/hero-video": ["./private-videos/hero.mp4"],
  },
};
 
export default nextConfig;