const axios = require('axios');

const getCountryList = async () => {
    try {
        const response = await axios.get('https://date.nager.at/api/v3/AvailableCountries');
        return response.data;
    } catch (error) {
        console.error('Error fetching country list:', error.message);
        throw new Error('Failed to fetch country list');
    }
};

const getBordersByCountry = async (country) => {
    try {
        const response = await axios.get(`https://date.nager.at/api/v3/CountryInfo/${country}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching borders for country ${country}:`, error.message);
        throw new Error('Failed to fetch country borders');
    }
};

const getPopulationByCountry = async (country) => {
    try {
        const response = await axios.get('https://countriesnow.space/api/v0.1/countries/population');
        const population = response.data;
        return population.data.find(x=> x.country === country)?.populationCounts || {}
    } catch (error) {
        console.error('Error fetching population data:', error.message);
        throw new Error('Failed to fetch population data');
    }
};

const getFlags = async (country) => {
    try {
        const response = await axios.get('https://countriesnow.space/api/v0.1/countries/flag/images');
        const flag = response.data;
        return flag.data.find(x=> x.name === country)?.flag ?? "";
    } catch (error) {
        console.error('Error fetching flags:', error.message);
        throw new Error('Failed to fetch flags');
    }
};

module.exports = {
    getCountryList,
    getBordersByCountry,
    getPopulationByCountry,
    getFlags
};
