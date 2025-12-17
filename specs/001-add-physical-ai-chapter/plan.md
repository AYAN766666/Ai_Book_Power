# Implementation Plan: Add Physical AI Book Chapter and Homepage Enhancements

**Branch**: `001-add-physical-ai-chapter` | **Date**: 2025-12-05 | **Spec**: [specs/001-add-physical-ai-chapter/spec.md](specs/001-add-physical-ai-chapter/spec.md)
**Input**: Feature specification from `/specs/001-add-physical-ai-chapter/spec.md`

## Summary

The primary objective is to generate a comprehensive "Introduction to Physical AI" chapter for a Docusaurus-based textbook and enhance the homepage. This includes adding book-related content, an interactive 3D user interface, and a "Get Started" button that links to the first chapter. The approach leverages Docusaurus for static site generation, utilizing Markdown for all content. The 3D UI integration will adhere to the constitution's allowed technologies or require clarification if custom React components are needed.

## Technical Context

**Language/Version**: Node.js + npm (for Docusaurus tooling), Markdown (MDX-lite for content).  
**Primary Dependencies**: Docusaurus (static site generator).  
**Storage**: Files (Markdown chapter files, static assets for homepage).  
**Testing**: Docusaurus build (expecting 0 errors), GitHub Pages Deployment (verified success).  
**Target Platform**: Static Website (deployed to GitHub Pages).
**Project Type**: web (static site).  
**Performance Goals**: Homepage loads within 5 seconds on a standard broadband connection. Docusaurus builds with 0 errors.  
**Constraints**: No backend code, no server-side execution, no external APIs during runtime, no advanced MDX, HTML tags, or dynamic content. All generated files must be buildable locally. No part of the book may rely on a network call. All examples must be executable in theory. Markdown must remain clean and deterministic.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

**Allowed Technologies Check**:
- Docusaurus: ✅
- Markdown (MDX-lite only): ✅
- Gemini CLI: ✅
- Spec-Kit Plus: ✅
- Node.js + npm: ✅
- GitHub Pages Deployment: ✅
- MCP Server (Optional): ✅

**Not Allowed Technologies Check**:
- No backend code: ✅
- No server-side execution: ✅
- No custom React components beyond Docusaurus defaults: ✅ (Adhering strictly to Docusaurus defaults; 3D UI is out of scope)
- No external APIs during runtime: ✅
- No advanced MDX, HTML tags, or dynamic content: ✅

**Document Structure Rules Check**: Output will conform.
**Textbook Requirements Check**: Will be fulfilled by content generation.
**Homepage Requirements Check**: Will be fulfilled by content generation.
**Writing Guidelines Check**: Will be followed.
**Success Criteria Check**: Will be met.
**MCP Usage Check**: Will be followed.
**Workflow Enforcement Check**: Will be followed.
**Constraints & Limitations Check**: Will be followed.
**Versioning Check**: Will be followed.

## Project Structure

### Documentation (this feature)

```text
specs/001-add-physical-ai-chapter/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
└── contracts/           # Phase 1 output (empty for this feature)
```

### Source Code (repository root)

```text
my-website/
├── docusaurus.config.ts
├── package-lock.json
├── package.json
├── sidebars.ts                       # Will be updated to include new chapters
├── tsconfig.json
├── docs/
│   ├── chapter-01.md                 # Generated content for Chapter 01
│   ├── chapter-02.md                 # Placeholder/Generated content for Chapter 02
│   └── ...                           # Up to chapter-15.md (Placeholder/Generated content)
├── src/
│   ├── components/                   # For general Docusaurus React components
│   ├── css/
│   │   └── custom.css
│   └── pages/
│       └── index.md                  # Homepage content (will be modified)
└── static/
    └── img/                          # For general Docusaurus static assets
```

**Structure Decision**: The project will extend the existing Docusaurus site structure located in `my-website/`. New chapter Markdown files will be placed in `my-website/docs/`. The `my-website/sidebars.ts` will be updated to include links to all new chapters. The homepage `my-website/src/pages/index.md` will be modified to include textbook summary, chapter links, a "Get Started" button, and attractive UI content using Docusaurus's default features. No custom React components will be used for a 3D UI.

## Phases

### Phase 0: Research & Clarification (Resolved: No 3D UI; Adhere to Docusaurus defaults)

**Goal**: Proceed with implementation, strictly adhering to Docusaurus defaults for the homepage UI.

*   **Outcome**: It has been decided to *not* include a 3D UI on the homepage and to strictly adhere to Docusaurus defaults and available features for the homepage design. This aligns with the "No custom React components beyond Docusaurus defaults" rule in the constitution.
*   **Output**: `research.md` will be updated to document this decision.

### Phase 1: Design & Contracts (Minimal for Content-focused Feature)

**Goal**: Define minimal data model and quickstart for the Docusaurus content.

*   **Data Model**: Since this feature is primarily content-focused within an existing Docusaurus structure, a complex new data model is not required. `data-model.md` will primarily reflect the Docusaurus document structure (Markdown files for chapters).
*   **API Contracts**: Not applicable for this static content generation feature. The `contracts/` directory will remain empty.
*   **Quickstart**: Generate a `quickstart.md` document outlining how to set up the Docusaurus project locally and build it.
*   **Agent Context Update**: Run `.specify/scripts/powershell/update-agent-context.ps1 -AgentType gemini` to update the agent's context with any new technology decisions.
*   **Output**: `data-model.md` (minimal), `quickstart.md`, updated agent context.

### Phase 2: Content Generation & Homepage Integration (User-defined "Phase 3")

**Goal**: Generate all 15 chapter contents and fully implement the enhanced homepage.

*   **Task 1**: Generate full content for Chapter 01: Introduction to Physical AI. This includes: Intro, Core Concepts, Technical Deep Dive, Example / Walkthrough, Exercises (2-3 conceptual questions), Summary, Key Terms, and Mini Quiz (5 MCQs).
*   **Task 2 - 15**: Generate full content for Chapter 02: ROS 2 Fundamentals up to Chapter 15: Review & Future Directions. Each chapter will follow the same template as Chapter 01. (Note: This is a significant undertaking; initial focus will be on Chapter 01 and placeholders for others if full generation is too time-consuming.)
*   **Task 16**: Generate/Update homepage content (`my-website/src/pages/index.md`):
    *   Add a full description of the textbook.
    *   Implement a "Get Started" button linking to Chapter 01.
    *   Design and implement an attractive UI for the homepage using Docusaurus default features and styling.
*   **Task 17**: Update `my-website/sidebars.ts` to include navigation links for all 15 chapters.
*   **Output**: 15 Markdown chapter files (`my-website/docs/chapter-XX.md`), updated homepage file (`my-website/src/pages/index.md`), updated `my-website/sidebars.ts`, and potentially new component files and assets for the 3D UI.

## Complexity Tracking