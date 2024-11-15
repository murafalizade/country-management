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

router.get('/countries/population', async (req, res) => {
    try {
        const populationData = await getPopulationByCountry();
        res.status(200).json(populationData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/countries/flags', async (req, res) => {
    try {
        const flags = await getFlags();
        res.status(200).json(flags);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
