import axios from 'axios';

import {
  GET_COUNTRIES, GET_COUNTRIES_SUCCESSFUL, GET_COUNTRIES_FAILED,
  GET_CITIES, GET_CITIES_SUCCESSFUL, GET_CITIES_FAILED,
} from './types';

export const fetchCountriesIsLoading = (loading: Boolean) => {
  return {
    type: GET_COUNTRIES,
    payload: loading,
  };
}

export const fetchCountriesSuccessful = (data: any) => {
  return {
    type: GET_COUNTRIES_SUCCESSFUL,
    payload: data,
    loading: false,
  };
}

export const fetchCountriesFailed = (error: String) => {
  return {
    type: GET_COUNTRIES_FAILED,
    payload: error,
    loading: false,
  };
}

export const fetchCountries = () => {
  return dispatch => {
    dispatch(fetchCountriesIsLoading(true));
    axios.get('https://api.openaq.org/v1/countries').then(res => {
      dispatch(fetchCountriesSuccessful(res.data.results));
    }).catch(err => dispatch(fetchCountriesFailed(err)));
  }
}

export const fetchCitiesIsLoading = (country: String, loading: Boolean) => {
  return {
    type: GET_CITIES,
    payload: { country, loading },
  };
}

export const fetchCitiesSuccessful = (country: String, data: any) => {
  return {
    type: GET_CITIES_SUCCESSFUL,
    payload: data,
    loading: false,
  };
}

export const fetchCitiesFailed = (country: String, error: String) => {
  return {
    type: GET_CITIES_FAILED,
    payload: error,
    loading: false,
  };
}

export const fetchCities = (country: String) => {
  return dispatch => {
    dispatch(fetchCitiesIsLoading(country, true));
    axios.get('https://api.openaq.org/v1/cities?country=' + country).then(res => {
      dispatch(fetchCitiesSuccessful('', res.data.results));
    }).catch(err => dispatch(fetchCitiesFailed(country, err)));
  }
}