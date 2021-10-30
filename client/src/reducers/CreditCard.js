import { ADD_CREDITCARD, GET_CREDITCARDS, DELETE_CREDITCARD } from '../constants/actionTypes';

export default (CreditCard = [], action) => {
    switch (action.type) {
        case ADD_CREDITCARD:
            return [...CreditCard, action.payload];
        case GET_CREDITCARDS:
            return action.payload;
        case DELETE_CREDITCARD:
            return CreditCard.filter((creditstate) => creditstate._id !== action.payload);
        default:
            return CreditCard;
    }
}