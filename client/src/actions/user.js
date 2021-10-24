import { GET_USERS, GET_COMPANIES, GET_USER } from '../constants/actionTypes';
import * as api from '../api/index';

export const getUsers = () => async (dispatch) => {
    try {
        const { data } = await api.getUsers();
        dispatch({ type: GET_USERS, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const getCompanies = () => async (dispatch) => {
    try {
        const { data } = await api.getCompanies();
        dispatch({ type: GET_COMPANIES, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const getUser = (id) => async () => {
    try {
        const { data } = await api.getUser(id);
        return data;
    } catch (error) {
        console.log(error);
    }
}