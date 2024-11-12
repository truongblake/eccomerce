# E-commerce

A full-stack **E-commerce application** built using the **MERN stack** (MongoDB, Express, React, Node.js) to learn and practice full-stack development. This project, created in **October 2024**, allowed me to gain hands-on experience with front-end and back-end integration, database management, and web application architecture.

## Project Timeline

Developed in **October 2024**, this project focused on learning how to:
- **MERN Stack**: Built a full-stack application using MongoDB for the database, Express for the backend, React for the frontend, and Node.js for the server-side logic.
- **Database Integration**: Learned how to design and implement a MongoDB database to store product information, user data, and transaction records.
- **API Endpoints**: Created custom backend API endpoints that the front-end could use to fetch various resources via URL.
- **React Development**: Enhanced my understanding of React components, React Router for navigation, props, and hooks for managing state and lifecycle methods.
- **Express and Middleware**: Gained experience with Express to handle server-side logic and implement middleware for HTTP requests, ensuring efficient data flow and security.
- **Responsive Design**: Learned how to format and organize CSS to build a more responsive and mobile-friendly user interface.

## Features
- **Product Listings**: Displayed product details dynamically fetched from the backend.
- **User Authentication with JWT**: Implemented secure user login and registration with **JSON Web Tokens** (JWT) for session management.
- **Shopping Cart**: Users can add products to their cart and proceed to checkout.
- **Checkout Flow**: Integrated a basic checkout page for users to complete their purchase.
- **Admin Dashboard**: Developed an **Admin Dashboard** that allows authorized users to manage products on the site, including adding, updating, and deleting product information.

## JWT Authentication

In this project, I implemented **JSON Web Tokens (JWT)** for **user authentication**. This was a valuable learning experience for understanding how authentication works in modern web applications.

JWT is used to manage user sessions securely. When a user logs in or registers, a JWT is generated and returned to the client. This token is then used to authenticate the user in subsequent requests, ensuring secure access to protected routes like the shopping cart and checkout pages.

### What I Learned About JWT:
- **JWT for User Authentication**: I learned how to use JWT to authenticate users by generating a token upon successful login or registration. This token is stored on the client side and used for authorization in subsequent requests to protected endpoints.
- **Session Management**: JWT is used to manage user sessions without needing to store session data on the server. The server only verifies the token sent by the client, simplifying session handling and improving performance.
- **Security**: I understood how JWT helps protect user data and secure routes by ensuring that only authorized users can access sensitive data. The token is encrypted and signed to ensure integrity and prevent tampering.
- **Middleware for Token Verification**: On the server-side, I implemented middleware that checks for the presence of a valid JWT token in incoming requests. This ensures that users are authenticated before accessing protected routes, like viewing their cart or placing an order.

## Admin Dashboard

As part of the project, I developed an **Admin Dashboard** that provides administrators with tools to manage the products listed on the e-commerce site. The Admin Dashboard includes features to:
- **Add New Products**: Admins can add new products with details such as name, description, price, and images.
- **Update Existing Products**: Admins can modify product details such as stock quantity, price, or description.
- **Delete Products**: Admins have the ability to remove products from the listings when necessary.
- **View Product List**: The dashboard provides a simple view of all the products currently listed on the website.

This feature helps with the efficient management of the product catalog on the e-commerce site, and the dashboard itself is secured by the **JWT authentication** to ensure that only authorized users have access to it.

Learning Outcome

Through this project, I gained significant experience in:

 - Full-Stack Development: Understanding the interactions between the front-end and back-end, and managing data flow between them.
 - MERN Stack: Building a project using MongoDB, Express, React, and Node.js, understanding how each part of the stack works together.
 - Creating API Endpoints: Designed custom API routes to handle user authentication, product retrieval, and cart management.
 - React Concepts: Worked with React components, state management using hooks, React Router for navigation, and handling events like form submissions and user actions.
 - JWT Authentication: Learned how to implement user authentication using JWT, including how to generate, store, and verify tokens to protect routes.
 - HTTP Requests & Middleware: Gained a deep understanding of how HTTP requests work, including GET, POST, and DELETE methods, and used middleware in Express to handle them.
 - CSS & Responsiveness: Improved skills in writing responsive CSS, ensuring the application works well across different devices.
 - Admin Dashboard: Developed an Admin Dashboard to manage product listings, which enhanced my understanding of creating administrative features and securing them with JWT.

Credits

Special thanks to [Greatstack](https://www.youtube.com/@GreatStackDev) for their helpful tutorial on building a full-stack E-commerce website.
