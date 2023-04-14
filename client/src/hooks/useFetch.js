import { useState, useEffect } from "react"
import fetchDataFromStrApi from "../utils/api";

const useFetch = (endpoint) => {
    const [data, setData] = useState();

    useEffect(() => {
        fetchDataFromStrApi(endpoint).then(
            res => {
                setData(res.data)
            }
        ).catch(error => {

        })
    },[endpoint]);

    return data;
}

export default useFetch;