# Implementation Plan: AI/Spec-Driven Textbook on "Physical AI & Humanoid Robotics"

**Branch**: `001-ai-textbook-gen` | **Date**: 2025-12-05 | **Spec**: `specs/001-ai-textbook-gen/spec.md`
**Input**: Feature specification from `/specs/001-ai-textbook-gen/spec.md`

## Summary

The primary objective of this project is to generate a comprehensive 15-chapter textbook titled "Physical AI & Humanoid Robotics." This textbook will be built using Docusaurus as a static site generator, leveraging the Gemini CLI and Spec-Kit Plus for automated content generation. The final output will be a deployable resource on GitHub Pages, adhering to strict Markdown/MDX-lite guidelines to ensure a structured, plagiarism-free, and technically clear educational resource for technical learners (Grade 9-12+) Summary

The primary objective of this project is to generate a comprehensive 15-chapter textbook titled "Physical AI & Humanoid Robotics." This textbook will be built using Docusaurus as a static site generator, leveraging the Gemini CLI and Spec-Kit Plus for automated content generation. The final output will be a deployable resource on GitHub Pages, adhering to strict Markdown/MDX-lite guidelines to ensure a structured, plagiarism-free, and technically clear educational resource for technical learners (Grade 9–12+).

Technical Context

Language/Version: Node.js (latest LTS recommended) + npm
Primary Dependencies: Docusaurus (v3), Gemini CLI, Spec-Kit Plus
Storage: Local file system (Markdown chapter files, Docusaurus config, static assets)
Testing: Docusaurus build validation (0 errors/warnings), Markdown linting, content structure validation
Target Platform: Web (static site deployable on GitHub Pages)
Project Type: Static web textbook
Performance Goals:

Docusaurus full build < 5 minutes

Page load p95 < 1 second

Constraints:

No backend/server-side code

No runtime APIs

No HTML tags

No advanced/custom MDX

No custom React beyond defaults

Must be GitHub Pages compatible

Scale/Scope:

15 chapters

30,000–40,000 words

4-module educational textbook

✅ Modules Added Below (NEW Section)
Module & Chapter Structure (Hackathon Standard)

The textbook will follow this strict hierarchy:

Module 1 — Foundations of Physical AI & Humanoid Robotics

Chapter 1 — Introduction to Physical AI

Physical AI foundations

Embodied intelligence

Humanoid robotics overview

Sensors (Cameras, IMU, LIDAR)

Chapter 2 — ROS 2 Fundamentals

Nodes, topics, services

Python agents

URDF overview

Chapter 3 — Gazebo Simulation Basics

Physics simulation

Collisions

Sensor simulation

Module 2 — Simulation Ecosystem (Unity, Isaac, VLA)

Chapter 4 — Unity Simulation

High-fidelity scenes

Robot interaction

Scene design

Chapter 5 — NVIDIA Isaac Platform

Isaac Sim

Isaac ROS

Perception pipelines

Chapter 6 — Vision-Language-Action (VLA)

Voice-to-Action

Cognitive planning

LLM reasoning loops

Chapter 7 — Capstone Simulation: Autonomous Humanoid

Multi-modal integration

Navigation + manipulation

Sim-to-Real basics

Module 3 — Humanoid Robotics Engineering

Chapter 8 — Humanoid Kinematics

Forward/inverse kinematics

Joint limits

Chapter 9 — Bipedal Locomotion & Balance

ZMP

Stability

Gait patterns

Chapter 10 — Manipulation & Grasping

End-effector motion

Path planning

Chapter 11 — Advanced Sensor Integration

Sensor fusion

Vision + IMU

Touch sensors

Module 4 — Digital Twins, Sim-to-Real & Future Robotics

Chapter 12 — Human-Robot Interaction

Safety systems

Social cues

Chapter 13 — Digital Twin Simulations

Virtual → Real mapping

Industry applications

Chapter 14 — Sim-to-Real Transfer

Domain randomization

Policy transfer

Chapter 15 — Future of Humanoid Robotics

AI agents

New materials

Long-term research

(Back to your original plan content)
Constitution Check

GATE: Passed.
The plan aligns with the project's constitution.

Core Philosophy:
This plan follows Spec-Driven Development, ensuring deterministic, reproducible outcomes for static-site generation.

Allowed Technologies:
All technologies (Docusaurus, Markdown, Gemini CLI, Spec-Kit Plus, Node.js, GitHub Pages) match the constitution.

Document Structure Rules:
spec.md → truth
plan.md → architecture
tasks.md → task breakdown
implement → executes tasks

Textbook Requirements:

All 15 chapters

Module structure

Chapter template

Word count target

Markdown-only content

H1–H4 headings only

Writing Guidelines:

Plagiarism-free

Grade 9–12 clarity

Structured sections

Mini quizzes included

Success Criteria:

Docusaurus build success

GitHub Pages deployment

Clean Markdown

Full module/chapter hierarchy

Sidebar auto-generated correctly

MCP Usage:
Only allowed for planning/task execution assistance.
No runtime API calls..

## Technical Context

**Language/Version**: Node.js (latest LTS recommended) + npm  
**Primary Dependencies**: Docusaurus (v3), Gemini CLI, Spec-Kit Plus  
**Storage**: Local file system (Markdown files for chapters, Docusaurus configuration and static assets)  
**Testing**: Docusaurus build validation (0 errors/warnings), Markdown linting, content structure validation  
**Target Platform**: Web (static site deployable on GitHub Pages)
**Project Type**: Web (static site generation)
**Performance Goals**: Fast Docusaurus build times (target <5 minutes for full build), efficient loading of static pages (target p95 page load <1 second)
**Constraints**: No backend code, no server-side execution, no custom React components beyond Docusaurus defaults, no external APIs during runtime, no advanced MDX, HTML tags, or dynamic content. Must be GitHub Pages compatible.
**Scale/Scope**: 15 chapters, total content length between 30,000–40,000 words, single educational textbook.

