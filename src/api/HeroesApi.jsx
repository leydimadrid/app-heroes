import axios from "axios";

const baseURL = 'http://api-heroes-fimlm.herokuapp.com';

const heroesApi = axios.create({ baseURL });

export default heroesApi;
