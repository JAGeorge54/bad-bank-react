import axios from 'axios';

const URL = 'http://localhost:3000';

export async function getUsers () {
    const response = await axios.get(`${URL}/users`);
    if (response.status === 200) {
        return response.data;
    } else {
        return response.status;
    }
}

export async function getUser (id) {

}

export async function createUser (user) {

}

export async function updateUser (id, user) {

}

export async function deleteUser (id) {

}