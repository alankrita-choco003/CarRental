# Car Rental Application

A full-stack car rental application built with React (Vite) for the frontend and Node.js (Express) for the backend.

## Project Structure

### Client (React + Vite)

#### Pages
- **Home** - Landing page with hero section, featured cars, testimonials, and newsletter
- **Cars** - Browse and filter available cars with search functionality
- **CarDetails** - View detailed information about a specific car and book it
- **MyBookings** - View user's booking history
- **Owner Dashboard**
  - Dashboard - View statistics (total cars, bookings, revenue)
  - AddCar - Form to add new cars to the platform
  - ManageCars - List, toggle availability, and delete cars
  - ManageBooking - View and manage booking requests (approve/cancel)

#### Components
- **Shared UI**: Navbar, Footer, Loader, Hero, Banner, Title, CarCard
- **Feature Components**: FeaturedSection, Testimonial, Newsletter
- **Authentication**: Login modal for user registration and login
- **Owner Components**: NavbarOwner, Sidebar, Title (owner version)

#### State Management
- Context API (`AppContext`) for global state management
- Manages user authentication, car listings, bookings, and search filters

### Server (Node.js + Express)

#### API Routes
- **User Routes** (`/api/user/`)
  - `POST /register` - Register new user
  - `POST /login` - Login user
  - `GET /data` - Get authenticated user data
  - `GET /cars` - Fetch all available cars

- **Owner Routes** (`/api/owner/`)
  - `POST /change-role` - Change user role to owner
  - `POST /add-car` - Add a new car
  - `GET /cars` - Get owner's cars
  - `POST /toggle-car` - Toggle car availability
  - `POST /delete-car` - Delete a car
  - `GET /dashboard` - Get dashboard statistics
  - `POST /update-image` - Update user profile image

- **Booking Routes** (`/api/bookings/`)
  - `POST /check-availability` - Check car availability for specific dates
  - `POST /create` - Create a new booking
  - `GET /user` - Get user's bookings
  - `GET /owner` - Get owner's bookings
  - `POST /change-status` - Update booking status

#### Database Models
- **User** - name, email, password, role (user/owner), image
- **Car** - brand, model, image, year, category, seating capacity, fuel type, transmission, price per day, location, description, availability
- **Booking** - car, user, owner, pickup date, return date, status (pending/confirmed/cancelled), price

#### Middleware
- **Auth Middleware** - JWT token verification for protected routes
- **Multer** - Image upload handling

#### Configuration
- **Database** - MongoDB connection using Mongoose
- **ImageKit** - Image storage and management

## Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB database
- ImageKit account for image storage

### Environment Variables

#### Client (.env)
```
VITE_CURRENCY=$
VITE_BASE_URL=http://localhost:3000
```

#### Server (.env)
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

### Installation

1. Install client dependencies:
```bash
cd client
npm install
```

2. Install server dependencies:
```bash
cd server
npm install
```

### Running the Application

1. Start the server:
```bash
cd server
npm run server
```

2. Start the client:
```bash
cd client
npm run dev
```

## Features

- User authentication with JWT
- Browse and search for cars by location and dates
- View detailed car information
- Book cars for specific dates
- View booking history
- Owner dashboard for managing cars and bookings
- Image upload for cars and user profiles
- Responsive design with Tailwind CSS
- Animations with Motion library

## Technologies

### Frontend
- React 19
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- React Hot Toast
- Motion (Animations)

### Backend
- Node.js
- Express
- MongoDB with Mongoose
- JWT for authentication
- Bcrypt for password hashing
- Multer for file uploads
- ImageKit for image storage
- CORS

## License

This project is private and not licensed for public use.
