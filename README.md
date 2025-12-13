# DevSwipe Backend

Backend service for **DevSwipe**, a full-stack developer networking platform that enables developers to discover, connect, and chat with each other in real time.

This repository contains the **server-side application**, responsible for authentication, business logic, database operations, and real-time communication.

---

## 🔍 Overview

The DevSwipe backend is built as a **REST API with WebSocket support**.

It handles:
- User authentication and authorization
- Developer discovery and connection requests
- Profile management
- Real-time chat and message persistence
- Secure database access with MongoDB
- Modular and scalable backend architecture

---

## 🚀 Features

- JWT-based authentication
- Secure login and protected routes
- Developer discovery logic
- Connection request system (send / accept / reject)
- Profile management APIs
- One-to-one real-time chat
- Persistent chat history
- Input validation middleware
- Centralized backend configuration

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.io
- JWT
- bcrypt
- dotenv

---

## 🧱 Project Structure

```text
src/
│
├── config/
│   └── database.js          # MongoDB connection setup
│
├── middlewares/
│   └── auth.js              # JWT authentication middleware
│
├── models/
│   ├── user.js              # User schema
│   ├── connectionRequest.js # Connection request schema
│   └── chat.js              # Chat & message schema
│
├── routes/
│   ├── auth.js              # Auth routes (login, signup)
│   ├── user.js              # User discovery & connections
│   ├── profile.js           # Profile view & update
│   ├── requests.js          # Connection request actions
│   └── chat.js              # Chat & messaging routes
│
├── utils/
│   ├── socket.js            # Socket.io server setup
│   └── validation.js        # Request validation helpers
│
├── app.js                   # Express app configuration
│
└── server.js                # Server bootstrap
```
* * * * *

🔄 Request Lifecycle
--------------------

1.  Client sends an HTTP request to an API endpoint
2.  Authentication middleware verifies JWT (if required)
3.  Validation utilities verify request data
4.  Route handlers process business logic
5.  Database operations performed using Mongoose
6.  Response is sent back to the client
7.  Real-time events are emitted using Socket.io (if applicable)

* * * * *

🔐 Authentication Flow
----------------------

-   User logs in or signs up
-   Passwords are hashed securely
-   JWT token is generated upon successful authentication
-   Token is sent to the client
-   Protected routes validate JWT on every request
-   Unauthorized access is blocked
* * * * *

⚡ Real-Time Chat Flow
---------------------

-   Socket.io server initialized in `utils/socket.js`
-   Client establishes a WebSocket connection
-   Users join private chat rooms
-   Messages are exchanged as socket events
-   Messages are persisted in MongoDB
-   Real-time updates are broadcast to connected users

* * * * *

🧪 Error Handling & Validation
------------------------------

-   Centralized authentication middleware
-   Request validation using utility helpers
-   Consistent API error responses
-   Graceful handling of invalid or unauthorized requests

* * * * *

⚙️ Environment Variables
------------------------

Create a `.env` file in the project root: 

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
```

* * * * *

▶️ Run Locally
--------------

```
npm install
npm run dev
```
The backend server will run at:
`http://localhost:5000`

* * * * *

🏗️ Production Setup
--------------------

-   Deployed on AWS EC2
-   Nginx used as a reverse proxy
-   PM2 used for process management
-   Environment variables configured securely
-   WebSocket and REST API served from the same backend

* * * * *

🔗 Frontend Repository
----------------------

This backend works with the DevSwipe frontend:
👉 <https://github.com/bhvyx/devSwipe-web>

* * * * *

📌 Future Improvements
----------------------

-   Redis caching
-   Rate limiting
-   Dockerization
-   CI/CD pipeline
-   Group chat support
-   Logging and monitoring

* * * * *

✨ Author
--------

**Bhavya Gupta**

-   GitHub: <https://github.com/bhvyx>
-   Twitter (X): <https://x.com/bhavyagupta_23>
-   LinkedIn: <https://www.linkedin.com/in/bhavya2302/>

* * * * *

📄 License
----------

This project is built for educational and learning purposes.
