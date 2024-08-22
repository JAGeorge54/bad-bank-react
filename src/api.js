import axios from 'axios';

const URL = 'http://localhost:3000';

export async function getUsers () {
    const response = await axios.get(`${URL}/users`);
    if (response.status === 200) {
        return response.data;
    } else {
        return console.log(`Error from API getUsers status:${response.status}`);
    }
}

export async function getUser (id) {
    const response = await axios.get(`${URL}/users/:${id}`);
    if (response.status === 200) {
        return response.data;
    } else {
        return console.log(`Error from API getUser status:${response.status}`);
    }

}

export async function createUser (user) {

}

export async function updateUser (id, user) {

}

export async function deleteUser (id) {

}