import axios from "axios";

const axiosService = axios.create({baseURL: 'https://jsonplaceholder.typicode.com'})
const axiosUsersAll = axiosService.get('/users')

export {
    axiosService,
    axiosUsersAll
}