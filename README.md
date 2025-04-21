Task Management Dashboard
A Kanban-style task management dashboard built with ReactJS, Bootstrap, and CSS. This application allows users to manage tasks through a drag-and-drop interface with persistence via API.

Features

Kanban-style board with three columns (To Do, In Progress, Done)
Create new tasks with title, description, and status
Drag and drop tasks between statuses
Persistence via REST API calls
Responsive design using Bootstrap

Technologies Used

React.js
JavaScript (ES6+)
Bootstrap 5
CSS3
HTML5 Drag and Drop API
Fetch API for HTTP requests

Prerequisites

Before running this project, make sure you have the following installed:

Node.js (v14.0.0 or higher)
npm (v6.0.0 or higher)

Installation & Setup

Clone the repository:
bashgit clone https://github.com/Sanket318/Task-Management-Dashboard.git
cd task-management-dashboard

Install necessary dependencies:
npm install bootstrap

Start the development server:
bash npm start

Open your browser and navigate to:
http://localhost:3000

Architecture & Approach
Component Architecture
The application follows a component-based architecture with the following main components:

App: The main container component that manages state and API calls.
TaskColumn: Represents a status column in the Kanban board.
TaskCard: Represents an individual task that can be dragged.
TaskForm: A modal form for adding new tasks.

State Management
React hooks (useState, useEffect) are used for state management
Tasks are stored in the App component's state and passed down as props
Task operations (create, update) trigger API calls and state updates

API Integration
Uses the Fetch API to communicate with a mock REST API
Implements optimistic UI updates for better user experience
Handles API errors gracefully with error state display

Drag and Drop Implementation
Uses the HTML5 Drag and Drop API
Tasks can be dragged between status columns
Status updates are sent to the API when a task is dropped