## Constitution Check

*GATE: Passed. The plan aligns with the project's constitution.*

**Core Philosophy**: The plan fully embraces the Spec-Driven Development workflow by directly translating the feature specification into an implementation plan, ensuring deterministic and reproducible outcomes suitable for static-site compatibility.

**Allowed Technologies**: All technologies proposed for implementation (Docusaurus, Markdown, Gemini CLI, Spec-Kit Plus, Node.js + npm, GitHub Pages) are explicitly listed as allowed. No disallowed technologies are introduced.

**Document Structure Rules**: The plan details the creation of `plan.md` within the feature folder, and implicitly acknowledges the need for `spec.md` and future `tasks.md`, conforming to the document structure rules. The content generation will adhere to H1-H4 heading limits.

**Textbook Requirements (Critical)**: The plan directly addresses the generation of all 15 chapters, the detailed chapter template, the overall word count target, and the Markdown-only content requirements.

**Writing Guidelines**: The plan emphasizes adherence to plagiarism-free, technically clear (Grade 9-12), and structured content, including the specified subsections and quiz format. Restrictions on external hyperlinks and images are respected.

**Success Criteria**: The implementation phases are designed to directly meet the measurable success criteria outlined in the feature specification, including Docusaurus build success, GitHub Pages deployment, and content quality.

**MCP Usage**: The plan's methodology for content generation aligns with the limited MCP server usage defined in the constitution (for reading documents/tasks), avoiding runtime calls or dynamic API requests.

**Workflow Enforcement**: This plan is a direct outcome of the `/sp.plan` step, adhering to the prescribed workflow.

**Constraints & Limitations**: The plan meticulously respects the constraints, ensuring local buildability, no network call dependencies for the final output, and clean, deterministic Markdown.

## Project Structure

### Documentation (this feature)

```text
specs/001-ai-textbook-gen/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)

```text
website/
├── docs/                # Contains all 15 generated textbook chapters
│   └── chapter-01.md
│   └── ...
│   └── chapter-15.md
├── src/
│   └── pages/
│       └── index.md     # Homepage content for the textbook
├── blog/
├── static/
├── docusaurus.config.js # Docusaurus project configuration
├── sidebars.js          # Docusaurus sidebar configuration
└── package.json         # Node.js project dependencies and scripts
```

**Structure Decision**: The chosen structure is a single Docusaurus project within a `website/` directory at the repository root. This aligns with the static site generation requirement and simplifies deployment to GitHub Pages. `docs/` will house the chapter content, and `src/pages/index.md` will serve as the homepage.

## Complexity Tracking

No violations found that require justification.

## Phase 0: Outline & Research

### Research Tasks

1.  **Research Docusaurus Project Initialization and Configuration**: Investigate the minimal setup required for a Docusaurus v3 project to support static site deployment on GitHub Pages, including `baseUrl`, `organizationName`, and `projectName` settings.
2.  **Research Programmatic Markdown Content Generation**: Explore best practices and techniques for generating structured Markdown content (chapters, quizzes, examples) programmatically using the Gemini CLI, ensuring adherence to the specified chapter template and writing guidelines (H1-H4, no HTML, plagiarism-free).

## Phase 1: Design & Contracts

### Data Model (`data-model.md`)

-   **Textbook**: Represents the entire educational resource.
    -   `name`: "Physical AI & Humanoid Robotics" (string)
    -   `chapters`: A collection (list) of 15 `Chapter` entities, ordered sequentially.
    -   `homepage`: A singular `Homepage` entity.
    -   `docusaurusConfig`: Configuration object for Docusaurus build, including `title`, `tagline`, `url`, `baseUrl`, `organizationName`, `projectName`, `presets`, `themeConfig`.
-   **Chapter**: Represents an individual textbook chapter.
    -   `id`: Unique identifier (e.g., `chapter-01`, `chapter-02`), string, acts as slug for file paths.
    -   `title`: The main title of the chapter (string).
    -   `sections`: A structured list of content sections (Intro, Core Concepts, Technical Deep Dive, Example/Walkthrough, Exercises, Summary, Key Terms, Mini Quiz). Each section contains Markdown content.
    -   `content`: Full Markdown text of the chapter, adhering to H1-H4, no HTML, plagiarism-free guidelines.
    -   `quiz`: A collection of 5 multiple-choice questions, each with a question, options, and correct answer.
-   **Homepage**: Represents the textbook's landing page.
    -   `title`: "Physical AI & Humanoid Robotics" (string).
    -   `summary`: A 4-5 sentence descriptive overview of the textbook (string).
    -   `chapterLinks`: A list of clickable links, each pointing to a `Chapter` entity by its `id`.
    -   `layout`: Markdown/JSX content for the homepage presentation.

### API Contracts (`contracts/`)

-   Not applicable for this project, as no external APIs or services are being developed or integrated at runtime. The project focuses on static content generation.

### Agent Context Update

-   This will involve updating the agent's understanding of the project's Docusaurus structure and content generation process after research and design phases. (Action to be performed after `research.md` and `data-model.md` are finalized).

# End of /sp.plan