# 📝 MERN Notes App

A simple **full-stack Notes application** built using the **MERN stack** that allows users to **create, read, update, and delete notes**.  
This project focuses on **clean CRUD operations**, RESTful API design, and smooth frontend–backend integration.

---

## 🚀 Features

- 🗒️ Create new notes
- ✏️ Edit existing notes
- ❌ Delete notes
- 📄 View all notes
- 🌐 RESTful API
- ⚡ Fast frontend using Vite + React

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Axios / Fetch API
- CSS / Tailwind (if used)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 📂 Project Structure

mern-notes-app/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── server.js
│ └── .env
│
├── frontend/
│ ├── src/
│ ├── index.html
│ └── vite.config.js
│
└── README.md

yaml
Copy code

---

## ⚙️ Environment Variables

Create a `.env` file inside the `backend/` folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string

yaml
Copy code

---

## ▶️ Installation & Setup

### 1️⃣ Clone the repository
git clone https://github.com/USERNAME/mern-notes-app.git
cd mern-notes-app

yaml
Copy code

---

### 2️⃣ Backend setup

```bash
cd backend
npm install
npm run dev
```

yaml
Copy code

Backend runs at:
http://localhost:5000

yaml
Copy code

---

### 3️⃣ Frontend setup
cd frontend
npm install
npm run dev

yaml
Copy code

Frontend runs at:
