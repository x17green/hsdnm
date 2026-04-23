/**
 * Construct links that might cross between web and portal apps.
 */
export function getPortalLink(path: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_PORTAL_URL || '';
  // Ensure path starts with /
  const sanitizedPath = path.startsWith('/') ? path : `/${path}`;
  // If we're already on the portal, relative links are fine for Next.js
  // But for simple consistency, especially across apps:
  return `${baseUrl}${sanitizedPath}`;
}

export function getWebLink(path: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_WEB_URL || '';
  const sanitizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${sanitizedPath}`;
}
