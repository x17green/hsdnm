# Architecture Principles: HSDNM Platform

## 1. Modular Autonomy
- The system is composed of localized packages (`db`, `auth`, `rbac`, `geo`, `sms`, `ui`) within a Turborepo monorepo.
- **Rules**: Package layers must not have circular dependencies. `db` is the lowest level.

## 2. Multi-Tier Security
- **Identity**: NIN-backed identity using SHA-256 hashing.
- **RBAC**: 5-tier role-based access control scoped at the database level using Supabase RLS.
- **Integrity**: Every administrative action is logged and immutable in the `AuditLog` table.

## 3. Data Consistency
- **Cascade Geo**: Ward depends on LGA, LGA on State, State on Region. DB constraints must enforce this.
- **Single Source of Truth**: User identity is the core. Coordinators are a separate relational layer to allow role rotations without data loss.

## 4. Resilience & Fallback
- **Aggregators**: Use multiple NIN aggregators (Dojah/Prembly) with a manual form fallback for resilient registration.
- **Offline Sync**: PWA service workers must handle slow/intermittent connectivity in rural areas.

## 5. Scalability
- **Pagination**: All list views must be paginated (50-100 records max).
- **Indexing**: Frequent filters (e.g., `stateId`, `wardId`, `role`) must be indexed in Postgres.
- **Caching**: Use Redis (Upstash) for frequent, non-sensitive lookups (e.g., Geo-data lists).

## 6. Compliance
- **NDPR**: Data privacy by design. Right to be forgotten (status=REMOVED) vs. audit log retention.
- **Internal Manual**: Architecture maps 1-to-1 with Section 4 and 10 of the HSDNM Independent Operating Manual.

---
*Architecture Registry v1.0*
