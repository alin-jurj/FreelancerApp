import { GET_COMPLAINTS, ADD_COMPLAINT,DELETE_COMPLAINT } from '../constants/actionTypes';

export default (complaints = [], action) => {
    switch (action.type) {
        case GET_COMPLAINTS:
            return action.payload;
        case ADD_COMPLAINT:
            return [...complaints, action.payload];
        case DELETE_COMPLAINT:
            return complaints.filter((complaint) => complaint._id !== action.payload);
        default:
            return complaints;
    }
};