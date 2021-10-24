import * as api from '../api/index';
import { GET_JOBOFFERS, ADD_JOBOFFER } from '../constants/actionTypes';

export const getJoboffers = () => async (dispatch) => {
    try {
        const { data } = await api.getJoboffers();
        dispatch({ type: GET_JOBOFFERS, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const addJobOffer = (offer) => async (dispatch) => {
    try {
        const { data } = await api.addJoboffer(offer);
        dispatch({ type: ADD_JOBOFFER, payload: data });
    } catch (error) {
        console.error(error);
    }
}