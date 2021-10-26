import { GET_USERS, GET_COMPANIES, GET_USER, GET_FREELANCERS, DELETE_USER } from '../constants/actionTypes';

export default (users = [], action) => {
    switch (action.type) {
        case GET_USERS:
            return action.payload;
        case GET_COMPANIES:
            return action.payload;
        case GET_FREELANCERS:
            return action.payload;
        case GET_USER:
            return action.payload;
            case DELETE_USER:
                return users.filter((user) => user._id !== action.payload);
        default:
            return users;
    }
}