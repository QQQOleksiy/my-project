import axios from "axios";

import {baseURL} from "../api/enpoints";

export const axiosRequest = axios.create({baseURL})