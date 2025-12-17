---
id: 0001
title: Add initial project constitution
stage: constitution
date: 2025-12-05
surface: agent
model: gemini-1.5-flash-latest
feature: none
branch: main
user: user
command: /sp.constitution
labels: ["constitution", "initial-setup"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
tests:
  - null
---

## Prompt

/sp.constitution # Spec-Kit Constitution  
Version: 1.0  
Project: Physical AI & Humanoid Robotics – Textbook Generator  
Purpose: Guide the Specification, Planning, Tasks, and Implementation for a Docusaurus-based AI-generated textbook.

---

## 1. Core Philosophy
This project uses a **Spec-Driven Development workflow**, where:
- Specifications define the truth.
- Plans convert specs into architecture.
- Tasks convert plans into executable units.
- Implementation follows tasks **without deviation**.
- All files must remain deterministic, reproducible, and static-site compatible.

The goal:  
**Generate a complete 15-chapter robotics textbook using Gemini CLI + Spec-Kit, deployable on GitHub Pages.**

---

## 2. Allowed Technologies
This project is limited to **Hackathon-1 accepted technologies**:

### ✔ Allowed
- **Docusaurus** (static site generator)
- **Markdown (MDX-lite only)** — *no HTML*
- **Gemini CLI**
- **Spec-Kit Plus**
- **Node.js + npm**
- **GitHub Pages Deployment**
- **MCP Server (Optional)** — only for reading documents or tasks

### ❌ Not Allowed
- No backend code  
- No server-side execution  
- No custom React components beyond Docusaurus defaults  
- No external APIs during runtime  
- No advanced MDX, HTML tags, or dynamic content  

---

## 3. Document Structure Rules
Every feature must include:

1. **spec.md** — The official truth  
2. **plan.md** — Architecture derived from spec  
3. **tasks.md** — Decomposition of plan  
4. **adr.md (optional)** — Architectural decisions  
5. **phr** — Prompt history records (auto-generated)

Rules:
- All files must live inside one numbered feature folder:  
  `specs/001-robotics-textbook/`
- All headings must use only **H1–H4**
- Writing must remain structured, instructional, and plagiarism-free

---

## 4. Textbook Requirements (Critical)
The textbook must include:

### ✔ 15 Chapters Total
Chapters must cover:
- Physical AI foundations  
- ROS2  
- Gazebo  
- Unity  
- Isaac Sim  
- Vision-Language-Action  
- Humanoid dynamics, locomotion, manipulation  
- Human-robot interaction  
- Digital twins  
- Sim-to-Real  
- Final capstone robot  

### ✔ Homepage Requirements
Homepage must include:
- Title: **Physical AI & Humanoid Robotics**
- 4–5 sentence textbook summary
- Direct links to **all 15 chapters**
- Clean formatting with no HTML
# Physical AI & Humanoid Robotics

Welcome to the official textbook for **Physical AI & Humanoid Robotics**.  
This book is designed to guide beginners and intermediate learners through the
entire pipeline of building, simulating, and understanding humanoid robots.
You will learn how robots perceive the world, plan actions, move their bodies,
use modern simulation tools, and eventually operate safely around humans.

This is a hands-on, concept-driven, step-by-step guide created for students,
makers, and robotics enthusiasts.

---

## 📘 Start Reading the Book

Choose any chapter below to begin your robotics journey.

### **Chapters**

- [Chapter 1 — Introduction to Physical AI](./chapters/chapter-01.md)
- [Chapter 2 — Foundations of Robotics & Control](./chapters/chapter-02.md)
- [Chapter 3 — Sensors, Perception & Vision](./chapters/chapter-03.md)
- [Chapter 4 — Motion, Dynamics & Control](./chapters/chapter-04.md)
- [Chapter 5 — Humanoid Locomotion](./chapters/chapter-05.md)
- [Chapter 6 — Manipulation & Grippers](./chapters/chapter-06.md)
- [Chapter 7 — ROS2 Basics](./chapters/chapter-07.md)
- [Chapter 8 — Gazebo Simulation](./chapters/chapter-08.md)
- [Chapter 9 — Unity Robotics](./chapters/chapter-09.md)
- [Chapter 10 — Isaac Sim Workflows](./chapters/chapter-10.md)
- [Chapter 11 — Vision-Language-Action Systems](./chapters/chapter-11.md)
- [Chapter 12 — Digital Twins](./chapters/chapter-12.md)
- [Chapter 13 — Human-Robot Interaction](./chapters/chapter-13.md)
- [Chapter 14 — Sim-to-Real Transfer](./chapters/chapter-14.md)
- [Chapter 15 — Capstone: Build Your Humanoid Robot](./chapters/chapter-15.md)

---

## ⭐ What You Will Learn

- How humanoid robots think, move, and interact  
- Modern simulation tools (ROS2, Gazebo, Unity, Isaac Sim)  
- How AI models enable perception and motion  
- Practical robotics engineering workflows  
- Real-world robotics safety and design principles  

---

## 🧠 Who This Book Is For

- Robotics students  
- Makers and DIY robot builders  
- AI & engineering learners  
- Anyone curious about humanoids  

---

## 🚀 Ready to Begin?

Start with **Chapter 1** and begin building your understanding of **Physical AI**.

---

## 5. Writing Guidelines
All content must follow:

1. Technical clarity — grade 9–12 reader  
2. Zero plagiarism  
3. Clear subsections:  
   - Intro  
   - Concepts  
   - Deep Dive  
   - Example  
   - Exercises  
   - Summary  
   - Key Terms  
   - Quiz (5 MCQs)  

4. No external hyperlinks (Hackathon restriction)
5. No images unless allowed by Docusaurus default assets

---

## 6. Success Criteria
A feature is successful when:

- ✔ All 15 chapters are generated  
- ✔ Homepage displays correctly  
- ✔ Docusaurus builds with **0 errors**  
- ✔ GitHub Pages deployment succeeds  
- ✔ All content follows the spec and constitution  
- ✔ No HTML or unsupported MDX elements  
- ✔ Sidebar auto-generates all chapters  

---

## 7. MCP Usage (Optional)
MCP server may be used only for:
- Resolving library IDs  
- Fetching documentation  
- Assisting with planning/tasks

Not allowed for:
- Runtime calls  
- Dynamic API requests  
- External script execution

---

## 8. Workflow Enforcement
The required workflow is:

1. `/sp.constitution` — Install this constitution  
2. `/sp.specify` — Write/Update the feature spec  
3. `/sp.clarify` — Validate and refine  
4. `/sp.plan` — Generate implementation plan  
5. `/sp.tasks` — Produce tasks.md  
6. `/sp.implement` — Execute tasks into real files  

The system must reject implementation if:
- spec.md is unclear  
- plan.md missing  
- tasks incomplete  

---

## 9. Constraints & Limitations
- All generated files must be buildable locally  
- No part of the book may rely on a network call  
- All examples must be executable in theory  
- Markdown must remain clean and deterministic

---

## 10. Versioning
Future hackathons may introduce:
- API integrations  
- MCP-heavy workflows  
- Local agent execution  
But Hackathon-1 must remain **static-content only**.

---

# End of Constitution (1.0)

## Response snapshot

The project constitution has been successfully installed as version 1.0. This marks the initial version of the project's guiding principles. The following files are flagged for manual review and potential updates to ensure alignment with the new constitution: - .specify/templates/plan-template.md - .specify/templates/spec-template.md - .specify/templates/tasks-template.md - All files in .specify/commands/ (e.g., sp.adr.toml, sp.analyze.toml, etc.) Suggested commit message: `docs: add project constitution v1.0`

## Outcome

- ✅ Impact: Project constitution v1.0 added/updated.
- 🧪 Tests: None (constitution update)
- 📁 Files: 1 file created/modified: .specify/memory/constitution.md
- 🔁 Next prompts: Continue with project tasks, ensuring alignment with the new constitution.
- 🧠 Reflection: Successfully applied new constitution, handled versioning and date. Need to ensure dependent files are updated.

## Evaluation notes (flywheel)

- Failure modes observed: Incorrect tool usage for PHR creation initially. Corrected by using agent-native write_file.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
