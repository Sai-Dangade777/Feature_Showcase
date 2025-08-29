# Feature Showcase Component

This project is a responsive and interactive "Feature Showcase" component built with React, TypeScript, and Vite. It's designed to display a series of product features in a visually engaging way, with a mobile-first approach and full responsiveness across different devices, including desktop, tablet, and mobile (in both portrait and landscape orientations).

## Features

*   **Interactive Feature List:** A clickable list on the side allows users to switch between different features.
*   **Arrow Navigation:** Previous/Next arrows provide an alternative way to navigate through the features.
*   **Responsive Design:** Fully responsive layout that adapts to various screen sizes:
    *   **Mobile:** A single-column layout for easy viewing.
    *   **Tablet:** A slightly larger, optimized single-column layout.
    *   **Desktop:** A three-column layout with the feature description, a phone mockup, and the feature list.
    *   **Landscape Mode:** A special two-column grid layout for mobile/tablet landscape orientation.
*   **Dynamic Content:** Feature data (titles, descriptions, images) is managed in a separate `data.ts` file for easy updates.
*   **Smooth Transitions:** CSS transitions provide a smooth visual experience when switching between features.

## Tech Stack

*   **React:** For building the user interface.
*   **TypeScript:** For type safety and improved developer experience.
*   **Vite:** As the build tool and development server.
*   **CSS:** For styling the component.

## Getting Started

### Prerequisites

*   Node.js (v18.x or higher)
*   npm (or yarn/pnpm)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/Sai-Dangade777/Feature_Showcase.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd Feature_Showcase
    ```

3.  **Install dependencies:**
    ```sh
    npm install
    ```

### Running the Development Server

To start the local development server, run the following command:

```sh
npm run dev
```

Open your browser and navigate to `http://localhost:5173` (or the address shown in your terminal) to see the component in action.

## Deployment

This project is configured for easy deployment on **Vercel**.

1.  **Push your code** to your GitHub repository.
2.  **Import the repository** into your Vercel account.
3.  Vercel will automatically detect that it's a Vite project and build and deploy it. The `vercel.json` file in the root ensures the correct build settings and routing.
