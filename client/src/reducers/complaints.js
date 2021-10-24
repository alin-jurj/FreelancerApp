import { GET_COMPLAINTS, ADD_COMPLAINT } from '../constants/actionTypes';

export default (complaints = [], action) => {
    switch (action.type) {
        case GET_COMPLAINTS:
            return action.payload;
        case ADD_COMPLAINT:
            return [...complaints, action.payload];
        default:
            return complaints;
    }
};