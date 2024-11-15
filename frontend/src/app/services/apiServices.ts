import axios from 'axios';

const API_BASE_URL = process.env.BASE_URL ?? 'http://localhost:3001/api';

export const fetchCountries = async () => {
    const response = await axios.get(`${API_BASE_URL}/countries`);
    return response.data;
};

export const fetchCountryInfo = async (countryCode:string) => {
    const response = await axios.get(`${API_BASE_URL}/countries/${countryCode}/borders`);
    return response.data;
};

export const fetchPopulationData = async () => {
    const response = await axios.get(`${API_BASE_URL}/countries/population`);
    return response.data;
};

export const fetchFlags = async () => {
    const response = await axios.get(`${API_BASE_URL}/countries/flags`);
    return response.data;
};
