# Wuthering Waves Character Selection

A web application for selecting characters from Wuthering Waves game, allowing players to create teams and manage character slots.

## Features

- Single character selection for specific positions
- Quick team formation with up to 3 character slots
- Flexible character combinations
- Interactive character selection interface

## Technology Stack

### Frontend
- **ReactJS**: A JavaScript library for building user interfaces
  - Component-based architecture
  - Virtual DOM for efficient rendering
  - JSX syntax

- **TailwindCSS**: A utility-first CSS framework
  - Responsive design
  - Custom styling
  - Modern UI components

- **Zustand**: Lightweight state management
  - Simple and scalable state management
  - Easy integration with React
  - Minimal boilerplate

- **JSON Server**: Mock REST API backend
  - Simulated REST API endpoints
  - Character data management
  - Team composition storage
  - Easy HTTP request handling

## Development Setup

This project uses Vite as the build tool with HMR (Hot Module Replacement) and ESLint for code quality.

Currently, two official plugins are available:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`