export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

function fetchDataRequest() {
    return {
        type: FETCH_DATA_REQUEST,
    };
}

function fetchDataSuccess(data) {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data,
    };
}

function fetchDataFailure(ex) {
    return {
        type: FETCH_DATA_FAILURE,
        payload: ex,
        error: true,
    };
}

export function fetchData() {
    return (dispatch) => {
        dispatch(fetchDataRequest());

        return fetch('/api/desc').then((resp) => {
            return resp.text();
        }).then((body) => {
            return dispatch(fetchDataSuccess(body));
        }).catch((ex) => {
            return dispatch(fetchDataFailure(ex));
        });
    };
};
