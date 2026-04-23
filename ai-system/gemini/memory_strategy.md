# Memory & Context Handling Strategy

## Objective
To maintain deep contextual awareness across long-running autonomous sessions and prevent hallucinations or redundant work.

## 1. Multi-Tier Memory
- **Epistemic Memory (Base Instructions)**: Stored in `/ai-system/**/*`. Defines the "How" and "What".
- **Semantic Memory (Knowledge Items)**: Project-specific facts, patterns, and decisions stored in the KI system.
- **Short-Term Memory (Conversation)**: The active chat context. Focuses on the "Current Step".
- **Working Memory (Tasks)**: Managed via `task.md`. Tracks progress and pending state.

## 2. Context Injection Rules
- **Bootstrap**: At the start of every session, you MUST read the `system_prompt.md` and `implementation_plan.md`.
- **Checkpoint**: Before a major architectural decision, revisit `architecture_principles.md`.
- **Sync**: After each sub-task, summarize the "New State" in the conversation or a shared log file to ensure multi-agent alignment.

## 3. Hallucination Guardrails
- **Evidence-Based Reasoning**: Never assume internal structures. Always use `list_dir` or `view_file` to confirm.
- **Dependency Awareness**: Check `package.json` for installed versions before proposing new libraries.
- **Recall Limitation**: If context is exceeding the window, prioritize `/ai-system` files and the most recent `task.md` status.

## 4. Persistent State Management
- **Task Tracker**: Always keep `task.md` updated with `[x]` and `[/]` markers.
- **Walkthroughs**: Record major milestones in the `walkthroughs/` directory (if applicable) for future recall.

---
*Strategy Version: 1.0.0*
