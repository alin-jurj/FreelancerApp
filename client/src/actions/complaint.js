import * as api from '../api/index';
import { ADD_COMPLAINT, GET_COMPLAINTS, DELETE_COMPLAINT } from '../constants/actionTypes';

export const getComplaints = () => async (dispatch) => {
    try {
        const { data } = await api.getComplaints();
        dispatch({ type: GET_COMPLAINTS, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const addComplaint = (complaint) => async (dispatch) => {
    try {
        const { data } = await api.addComplaint(complaint);
        dispatch({ type: ADD_COMPLAINT, payload: data });
    } catch (error) {
        console.error(error);
    }
}

export const deleteComplaint = (id) => async (dispatch) => {
    try {
        
      await api.deleteComplaint(id);
      dispatch({ type: DELETE_COMPLAINT, payload: id });
    } catch (error) {
      console.log(error);
    }
  };