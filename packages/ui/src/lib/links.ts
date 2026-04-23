/**
 * Construct links that might cross between web and portal apps.
 */
export function getPortalLink(path: string): string {
  let baseUrl = process.env.NEXT_PUBLIC_PORTAL_URL || '';
  
  // Defensive check: If it doesn't start with http/https and isn't localhost, prepend https://
  if (baseUrl && !baseUrl.startsWith('http')) {
    baseUrl = `https://${baseUrl}`;
  }

  const sanitizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${sanitizedPath}`;
}

export function getWebLink(path: string): string {
  let baseUrl = process.env.NEXT_PUBLIC_WEB_URL || '';
  
  if (baseUrl && !baseUrl.startsWith('http')) {
    baseUrl = `https://${baseUrl}`;
  }

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
