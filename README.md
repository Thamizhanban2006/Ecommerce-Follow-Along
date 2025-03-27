# Ecommerce-Follow-Along
### Milestone 1 - Project Overview :    
The Ecommerce-Follow-Along project aims to build a fully-functional e-commerce application using the MERN stack (MongoDB, Express.js, React.js, and Node.js)

**Key Features :**   
  - User Authentication: Secure user login and registration functionality.  
  - Product Management: Add, update, and retrieve product data.  
  - Order Handling: Manage customer orders with backend integration.  
  - REST API: Build scalable and secure APIs for communication between client and server.  
  - MongoDB Schema Design: Design and implement structured data models for managing users, products, and orders.  
  
**Tech Stack :**   
  1. Frontend        : React.js  
  2. Backend         : Node.js, Express.js  
  3. Database        : MongoDB  
  4. Authentication  : JWT (JSON Web Tokens) for secure login  

**Introduction to MERN Stack :** You gained an understanding of the MERN stack (MongoDB, Express.js, React.js, and Node.js) and its role in building full-stack web applications. The lesson highlighted the advantages of using JavaScript across both the frontend and backend, simplifying development.  

**Project Overview :** You were introduced to the goals and key features of the "Ecommerce-Follow-Along" project, which includes user authentication, product management, and order handling, all built with the MERN stack.

**API Structure and Endpoints :** You learned about REST APIs and how they enable communication between the client and server. Key endpoints will be built for user registration, login, product management, and order handling.

**Database Schema Design :** The importance of schema design in MongoDB was covered, with a focus on creating structured models for data like users, products, and orders.

**Authentication Basics :** You learned the significance of user authentication in web applications, ensuring secure access to sensitive resources like purchases and personal information.

Milestone 2: Project Setup and Login Page

This milestone focuses on setting up the project structure and implementing a basic login page.

Key Features

- Project Setup: Initialized the project with the required dependencies and folder structure.
- Login Page: A simple login page with fields for username and password.

Tech Stack Used

- Frontend: React, Tailwindcss

Milestone 3: Serevr setup and error handling.


Key Features: 

Organized backend code with a clear folder structure.

Configured a Node.js server using Express to handle APIs.

Integrated MongoDB for data storage and management.

Implemented basic error handling for smooth server operations.

Tech Stack 

 Backend: Node.js, Express  
Database: MongoDB, Mongoose

# Milestone 4 User Management System with File Upload

This project is a simple User Management System that allows the creation, retrieval, and management of user data. It also supports file uploads (like profile pictures) using *Multer*.

## Features
- *User Model*: Blueprint for storing user data in the database.
- *User Controller*: Manages operations like adding, retrieving, and updating user information.
- *File Uploads*: Accepts and stores user-uploaded files (e.g., profile images).
- *Documentation*: Well-documented code for ease of

Milestone 5: Project Signup Setup

This milestone focuses on setting up the project structure and implementing a basic signup page.

Key Features

- Project Setup: Initialized the project with the required dependencies and folder structure.
- Signup Page: A simple signup page with fields for Name Email Password User Photo.

Tech Stack Used

- Frontend: React

**Milestone 6:**
  This milestone focus on the password Encryption and User Data Storage

  Key Features

       1:Password Encryption: Used bcrypt to hash passwords.
       2:User Data Storage: Saved user data securely in the user inputs.

 Tech stack used :
   - Backend : node.js

   **Milestone 7:**
  In this milestone we are going to create a backend endpoint for user and  the focus is on validating user credentials and verifying the encrypted password stored in the database.



Key features:
   1) validate user credentials during login:
Protect User Data: Keeps passwords safe even if the database is compromised.
Privacy: Ensures passwords aren't stored in plain text.
Compliance: Meets security standards like GDPR and PCI-DSS.
Prevents Password Theft: Hashed passwords are difficult to decipher, increasing security.

   2) compare the encrypted password with the user’s input:
User Enters Credentials:

The user provides their email/username and password on the login page.

Fetch User Data from Database:

The backend retrieves the user record based on the provided email/username.
If the user is not found, return an error: "User does not exist."

Compare Encrypted Passwords:

Process the user's input password using the same hashing algorithm (e.g., bcrypt).
Compare the resulting hash to the stored hashed password.
If they match, the user is authenticated; if not, send an error.

Tech stalk:
 Backend : bcryptjs.


**Milestone 8:**
In this milestone,  we will create a frontend card component for products and design a homepage to display these cards for each product.

Key features:
  1) create a card component:
Showcase Products Effectively: Presents product details in a clear and visually appealing way.
Reusable Design: Can be used across multiple pages or sections of the app.
Improved User Experience: Makes it easy for users to browse and interact with products.
Organized Layout: Keeps the homepage clean and structured.
  2) display those cards on the products page:
Create a Dynamic Component: Design a single card component that accepts product details as props.
Use Mapping: Use array mapping to iterate over the product list and render a card for each product.
Pass Data Dynamically: Pass unique product information (e.g., name, price, image) to each card.
Maintain Consistency: Ensure the layout remains uniform for all products.



