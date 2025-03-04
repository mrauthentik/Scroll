# Screen Scroll Demo

A simple React/TypeScript project demonstrating smooth scrolling functionality using the `useScrollTo` hook. This project is built with Vite and showcases how to create reusable components for scrolling to specific points on a webpage.

## Description

This project provides a practical example of implementing smooth scrolling in a React application. It includes a custom hook, `useScrollTo`, which allows you to easily scroll to a specified height on the page with customizable behavior and offset.  The project aims to provide a clean and understandable implementation for developers looking to add smooth scrolling to their React applications.

## Installation

Follow these steps to set up the project locally:

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd screen-scroll
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the development server:**

    ```bash
    npm run dev
    ```

    This will start the Vite development server, and you can view the project in your browser at the address provided (usually `http://localhost:5173`).

## Usage

Once the development server is running, you can interact with the demo to see the scrolling functionality in action.

*   The `ScrollDemo` component provides a button that, when clicked, scrolls the page to a height of 500px.

*   The `ScrollToButton` component can be used to create custom scroll buttons with specified heights, labels, behavior, and offsets.

You can integrate the `useScrollTo` hook and the provided components into your own React projects to add smooth scrolling functionality.

## Features

*   **`useScrollTo` Hook:**  A reusable hook for triggering smooth scrolling to a specified height.
*   **Customizable Scrolling:**  Options for customizing scroll behavior (e.g., `smooth` or `auto`) and offset.
*   **`ScrollToButton` Component:**  A pre-built button component for easy integration of scrolling functionality.
*   **React/TypeScript:**  Built with React and TypeScript for type safety and maintainability.
*   **Vite:**  Utilizes Vite for fast development and build times.

## Technologies Used

| Technology   | Description                               |
| :----------- | :---------------------------------------- |
| React        | JavaScript library for building UIs       |
| TypeScript   | Superset of JavaScript with static typing |
| Vite         | Build tool for fast development           |
| ESLint       |  For code linting and formatting.        |
| React Hooks  |  For managing state and side effects in functional components.       |

## Contributing

Contributions are welcome! Here's how you can contribute to the project:

1.  **Fork the repository.**
2.  **Create a new branch for your feature or bug fix:**

    ```bash
    git checkout -b feature/your-feature-name
    ```

3.  **Make your changes and commit them:**

    ```bash
    git add .
    git commit -m "Add your descriptive commit message"
    ```

4.  **Push your changes to your forked repository:**

    ```bash
    git push origin feature/your-feature-name
    ```

5.  **Submit a pull request to the main repository.**

Please ensure your code adheres to the project's coding standards and includes appropriate tests.

## License

This project is open-source and available under the [MIT License](LICENSE).

[![Built with Dokugen](https://img.shields.io/badge/Built%20with-Dokugen-brightgreen)](https://github.com/samueltuoyo15/Dokugen)
