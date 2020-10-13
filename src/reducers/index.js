import {
  GET_GENRE_CODES,
  GENRE_DROPDOWN_DATA_SOURCE,
  IS_FETCHING_GENRES,
  SUBMIT_SPIN,
  IS_SPINNING,
  SAVE_SELECTION
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
    case GET_GENRE_CODES:
      return { ...state, genreCodes: action.payload };
    case GENRE_DROPDOWN_DATA_SOURCE:
      return { ...state, genreDropdownDataSource: action.payload };
    case IS_FETCHING_GENRES:
      return { ...state, isFetchingGenres: action.payload };
    case SAVE_SELECTION:
      return { ...state, selection: action.payload };
    default:
      return state;
  }
};
