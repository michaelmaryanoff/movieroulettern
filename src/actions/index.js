// Types
import {
  GET_GENRE_CODES,
  GENRE_DROPDOWN_DATA_SOURCE,
  IS_FETCHING_GENRES,
  SUBMIT_SPIN,
  IS_SPINNING
} from './actionTypes';

// Api
import tmdbClient, { apiKey, apiKeyParams } from '../api/tmdbClient';

// Helper methods
import { generateDateString } from '../helpers';

export const getGenreCodes = () => async dispatch => {
  dispatch(fetchGenresStarted());
  const { data } = await tmdbClient.get('/genre/movie/list', {
    params: { api_key: apiKey }
  });

  dispatch(fetchGenresCompleted());

  dispatch({ type: GET_GENRE_CODES, payload: data.genres });
  dispatch({ type: GENRE_DROPDOWN_DATA_SOURCE, payload: data.genres });
};

export const submitSpin = ({
  minimumRating,
  yearFrom,
  yearTo,
  languageInput,
  genreInput
}) => async dispatch => {
  const { dateFrom, dateTo } = generateDateString(yearFrom, yearTo);

  const paramsObject = {
    api_key: apiKey,
    include_adult: false,
    language: 'en-US',
    sort_by: 'popularity.desc',
    'vote_average.gte': minimumRating,
    page: 1,
    with_genres: genreInput,
    'primary_release_date.gte': dateFrom,
    'primary_release_date.lte': dateTo,
    with_original_language: languageInput
  };

  //! This object is only used for testing purposes, it purposely formats
  //! An incorrect response. Used for testing situations where no
  //! results are returned. It must replace individualMovieParams
  //! and paramsObject in the two get requests below
  // eslint-disable-next-line
  const testParamsObject = {
    ...paramsObject,
    'primary_release_date.gte': '2000',
    'primary_release_date.lte': '1955'
  };

  const pageResponse = await tmdbClient.get('/discover/movie', {
    params: paramsObject
  });

  const totalPages = pageResponse.data.total_pages;

  /** In order to increase the randomness of the movies selected, we want to select a random page
   * The issue that we run into is that if we get the first page of results (with the popularity sorted
   * in descending order) or an early page we will get a movie that has a very low popularity with a small chance
   * of wide availability. So we will be using results for the first 40% of pages instead.
   */

  const pageRange = totalPages * 0.4;

  const randomPage = Math.floor(Math.random() * pageRange) + 1;

  const individualMovieParams = { ...paramsObject, page: randomPage };

  const movieResponse = await tmdbClient.get('/discover/movie', {
    params: individualMovieParams
  });

  const { length } = movieResponse.data.results;

  if (length === 0) {
    let selectedMovie = 'NO_RESULTS';

    dispatch({ type: SUBMIT_SPIN, payload: selectedMovie });
    return;
  }

  const randomIndex = Math.floor(Math.random() * length);

  const selectedMovie = movieResponse.data.results[randomIndex];

  dispatch({ type: SUBMIT_SPIN, payload: selectedMovie });
};

export const spinningStarted = () => {
  return { type: IS_SPINNING, payload: true };
};

export const spinningCompleted = () => {
  return { type: IS_SPINNING, payload: false };
};

export const fetchGenresStarted = () => {
  return { type: IS_FETCHING_GENRES, payload: true };
};

export const fetchGenresCompleted = () => {
  return { type: IS_FETCHING_GENRES, payload: false };
};
