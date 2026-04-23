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

export const WEB_ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  POLICY: "/policy",
  EVENTS: "/events",
  NEWS: "/news",
  CONTACT: "/contact",
} as const;

export const WEB_NAV_ITEMS = [
  { label: "About", href: WEB_ROUTES.ABOUT },
  { label: "Policy", href: WEB_ROUTES.POLICY },
  { label: "Events", href: WEB_ROUTES.EVENTS },
  { label: "News", href: WEB_ROUTES.NEWS },
  { label: "Contact", href: WEB_ROUTES.CONTACT },
] as const;
