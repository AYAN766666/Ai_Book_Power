# Data Model: AI/Spec-Driven Textbook Generator

## Key Entities

### Textbook

Represents the entire educational resource.

-   **`name`**: "Physical AI & Humanoid Robotics" (string)
    -   *Description*: The title of the textbook.
-   **`chapters`**: A collection (list) of 15 `Chapter` entities.
    -   *Description*: The main content of the textbook, ordered sequentially.
    -   *Relationship*: Contains `Chapter` entities.
-   **`homepage`**: A singular `Homepage` entity.
    -   *Description*: The landing page for the textbook.
    -   *Relationship*: Contains `Homepage` entity.
-   **`docusaurusConfig`**: Configuration object for Docusaurus build.
    -   *Description*: Contains settings for Docusaurus, including `title`, `tagline`, `url`, `baseUrl`, `organizationName`, `projectName`, `presets`, `themeConfig`.

### Chapter

Represents an individual textbook chapter.

-   **`id`**: Unique identifier (e.g., `chapter-01`, `chapter-02`), string.
    -   *Description*: Acts as a slug for file paths and internal linking.
-   **`title`**: The main title of the chapter (string).
    -   *Description*: The human-readable title displayed for the chapter.
-   **`sections`**: A structured list of content sections.
    -   *Description*: Includes sections like Intro, Core Concepts, Technical Deep Dive, Example/Walkthrough, Exercises, Summary, Key Terms, Mini Quiz. Each section contains Markdown content.
-   **`content`**: Full Markdown text of the chapter (string).
    -   *Description*: Adheres to H1-H4, no HTML, plagiarism-free guidelines.
-   **`quiz`**: A collection of 5 multiple-choice questions (list of objects).
    -   *Description*: Each question object includes a question string, a list of option strings, and the correct answer string.

### Homepage

Represents the textbook's landing page.

-   **`title`**: "Physical AI & Humanoid Robotics" (string).
    -   *Description*: The main title displayed on the homepage.
-   **`summary`**: A 4-5 sentence descriptive overview of the textbook (string).
    -   *Description*: A brief introduction to the textbook's content and purpose.
-   **`chapterLinks`**: A list of clickable links (list of strings).
    -   *Description*: Each link points to a `Chapter` entity by its `id`, enabling quick navigation.
-   **`layout`**: Markdown/JSX content for the homepage presentation (string).
    -   *Description*: The structured content defining the visual layout and elements of the homepage.
