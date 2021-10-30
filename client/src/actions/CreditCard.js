import { ADD_CREDITCARD, GET_CREDITCARDS, DELETE_CREDITCARD, GET_CREDITCARDS_BY_USER } from '../constants/actionTypes';
import * as api from '../api/index';

export const addCreditCard = (CreditCard, router) => async (dispatch) => {
    try {
        const { data } = await api.addCreditCard(CreditCard);
        dispatch({ type: ADD_CREDITCARD, payload: data });
        router.push('/MainPage');
    } catch (error) {
        console.error(error);
    }
};

export const getUserCreditCards = () => async (dispatch) => {
    try {
        const { data } = await api.fetchUserCreditCards();
        dispatch({ type: GET_CREDITCARDS, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deleteCreditCard = (id) => async (dispatch) => {
    try {
        await api.deleteCreditCard(id);

        dispatch({ type: DELETE_CREDITCARD, payload: id });
    } catch (error) {
        console.log(error.message);
    }
};