import axios from "axios";

const AUTH_BASE_REST_API_URL = "http://localhost:8080/api/auth"

export function registerAPICall(registerObj) {
    return axios.post(AUTH_BASE_REST_API_URL +'/register', registerObj)
}

// export function loginAPICall(usernameOrEmail, password) {
//     return axios.post(AUTH_BASE_REST_API_URL +'/login', {usernameOrEmail, password})
// }
export const loginAPICall = (usernameOrEmail, password) => axios.post(AUTH_BASE_REST_API_URL + '/login', {usernameOrEmail, password});

// export function storeToken(token) {
//     return localStorage.setItem("token", token);
// }

// export function getToken() {
//     return localStorage.getItem("token");
// }

export const storeToken = (token) => localStorage.setItem("token", token);

export const getToken = () => localStorage.getItem("token");

export const saveLoggedInUser = (username, role) => {
    sessionStorage.setItem("authenticatedUser", username);
    sessionStorage.setItem("role", role);
}

export const isUserLoggedIn = () => {
    const username = sessionStorage.getItem("authenticatedUser");
    if(username == null) {
        return false;
    }
    else {
        return true;
    }
}

export const getLoggedInUser = () => {
    const username = sessionStorage.getItem("authenticatedUser");
    return username;
}

export const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    // window.location.reload(flase);
}

export const isAdminUser = () => {
    let role = sessionStorage.getItem("role");

    if(role != null && role === 'ROLE_ADMIN') {
        return true;
    }else {
        return false;
    }

}

