# CodeAlpha_social_media_platform
-------------------------------------

# 📱 Mini Social Media App

*A lightweight social media platform built with Node.js (backend) and vanilla HTML/CSS/JavaScript (frontend).*

---

## 🚀 Overview

This project is a **mini social media application** where users can:

* Create an account
* Log in / log out
* Create posts
* View posts from all users
* Like posts
* View comments
* Like comments
* View followers
* Manage their profile

The backend is built on **Node.js** and **Express**, while the frontend uses **HTML, CSS, and JavaScript** with no external frameworks—keeping it simple and lightweight.

---

## 🛠️ Tech Stack

### **Backend**

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* Bcrypt (password hashing)
* Joi for validation

### **Frontend**

* HTML5
* CSS3
* Vanilla JavaScript (Fetch API)

---

## 📁 Project Structure

```
/backend
 ├── controllers
 ├── models
 ├── routes
 ├── middlewares
 ├── server.js
/frontend
 ├── pages
 ├── styles
 ├── scripts
 ├── index.html
```

---

## ⚙️ Features

### ✔ User Authentication

* Registration
* Login
* JWT-based session authentication
* Password hashing with Bcrypt

### ✔ Social Features

* Create text/image posts
* Like and unlike posts
* View posts from all users
* Delete your posts
* Basic profile page

### ✔ UI / Frontend

* Mobile-friendly layout
* Clean, minimal design
* Vanilla JavaScript interactions
* Responsive feed layout

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```sh
git clone https://github.com/EmmanuelAdah/CodeAlpha_social_media_platform.git
cd your-repo
```

### 2️⃣ Install backend dependencies

```sh
cd backend
npm install bcrypt cors cookie-parser nodemon helmet router nodemailer
```

### 3️⃣ Configure environment variables

Create a `.env` file inside the `backend/` folder:

```
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4️⃣ Start the server

```sh
npm start
```

The backend runs at:

```
http://localhost:5000
```

### 5️⃣ Open the frontend

Just open `frontend/index.html` in a browser.

---

## 🧪 API Endpoints (Summary)

### Auth

| Method | Endpoint             | Description       |
| ------ | -------------------- | ----------------- |
| POST   | `/api/auth/signup`   | Register new user |
| POST   | `/api/auth/signin`   | Login user        |

### Posts

| Method | Endpoint              | Description        |
| ------ | --------------------- | ------------------ |
| POST   | `/create/posts`       | Create a post      |
| GET    | `/posts`              | Get all posts      |
| PATCH  | `/api/posts/:id/like` | Like/unlike a post |
| DELETE | `/api/posts/:id`      | Delete a post      |

---

## 📸 Screenshots (Optional)

(Add images if you'd like later)

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork the project and submit a pull request.

---
