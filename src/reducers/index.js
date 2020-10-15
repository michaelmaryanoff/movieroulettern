import {
  GET_GENRE_CODES,
  IS_FETCHING_GENRES,
  SUBMIT_SPIN,
  IS_SPINNING,
  SAVE_SELECTION,
  START_SPINNING,
  STOP_SPINNING,
  TOUCH_INSIDE,
  TOUCH_OUTSIDE
} from '../actions/actionTypes';

const INITIAL_STATE = {
  isSpinning: false,
  isFetchingGenres: true,
  selection: {
    genre: '28',
    language: 'en',
    rating: '1',
    yearFrom: '1955',
    yearTo: '2020'
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SUBMIT_SPIN:
      return { ...state, selectedMovie: action.payload };
    case IS_SPINNING:
      return { ...state, isSpinning: action.payload };
    case IS_FETCHING_GENRES:
      return { ...state, isFetchingGenres: action.payload };
    case SAVE_SELECTION:
      return { ...state, selection: action.payload };
    case START_SPINNING:
      return { ...state, isSpinning: true };
    case STOP_SPINNING:
      return { ...state, isSpinning: false };
    case GET_GENRE_CODES:
      return { ...state, genreCodes: action.payload };
    default:
      return state;
  }
};
