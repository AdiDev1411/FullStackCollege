# MERN Stack Authentication Portal

A complete user authentication system built with MongoDB, Express.js, React, and Node.js.

## Features

- 🔐 Secure user registration and login
- 🛡️ JWT-based authentication
- 🔒 Password encryption with bcrypt
- 🚀 React frontend with responsive design
- 📱 Mobile-friendly interface
- 🛠️ Express.js REST API
- 🗄️ MongoDB database integration
- 🔒 Security best practices implementation

## Project Structure

```
mern-auth-portal/
├── client/          # React frontend
├── server/          # Express.js backend
├── package.json     # Root package.json
└── README.md
```

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd mern-auth-portal
```

2. Install dependencies for all packages:
```bash
npm run install-all
```

3. Set up environment variables:
```bash
cd server
cp .env.example .env
# Edit .env file with your MongoDB URI and JWT secret
```

4. Start the development servers:
```bash
npm run dev
```

This will start both the backend server (http://localhost:5000) and the React frontend (http://localhost:3000).

## API Endpoints

### Authentication Routes

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (protected)
- `POST /api/auth/logout` - Logout user

## Security Features

- Password hashing with bcrypt
- JWT token-based authentication
- CORS protection
- Rate limiting
- Input sanitization
- XSS protection
- MongoDB injection prevention
- Helmet security headers

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- Various security middleware

### Frontend
- React.js
- React Router for navigation
- Axios for API calls
- Context API for state management
- CSS3 for styling

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.