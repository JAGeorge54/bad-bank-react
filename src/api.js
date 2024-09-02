import axios from 'axios';

const URL = 'https://badbank-react-backend.onrender.com';

export async function getUsers () {
    const response = await axios.get(`${URL}/users`);
    if (response.status === 200) {
        return response.data;
    } else {
        return console.log(`Error from API getUsers status:${response.status}`);
    }
}

export async function getUser (id) {
    const response = await axios.get(`${URL}/users/${id}`);
    if (response.status === 200) {
        return response.data;
    } else {
        return console.log(`Error from API getUser status:${response.status}`);
    }

}

export async function createUser (user) {
    const response = await axios.post(`${URL}/users`, user);
    return response;
}

export async function updateUser (id, user) {
    const response = await axios.put(`${URL}/users/${id}`, user);
    return response;
}

export async function deleteUser (id) {
    const response = await axios.delete(`${URL}/users/${id}`);
    return response;
}

export async function verifyUser (user) {
    const response = await axios.post(`${URL}/users/login`, user);
    if (response.data.success) {
        return response.data.token
    } else {
        return
    }
}