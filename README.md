# AngularTaskManager

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.10.

**Key Features:**

- Add, edit, and delete tasks
- Organize tasks by status (e.g., To Do, In Progress, Done)
- Each task displays its creation date
- Confirmation modal when deleting a task
- Toast notifications for all changes
- Search functionality to quickly find tasks
- Responsive and mobile-friendly design

# DEMO

Check out the live demo of this project [here](https://cairana.github.io/angular-task-manager/).

Note to maintainers - keep demo updated by running following commands from local env:
```bash
ng build --output-path=dist --base-href="/angular-task-manager/"
ngh --dir=dist/browser
```

## Development server

Before starting the development server, install dependencies:

```bash
npm install
```

Make sure you have the Angular CLI installed globally. If not, install it with:

```bash
npm install -g @angular/cli
```

To start a local development server, run:

```bash
ng serve
```

or

```bash
npm start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. 
The application will automatically reload whenever you modify any of the source files.

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. 
By default, the production build optimizes your application for performance and speed.

To run the tests run:

```bash
ng test
```
or

```bash
npm test
```

