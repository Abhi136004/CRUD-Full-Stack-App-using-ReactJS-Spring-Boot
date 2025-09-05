# CRUD Full Stack App using ReactJS and Spring Boot

## Project Description
This is a full-stack web application that demonstrates **CRUD (Create, Read, Update, Delete) operations** for managing employees. The application consists of a **React frontend** for the user interface and a **Spring Boot backend** for the REST API.

## Features
- **List Employees:** View all employees in a table format.  
- **Create Employee:** Add new employees with first name, last name, and email.  
- **View Employee:** Display details of a specific employee.  
- **Update Employee:** Edit existing employee information.  
- **Delete Employee:** Remove employees from the system.  

## Tech Stack

### Frontend
- React 16.13.1  
- React Router DOM 5.2.0  
- Axios 1.11.0  
- Bootstrap 5.3.8  
- React Scripts 5.0.1  

### Backend
- Spring Boot  
- Java  
- Spring Data JPA  
- H2 Database (or configured in `application.properties`)  
- Maven  

## Prerequisites
- Node.js and npm installed for the frontend.  
- Java 8 or higher installed for the backend.  
- Maven installed for building the backend.  

## Installation and Setup

### Backend Setup
1. Navigate to the backend directory:

```bash
cd springboot-backend
```
2. Build the project using Maven:
```bash
mvn clean install
```

3. Run the Spring Boot application:
```bash
mvn spring-boot:run
```

The backend will start on http://localhost:8080


### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd react-frontend
```

2. Install dependencies:
```bash
npm install
````

3. Start the React development server:
```bash
npm start
```

The frontend will start on http://localhost:3000


## API Endpoints

### The backend provides the following REST API endpoints:

- GET /api/v1/employees - Get all employees

- POST /api/v1/employees - Create a new employee

- GET /api/v1/employees/{id} - Get employee by ID

- PUT /api/v1/employees/{id} - Update employee by ID

- DELETE /api/v1/employees/{id} - Delete employee by ID

