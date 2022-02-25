import weatherRepository from "../repository/weatherRepository";

export default {
    async getPositionMeteo(longitude, latitude) {
        const data = await weatherRepository.getPositionMeteo(longitude, latitude);
        return data;
    }
}