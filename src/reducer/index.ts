import * as actionTypes from '../actions/types';
import { combineReducers } from 'redux';

const initialCountryState = {
  countries: [],
  loading: true,
  errorMessage: '',
}

const country = (state = initialCountryState, action: any) => {
  switch (action.type) {
    case actionTypes.GET_COUNTRIES:
      return { ...state, loading: action.payload };
    case actionTypes.GET_COUNTRIES_SUCCESSFUL:
      return { ...state, countries: action.payload, loading: action.loading };
    case actionTypes.GET_COUNTRIES_FAILED:
      return { ...state, errorMessage: action.payload, loading: action.loading };
    default:
      return state;
  }
}

const initialCityState = {
  country: '',
  cities: [],
  loading: true,
  errorMessage: '',
}

const city = (state = initialCityState, action: any) => {
  switch (action.type) {
    case actionTypes.GET_CITIES:
      return { ...state, country: action.payload.country, loading: action.payload.loading };
    case actionTypes.GET_CITIES_SUCCESSFUL:
      return { ...state, cities: action.payload, loading: action.loading };
    case actionTypes.GET_CITIES_FAILED:
      return { ...state, errorMessage: action.payload, loading: action.loading };
    default:
      return state;
  }
}

const reducer = combineReducers({ country, city });

export default reducer;