# Quickstart Guide: Setting up the Physical AI Textbook Project

**Feature**: Add Physical AI Book Chapter and Homepage Enhancements
**Date**: 2025-12-05

This guide provides instructions to quickly set up and run the Docusaurus-based Physical AI Textbook project locally.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

*   **Node.js**: Version 18.0 or later (LTS recommended).
*   **npm**: Comes bundled with Node.js.

## Setup Instructions

1.  **Navigate to the project root**:
    Open your terminal or command prompt and change the directory to the root of the `my-research-paper` repository.

    ```bash
    cd C:\Users\AYAN\Desktop\book\book1\my-research-paper
    ```

2.  **Navigate to the Docusaurus project directory**:
    The Docusaurus project is located in the `my-website` subdirectory.

    ```bash
    cd my-website
    ```

3.  **Install dependencies**:
    Install all required Node.js packages for the Docusaurus project.

    ```bash
    npm install
    ```

4.  **Start the development server**:
    Once dependencies are installed, you can start the local development server. This will open the website in your default browser and automatically reload when changes are made.

    ```bash
    npm run start
    ```

    The site should now be accessible at `http://localhost:3000/`.

5.  **Build the static site (Optional)**:
    To generate a static build of the website, which can then be deployed, run:

    ```bash
    npm run build
    ```

    The generated static files will be located in the `build` directory within your `my-website` folder.

## Troubleshooting

*   If you encounter issues during `npm install`, try clearing the npm cache: `npm cache clean --force` and then run `npm install` again.
*   Ensure your Node.js and npm versions meet the prerequisites. You can check them with `node -v` and `npm -v`.
