import {axiosRequest} from "../config/axiosConfig";
import {apiLinks} from "../api/enpoints";

export const albumsRequest = {
    getAll: () => axiosRequest.get(apiLinks.albums)
}