import axios from "axios";
import { API_BASE_URL, ROUTES } from "../services/constants";

const weatherRepository = {
    async getPositionMeteo(longitude, latitude) {
        try {
            const positionMeteo = await axios.get(API_BASE_URL + ROUTES.APPID + ROUTES.UNITS + ROUTES.LANGUE + '&lat=' + latitude + '&lon=' + longitude);
            return positionMeteo.data;
        } catch (err) {
            console.log("error : ", err)
        }

    },
};

export default weatherRepository