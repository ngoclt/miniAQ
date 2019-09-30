import axios from 'axios';

import { GET_COUNTRIES, GET_COUNTRIES_SUCCESSFUL, GET_COUNTRIES_FAILED } from './types';

export const fetchDataIsLoading = (bool: Boolean) => {
    return {
        type: GET_COUNTRIES,
        payload: bool,
    };
}

export const fetchDataSuccessful = (data: any) => {
    return {
        type: GET_COUNTRIES_SUCCESSFUL,
        payload: data,
        loading: false,
    };
}

export const fetchDataFailed = (error: String) => {
    return {
        type: GET_COUNTRIES_FAILED,
        payload: error,
        loading: false,
    };
}

export const fetchCountries = () => {
    return dispatch => {
        dispatch(fetchDataIsLoading(true));
        axios.get('https://api.openaq.org/v1/countries').then(res => {
            dispatch(fetchDataSuccessful(res.data.results));
        }).catch(err => dispatch(fetchDataFailed(err)));
    }
}