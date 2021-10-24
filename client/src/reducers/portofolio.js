import { ADD_PROJECT, GET_PROJECTS, DELETE_PROJECT } from '../constants/actionTypes';

export default (portofolio = [], action) => {
    switch (action.type) {
        case ADD_PROJECT:
            return [...portofolio, action.payload];
        case GET_PROJECTS:
            return action.payload;
        case DELETE_PROJECT:
            return portofolio.filter((project) => project._id !== action.payload);
        default:
            return portofolio;
    }
}