import { ADD_PROJECT } from '../constants/actionTypes';

export default (portofolio = [], action) => {
    switch (action.type) {
        case ADD_PROJECT:
            return [...portofolio, action.payload];
        default:
            return portofolio;
    }
}