---
id: 0003
title: Generate implementation plan for AI textbook
stage: plan
date: 2025-12-05
surface: agent
model: gemini-1.5-flash-latest
feature: 001-ai-textbook-gen
branch: 001-ai-textbook-gen
user: user
command: /sp.plan Project: Physical AI & Humanoid Robotics – Textbook Generator Constitution: v1.0 Objective: Implement the updated specification to generate a 15-chapter textbook with homepage and full Docusaurus integration. --- ## 2. Book Generation Requirements - **Total chapters:** 15 (strict) - **Chapter template:** 1. Intro 2. Core Concepts 3. Technical Deep Dive 4. Example / Walkthrough 5. Exercises 6. Summary 7. Key Terms 8. Mini Quiz (5 MCQs) - **Word count:** 30,000–40,000 words total - **Markdown-only:** H1–H4 - **No HTML tags** --- ## 3. Homepage Requirements - **Title:** Physical AI & Humanoid Robotics - **Overview:** 4–5 sentence description of textbook, explaining importance of robotics and Physical AI - **Chapter links:** Quick navigation to all 15 chapters - **Layout:** Clean, Docusaurus v3 compatible - **Markdown/JSX:** Use minimal JSX only if required - **UI:** Appealing to user, clearly shows textbook coverage and robotics theme --- ## 4. Sidebar Structure - Must list all 15 chapters in correct order - No broken links - Must auto-render in Docusaurus v3 build --- ## 5. Build Requirements - Local Docusaurus build: - Must compile with **0 warnings/errors** - Valid Markdown and front-matter required - Spec-Kit restrictions enforced (no HTML, only H1–H4) --- ## 6. Deployment Requirements - GitHub Pages compatible - Set `baseUrl` and `organizationName/projectName` properly - Ensure all static files are generated and deployable --- ## 7. Implementation Task Plan (Phases) ### Phase 1 — Setup & Fixes 1. Initialize Docusaurus project in `website/` 2. Verify Node.js, Git, Gemini CLI, and Spec-Kit installation 3. Fix project structure if needed 4. Ensure `npm install` succeeds ### Phase 2 — Documentation Structure 1. Create 15 chapter Markdown files in `website/docs/` 2. Create `index.md` homepage with overview and links 3. Update `sidebars.js` with all 15 chapters 4. Add project metadata in `docusaurus.config.js` ### Phase 3 — Content Generation 1. Generate 15 chapters using the specification 2. Apply consistent style template per chapter 3. Include exercises and quizzes per chapter 4. Ensure Markdown H1–H4 headings only 5. Validate word count target 30,000–40,000 words ### Phase 4 — Build + Validation 1. Run full Docusaurus build (`npm run build`) 2. Fix any Markdown or build errors 3. Validate Spec-Kit restrictions (no HTML, deterministic content) 4. Verify sidebar displays all chapters 5. Verify homepage links all chapters correctly ### Phase 5 — Deployment 1. Configure GitHub Pages in `docusaurus.config.js` 2. Build final static site 3. Push repository to GitHub and test live deployment --- ## 8. Acceptance Criteria - All 15 chapters fully generated and structured - Homepage complete with title, overview, and chapter links - Sidebar functional and displays all chapters - Docusaurus build passes with 0 errors - GitHub Pages deployment ready and accessible - Writing style: technical clarity, plagiarism-free, instructional - Spec-Kit restrictions fully respected --- # End of /sp.plan"
labels: ["plan", "ai-textbook"]
links:
  spec: specs/001-ai-textbook-gen/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/001-ai-textbook-gen/plan.md
  - specs/001-ai-textbook-gen/research.md
  - specs/001-ai-textbook-gen/data-model.md
  - specs/001-ai-textbook-gen/quickstart.md
  - specs/001-ai-textbook-gen/contracts/
  - GEMINI.md
tests:
  - null
---

## Prompt

/sp.plan Project: Physical AI & Humanoid Robotics – Textbook Generator
Constitution: v1.0
Objective: Implement the updated specification to generate a 15-chapter textbook with homepage and full Docusaurus integration.

---

## 2. Book Generation Requirements
- **Total chapters:** 15 (strict)  
- **Chapter template:**  
  1. Intro  
  2. Core Concepts  
  3. Technical Deep Dive  
  4. Example / Walkthrough  
  5. Exercises  
  6. Summary  
  7. Key Terms  
  8. Mini Quiz (5 MCQs)  
