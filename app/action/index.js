export const FETCH_TABLE_REQUEST = 'FETCH_TABLE_REQUEST';
export const FETCH_TABLE_SUCCESS = 'FETCH_TABLE_SUCCESS';
export const FETCH_TABLE_FAILURE = 'FETCH_TABLE_FAILURE';

function fetchTableRequest() {
    return {
        type: FETCH_TABLE_REQUEST,
    };
}

function fetchTableSuccess(data) {
    return {
        type: FETCH_TABLE_SUCCESS,
        payload: data,
    };
}

function fetchTableFailure(ex) {
    return {
        type: FETCH_TABLE_FAILURE,
        payload: ex,
        error: true,
    };
}

export function fetchTable() {
    return (dispatch) => {
        dispatch(fetchTableRequest());

        return fetch('/api/table').then((resp) => {
            return resp.json();
        }).then((body) => {
            return dispatch(fetchTableSuccess(body));
        }).catch((ex) => {
            return dispatch(fetchTableFailure(ex));
        });
    };
};

export const FETCH_DETAIL_REQUEST = 'FETCH_DETAIL_REQUEST';
export const FETCH_DETAIL_SUCCESS = 'FETCH_DETAIL_SUCCESS';
export const FETCH_DETAIL_FAILURE = 'FETCH_DETAIL_FAILURE';

function fetchDetailRequest() {
    return {
        type: FETCH_DETAIL_REQUEST,
    };
}

function fetchDetailSuccess(data) {
    return {
        type: FETCH_DETAIL_SUCCESS,
        payload: data,
    };
}

function fetchDetailFailure(ex) {
    return {
        type: FETCH_DETAIL_FAILURE,
        payload: ex,
        error: true,
    };
}

export function fetchDetail(title) {
    return (dispatch) => {
        dispatch(fetchDetailRequest());

        return fetch(`/api/${title}`).then((resp) => {
            return resp.json();
        }).then((body) => {
            return dispatch(fetchDetailSuccess(body));
        }).catch((ex) => {
            return dispatch(fetchDetailFailure(ex));
        });
    };
};
