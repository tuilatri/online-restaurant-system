# Dining Verse: A Full-Stack Online Restaurant System

Dining Verse is a comprehensive, full-stack web application designed for online food ordering. It provides a seamless experience for customers to browse the menu, place orders, and manage their accounts, along with a powerful admin dashboard for restaurant staff to manage products, customers, and orders efficiently.

## Table of Contents
- [Dining Verse: A Full-Stack Online Restaurant System](#dining-verse-a-full-stack-online-restaurant-system)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Key Features](#key-features)
    - [🧑‍🍳 For Customers](#-for-customers)
    - [⚙️ For Administrators](#️-for-administrators)
  - [Architecture and Scope](#architecture-and-scope)
  - [Technology Stack](#technology-stack)
  - [Project Structure](#project-structure)
  - [Setup and Installation](#setup-and-installation)
    - [Prerequisites](#prerequisites)
    - [1. Backend Setup](#1-backend-setup)
    - [2. Frontend Setup](#2-frontend-setup)
  - [Author](#author)

## Overview

This project is a complete online restaurant system built with a decoupled architecture. The frontend is crafted with vanilla HTML, CSS, and JavaScript, ensuring a lightweight and fast user experience. The backend is a robust RESTful API powered by Node.js and Express, connected to a MySQL database to handle all business logic and data persistence.

The application serves two primary roles:
1.  **Customer-Facing Interface**: An intuitive and responsive website for users to explore dishes, manage their cart, and complete the checkout process.
2.  **Admin Management Dashboard**: A secure and feature-rich panel for administrators to oversee all aspects of the online store, from inventory to sales analytics.

## Key Features

### 🧑‍🍳 For Customers
*   **Product Discovery**: Browse products by category, search by name, and apply advanced filters (price range).
*   **Shopping Cart**: Add items to the cart, update quantities, add notes for specific items, and proceed to checkout.
*   **User Authentication**: Secure user registration and login system using JSON Web Tokens (JWT).
*   **Account Management**: Users can view their order history, update their profile information (name, email, address), and change their password.
*   **Responsive Design**: Fully responsive UI that works seamlessly on desktops, tablets, and mobile devices.
*   **Multi-language Support**: Easily switch between English (EN) and Vietnamese (VI).
*   **Dark/Light Mode**: User preference for theme is saved locally for a personalized experience.

### ⚙️ For Administrators
*   **Dashboard**: Get a quick overview of key metrics, including total customers, total products, and total revenue.
*   **Product Management (CRUD)**: Add, view, edit, and soft-delete (deactivate) food items. Includes image uploads.
*   **Order Management**: View all customer orders, filter by status (processed/unprocessed) or date, and view detailed order information.
*   **Customer Management**: View all registered customers, filter by status (active/locked), edit user information, and create new customer accounts.
*   **Sales Statistics**: Analyze sales performance by filtering products and date ranges to see quantity sold and revenue generated for each item.

## Architecture and Scope

The project follows a modern, decoupled client-server architecture, which ensures separation of concerns and enhances scalability.

*   **Frontend (Client-Side)**
    *   Built with pure **HTML, CSS, and JavaScript**, without any heavy frameworks, leading to fast load times.
    *   It communicates with the backend exclusively through **REST API** calls to fetch and send data.
    *   Responsible for rendering the user interface and managing client-side state.
    *   Designed to be deployed as a static website on platforms like AWS S3, Vercel, or Netlify.

*   **Backend (Server-Side)**
    *   A **Node.js** application using the **Express.js** framework to create a powerful RESTful API.
    *   Handles all core business logic: user authentication, product management, order processing, and database operations.
    *   Authentication is managed using **JSON Web Tokens (JWT)**, ensuring secure communication between the client and server.
    *   Interacts with a **MySQL** database for all data storage and retrieval needs.
    *   Includes middleware for error handling and role-based access control (Admin vs. User).

## Technology Stack

| Area      | Technologies and Libraries                               |
| :-------- | :------------------------------------------------------- |
| **Frontend**  | `HTML5`, `CSS3`, `JavaScript (ES6+)`, `Vanilla JS`       |
| **Backend**   | `Node.js`, `Express.js`, `CORS`, `JWT`, `bcrypt.js`, `Multer` |
| **Database**  | `MySQL`                                                  |
| **Deployment**| `AWS`, `Render`, `Heroku`, `Vercel` (or similar platforms) |

## Project Structure
```
.
├── backend/
│   ├── configs/
│   │   ├── db.js
│   │   └── jwt.config.js
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── public/uploads/
│   └── server.js
└── frontend/
    ├── assets/
    │   ├── css/
    │   ├── img/
    │   └── ...
    ├── js/
    │   ├── admin.js
    │   ├── apiService.js
    │   ├── checkout.js
    │   ├── main.js
    │   └── ...
    ├── admin.html
    └── index.html
```

## Setup and Installation

To get this project up and running on your local machine, follow these steps.

### Prerequisites
*   Node.js and npm (or yarn)
*   A running MySQL database instance

### 1. Backend Setup
```bash
# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Create a .env file in the backend directory and add the following variables:
PORT=5000
DB_HOST=your_db_host
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_DATABASE=your_db_name
DB_PORT=3306
JWT_SECRET=a_strong_secret_key_for_jwt
JWT_EXPIRES_IN=1d

# (Optional) Create an admin user by running the script
node createAdmin.js

# Start the backend server
npm start
```
The backend API will be running on `http://localhost:5000`.

### 2. Frontend Setup

The frontend is built with vanilla JavaScript and requires no complex build steps.

1.  Navigate to the `frontend/` directory.
2.  Open the `js/apiService.js` file.
3.  Change the `API_BASE_URL` constant to your local backend server address:
    ```javascript
    const API_BASE_URL = "http://localhost:5000/api";
    ```
4.  Open the `index.html` file in your browser, preferably using a live server extension (like "Live Server" in VS Code) to handle requests correctly.

## Author

*   **[Hà Minh Trí]** - [Your GitHub Profile](https://github.com/tuilatri)