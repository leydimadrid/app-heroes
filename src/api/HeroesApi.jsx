import axios from "axios";

const baseURL = 'https://apisuperheroes.herokuapp.com';

const heroesApi = axios.create({ baseURL });

export default heroesApi;
