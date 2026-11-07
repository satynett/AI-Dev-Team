# AI Dev Team

AI Dev Team is a multi-agent software development workflow built with [Switch](https://github.com/sandbox-quantum/switch). It connects specialized AI agents so they can collaborate on software tasks in one shared Telegram group.

## Agents

- **Architect:** Understands the task and coordinates the work.
- **Developer:** Inspects the code and proposes an implementation.
- **Reviewer:** Independently checks the proposal for bugs and security issues.
- **Tester:** Suggests how to validate the change.

## Built With

- **Switch** for agent coordination
- **Antigravity CLI** as the agent provider
- **Telegram** for shared communication

## Example Workflow

1. Send a development task in the Telegram group.
2. The Architect analyzes the task and delegates review.
3. The Developer proposes a solution.
4. The Reviewer checks the proposal.
5. The Tester suggests validation.
6. A human reviews and approves changes before implementation.

## Demo Project

The workflow was demonstrated by inspecting the backend of **ProcureShield** and proposing a small improvement to its health endpoint. The demonstration used read-only inspection; no project files were changed.

## Project Goal

Make it easier for an individual developer or a small team to use multiple AI agents together instead of managing each agent separately.
