// app/api/hero-video/route.js
//
// Only use this if the video genuinely needs to go through backend logic
// (auth check, pulled from external/private storage, per-user access, etc).
// If it's just a static file, skip this entirely and serve it from /public —
// that's faster here, since it avoids spinning up a serverless function per
// request and gets Vercel's CDN range-request handling for free.
//
// This must run on the Node.js runtime (not Edge), because it uses Node's
// `fs` module to read the file from disk.
export const runtime = "nodejs";

import fs from "fs";
import path from "path";

// Keep the real file OUTSIDE /public so it isn't reachable as a static URL —
// that's the whole reason to route it through this handler instead.
const VIDEO_PATH = path.join(process.cwd(), "private-videos", "hero.mp4");

export async function GET(request) {
  const stat = fs.statSync(VIDEO_PATH);
  const fileSize = stat.size;
  const range = request.headers.get("range");

  // No Range header: browser wants the whole thing (rare for <video>, but handle it)
  if (!range) {
    const stream = fs.createReadStream(VIDEO_PATH);
    return new Response(stream, {
      status: 200,
      headers: {
        "Content-Type": "video/mp4",
        "Content-Length": String(fileSize),
        "Accept-Ranges": "bytes", // tells the browser it CAN ask for ranges next time
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  }

  // Parse "bytes=524288-" or "bytes=524288-1048575"
  const match = range.match(/bytes=(\d*)-(\d*)/);
  const start = match[1] ? parseInt(match[1], 10) : 0;
  const end = match[2] ? parseInt(match[2], 10) : fileSize - 1;
  const chunkSize = end - start + 1;

  const stream = fs.createReadStream(VIDEO_PATH, { start, end });

  return new Response(stream, {
    status: 206, // Partial Content — this is what lets the browser play before the full download finishes
    headers: {
      "Content-Type": "video/mp4",
      "Content-Length": String(chunkSize),
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}