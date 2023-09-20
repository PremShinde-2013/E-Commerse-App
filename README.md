
# E-Commerce Website with React 18, Stripe, and Strapi

This is an e-commerce website built using React 18, Stripe for payments, and Strapi as the backend CMS.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and npm: [Download here](https://nodejs.org/)
- Git: [Download here](https://git-scm.com/)
- Stripe account: [Sign up here](https://stripe.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/ecommerce-react-stripe-strapi.git
   ```

2. Change to the project directory:

   ```bash
   cd ecommerce-react-stripe-strapi
   ```

3. Install frontend dependencies:

   ```bash
   cd client
   npm install
   ```

4. Install backend dependencies:

   ```bash
   cd ../server
   npm install
   ```

### Configuration

#### Frontend (React 18)

1. Create a `.env` file in the `client` directory:

   ```dotenv
   REACT_APP_API_URL=http://localhost:1337 # Strapi backend URL
   ```

2. Update the Stripe configuration in your React components where needed.

#### Backend (Strapi)

1. Configure your Strapi backend following the official Strapi documentation.

2. Create API endpoints for products, orders, and user authentication.

3. Set up environment variables in the `server/.env` file:

   ```dotenv
   DATABASE_URL= # Your database connection URL
   SECRET_KEY= # Your secret key for JWT authentication
   STRIPE_SECRET_KEY= # Your Stripe secret key
   ```

### Running the Project

1. Start the Strapi server:

   ```bash
   cd server
   npm run develop
   ```

2. Start the React frontend:

   ```bash
   cd client
   npm start
   ```

3. Access the website in your browser at `http://localhost:3000`.

## Features

- Browse and search for products.
- Add products to the cart.
- Checkout using Stripe for payment.
- Manage orders and user profiles.

## Acknowledgments

- React
- Stripe
- Strapi
- Your contributors
