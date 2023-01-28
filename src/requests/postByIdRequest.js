import {axiosRequest} from "../config/axiosConfig";
import {apiLinks} from "../api/enpoints";

export const postByIdRequest = {
    getPost: (id) => axiosRequest.get(apiLinks.postById(id))
}