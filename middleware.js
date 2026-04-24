/**
 * Vercel Edge Middleware — HTTP Basic Auth for the whole site.
 *
 * The password lives in the SITE_PASSWORD environment variable
 * (set it in Vercel Project Settings → Environment Variables).
 * Browsers natively prompt for username + password and cache the
 * credentials for the rest of the browser session, so visitors
 * only authenticate once.
 *
 * Leave SITE_PASSWORD unset to disable auth temporarily.
 */

export const config = {
  matcher: '/((?!_next|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|woff2?)$).*)'
};

export default function middleware(request) {
  const expected = process.env.SITE_PASSWORD;
  if (!expected) return; // no password configured → allow through

  const auth = request.headers.get('authorization') || '';
  if (auth.startsWith('Basic ')) {
    try {
      const decoded = atob(auth.slice(6));
      const sep = decoded.indexOf(':');
      if (sep >= 0 && decoded.slice(sep + 1) === expected) {
        return; // authorized
      }
    } catch (_) { /* fall through to 401 */ }
  }

  return new Response('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="BASE AI Hub", charset="UTF-8"',
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store'
    }
  });
}
