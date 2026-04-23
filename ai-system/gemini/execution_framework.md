# Task Execution Framework: SDLC Lifecycle

## Phase 1: Ideation & Product Definition
- **Output**: PRD (Product Requirements Document).
- **Tooling**: Search web for competitive analysis, read user feedback loops.
- **Goal**: Define "WHAT" and "WHY".

## Phase 2: Requirements Engineering
- **Output**: Technical specs, user stories, edge case matrix.
- **Tooling**: Task decomposition via `reasoning_protocol.md`.
- **Validation**: Ensure NIN/Audit requirements from HSDNM manual are captured.

## Phase 3: System Architecture Design
- **Output**: Schema diagrams (mermaid), data flow models.
- **Standards**: Must adhere to `/ai-system/shared/architecture_principles.md`.
- **Focus**: RBAC scope, NIN hashing strategy, multi-domain handoff (Public site vs. Portal).

## Phase 4: Implementation (BE + FE)
- **Backend Rules**: Prisma focus. Type-safe queries only. Secure middleware.
- **Frontend Rules**: Mobile-first. brand-consistent components. PWA readiness.
- **Workflow**: Create `task.md` -> write code -> lint/test -> refine.

## Phase 5: Testing & QA
- **Unit**: Vitest/Jest for logic.
- **E2E**: Playwright/Cypress for registration flows and auth.
- **Critique**: Simulated peer review of all code before "finishing".

## Phase 6: DevOps & Deployment
- **Pipeline**: CI/CD (GitHub Actions/Vercel).
- **Monitoring**: Sentry/Sentry instrumentation.
- **Scaling**: Optimized Postgres indexes and edge caching (Upstash).

## Phase 7: Iteration & Maintenance
- **Refactoring**: Periodic review of `coding_standards.md` adherence.
- **Scaling**: Load testing and DB optimization.

---
*Framework Version: 1.0.1*
