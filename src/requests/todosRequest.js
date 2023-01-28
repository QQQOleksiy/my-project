import {axiosRequest} from "../config/axiosConfig";
import {apiLinks} from "../api/enpoints";

export const todosRequest = {
    getAll: () => axiosRequest.get(apiLinks.todos)
}