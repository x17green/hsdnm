# SDLC Playbook: HSDNM Delivery Strategy

## 1. Ideation to Specs
- **Input**: HSDNM Operating Manual and stakeholder feedback.
- **Process**: Map physical organizational roles to digital RBAC entities.
- **Output**: Use-case matrix (e.g., "State Coordinator views LGA growth").

## 2. The "Schema-First" Rule
- All features must begin with a Prisma schema update or validation.
- **RLS Check**: Every table must have a Supabase RLS policy defined during the implementation phase.

## 3. Five-Tier RBAC Integration
- **Roles**: SUPER_ADMIN, REGIONAL_COORD, STATE_COORD, LGA_COORD, WARD_COORD, MEMBER.
- **Scope**: Every database query must be scoped by the user's hierarchy (Region/State/LGA/Ward).
- **Manual §12 Compliance**: Ensure monthly report generation is automated based on these hierarchies.

## 4. Brand-Consistent UI (PWA & Mobile)
- **Palette**: Use brand colors explicitly (not just defaults).
- **Responsive**: Mobile is the primary device. PWA offline sync is required for rural wards.
- **Standard**: Follow `shared/design_system.md`.

## 5. Security & Verification
- **NIN Hashing**: SHA-256 + Server Salt. Store `ninHash`, discard raw NIN.
- **Verify**: Cross-reference with licensed aggregators (Dojah/Prembly).
- **Audit**: Every write action must create an `AuditLog` entry (Manual §10).

## 6. Iterative Deployment
- **Staging**: `staging.hsdnationalmovement.com` for stakeholder review.
- **CI/CD**: Automatic Vercel deployments from `main`.

---
*Playbook Registry v1.0*
