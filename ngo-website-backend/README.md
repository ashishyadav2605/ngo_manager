# NGO Website Backend

A Node.js Express backend for the NGO Management website.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file with your environment variables (see `.env` example).

3. Start the server:
   ```bash
   npm start
   ```

   For development with auto-restart:
   ```bash
   npm run dev
   ```

## API Endpoints

- `GET /` - Welcome message
- `GET /api/campaigns` - Get all campaigns
- `GET /api/donations` - Get all donations
- `GET /api/volunteers` - Get all volunteers

## Technologies Used

- Node.js
- Express.js
- CORS
- dotenv