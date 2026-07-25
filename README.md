# 🚀 LeadDesk Mini

A modern Full Stack Lead Management application built as part of the **Digital Heroes Full Stack Development Internship Assessment**.

LeadDesk Mini allows businesses to collect customer enquiries through a landing page and manage them securely through an authenticated admin dashboard.

---

## 🌐 Live Demo

**Frontend:** https://lead-desk-mini-one-ivory.vercel.app

**Backend API:** https://leaddeskmini-api.onrender.com

---

# ✨ Features

### Landing Page
- Modern responsive UI
- Animated Hero Section
- Features Section
- Contact / Lead Submission Form
- Professional Footer

### Authentication
- JWT Authentication
- Secure Login
- Protected Dashboard
- Logout Functionality

### Admin Dashboard
- View all submitted leads
- Search leads by name or email
- Update lead status
- Dashboard statistics
- Responsive design

---

# 🛠 Tech Stack

## Frontend

- React
- Vite
- Tailwind CSS
- Framer Motion
- Axios
- React Router
- React Hot Toast
- Lucide React

## Backend

- Node.js
- Express.js
- Prisma ORM
- SQLite
- JWT
- bcryptjs

---

# 📂 Project Structure

```
LeadDeskMini
│
├── client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── context
│   │   ├── services
│   │   └── layouts
│   │
│   └── public
│
└── server
    ├── controllers
    ├── routes
    ├── middleware
    ├── config
    ├── prisma
    └── scripts
```

---

# 🔐 Environment Variables

## Backend (.env)

```env
DATABASE_URL=file:./prisma/dev.db
JWT_SECRET=YourSecretKey
```

## Frontend (.env)

```env
VITE_API_URL=https://leaddeskmini-api.onrender.com/api
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/irfan2005-01/LeadDeskMini.git
```

---

## Backend

```bash
cd server

npm install

npx prisma generate

npx prisma migrate dev

node scripts/seedAdmin.js

npm run dev
```

---

## Frontend

```bash
cd client

npm install

npm run dev
```

---

# 👨‍💻 Demo Credentials

```
Email:
admin@leaddesk.com

Password:
Admin@123
```

---

# 📡 API Endpoints

## Authentication

```
POST /api/auth/login
```

---

## Leads

```
POST /api/leads
```

Create Lead

---

```
GET /api/leads
```

Fetch All Leads

---

```
PATCH /api/leads/:id
```

Update Lead Status

---

# 🚀 Deployment

Frontend deployed on **Vercel**

Backend deployed on **Render**

---

# 🤖 AI Usage

AI tools were used to assist with project planning, UI refinement, code review, and debugging. All implementation decisions, project integration, testing, and final customization were completed by me.

---

# 🔮 Future Improvements

- Pagination
- Email Notifications
- Analytics Dashboard
- Multiple Admin Accounts
- Role-Based Access Control
- Export Leads to CSV
- Dark / Light Theme
- Lead Filters

---

# 👤 Author

**Syed Irfan Ahmed**

Computer Science Engineering Student

Built for the **Digital Heroes Full Stack Development Internship Assessment**.

---

# 📄 License

This project is created for educational and internship assessment purposes.