Tech stack :
Frontend: react

**Milestone 9 - Product Input Form**
In this milestone, we built a frontend form to take product details as input, including multiple images. This form will allow users to add products, which will be saved in the database and displayed on the product page. This step is crucial in making the eCommerce platform functional. Future improvements can include admin access and shop profiles for better management. 

**Milestone 10 - Product Schema & API Endpoint**
In this milestone, we created a Mongoose schema to define the structure of product data, including fields like name, description, price, and image URL, with proper validation. We also built a POST endpoint to validate and store product details in MongoDB, ensuring data integrity. This step is essential for managing products efficiently in the eCommerce platform. 

**Milestone 11 - Dynamic Home Page with MongoDB Integration**

In this milestone, we focused on making the home page dynamic by fetching and displaying product data stored in MongoDB. The objective was to write a backend endpoint that retrieves all saved product data and sends it to the frontend. On the frontend, we implemented a function to request this data and dynamically render it using the previously created product card component. This milestone helped in understanding how to extract data from MongoDB, send it through an API endpoint, receive it in the frontend, and display it efficiently using components. By completing this, we have successfully built a dynamic product listing system that enhances user interaction and improves the functionality of our application.

**Milestone 12 - My Products Page with User-Based Filtering** 

In this milestone, we developed the **My Products** page, which displays only the products added by the logged-in user based on their email. We achieved this by writing a backend endpoint that filters product data in MongoDB using the user's email and sends only the relevant products to the frontend. On the frontend, we implemented a function to fetch this filtered data and dynamically render it using the existing product card component. This milestone provided valuable experience in filtering data based on specific constraints, handling API requests efficiently, and dynamically displaying user-specific content. Successfully completing this step enhances the personalization of the application, allowing users to manage their own products seamlessly. 

# Milestone 13: Edit Uploaded Products

## 🚀 Welcome to Milestone 13!
In this milestone, we have implemented the functionality to **edit uploaded products** in our application. This involves adding an **edit button**, pre-filling the form with existing data, and updating the product details in our **MongoDB database** via an API endpoint.

---

## 🎯 Learning Goals
By completing this milestone, we have learned:
- How to write an **endpoint** to update existing data in **MongoDB**.
- How to **auto-fill a form** with previous product data and provide an option to edit.
- How to integrate the **frontend** and **backend** to perform update operations seamlessly.

---

## 🛠 Steps Implemented
### **1️⃣ Backend: Updating Product Details**
- Created a **PUT API endpoint** (`/products/:id`) to update existing product details.
- Used `findByIdAndUpdate()` method in **Mongoose** to modify product details.
- Handled errors properly for invalid or non-existent product IDs.

### **2️⃣ Frontend: Edit Button & Auto-Fill Form**
- Added an **edit button** on each product card.
- When clicked, it fetches existing product details and auto-fills the edit form.
- Allowed users to modify and update the details.
- Sent updated data to the backend to save changes.

### **3️⃣ Testing & Debugging**
- Tested the API endpoint using **Postman**.
- Verified that data updates correctly in **MongoDB**.
- Ensured the frontend reflects the updated product details in real-time.

---

## 📥 Submission Guidelines
1. **Push your code** to your **GitHub repository**.
2. Ensure your repository is **publicly accessible**.
3. Update this **README.md** to summarize your progress for Milestone 13.
4. **Submit the repository link** in the assignment submission section.

---

# *Milestone 14 - Delete Product Functionality*  

In this milestone, we implemented a *delete functionality* for products. We added a *DELETE API endpoint* in the backend using *Express.js* and *MongoDB, allowing products to be removed using their ID. On the frontend, we added a **delete button* to each product card, which sends a request to the server to remove the product from the database. This ensures a smooth user experience by dynamically updating the UI after deletion.


# Milestone 15: Creating a Reusable Navigation Component

## 🎯 Learning Goals
- Create a Nav component.
- Reuse it across multiple pages.
- Make the navbar responsive.
- Ensure smooth navigation.

## 📝 Steps
1. **Create Nav Component**
   - Add links: Home, My Products, Add Product, Cart.
2. *Make it Responsive*
   - Use CSS for adaptability.
3. *Integrate Across Pages*
   - Import and include Nav in all pages
   
This milestone teaches how to build and integrate a responsive navigation bar for seamless navigation.


# **Milestone 16 - Product Info Page**

In this milestone, we created a Product Info Page that displays detailed product data. Users can choose the quantity and click the Add to Cart button to add items to their cart.


**Tech Stack:**
Frontend:
 React.js – For building the Product Info Page.



# **Milestone 17: Add Products to Cart 🛒**

Overview

In this milestone, you'll modify the user schema to store cart items and create an API endpoint to add products to the cart.

Steps

Update User Schema – Add a cart field to store products.
Create Cart Schema – Define how products are stored in the cart.
Implement API Endpoint – Receive and store product details in the cart.
By the end, your backend will support adding products to a user’s cart and storing them in the database.



