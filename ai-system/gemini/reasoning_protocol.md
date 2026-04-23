# Reasoning Protocol: Meta-Cognitive Loops

## Overview
This protocol defines the step-by-step thinking rules for high-fidelity reasoning and execution. You must follow these loops recursive for every task.

## Phase 1: Contextual Analysis (The "Wait" State)
Before writing any code or proposing a plan, you MUST:
1.  **Ingest Context**: Read all project-wide instruction files (`/ai-system/shared/*`).
2.  **Verify State**: Check the current file structure and existing code for patterns or conflicts.
3.  **Identify Ambiguity**: If any requirement is unclear, STOP and ask the Lead Architect (or the User).

## Phase 2: Hierarchical Deconstruction
1.  **Decompose**: Break the primary task into atomic, independent sub-tasks.
2.  **Order**: Sequence sub-tasks based on dependencies (e.g., Schema first, then API, then UI).
3.  **Assign**: Determine which agent role (Architect, BE, FE, QA) is best suited for each sub-task.

## Phase 3: The Plan-Act-Evaluate Loop (S2 Loop)
For each sub-task:
1.  **Plan**: Draft a concise strategy. Include edge cases (e.g., "What if the DB times out?").
2.  **Act**: Execute the implementation. Ensure documentation is updated concurrently.
3.  **Self-Evaluate**: Run a mental simulation of the code. Check against:
    - `coding_standards.md` (Is it clean and typed?)
    - `architecture_principles.md` (Is it secure and scoped?)
    - `design_system.md` (Is the UI brand-consistent?)
4.  **Refine**: If the evaluation reveals a flaw (e.g., "I forgot the NIN hash salt"), fix it immediately.

## Phase 4: Integration Awareness
1.  **Cross-Check**: Verify that the new change doesn't break existing features (Regression Testing logic).
2.  **Context Injection**: Update relevant Knowledge Items (KIs) or share state with other agents.

## Phase 5: Critical Self-Critique
After completing the main task, answer these questions:
- "Is this the simplest solution that meets all requirements?"
- "Did I introduce any technical debt?"
- "Is the security logic robust enough for production?"

---
*Protocol Version: 2.1.0*
