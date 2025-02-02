# Quiz App with Gamification

## 📌 Overview

This is a **web-based quiz application** built using **React.js (Vite) for the frontend** and **Node.js (Express) for the backend**. The application fetches quiz data from an external API and presents it through an intuitive and engaging UI. It also includes gamification features like a scoring system.

## 🎯 Features

### ✅ Core Features

- Fetches quiz data from an API
- Start and navigate through the quiz
- Multiple-choice questions
- Score calculation with negative marking
- Summary of results upon completion

### 🎮 Gamification Features

- Streak bonus for consecutive correct answers (TODO)
- User-friendly UI with progress visualization
- Answer validation with color coding

## 🛠️ Tech Stack

- **Frontend:** React.js (Vite), React Router, Context API, Tailwind CSS
- **Backend:** Node.js (Express)
- **API Integration:** Fetch quiz data from `https://api.jsonserve.com/Uw5CrX`

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/masked-redhat/testline-quiz-application.git
cd testline-quiz-application
```

### 2️⃣ Install Dependencies

```sh
# Install backend dependencies
npm install

# Move to frontend folder and install dependencies
cd react-app
npm install
```

### 3️⃣ Run the Application

#### Backend:

```sh
npm start
```

This will start the **Express server** on `http://localhost:3000`

#### Frontend:

```sh
npm run dev
```

This will start the **React app** on `http://localhost:5173`

#### Docker:

```sh
docker compose up
```
This will start the **Application** on `http://localhost:3000`

#### Hosting:

This application has been hosted on **Render**
View it [here](https://testline-quiz-application.onrender.com/)

## 📂 Project Structure

```
/quiz-app
 ├── /app.js (Node.js backend)
 ├── /react-app (React frontend)
 │   ├── /src
 │   │   ├── /components
 │   │   │   ├── Landing.jsx
 │   │   │   ├── Quiz.jsx
 │   │   │   ├── Result.jsx
 │   │   │   ├── Header.jsx
 │   │   │   ├── Footer.jsx
 │   │   ├── App.jsx
 │   │   ├── main.jsx
 │   │   ├── index.css
```

## 📸 Screenshots & Video Walkthrough

Include screenshots of the quiz UI and a **video walkthrough** of the application.

## 🔗 Submission Guidelines

- **GitHub Repo**: Upload code with a README.
- **Screenshots & Video Walkthrough**: Show the application in action.
- **Submit the GitHub Link**.

## 🏆 Evaluation Criteria

- **Data Integration:** Fetching and handling quiz data correctly.
- **UI & UX:** Clean and intuitive design.
- **Gamification Elements:** Additional points for streaks, badges, etc.
- **Code Quality:** Readable, maintainable, and efficient.

---

⚡ **Built by masked-redhat (Zed)** 🚀
