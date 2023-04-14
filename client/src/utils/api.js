import axios from "axios";

const fetchDataParams = {
    headers: {
        Authorization: "bearer " + process.env.REACT_APP_STRAPI_TOKEN
    }
}

const fetchDataFromStraApi = async (endpoint) => {
    try {
        const {data} = await axios.get(process.env.REACT_APP_BASE_URL + endpoint, fetchDataParams);
        return Promise.resolve(data);
    } catch (error) {
        console.log(error);
        return Promise.reject(error);
    }
}

const makePaymentRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        Authorization: "bearer " + process.env.REACT_APP_STRAPI_TOKEN
    }
})

export { makePaymentRequest };

export default fetchDataFromStraApi;