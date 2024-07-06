# MERN User Authentication System
This project implements a user authentication system using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to register, log in securely, refresh their access tokens, and log out.

## Features
### User Registration:

- Validates user inputs (username, email, password).
- Checks for existing usernames and emails to prevent duplicates.
### User Login:

- Authenticates users based on email and password.
- Issues JWT (JSON Web Tokens) for access and refresh tokens upon successful login.
### Token Refresh:

- Refreshes access tokens using refresh tokens to maintain user sessions securely.
### User Logout:

- Clears refresh token from the database and removes session cookies.
### Error Handling:

- Provides detailed error messages for various scenarios (e.g., invalid credentials, duplicate users).

## Tech Stack
### Frontend:

- React.js
- React Router
- Axios for API requests
- TailwindCSS for styling
### Backend:

- Node.js
- Express.js
- MongoDB with Mongoose ODM
- JWT for token-based authentication

## Getting Started
### Prerequisites
1. Node.js and npm installed globally on your machine
2. MongoDB database (local or cloud-based) with connection URL
### Installation
1. Clone the repository:
```
git clone https://github.com/ayyush08/user-authentication-system.git
```
2. Go to working directory:
```
cd user-authentication-system
```
3. Install dependencies for the backend:
```
cd backend
```
```
npm install
```
4. Configure environment variables:
 - Create a ```.env``` file in backend directory.
 - Define environment variables - PORT, CORS_ORIGIN, ACCESS_TOKEN_SECRET, ACCESS_TOKEN_EXPIRY, REFRESH_TOKEN,REFRESH_TOKEN_EXPIRY, MONGO_URI
5. Install dependencies for the frontend:
```
cd ../frontend
```
```
npm install
```
6. Start the Development servers on both Frontend and Backend and Make sure your database server is also online:
- Frontend:
  ```
  npm run dev
  ```
- Backend:
  ```
  cd ../backend
  ```
  ```
  npm run dev
  ```
7. Open your web browser and navigate to `http://localhost:5173` to see the application running.
## Usage
- Register: Click on SignUp button to create a new user account.
- Login: Click on LogIn button to authenticate with your credentials.
- Logout: Click on the LogOut button to clear session cookies and log out securely.
