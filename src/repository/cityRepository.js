import axios from "axios";
import { API_BASE_URL, ROUTES } from "../services/constants";

const cityRepository = {
    async getCityMeteo(cityName) {
        try {
            const cityMeteo = await axios.get(API_BASE_URL + ROUTES.APPID + ROUTES.UNITS + ROUTES.LANGUE + '&q=' + cityName );
            return cityMeteo.data;
        } catch (err) {
            console.log("error : ", err)
        }

    },
};

export default cityRepository