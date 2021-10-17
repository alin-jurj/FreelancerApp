import { ADD_PROJECT } from '../constants/actionTypes';
import * as api from '../api/index';

export const addProject = (project) => async (dispatch) => {
    try {
        const { data } = await api.addProject(project);
        dispatch({ type: ADD_PROJECT, payload: data });
    } catch (error) {
        console.error(error);
    }
};