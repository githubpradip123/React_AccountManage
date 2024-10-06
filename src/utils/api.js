import axios from 'axios';

export const login = async (credentials) => {
    try {
        const response = await axios.post('/api/login', credentials);
        return response.data;
    } catch (error) {
        throw error;
    }
};