import { GET_USERS, GET_COMPANIES, GET_USER } from '../constants/actionTypes';

export default (users = [], action) => {
    switch (action.type) {
        case GET_USERS:
            return action.payload;
        case GET_COMPANIES:
            return action.payload;
        case GET_USER:
            return action.payload;
        default:
            return users;
    }
}