# *Milestone 18 - Backend API for Cart Page*
In this milestone, we created backend endpoints to interact with the cart page and manage cart data for users.

Features Implemented:
Create an endpoint to receive requests from the cart page.
Create a backend endpoint to fetch all products inside the cart using the user's email.

Tech Stack:
Backend:  MongoDB
Frontend: React.js


# *Milestone 19 - Cart Page Frontend & Quantity Management API*

In this milestone, we will create the cart page UI, display products from the backend API, and implement functionality to increase and decrease product quantity using backend endpoints.

Tech stalk :
Frontend: React.js
Backend : mongoDB


# 🚀 Milestone 20 - Profile Page & API  

## 🛠 Steps  

### *Backend*  
- Create an API endpoint to fetch user data by email.  
- Ensure database connection & CORS setup.  

### *Frontend*  
- Fetch and display *profile photo, name, email*.  
- Show *addresses* (or "No address found").  
- Add *"Add Address"* button.  

*Goal:* A profile page displaying user details dynamically. 



# MIlestone-21 : Created Address Form Page

Designed a user-friendly form layout for entering address details.

Included input fields for:

Country, City, Address Line 1, Address Line 2 (optional),Zip Code

Address Type (e.g., Home, Office)

Implemented State Management

Utilized React state (useState) to manage form input values.

Ensured input fields dynamically update the state.

Navigation Integration

Configured navigation to the address form when "Add Address" is clicked in the profile.

Used React Router for seamless page transition.

**📌Outcome**

Successfully implemented an address form that collects user input and navigates correctly from the profile section. This milestone enhances user experience by allowing them to save and manage addresses efficiently.

# Milestone 22: Store User Address in Database

Overview

Create a backend endpoint to store a user's address inside their profile in the database.

Steps to Complete

Set Up Route - Create an Express route to handle address submissions.

Implement Logic - Find user, update their address array, and save changes.

# **Milestone 23 - Place Order Functionality**

**Features Implemented:**

Added a "Place Order" button in the cart page.

Created a "Select Address" page to display and choose a delivery address.

Developed a backend endpoint to fetch user addresses.

Designed a Mongoose schema to store order details.

*Tech Stack:*

Frontend: React

Backend: Node.js, Express.js

Database: MongoDB\


# Milestone 24: Order Confirmation Page

## Overview
In this milestone, we will build the Order Confirmation page for our application. This page will display the ordered products, the selected delivery address, and the total price details. Additionally, it will feature a "Place Order" button to finalize the purchase.

## Learning Goals 🎯

- Understand how to display an order summary.
- Learn how to retrieve and display user-selected delivery addresses.
- Calculate and show the total price of the order.
- Implement the "Place Order" button functionality.

## Steps to Implement 📝
1. *Display Ordered Products:* Show all the products the user is purchasing, including images, names, prices, and quantities.
2. *Show Selected Address:* Retrieve and display the address the user has chosen for delivery.
3. *Calculate Total Price:* Compute the total cost of the order, including any applicable taxes or discounts.
4. *Add Place Order Button:* Provide a button to confirm the order and proceed with the checkout process.


#  Milestone 25: create an backend endpoint for place order.

Overview:

This milestone focuses on creating an Express backend endpoint that handles placing orders. It receives product details, user information, and address data, then processes and stores the order in MongoDB.


Features:

- Accepts user email, products, and address details.

- Retrieves user ID from the email.

- Creates individual orders per product.

- Saves orders to the MongoDB orders collection.


# Milestone 26 -Get User Orders Endpoint 

Overview:

This milestone focuses on creating an Express backend endpoint that fetches all orders for a specific user. It receives the user's email, retrieves the user’s ID, and fetches the corresponding orders from MongoDB.

Features:

- Fetch User Orders: Get all orders by user email.

- Detailed Order Info: Includes product, quantity, address, and status.

- Error Handling: Handles missing users or orders.

# Milestone 27 - My Orders Page

 Overview
In this milestone, we will create a My Orders page where users can view their order history. We will fetch user-specific orders from the backend by making a GET request to the /my-orders endpoint, passing the user's email. The retrieved orders will then be displayed on the frontend. Additionally, we will update the navigation bar to include a link to the My Orders page for easier access.

Tech Stack
- Backend: Node.js, Express.js
- Database: MongoDB
- Frontend: React

# Milestone 28 - Cancel Order Feature

Overview
In this milestone, we will enhance the My Order page by adding a Cancel Order button for each order. Users will be able to cancel an order unless it has already been canceled. We will implement a new backend endpoint to update the order status to Canceled when the button is clicked.

Tech Stack
- Backend: Node.js, Express.js
- Database: MongoDB
- Frontend: React

# Milestone 29 - PayPal Integration

Overview

In this milestone, we will integrate PayPal as an online payment option in the Order Confirmation page. Users can choose between Cash on Delivery (COD) and Online Payment (PayPal). Selecting Online Payment will display the PayPal buttons.

Tech Stack

Backend: Node.js, Express.js

Database: MongoDB

Frontend: React

Payment Gateway: PayPal