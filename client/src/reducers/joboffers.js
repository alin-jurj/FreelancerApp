import { GET_JOBOFFERS, ADD_JOBOFFER, UPDATE_JOBOFFER, DELETE_JOBOFFER } from '../constants/actionTypes';

export default (joboffers = [], action) => {
    switch (action.type) {
        case GET_JOBOFFERS:
            return action.payload;
        case ADD_JOBOFFER:
            return [...joboffers, action.payload];
        case UPDATE_JOBOFFER:
            return joboffers.map((joboffer) => (joboffer._id===action.payload._id ? action.payload :joboffer));
        case DELETE_JOBOFFER:
            return joboffers.filter((joboffer) => joboffer._id !== action.payload);
            default:
            return joboffers;
    }
};