import {axiosRequest} from "../config/axiosConfig";
import {apiLinks} from "../api/enpoints";

export const commentsRequest = {
    getAll: () => axiosRequest.get(apiLinks.comments)
}