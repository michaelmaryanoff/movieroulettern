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
