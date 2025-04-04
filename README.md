Student Portal Improvement Project

A modern, full-stack student portal designed to improve inefficiencies in existing school systems. This solution streamlines academic management, enhances communication, and automates administration.

---

## Ì∫Ä Live Demo

> Ìºê Coming soon ‚Äì will be deployed to Heroku after testing.

---

## Ì≥å Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Team Roles](#team-roles)
- [Setup & Installation](#setup--installation)
- [Authentication](#authentication)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [License](#license)

---

## ‚úÖ Features

- Ì¥í **Authentication** ‚Äì Google OAuth 2.0 & JWT
- Ì≥ä **Personalized Dashboard** ‚Äì View grades, schedule, and announcements
- Ì≥ù **Class Registration** ‚Äì Automated and paperless
- Ì≤¨ **Integrated Chat System** ‚Äì Real-time communication
- Ì¥ñ **AI-Powered Assistant** ‚Äì Academic help with smart recommendations
- Ì≥à **Performance Analytics** ‚Äì Track GPA and progress
- Ì≥± **Responsive Design** ‚Äì Mobile-first for accessibility on any device

---

## Ìª† Tech Stack

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

## Ì±®‚ÄçÌ≤ª Team Roles

| Name           | Role                                |
|----------------|-------------------------------------|
| Maxwel Okoth   | Lead Developer (Backend/API Dev)    |
| Jok John       | Database Architect & API Master     |
| James Ngugi    | UI/UX Designer & Frontend Developer |
| Philbert Kuria | Product Manager & Data Engineer     |

---

## ‚öô Setup & Installation

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

## Ì¥ê Authentication

- Google OAuth 2.0 using Passport.js
- Session-based and JWT options available
- Role-based routing (Student, Teacher, Admin)

---

## Ì≥° API Endpoints

| Method | Endpoint           | Description                         |
|--------|--------------------|-------------------------------------|
| GET    | `/auth/google`     | Initiates Google OAuth              |
| GET    | `/auth/google/callback` | Google OAuth redirect handler  |
| POST   | `/api/register`    | Register new users                  |
| POST   | `/api/login`       | Login users with JWT                |
| GET    | `/api/user`        | Get current user info (auth needed) |
| POST   | `/api/logout`      | Logout user                         |

---

## Ì∫Ä Deployment (Heroku)

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

## Ì≥Ñ License

This project is licensed under the [MIT License](LICENSE).

---

## Ì≤° Contribution

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## Ì≥û Contact

Have questions or suggestions? Reach out to **Maxwel Okoth** or the team via GitHub.

