# 🧩 Zentaskly – Micro Task & Earning Platform

Zentaskly is a full-stack MERN-based micro-tasking platform where users can earn money by completing small online tasks and buyers can get their work done efficiently. The platform supports three roles: Worker, Buyer, and Admin with dedicated dashboards and features.

---

## 🔗 Live Website

🌐 

---

## 🔐 Admin Credentials

* **Email:** [admin@gmail.com](mailto:admin@gmail.com)
* **Password:** Admin!123

---

## 🚀 Features

* 🔐 Secure authentication system using Firebase (Email/Password & Google Login)
* 👤 Role-based dashboard (Worker, Buyer, Admin)
* 💰 Dynamic coin system (earn, spend, withdraw)
* 🧾 Buyer can create tasks with required workers and payment details
* 📊 Real-time statistics dashboard for all roles
* 📥 Worker can submit tasks and track submission status
* ✅ Buyer can approve/reject submissions with instant coin updates
* 💳 Stripe payment integration for purchasing coins
* 🏧 Withdrawal system with business logic (20 coins = $1)
* 🔔 Real-time notification system (task submission, approval, withdrawal)
* 📄 Pagination implemented for large datasets (submissions, tasks, users)
* 🖼️ Image upload system using ImgBB
* 📱 Fully responsive design (Mobile, Tablet, Desktop)
* 🔒 Protected private routes (no redirect on reload)
* ⚙️ Environment variables used for security (Firebase & MongoDB)
* 🛠️ Admin panel to manage users, tasks, and withdrawals

---

## 🖼️ Screenshots

### 🏠 Home Page

![Home Page](./screenshots/home.png)


---

## 🧠 Tech Stack

### Frontend

* React.js
* React Router
* Tailwind CSS / DaisyUI
* Axios
* Firebase Authentication

### Backend

* Node.js
* Express.js
* MongoDB
* Firebase Admin SDK
* Stripe Payment Gateway

---

## 🗂️ Project Structure

### Client Side

* React Components
* Hooks (useAuth, useAxiosSecure)
* Protected Routes
* Dashboard Layout

### Server Side

* REST API
* JWT Verification using Firebase Admin
* Role-based Middleware (Admin, Buyer, Worker)
* MongoDB Collections:

  * users
  * tasks
  * submissions
  * payments
  * withdrawals
  * notifications

---

## 🔑 Core Functionalities

### 👷 Worker

* View available tasks
* Submit task proof
* Track submission status
* Withdraw earnings
* Receive notifications

### 🛒 Buyer

* Create tasks
* Manage tasks (update/delete)
* Review submissions
* Approve/reject work
* Purchase coins
* View payment history

### 🛠️ Admin

* Manage users (role update/remove)
* Manage tasks
* Approve withdrawal requests
* Monitor platform stats

---

## 🔔 Notification System

* Worker gets notified when:

  * Submission approved/rejected
* Buyer gets notified when:

  * New submission received
* Worker gets notified when:

  * Withdrawal approved

---

## 💡 Business Logic

* Buyer: 10 coins = $1
* Worker: 20 coins = $1 withdrawal
* Platform profit is maintained through this difference

---

## 🔐 Security

* Firebase JWT token verification
* Role-based API protection
* Environment variables used for sensitive data
* Protected private routes

---

## 📦 Installation & Setup

### Clone Repository

```bash
git clone https://github.com/tasniazannat65/micro-task-earning-platform-client.git
git clone https://github.com/tasniazannat65/micro-task-earning-platform-server.git
```

### Client Setup

```bash
cd client
npm install
npm run dev
```

### Server Setup

```bash
cd server
npm install
nodemon index.js
```

---


---

## 👨‍💻 Developer

**Name:** Tasnia Zannat

**GitHub:** https://github.com/tasniazannat65

**LinkedIn:** https://www.linkedin.com/in/tasnia-zannat/

---

## ⭐ Final Words

Zentaskly demonstrates a complete real-world MERN stack application with authentication, payments, role-based systems, and scalable architecture. This project reflects practical problem-solving skills and production-level implementation.

---
