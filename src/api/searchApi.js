// ==============================
// IMPORT AXIOS
// ==============================

import axios from "axios";



// ==============================
// API BASE URL
// ==============================

const API_BASE_URL = "http://localhost:8080/api/v1";



// ==============================
// SEARCH API FUNCTION START
// ==============================

export const searchCards = async (keyword, amount) => {

    const response = await axios.get(

        `${API_BASE_URL}/search`,

        {
            params: {
                keyword,
                amount
            }
        }
    );

    return response.data;
};

// ==============================
// SEARCH API FUNCTION END
// ==============================