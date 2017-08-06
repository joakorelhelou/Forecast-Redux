import axios from 'axios';

const API_KEY = 'b6200133a6079e2f074e79239783b329';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const CLEAR_WEATHER = 'CLEAR_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city}`;
    const request = axios.get(url);
    
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}

export function clearWeather() {

    return {
        type: CLEAR_WEATHER,
        payload: ''
    }
}