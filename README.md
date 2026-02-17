# ✨ ThinkBoard - A MERN Stack Note-Taking App

ThinkBoard is a sleek and modern note-taking application built with the MERN stack (MongoDB, Express.js, React, Node.js) and designed with a clean, responsive interface using Tailwind CSS and DaisyUI.

It provides a seamless user experience for creating, managing, and deleting notes, with API rate limiting for robust backend protection.

---

## 🚀 Key Features

- **Full CRUD Functionality**: Create, Read, Update, and Delete notes with ease.
- **Modern UI/UX**: A beautiful, responsive interface built with Tailwind CSS and DaisyUI.
- **Fast Frontend**: Powered by React and Vite for a blazing-fast development and user experience.
- **Robust Backend**: Built with Node.js and Express, connected to a MongoDB database.
- **API Rate Limiting**: Implemented with Upstash Redis to prevent abuse and ensure service stability.
- **Developer Friendly**: Separate frontend and backend directories for a clear and organized codebase.

---

## 🛠️ Tech Stack

| Category      | Technology                                                                                             |
| :------------ | :----------------------------------------------------------------------------------------------------- |
| **Frontend**  | React, Vite, React Router, Tailwind CSS, DaisyUI, Axios, Lucide Icons                                  |
| **Backend**   | Node.js, Express.js, Mongoose                                                                          |
| **Database**  | MongoDB                                                                                                |
| **API**       | REST                                                                                                   |
| **Services**  | Upstash Redis (for Rate Limiting)                                                                      |

---

## 🏁 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/try/download/community) instance (local or Atlas)
- An [Upstash](https://upstash.com/) account for Redis (it has a free tier).

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone <YOUR_REPOSITORY_URL>
    cd mern-thinkboard
    ```

2.  **Install backend dependencies:**
    ```sh
    cd backend
    npm install
    ```

3.  **Set up backend environment variables:**
    Create a `.env` file in the `backend` directory and add the following variables:
    ```env
    MONGO_URI="your_mongodb_connection_string"
    UPSTASH_REDIS_REST_URL="your_upstash_redis_url"
    UPSTASH_REDIS_REST_TOKEN="your_upstash_redis_token"
    ```

4.  **Install frontend dependencies:**
    ```sh
    cd ../frontend
    npm install
    ```

### Running the Application

1.  **Start the backend server:**
    From the `backend` directory, run:
    ```sh
    npm run dev
    ```
    The backend server will start on `http://localhost:3000`.

2.  **Start the frontend development server:**
    From the `frontend` directory, in a separate terminal, run:
    ```sh
    npm run dev
    ```
    The frontend application will be available at `http://localhost:5173`.

---

## 📦 Available Scripts

### Backend (`/backend`)

- `npm run dev`: Starts the backend server with `nodemon` for automatic reloading.
- `npm start`: Starts the backend server in production mode.

### Frontend (`/frontend`)

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Builds the application for production.
- `npm run lint`: Lints the source code using ESLint.
- `npm run preview`: Previews the production build locally.

---

## 📝 API Endpoints

All API endpoints are prefixed with `/api`.

| Method   | Endpoint          | Description                    |
| :------- | :---------------- | :----------------------------- |
| `GET`    | `/notes`          | Get all notes.                 |
| `GET`    | `/notes/:id`      | Get a single note by its ID.   |
| `POST`   | `/notes`          | Create a new note.             |
| `PUT`    | `/notes/:id`      | Update an existing note by ID. |
| `DELETE` | `/notes/:id`      | Delete a note by ID.           |

---

## 📂 Project Structure

The project is organized into two main directories: `frontend` and `backend`.

```
mern-thinkboard/
├── backend/
│   ├── src/
│   │   ├── config/       # Database & Upstash config
│   │   ├── controllers/  # API route logic
│   │   ├── middleware/   # Rate limiter
│   │   ├── models/       # Mongoose schemas
│   │   └── routes/       # Express routes
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/   # Reusable React components
    │   ├── lib/          # Axios instance
    │   ├── pages/        # Page components
    │   └── App.jsx       # Main app component with routing
    └── package.json
```
