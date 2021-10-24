import { ADD_PROJECT, GET_PROJECTS, DELETE_PROJECT, GET_PROJECTS_BY_USER } from '../constants/actionTypes';
import * as api from '../api/index';

export const addProject = (project, router) => async (dispatch) => {
    try {
        const { data } = await api.addProject(project);
        dispatch({ type: ADD_PROJECT, payload: data });
        router.push('/MainPage');
    } catch (error) {
        console.error(error);
    }
};

export const getUserProjects = () => async (dispatch) => {
    try {
        const { data } = await api.fetchUserProjects();
        dispatch({ type: GET_PROJECTS, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deleteProject = (id) => async (dispatch) => {
    try {
        await api.deleteProject(id);

        dispatch({ type: DELETE_PROJECT, payload: id });
    } catch (error) {
        console.log(error.message);
    }
};