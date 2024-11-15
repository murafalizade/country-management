const express = require('express');
const {
    getCountryList,
    getBordersByCountry,
    getPopulationByCountry,
    getFlags
} = require('../controllers/countryController');

const router = express.Router();

router.get('/countries', async (req, res) => {
    try {
        const countries = await getCountryList();
        res.status(200).json(countries);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/countries/:country/borders', async (req, res) => {
    try {
        const { country } = req.params;
        const borders = await getBordersByCountry(country);
        res.status(200).json(borders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/countries/:country/population', async (req, res) => {
    try {
        const { country } = req.params;
        const populationData = await getPopulationByCountry(country);
        res.status(200).json(populationData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/countries/:country/flags', async (req, res) => {
    try {
        const { country } = req.params;
        const flags = await getFlags(country);
        res.status(200).json(flags);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
