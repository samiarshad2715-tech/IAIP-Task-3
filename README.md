# IAIP Task-3 - Todo List Application

A full-stack Todo List application developed as part of the Internalpha Internship Program (IAIP Task-3).

## 🚀 Features

- Add new tasks
- View all tasks
- Update existing tasks
- Delete tasks
- Mark tasks as completed
- Responsive user interface
- RESTful API integration
- MongoDB database connectivity

---

## 📂 Project Structure

```
IAIP-Task-3/
│
├── frontend/          # Frontend application
│
├── src/               # Backend source files
│
├── video/             # Project demo video
│
├── .env               # Environment variables
│
├── server.js          # Main backend server file
│
├── package.json       # Backend dependencies
│
└── README.md
```

---

## 🛠️ Tech Stack

### Frontend
- HTML
- CSS
- JavaScript
- React.js

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd IAIP-Task-3
```

### 2. Install Backend Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

### 4. Start Backend Server

```bash
npm start
```

or

```bash
nodemon server.js
```

### 5. Run Frontend

Navigate to the frontend folder:

```bash
cd frontend
npm install
npm run dev
```

---

## 📌 API Endpoints

| Method | Endpoint | Description |
|----------|----------|-------------|
| GET | /todos | Get all todos |
| POST | /todos | Create a new todo |
| PUT | /todos/:id | Update a todo |
| DELETE | /todos/:id | Delete a todo |

---

## 🎥 Project Demonstration

The project demonstration video can be found inside the `video` folder.

---

## 👨‍💻 Author

**Sami Arshad**

Internalpha Internship Program (IAIP)

---

## 📄 License

This project is developed for educational and internship purposes.
