import axios from 'axios';

const fetchData = async (params) => {
    try {
        const { data } = await axios.get("/api/news", { params });
        return data;
    } catch (e) {
        console.log("error: ", e);
        throw new Error(e.message);
    }
}
export default fetchData;