# Research Findings: Homepage 3D UI Implementation

**Feature**: Add Physical AI Book Chapter and Homepage Enhancements
**Date**: 2025-12-05

## Decision: Adhere to Docusaurus Defaults; No 3D UI

### Rationale

Initially, the user requested an "interactive 3D UI" for the Docusaurus homepage, leading to a clarification and an explicit decision to allow custom React components as an exception to the `constitution.md`. However, the user subsequently provided a new instruction: "3D ui nh bano bs jo Docuaurs me no hai yo bano" (Do not create a 3D UI, just create what is in Docusaurus).

This new directive supersedes the previous decision. Therefore, the implementation will strictly adhere to Docusaurus's default features and capabilities for the homepage UI. The interactive 3D UI component is now out of scope. This ensures full compliance with the "No custom React components beyond Docusaurus defaults" rule in the `constitution.md`.

### Alternatives Considered

1.  **Allow Custom React Components for 3D UI (Previous Decision)**: This was initially approved by the user to meet the explicit request for a rich 3D UI. However, this option was rescinded by the user's later instruction.
2.  **Simpler 3D via Docusaurus-compatible means**: This was considered as a compromise but was deemed insufficient for a rich 3D experience. With the new directive, even simpler 3D effects are out of scope if they require anything beyond Docusaurus defaults.

### Implications

*   **Development Simplicity**: Development will be simpler, as there is no need to integrate complex 3D libraries or custom React components.
*   **Performance**: Homepage performance will benefit from not rendering a 3D scene.
*   **Compliance**: Full adherence to the "No custom React components beyond Docusaurus defaults" rule in the constitution.
*   **User Experience**: The homepage will not feature an interactive 3D UI. The user experience will be limited to Docusaurus's standard visual capabilities.

