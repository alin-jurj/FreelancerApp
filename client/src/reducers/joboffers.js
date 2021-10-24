import { GET_JOBOFFERS, ADD_JOBOFFER } from '../constants/actionTypes';

export default (joboffers = [], action) => {
    switch (action.type) {
        case GET_JOBOFFERS:
            return action.payload;
        case ADD_JOBOFFER:
            return [...joboffers, action.payload];
        default:
            return joboffers;
    }
};