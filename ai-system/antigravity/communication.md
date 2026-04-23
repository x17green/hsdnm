# Agent Communication Protocol

## 1. Structured Messaging
All inter-agent communication must follow this format:
- **FROM**: [Role]
- **TO**: [Role]
- **TOPIC**: [Feature/Bug ID]
- **STATUS**: [Action Required | FYI | Blocking]
- **CONTENT**: Concise summary and any code/link references.

## 2. Shared Memory Architecture
- **State.json (Optional)**: If complex state needs to be shared, use a temporary JSON file in `ai-system/scratch/`.
- **Primary Source**: The source code itself is the source of truth. Always use `view_file` before asking another agent for status.

## 3. Consensus Trigger
When consensus is needed (e.g., changing the NIN hashing algorithm):
1.  **Lead Architect** initiates a `CONSENSUS_REQUEST`.
2.  **Specialists** provide weighted feedback based on their domain.
3.  **Result** is documented in `shared/architecture_principles.md`.

## 4. Error Signaling
- **CRITICAL**: System crash or data leak (e.g., NIN exposed). ALL AGENTS STOP.
- **WARNING**: Design deviation or performance lag. FE/Architect review required.
- **INFO**: Refactor or minor improvement. Log in `walkthroughs`.

---
*Communication Protocol v1.0*
