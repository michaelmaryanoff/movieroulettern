export const generateYearList = () => {
  // Creates an array of genres in order to populate the dropdown lists
  let currentYear = new Date().getFullYear();
  let firstYear = 1920;
  let years = [];

  for (let i = firstYear; i <= currentYear; i++) {
    years.push({ key: `${i}`, label: `${i}`, value: `${i}` });
  }
  return years;
};

export const generateRatingList = () => {
  // Creates an indexed array for ratings.
  // TMDB expects an integer
  let ratingsArray = [];

  for (let i = 1; i <= 10; i++) {
    ratingsArray.push({ key: `${i}`, value: `${i}`, label: `${i} / 10` });
  }
  return ratingsArray;
};

export const formatGenreList = genreList => {
  let genreArray = [];

  if (genreList) {
    for (let i = 0; i <= genreArray.length; i++) {}

    genreArray = genreList.map(genre => {
      return { label: genre.name, value: genre.id };
    });

    return genreArray;
  }
};

export const languageList = [
  {
    key: 'en',
    value: 'en',
    label: 'English'
  },
  {
    key: 'es',
    value: 'es',
    label: 'Spanish'
  },
  {
    key: 'pt',
    value: 'pt',
    label: 'Portuguese'
  },
  {
    key: 'zh',
    value: 'zh',
    label: 'Chinese'
  },
  {
    key: 'fr',
    value: 'fr',
    label: 'French'
  },
  {
    key: 'it',
    value: 'it',
    label: 'Italian'
  },
  {
    key: 'de',
    value: 'de',
    label: 'German'
  },
  {
    key: 'nl',
    value: 'nl',
    label: 'Dutch'
  },
  {
    key: 'sv',
    value: 'sv',
    label: 'Swedish'
  },
  {
    key: 'ru',
    value: 'ru',
    label: 'Russian'
  },
  {
    key: 'hi',
    value: 'hi',
    label: 'Hindi'
  },
  {
    key: 'ja',
    value: 'ja',
    label: 'Japanese'
  },
  {
    key: 'ko',
    value: 'ko',
    label: 'Korean'
  }
];

export const initialGenreList = [
  {
    value: '',
    label: 'All genres'
  },
  {
    value: '28',
    label: 'Action'
  },
  {
    value: '12',
    label: 'Adventure'
  },
  {
    value: '16',
    label: 'Animation'
  },
  {
    value: '35',
    label: 'Comedy'
  },
  {
    value: '80',
    label: 'Crime'
  },
  {
    value: '99',
    label: 'Documentary'
  },
  {
    value: '18',
    label: 'Drama'
  },
  {
    value: '10751',
    label: 'Family'
  },
  {
    value: '14',
    label: 'Fantasy'
  },
  {
    value: '36',
    label: 'History'
  },
  {
    value: '27',
    label: 'Horror'
  },
  {
    value: '10402',
    label: 'Music'
  },
  {
    value: '9648',
    label: 'Mystery'
  },
  {
    value: '10749',
    label: 'Romance'
  },
  {
    value: '878',
    label: 'Science Fiction'
  },
  {
    value: '10770',
    label: 'TV Movie'
  },
  {
    value: '53',
    label: 'Thriller'
  },
  {
    value: '10752',
    label: 'War'
  },
  {
    value: '37',
    label: 'Western'
  }
];
