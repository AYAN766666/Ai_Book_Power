# Tasks: AI/Spec-Driven Textbook on "Physical AI & Humanoid Robotics"

**Feature Branch**: `001-ai-textbook-gen`  
**Created**: 2025-12-05  
**Spec**: `specs/001-ai-textbook-gen/spec.md`  
**Plan**: `specs/001-ai-textbook-gen/plan.md`

## Summary

This document outlines the tasks required to implement the "AI/Spec-Driven Textbook on ""Physical AI & Humanoid Robotics"" " feature. Tasks are organized by phases, aligning with user stories and ordered by priority and dependencies.

## Implementation Strategy

The implementation will follow an iterative approach, focusing on delivering core functionality (P1 user stories) first. Each user story will be implemented and tested independently to ensure continuous value delivery.

## Phase 1: Setup (Project Initialization)

These tasks focus on initializing the Docusaurus project and ensuring the development environment is ready.

- [ ] T001 Initialize Docusaurus project in `website/` using `npx create-docusaurus@latest website classic`
- [ ] T002 Verify Node.js, Git, Gemini CLI, and Spec-Kit installations are correctly configured on the system
- [ ] T003 Ensure `npm install` succeeds in the `website/` directory
- [ ] T004 Review and adjust initial project structure if needed (e.g., move to a dedicated `website/` folder if not already there)

## Phase 2: Foundational (Blocking Prerequisites)

These tasks establish the basic Docusaurus structure required before content generation.

- [ ] T005 Create `website/docs/` directory for chapter Markdown files
- [ ] T006 Create `website/src/pages/` directory for the homepage
- [ ] T007 Update `website/docusaurus.config.js` with initial project metadata (title, tagline, organization, project name)

## Phase 3: User Story 1 - Generate Complete Textbook (Priority: P1)

**Goal**: To automatically generate a complete and validated 15-chapter textbook, integrated within Docusaurus.

**Independent Test**: The generation process runs successfully, produces all chapters and homepage content, and the Docusaurus build completes without errors, producing a deployable static site.

- [ ] T008 [P] [US1] Create 15 placeholder Markdown files in `website/docs/chapter-XX.md` (e.g., `chapter-01.md` to `chapter-15.md`)
- [ ] T009 [US1] Develop content generation logic to populate 15 chapters adhering to the specified template (Intro, Core Concepts, etc.)
- [ ] T010 [US1] Implement styling and formatting enforcement for generated content (H1-H4 headings, no HTML tags)
- [ ] T011 [US1] Integrate logic for generating 5 multiple-choice questions (quiz) for each chapter
- [ ] T012 [US1] Implement logic to ensure generated book word count is between 30,000–40,000 words total
- [ ] T013 [US1] Create `website/sidebars.js` and configure it to list all 15 chapters in correct order

## Phase 4: User Story 2 - Navigate Textbook Homepage (Priority: P1)

**Goal**: To create a fully functional and navigable homepage for the textbook within Docusaurus.

**Independent Test**: The Docusaurus site loads, displays the correct homepage title and summary, and all chapter links on the homepage successfully navigate to their respective chapter pages.

- [ ] T014 [US2] Create homepage content in `website/src/pages/index.md` (or `index.js`) with title "Physical AI & Humanoid Robotics" and 4-5 sentence summary
- [ ] T015 [US2] Add direct, functional links to all 15 chapters from the homepage in `website/src/pages/index.md` (or `index.js`)
- [ ] T016 [US2] Verify no HTML or unsupported MDX elements are present on the homepage

## Phase 5: User Story 3 - Read Structured Chapters (Priority: P2)

**Goal**: To ensure all generated chapters consistently follow the defined structure and writing guidelines.

**Independent Test**: Review any generated chapter to confirm adherence to the template (all sections present, correct headings, clear language) and writing guidelines (plagiarism-free).

- [ ] T017 [US3] Implement validation step to ensure generated chapters strictly follow the specified curriculum and structure template
- [ ] T018 [US3] Implement plagiarism check or content originality validation for generated text

## Phase 6: Build & Validation

These tasks ensure the generated Docusaurus project is error-free and compliant.

- [ ] T019 Run full Docusaurus build command (`npm run build`) in `website/`
- [ ] T020 Address and fix any Docusaurus build errors or warnings
- [ ] T021 Validate compliance with Spec-Kit restrictions (e.g., no unauthorized HTML, deterministic output)
- [ ] T022 Verify that the Docusaurus sidebar correctly displays all chapters as configured
- [ ] T023 Verify that the homepage links correctly lead to all associated chapters

## Phase 7: Deployment (Polish & Cross-Cutting Concerns)

These tasks prepare the project for deployment and ensure it meets final deployment requirements.

- [ ] T024 Configure GitHub Pages settings in `website/docusaurus.config.js` (e.g., `deploymentBranch`, `trailingSlash`)
- [ ] T025 Execute Docusaurus deployment script (`npm run deploy`) for GitHub Pages
- [ ] T026 Verify the live deployed site on GitHub Pages is fully functional and accessible

## Dependency Graph (User Story Completion Order)

- User Story 1 (P1): Generate Complete Textbook -> User Story 3 (P2): Read Structured Chapters
- User Story 2 (P1): Navigate Textbook Homepage

(Note: User Story 1 and 2 can be developed in parallel, but User Story 3 builds upon the output of User Story 1)

## Parallel Execution Examples

- **User Story 1 (P1)**: Tasks T008, T009, T010, T011, T012, T013 can be worked on concurrently as they relate to content generation and chapter structure.
- **User Story 2 (P1)**: Tasks T014, T015, T016 can be worked on once basic Docusaurus setup is complete (Phase 1).

## Suggested MVP Scope

The Minimum Viable Product (MVP) should encompass:
- Successful Docusaurus project initialization.
- Generation of at least 3 chapters following the template.
- A functional homepage with links to these 3 chapters.
- A Docusaurus build that passes without errors.
- Basic GitHub Pages deployment.
This allows early validation of the core generation and deployment pipeline.