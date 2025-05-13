Fullstack Pixabay Gallery App
This is a fullstack React + Node.js application that displays images from the Pixabay API with pagination, filtering by category, and a details modal per image. The app demonstrates clean, scalable architecture and programming practices.

FEATURES: 
Frontend (React.js + Redux + TypeScript)

Built with React + TypeScript

Redux Toolkit for global state management

3x3 grid layout with image previews

Pagination (Prev / Next buttons)

Category Selector via <select> dropdown

Modal view on image click with stats: views, downloads, collections

CSS Spinner during data loading

Graceful Empty State message

Backend (Node.js + Express.js)

RESTful API in Node.js + Express

Connects to Pixabay API with .env API key

Pagination support (page query param)

Sorting support by ID (default)

Clear routing structure and error handling


Folder Structure : 

root/
├── client/                 # React frontend
│   ├── src/
│   │   ├── App.tsx
│   │   ├── store/
│   │   └── reducer/photoSlice.ts
│   └── App.css
├── backend/                # Node.js server
│   ├── routes/photoRoutes.js
│   └── server.js
├── .env
└── README.md

Setup Instructions:

Clone the Repository 

git clone https://github.com/your-username/pixabay-gallery-app.git
cd pixabay-gallery-app

Setup the backend: 

cd backend
npm install
# Create .env file
echo "PIXABAY_API_KEY=your_api_key_here" > .env
npm run dev

Setup the Frontend:
GET http://localhost:4000/api/photos?category=sports&page=2

TECHNOLOGIES USED : 
React

Redux Toolkit

TypeScript

Node.js

Express.js

Axios

CSS

Author: Mirel - Full Stack Developer | React | Node.js | Building Smart Web Systems
