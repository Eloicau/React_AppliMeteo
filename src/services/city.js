import cityRepository from "../repository/cityRepository";
export default {
    async getCityMeteo(cityName) {
        const data = await cityRepository.getCityMeteo(cityName);
        return data;
    }
}