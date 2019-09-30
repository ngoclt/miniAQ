import * as actionTypes from '../actions/types';

const initialState = {
    countries: [],
    loading: true,
    errorMessage: '',
}

const reducer = (state = initialState, action: any) => {
    switch(action.type) {
        case actionTypes.GET_COUNTRIES: 
        return {...state, loading: action.payload};
        case actionTypes.GET_COUNTRIES_SUCCESSFUL:
        return {...state, countries: action.payload, loading: action.loading};
        case actionTypes.GET_COUNTRIES_FAILED:
        return {...state, errorMessage: action.payload, loading: action.loading};
        default: 
        return state;
    }
}



export default reducer;