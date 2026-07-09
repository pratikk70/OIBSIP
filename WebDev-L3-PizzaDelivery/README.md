# Pizza Delivery System App - MERN

Pizza Delivery System App (MERN - MongoDB, Express, React, Node.js) is a comprehensive web application that enables users to customize and order pizzas online. Developed as the Level 3 submission for the Oasis Infobyte Web Development & Designing Internship track, this project showcases a production-grade full-stack development approach with a focus on role-based access control, real-time inventory adjustments, automated administration management, and secure third-party checkout scripts.

## Project Context
* Assigned Track: Web Development & Designing
* Assigned Task: Level 3 - Task 1: Pizza Delivery Full-Stack Application
* Strict Task Directory Pattern: OIBSIP/WebDev-L3-PizzaDelivery/

---

## Features

* User and Admin Authentication: Secure login and registration system featuring email verification workflows and role-based access control managed with JSON Web Tokens (JWT).
* Pizza Management System: Full CRUD operations for pizzas, allowing users to build a custom pizza step-by-step with varied ingredients (bases, sauces, cheeses, veggies).
* Inventory Management: Complete backend tracking system for pizza ingredients with baseline quantity monitoring, configurable low-stock threshold alerts, and component pricing rules.
* Order Processing System: End-to-end order processing lifecycle with asynchronous order execution, kitchen queue reception state tracking, and delivery monitoring statuses.
* Payment Integration: Multi-stage checkout processing secured through the Razorpay API in Test Mode with dynamic payment verification hooks.
* Order History and Tracking: Active client portal allowing authenticated users to review historical context logs and monitor continuous order fulfillment states in real time.
* Admin Dashboard: Centralized order overview interface giving administrative users direct tools to update delivery pipeline checkpoints and modify component inventory levels.
* Automatic Inventory Deduction: Background database updates that automatically decrement ingredient tracking documents when verified orders hit the validation queue.

---

## Built With

* Frontend: React.js (Vite) | Tailwind CSS | React Router | Redux Toolkit | React Redux
* Backend: Node.js | Express.js | bcryptjs | cors | dotenv | express-async-handler | jsonwebtoken
* Database: MongoDB | Mongoose ORM
* Payment: Razorpay API (Test Mode)
* Authentication: JSON Web Tokens (JWT)
* Email Notifications: Nodemailer
* Task Scheduling: node-cron

---

## Getting Started

### Prerequisites

* Node.js - Long Term Support (LTS) environment runner
* NPM - Node Package Manager binary utilities

### Installation and Configuration

1. Navigate to the Strict Project Directory
Open your terminal instance at the root directory level matching the tracking format required:
cd OIBSIP/WebDev-L3-PizzaDelivery

2. Install Server and Client Dependencies
Pull structural environment modules for both the base Express orchestration and the React client application:
# Install backend server requirements
npm install

# Navigate to the client app folder and install dependencies
cd client
npm install
cd ..

3. Configure Environment Variables

Construct a .env initialization sheet in the root backend folder (/WebDev-L3-PizzaDelivery/.env):
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_signature_secret
SALT=10
SENDER_EMAIL=your_email@example.com
SENDER_PASSWORD=your_email_password_or_app_password
SUPERADMIN_EMAIL=admin@example.com
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

Construct a matching .env variables list in the client application root folder (/WebDev-L3-PizzaDelivery/client/.env):
VITE_SERVER_URL=http://localhost:5000
VITE_CLIENT_URL=http://localhost:3000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id

4. Seed Database Collections (Optional)
Populate initial records covering stock configuration baselines, available components, and pre-packaged pizzas:
npm run data:import

To wipe active operational data clean:
npm run data:destroy

5. Start Development Environments
Execute parallel hot-reloading loops across front-end targets and backend API listening structures:
# Run both server and client services simultaneously
npm run dev

# Isolate and run the backend server layer only
npm run server

# Isolate and run the frontend interface only
npm run client

6. Target Active Local Application Hosts
* Client Interface Portal: http://localhost:3000
* Server Endpoint Handler: http://localhost:5000

---

## License

Distributed under the MIT License. See LICENSE for structural context indicators.
