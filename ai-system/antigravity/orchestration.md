# Task Orchestration Strategy

## 1. The Handoff Protocol
When a task moves between agents (e.g., BE completes API, FE starts UI):
- **Verification**: The sending agent (BE) must provide a verification snippet (e.g., a CURL command or test result).
- **Context Injection**: The receiver (FE) must acknowledge receipt and confirm understanding of the data contract.
- **State Update**: The `task.md` must be updated immediately to reflect the change in ownership.

## 2. Decision Trees
- **Architectural Changes**: Require consensus from Architect and relevant Specialist (BE/FE). If deadlock occurs, the Architect has casting vote.
- **Dependency Addition**: Require approval from DevOps Lead to ensure security and footprint compliance.
- **UI Tweaks**: Delegated to FE Specialist with a final brand-check by Architect.

## 3. Conflict Resolution Mechanism (ARM)
**A**nalyze: Identify the root cause of the conflict (e.g., performance vs. aesthetics).
**R**efer: Consult `/ai-system/shared/architecture_principles.md`.
**M**ediate: Propose a hybrid solution or defer to the Architect.

## 4. Execution Pipeline
1.  **Queue**: Tasks are prioritized by the Architect.
2.  **Lock**: Only one agent can modify a specific file at a time to prevent merge conflicts.
3.  **Validate**: Every PR/Edit must be validated by the QA agent before moving to the next task.

---
*Orchestration Registry v1.0*
