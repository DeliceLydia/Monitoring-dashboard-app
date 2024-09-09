import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';

export const fetchAllWebsites = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/websites`);
    return response.data.websites;
  } catch (error) {
    console.error('Error fetching websites:', error);
    throw error;
  }
};
