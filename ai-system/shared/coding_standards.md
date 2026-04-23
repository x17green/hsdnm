# Coding Standards & Best Practices

## 1. General Principles
- **Clean Code**: Follow SOLID principles and keep functions small.
- **TypeScript**: Strict mode enabled. No `any` types. interfaces over Types where possible.
- **Naming**: 
  - Components: `PascalCase`.
  - Functions/Variables: `camelCase`.
  - Constants/Enums: `UPPER_SNAKE_CASE`.

## 2. Framework-Specific (Next.js 14)
- **App Router**: Use Server Components by default. Use `"use client"` sparingly for interactivity.
- **Server Actions**: Preferred over internal API routes for form submissions.
- **Zod**: Required for all schema validation (Forms, API inputs).

## 3. Database (Prisma + Supabase)
- **Migrations**: Always use `npx prisma migrate dev`. Never manual SQL unless approved by Architect.
- **Types**: Use prisma-generated types for all DB operations.
- **Performance**: Use `@index` on foreign keys and frequently queried fields.

## 4. UI/UX (Tailwind + Radix)
- **Utilities**: Prioritize Tailwind classes. Avoid custom CSS unless in `globals.css`.
- **Theme**: Use Brand tokens from `design_system.md`.
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation are non-negotiable.

## 5. Testing
- **Coverage**: Logic-heavy functions require 100% unit test coverage (Vitest).
- **E2E**: Critical flows (Login, Registration, PIN verification) require E2E tests (Playwright).

## 6. Security
- **NIN**: Never log or store raw NIN.
- **Secrets**: Never commit `.env`. Store in Vercel/Supabase Vault.
- **Audit**: Every mutation must trigger an audit log service.

---
*Standards Registry v1.0*
