import axios from "axios";
import { getToken } from "./AuthService";


// url必须为双引号
const BASE_RESR_API_URL = 'http://localhost:8080/api/todos';

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers['Authorization'] = getToken();

    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

//export const getAllTodos = () => {return axios.get(BASE_RESR_API_URL)} 
export function getALLTodos() {
    return axios.get(BASE_RESR_API_URL);
}

export function addTodo(todo) {
    return axios.post(BASE_RESR_API_URL, todo)
}

export function getTodo(id) {
    return axios.get(BASE_RESR_API_URL + '/' + id)
}

export function updateTodo(id, todo) {
    return axios.put(BASE_RESR_API_URL + '/' + todo, id)
}

export function deleteTodo(id) {
    return axios.delete(BASE_RESR_API_URL + '/' + id)
}

export function completeTodo(id) {
    // return axios.patch(BASE_RESR_API_URL + '/' + id + '/complete')
    return  axios.patch(BASE_RESR_API_URL + '/' + id + '/complete')
}

export function inCompleteTodo(id) {
    return axios.patch(BASE_RESR_API_URL + '/' + id + '/in-complete')
}


