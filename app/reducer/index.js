import { combineReducers } from 'redux';

function data(state = 'init', action) {
	switch(action.type) {
        case 'FETCH_DATA_SUCCESS':
            return action.payload;
    }

    return state;
}

export default combineReducers({
    data,
});
