import { GET_REVIEWS, ADD_REVIEW, UPDATE_REVIEW, DELETE_REVIEW } from '../constants/actionTypes';

export default (reviews = [], action) => {
    switch (action.type) {
        case GET_REVIEWS:
            return action.payload;
        case ADD_REVIEW:
            return [...reviews, action.payload];
        case UPDATE_REVIEW:
            return reviews.map((review) => (review._id === action.payload._id ? action.payload : review));
        case DELETE_REVIEW:
            return reviews.filter((review) => review._id !== action.payload);
        default:
            return reviews;
    }
};