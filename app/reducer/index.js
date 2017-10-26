import { combineReducers } from 'redux';
import {
    FETCH_TABLE_REQUEST,
    FETCH_TABLE_SUCCESS,
    FETCH_TABLE_FAILURE,
    FETCH_DETAIL_REQUEST,
    FETCH_DETAIL_SUCCESS,
    FETCH_DETAIL_FAILURE,
} from '../action';

function data(state = {
    isTableFetching: false,
    isDetailFetching: false,
    entities: [],
        }, action) {

    if (action.type === FETCH_TABLE_REQUEST) {
        return Object.assign({}, state, {
            isTableFetching: true,
        });
    }

    if (action.type === FETCH_TABLE_FAILURE) {
        return Object.assign({}, state, {
            isTableFetching: false,
        });
    }

    if (action.type === FETCH_TABLE_SUCCESS) {
        return Object.assign({}, state, {
            isTableFetching: false,
            entities: action.payload,
        });
    }

    if (action.type === FETCH_DETAIL_REQUEST) {
        return Object.assign({}, state, {
            isDetailFetching: true,
        });
    }

    if (action.type === FETCH_DETAIL_FAILURE) {
        return Object.assign({}, state, {
            isDetailFetching: false,
        });
    }

    if (action.type === FETCH_DETAIL_SUCCESS) {
        const { entities, ...rest } = state;
        const entityIndex = entities.findIndex(entity => entity.title === action.payload.title);
        const entity = Object.assign({}, entities[entityIndex], action.payload);
        return Object.assign({}, state, {
            isDetailFetching: false,
            entities: [
                ...entities.slice(0, entityIndex),
                entity,
                ...entities.slice(entityIndex + 1),
            ],
        });
    }

    return state;
}

export default combineReducers({
    data,
});
