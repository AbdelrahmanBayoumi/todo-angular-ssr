# Todo Angular SSR Application

## Description

This is a simple Todo application built with Angular and server-side rendering (SSR) using Express. The application features a Todo interface where users can manage their tasks. Both the frontend and the API are served through the same Express server, which enables efficient SSR for improved performance and SEO.

## Features

- Angular-based frontend with a clean and user-friendly interface for managing Todos.
- Server-Side Rendering (SSR) with Angular for enhanced performance and search engine optimization.
- A RESTful API for Todos, allowing operations like adding, deleting, and updating tasks.
- Integration of Angular SSR and Client-Side Rendering (CSR) in a single Express server.

## Installation

Before installing, ensure you have Node.js installed on your system. Then, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install all dependencies.

## Running the Application

To start the application, use one of the following commands:

- `npm start`: Starts the Angular development server for client-side development.
- `npm run serve:ssr`: Builds the application and starts the Express server for SSR.

The application will be available at `http://localhost:4000`.

## Development

- Use `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.
- For continuous building during development, use `npm run watch`.

## API Endpoints

The application includes the following API endpoint for managing Todos:

- `GET /api/todos`: Retrieve all Todos.
- `POST /api/todos`: Add a new Todo.
- `PUT /api/todos/:id`: Update an existing Todo.
- `DELETE /api/todos/:id`: Delete a Todo.

## Technologies Used

- Angular ^17.0.0: For building the user interface.
- Angular SSR ^17.0.10: For server-side rendering capabilities.
- Express ^4.18.2: As the backend framework.
- Node.js: For the server environment.
- TypeScript ~5.2.2: As the primary programming language.

## Contributions

Contributions to this project are welcome. Please ensure to follow the standard coding conventions and add unit tests for new features.
