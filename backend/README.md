# Country Management API (Backend)

This is the backend part of the Country Management App. It provides API endpoints for fetching information about countries, including details like borders, flags, and population. The API serves data for the frontend application, enabling users to view detailed country information dynamically.

## Tech Stack

- **Backend**: Node.js, Express.js
- **External APIs**: Fetches data from third-party APIs for country-related information.
- **CORS**: Enabled for cross-origin resource sharing (CORS) with the frontend.

## Getting Started

To run the backend locally, follow these steps:

### 1. Install Dependencies

Run the following command to install all necessary dependencies:

```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env` file in the root of the project to configure any environment variables (e.g., API keys, database URLs, etc.). For example:

```
PORT=3001
CORS_ORIGIN=http://localhost:3000
```

- `PORT`: Port on which the API will run.
- `CORS_ORIGIN`: The allowed origin for CORS, typically the frontend's URL (e.g., `http://localhost:3000`).

### 3. Run the Application

To start the backend server in development mode, use:

```bash
npm start
```

This will start the server on the port specified in the `.env` file (default is 5000). The API will be accessible at `http://localhost:5000`.

### 4. Testing the API

You can use tools like [Postman](https://www.postman.com/) or [curl](https://curl.se/) to test the API endpoints. For example:

```bash
curl http://localhost:5000/api/countries
```

### 5. Build the Application

If you want to build the application for production, use:

```bash
npm run build
```

This will prepare the app for deployment.


### 8. API Endpoints

#### **GET /api/countries**

Fetches a list of all available countries.

**Response**:

```json
[
  {
    "countryCode": "US",
    "name": "United States",
    "flag": "https://example.com/flag/us.png",
    "borders": ["CA", "MX"]
  },
  ...
]
```

#### **GET /api/country/:code**

Fetches detailed information about a specific country by its code.

**Example Request**:

```
GET /api/country/US
```

**Response**:

```json
{
  "countryCode": "US",
  "name": "United States",
  "flag": "https://example.com/flag/us.png",
  "population": 331002651,
  "borders": ["CA", "MX"],
  "populationHistory": [
    { "year": 2000, "population": 300000000 },
    { "year": 2005, "population": 310000000 },
    ...
  ]
}
```

#### **GET /api/population/:code**

Fetches the population data for a specific country by its code.

**Example Request**:

```
GET /api/population/US
```

**Response**:

```json
{
  "countryCode": "US",
  "populationHistory": [
    { "year": 2000, "population": 300000000 },
    { "year": 2005, "population": 310000000 },
    ...
  ]
}
```

## CORS Configuration

The API is configured to allow requests from the frontend running on `http://localhost:3000` (or a specified origin in `.env`). You can modify the allowed origin in the `.env` file.

## Error Handling

The API includes basic error handling for common issues, such as invalid endpoints or missing parameters. You will receive a standard error response like this:

```json
{
  "error": "Resource not found"
}
```