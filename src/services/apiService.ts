import axios from "axios";
import {baseURL} from "../constants/url";

const apiService = axios.create({baseURL});

export {
    apiService
}