- **Word count:** 30,000–40,000 words total  
- **Markdown-only:** H1–H4  
- **No HTML tags**

---

## 3. Homepage Requirements
- **Title:** Physical AI & Humanoid Robotics  
- **Overview:** 4–5 sentence description of textbook, explaining importance of robotics and Physical AI  
- **Chapter links:** Quick navigation to all 15 chapters  
- **Layout:** Clean, Docusaurus v3 compatible  
- **Markdown/JSX:** Use minimal JSX only if required  
- **UI:** Appealing to user, clearly shows textbook coverage and robotics theme

---

## 4. Sidebar Structure
- Must list all 15 chapters in correct order  
- No broken links  
- Must auto-render in Docusaurus v3 build

---

## 5. Build Requirements
- Local Docusaurus build:  
- Must compile with **0 warnings/errors**  
- Valid Markdown and front-matter required  
- Spec-Kit restrictions enforced (no HTML, only H1–H4)

---

## 6. Deployment Requirements
- GitHub Pages compatible  
- Set `baseUrl` and `organizationName/projectName` properly  
- Ensure all static files are generated and deployable  

---

## 7. Implementation Task Plan (Phases)

### Phase 1 — Setup & Fixes
1. Initialize Docusaurus project in `website/`  
2. Verify Node.js, Git, Gemini CLI, and Spec-Kit installation  
3. Fix project structure if needed  
4. Ensure `npm install` succeeds

### Phase 2 — Documentation Structure
1. Create 15 chapter Markdown files in `website/docs/`  
2. Create `index.md` homepage with overview and links  
3. Update `sidebars.js` with all 15 chapters  
4. Add project metadata in `docusaurus.config.js`

### Phase 3 — Content Generation
1. Generate 15 chapters using the specification  
2. Apply consistent style template per chapter  
3. Include exercises and quizzes per chapter  
4. Ensure Markdown H1–H4 headings only  
5. Validate word count target 30,000–40,000 words

### Phase 4 — Build + Validation
1. Run full Docusaurus build (`npm run build`)  
2. Fix any Markdown or build errors  
3. Validate Spec-Kit restrictions (no HTML, deterministic content)  
4. Verify sidebar displays all chapters  
5. Verify homepage links all chapters correctly

### Phase 5 — Deployment
1. Configure GitHub Pages in `docusaurus.config.js`  
2. Build final static site  
3. Push repository to GitHub and test live deployment

---

## 8. Acceptance Criteria
- All 15 chapters fully generated and structured  
- Homepage complete with title, overview, and chapter links  
- Sidebar functional and displays all chapters  
- Docusaurus build passes with 0 errors  
- GitHub Pages deployment ready and accessible  
- Writing style: technical clarity, plagiarism-free, instructional  
- Spec-Kit restrictions fully respected

---

# End of /sp.plan"

## Response snapshot

The implementation planning workflow is complete.

**Branch**: `001-ai-textbook-gen`
**IMPL_PLAN path**: `specs/001-ai-textbook-gen/plan.md`
**Generated artifacts**:
- `specs/001-ai-textbook-gen/research.md`
- `specs/001-ai-textbook-gen/data-model.md`
- `specs/001-ai-textbook-gen/quickstart.md`
- `specs/001-ai-textbook-gen/contracts/` (directory)
- `GEMINI.md` (agent context updated)

The plan is now available in `specs/001-ai-textbook-gen/plan.md`. You can proceed to define tasks using `/sp.tasks`.

## Outcome

- ✅ Impact: Implementation plan generated and artifacts created.
- 🧪 Tests: None (plan generation)
- 📁 Files: specs/001-ai-textbook-gen/plan.md, specs/001-ai-textbook-gen/research.md, specs/001-ai-textbook-gen/data-model.md, specs/001-ai-textbook-gen/quickstart.md, specs/001-ai-textbook-gen/contracts/, GEMINI.md
- 🔁 Next prompts: /sp.tasks
- 🧠 Reflection: Successfully generated implementation plan and associated artifacts, including updating agent context.

## Evaluation notes (flywheel)

- Failure modes observed: None in this step.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
