
import dotenv from 'dotenv';

dotenv.config();

export default {
    PORT: process.env.PORT || 5000,
    apiKey: process.env.apiKey || 'd8733b9870344734911895a6444a20a5',
};