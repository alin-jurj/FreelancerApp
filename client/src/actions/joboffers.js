import * as api from '../api/index';
import { GET_JOBOFFERS, ADD_JOBOFFER, UPDATE_JOBOFFER, DELETE_JOBOFFER } from '../constants/actionTypes';

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
export const updateJobOffer = (id,offer) => async (dispatch) => {
    try {
        const { data } = await api.updateJobOffer(id,offer);
        
        dispatch({ type: UPDATE_JOBOFFER, payload: data });
    } catch (error) {
        console.error(error);
    }
}
export const deleteJobOffer = (id) => async (dispatch) => {
    try {
      await api.deleteJobOffer(id);
  
      dispatch({ type: DELETE_JOBOFFER, payload: id });
    } catch (error) {
      console.log(error);
    }
  };