import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/v1";

export const searchCards = async (keyword) => {

    const response = await axios.get(
        `${API_BASE_URL}/search`,
        {
            params: {
                keyword
            }
        }
    );

    return response.data;
};