Student Portal Improvement Project

A modern, full-stack student portal designed to improve inefficiencies in existing school systems. This solution streamlines academic management, enhances communication, and automates administration.

---

## � Live Demo

> � Coming soon – will be deployed to Heroku after testing.

---

## � Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Team Roles](#team-roles)
- [Setup & Installation](#setup--installation)
- [Authentication](#authentication)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [License](#license)

---

## ✅ Features

- � **Authentication** – Google OAuth 2.0 & JWT
- � **Personalized Dashboard** – View grades, schedule, and announcements
- � **Class Registration** – Automated and paperless
- � **Integrated Chat System** – Real-time communication
- � **AI-Powered Assistant** – Academic help with smart recommendations
- � **Performance Analytics** – Track GPA and progress
- � **Responsive Design** – Mobile-first for accessibility on any device

---

## � Tech Stack

**Frontend**  
- React.js  
- TailwindCSS  

**Backend**  
- Node.js  
- Express.js  
- MongoDB  
- Passport.js (OAuth)  
- JWT for token-based auth  

**Other Integrations**  
- Firebase or WebSockets (real-time chat)  
- TensorFlow.js (AI-powered assistant)  
- Heroku (deployment)

---

## �‍� Team Roles

| Name           | Role                                |
|----------------|-------------------------------------|
| Maxwel Okoth   | Lead Developer (Backend/API Dev)    |
| Jok John       | Database Architect & API Master     |
| James Ngugi    | UI/UX Designer & Frontend Developer |
| Philbert Kuria | Product Manager & Data Engineer     |

---

## ⚙ Setup & Installation

1. **Clone the repository**  
bash
git clone https://github.com/your-username/student-portal-backend.git
cd student-portal-backend


2. **Install dependencies**  
bash
npm install


3. **Create a `.env` file** in the root directory with the following:

env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
CLIENT_URL=http://localhost:3000


4. **Run the server**  
bash
node server.js


> Visit: `http://localhost:5000`

---

## � Authentication

- Google OAuth 2.0 using Passport.js
- Session-based and JWT options available
- Role-based routing (Student, Teacher, Admin)

---

## � API Endpoints

| Method | Endpoint           | Description                         |
|--------|--------------------|-------------------------------------|
| GET    | `/auth/google`     | Initiates Google OAuth              |
| GET    | `/auth/google/callback` | Google OAuth redirect handler  |
| POST   | `/api/register`    | Register new users                  |
| POST   | `/api/login`       | Login users with JWT                |
| GET    | `/api/user`        | Get current user info (auth needed) |
| POST   | `/api/logout`      | Logout user                         |

---

## � Deployment (Heroku)

1. **Login to Heroku CLI**
bash
heroku login


2. **Create a new Heroku app**
bash
heroku create student-portal-backend


3. **Push to Heroku**
bash
git push heroku main


4. **Set environment variables**
bash
heroku config:set MONGO_URI=...
heroku config:set GOOGLE_CLIENT_ID=...
heroku config:set JWT_SECRET=...


---

## � License

This project is licensed under the [MIT License](LICENSE).

---

## � Contribution

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## � Contact

Have questions or suggestions? Reach out to **Maxwel Okoth** or the team via GitHub.

