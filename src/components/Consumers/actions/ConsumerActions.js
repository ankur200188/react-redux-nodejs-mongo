// function makeActionCreator(type, ...argNames) {
//     return function (...args) {
//         const action = { type };
//         argNames.forEach((arg, index) => {
//             action[argNames[index]] = args[index];
//         });
//         return action;
//     };
// }

// const GET_CONSUMERS = 'GET_CONSUMERS';
// const ADD_ADDRESS = 'ADD_ADDRESS';
// const GET_ADDRESS = 'GET_ADDRESS';

// export const getConsumers = makeActionCreator(GET_CONSUMERS);
// export const addAddress = makeActionCreator(ADD_ADDRESS, ['payload']);
// export const getAddress = makeActionCreator(GET_ADDRESS, 'id');
import { CALL_API } from '../../../store/middleware/api';
import axios from 'axios';

export function getConsumers() {
    return {
        [CALL_API]: {
            types: ['GET_CONSUMERS_REQUEST', 'GET_CONSUMERS_SUCCESS', 'GET_CONSUMERS_FAILURE'],
            shouldCallAPI: state => !state.consumers.length,
            callApi: () => {
                return axios.get('/api/consumers');
            }
        }
    };
}

export function addAddress(userId, params) {
    return {
        [CALL_API]: {
            types: [
                'ADD_ADDRESS_REQUEST',
                'ADD_ADDRESS_SUCCESS',
                'ADD_ADDRESS_FAILURE'
            ],
            callApi: () => {
                fetch(`/api/consumers/${userId}/add`, {
                    method: 'post',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ params })
                });
            }
        }
    };
}

export function getAddress(userId) {
    return {
        [CALL_API]: {
            types: [
                'GET_ADDRESS_REQUEST',
                'GET_ADDRESS_SUCCESS',
                'GET_ADDRESS_FAILURE'
            ],
            callApi: () => {
                return axios.get(`/api/consumers/${userId}`);
            },
            payload: { userId }
        }
    };
}