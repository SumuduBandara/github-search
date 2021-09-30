import { GITHUB_SEARCH_COMPLETE, RESET_SEARCH_DATA } from './actionType';

const INITIAL_STATE = {
    searchData: []
};

const search = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GITHUB_SEARCH_COMPLETE:
            return {
                ...state,
                searchData: action.data
            }
        case RESET_SEARCH_DATA:
            return {
                ...state,
                searchData: []
            }
        default:
            return state;
    }
};

export default search;