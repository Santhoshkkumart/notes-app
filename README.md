# 📝 MERN Open Notes App

A lightweight, open-access Note Taking application built with the MERN stack (MongoDB, Express, React, Node.js). 

This project demonstrates a public CRUD interface where users can post anonymous notes. To prevent abuse and spam in the absence of user authentication, the backend implements **IP-based Rate Limiting**.

## 🚀 Key Features

* **Full CRUD Operations:** Create, Read, Update, and Delete notes.
* **No Authentication Required:** Frictionless experience; open the app and start typing.
* **Traffic Control:** Implemented `express-rate-limit` to restrict the number of requests from a single IP address, preventing spam and DoS attacks.
* **Responsive UI:** Built with React to work smoothly on desktop and mobile.
* **RESTful API:** Clean backend architecture.

## 🛠️ Tech Stack

* **Frontend:** React.js, CSS (or styled-components/Tailwind)
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose ODM)
* **Security:** `express-rate-limit`, `cors`, `helmet`

## 📂 Project Structure

```bash
MERN-THINKBOARD
├── backend
│   ├── src
│   │   ├── config
│   │   │   ├── db.js
│   │   │   └── upstash.js
│   │   ├── controllers
│   │   │   └── notesController.js
│   │   ├── middleware
│   │   │   └── rateLimiter.js
│   │   ├── models
│   │   │   └── Note.js
│   │   ├── routes
│   │   │   └── notesRoutes.js
│   │   └── server.js
│   ├── .env
│   ├── package-lock.json
│   └── package.json
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── lib
│   │   ├── pages
│   │   │   ├── CreatePage.jsx
│   │   │   ├── Homepage.jsx
│   │   │   └── NoteDetailPage.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
└── README.md
```

# ⚙️ Installation & Setup
Follow these steps to get your local development environment running.
1. Prerequisites
* Ensure you have the following installed:
* Node.js (v14 or higher)
* npm (comes with Node)
* MongoDB (Local instance or MongoDB Atlas URI)

2. Clone the Repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```
3. Backend Configuration

* Navigate to the server directory and install dependencies:

```bash
cd server
npm install
```
* Create a .env file in the /server folder:
```bash
Code snippet
PORT=5000
MONGO_URI=your_mongodb_connection_string
```
# Note: You can also define your Rate Limit settings here
```bash

REDIS_URL=redis://127.0.0.1:6379
RATE_LIMIT_WINDOW_MS=900000 
RATE_LIMIT_MAX=100
```

4. Frontend Configuration
* Open a new terminal window, navigate to the client directory, and install dependencies:

```bash
cd client
npm install
```

5. Running the Application
* You need to have both the Server and the Client running simultaneously.

* Start the Backend:

```bash

cd server
npm run dev   # or 'npm start' depending on your package.json
Start the Frontend:
```
```bash
cd client
npm start
```
* The application should now be running at http://localhost:3000 and communicating with the API at http://localhost:5000.

# 🛠️ Troubleshooting
Rate Limit Errors: Since this app uses IP-based rate limiting, if you are testing the API frequently during development, you might see a 429 Too Many Requests error. You can temporarily increase the limit in your server code or restart the server to clear the memory store.

CORS Issues: Ensure your backend has cors enabled to allow requests from the frontend port (usually 3000).
