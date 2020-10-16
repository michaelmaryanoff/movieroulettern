export const generateDateString = (yearFrom, yearTo) => {
  let lowYear = yearFrom <= yearTo ? yearFrom : yearTo;
  let highYear = yearFrom >= yearTo ? yearFrom : yearTo;

  let dateFrom = `${lowYear}-01-01`;

  let dateTo = `${highYear}-12-31`;

  return { dateFrom, dateTo };
};

export const rawDateToString = releaseDate => {
  const rawDate = new Date(Date.parse(releaseDate));
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const convertedDate = rawDate.toLocaleDateString('en-US', options);

  return convertedDate;
};
