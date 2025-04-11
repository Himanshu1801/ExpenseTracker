# Expense Tracker

A full-stack expense tracking application built with React on the frontend and Spring Boot with MongoDB on the backend. This application allows users to add, edit, delete, and view expenses, with a clean and responsive UI.

## Features

- Add new expenses with name, amount, and date.
- Edit existing expenses.
- Delete expenses from the list.
- Filter expenses by year.
- Visualize expenses using a chart.
- Backend API for managing expenses with MongoDB.

## Tech Stack

### Frontend
- **React**: For building the user interface.
- **Vite**: For fast development and build tooling.
- **CSS**: For styling the components.

### Backend
- **Spring Boot**: For building the RESTful API.
- **MongoDB**: For storing expense data.

## Project Structure

### Client (Frontend)
- Located in the `client` directory.
- Built with React and Vite.
- Contains components for managing and displaying expenses.

### Server (Backend)
- Located in the `server/expense` directory.
- Built with Spring Boot.
- Connects to a MongoDB database for CRUD operations.

## Installation

### Prerequisites
- Node.js and npm installed.
- Java 17 or higher installed.
- MongoDB database.

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/Himanshu1801/ExpenseTracker.git
   cd ExpenseTracker

2. Setup the backend:
    ```bash
    cd server/expense
    mvn spring-boot:run

Ensure MongoDB is running and the connection string in application.properties is correct.

3. Setup the frontend:
    ```bash
    cd client
    npm install
    npm run dev

4. Open the application in your browser:
    ```bash
    http://localhost:5173
