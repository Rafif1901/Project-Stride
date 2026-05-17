# 🏃‍♂️ Stride 
**Stride** is a  platform specifically designed to provide digital solutions for Jakarta's *"pelari kalcer"* community. This application is built to act as a smart *event organizer* in managing various running event coordinations in Jakarta (such as 5K Runs, Half Marathons, Full Marathons, and others).

This system divides user access into two authority levels to ensure conducive event coordination management:

* **Admin (Event Organizer):** Admins have full rights to coordinate events, create and manage running routes (*tracks*), manage inventory in the *kalcer apparel marketplace* (such as jerseys, socks, etc.), and monitor the overall runners' *leaderboard*.

* **Regular User (Runner):** Regular users can register an account, explore and perform purchase transactions in the *apparel marketplace*, and view their personal running performance history in *real-time*, which includes *pace*, *time*, and *sub-time* categories.

The entire data architecture is powered by PostgreSQL (NeonDB) and optimized using Redis as a *memory buffer cache* to speed up frequently accessed queries (such as login authentication and retrieving runner leaderboard scores), ensuring the application's performance remains responsive under high loads.

# 💻 Tech Stack:

![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

# :bar_chart: Diagram

UML
<img width="1354" height="534" alt="image" src="https://github.com/user-attachments/assets/d199468e-8429-4c83-bee2-a1f4c108be03" />

ERD
<img width="1214" height="811" alt="image" src="https://github.com/user-attachments/assets/88db0d32-12ff-4000-9a3f-2d22729ff4b5" />

Flowchart
<img width="1456" height="1266" alt="image" src="https://github.com/user-attachments/assets/94c11588-f69a-4670-b44b-cc3526052eeb" />


# :computer: Installation Guide

Clone this repository

```bash
git clone https://github.com/Rafif1901/Project-Stride.git
```
## Frontend
.....

## Backend

- Ensure You’re on the right folder
<img width="205" height="42" alt="image" src="https://github.com/user-attachments/assets/7cc27ed3-e0f0-4fc1-b3bd-26d52c8b1aa7" />

- Run npm install to install all dependencies
  ```
   npm install
  ```
- Create an .env file in your project root folder and add your variables.
<img width="188" height="199" alt="image" src="https://github.com/user-attachments/assets/d3edb813-711c-4638-8ac0-c9401a81a047" />

- Insert Database Variables

- To test the installation result run
  ```
   npm run dev
  ```
