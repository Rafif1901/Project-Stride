# 🏃‍♂️ Stride API (Backend)

Backend service for the Stride application, providing RESTful APIs for running event management (tracks), runner score recording (leaderboard), apparel marketplace, and transaction system. Built using MVC (Model-View-Controller) architecture with RBAC (Role-Based Access Control) implementation and Memory Buffer optimization using Redis.

## 🛠️ Tech Stack
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** PostgreSQL (via NeonDB)
* **Cache/Buffer:** Redis
* **Security:** JSON Web Token (JWT) & Bcrypt

---

## ⚙️ Prerequisites
1. [Node.js](https://nodejs.org/) 
2. [Redis](https://redis.io/) 
3. Acc and URL Database [NeonDB](https://neon.tech/)

---

## 🚀 installation & running the server

### 1. Install Dependencies
Open your terminal, navigate to the project directory, and run the following command. This will download and install all required Node.js modules listed in the `package.json`, including the Express.js framework, PostgreSQL client (`pg`), Redis, Bcrypt, and Nodemon:
```bash
npm install
```

### 2. Database Migration & Seeding
To automatically clean up existing tables, create a fresh database blueprint, and populate the database with initial dummy data (including 4 Admin accounts), run the seeding script
npm install
```
node run-seed.js
```

### 3. Start the Development Server
Ensure that your local Redis service is up and running in the background (using the redis-server command). Once Redis is active, start the Express.js backend server with auto-restart enabled
```bash
npm run dev
```
If the setup is successful, you will see the following confirmation logs in your terminal:
Database connected successfully
Server running on port 3000
Environment: development
