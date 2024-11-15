const express = require('express');
const cors = require('cors');

const countryRoutes = require('./routers/countryRouter');
require('dotenv').config();
app = new express();

const port = process.env.PORT || 3001;

const corsOptions = {
    origin: 'http://localhost:3000', // Frontend React app
    methods: ['GET', 'POST'], // Allow specific methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
};

// Use the CORS middleware with your options
app.use(cors(corsOptions));
app.use(express.json());

app.use('/api', countryRoutes);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})