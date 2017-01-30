import axios from 'axios';
import {
    FETCH_USERS
} from './types';

const usersPayload = axios.get('https://jsonplaceholder.typicode.com/users');

export function fetchUsers () {
    return {
        type: FETCH_USERS,
        payload: usersPayload
    }
}