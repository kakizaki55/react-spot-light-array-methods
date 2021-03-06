// INPUT: the array of countries from data.js
// OUTPUT: an array of the names
// REQS: use .map

export const getCountryNames = (countries) => {
  const countryName = countries.map((c) => c.name);
  return countryName;
};

// INPUT: the array of countries from data.js
// OUTPUT: an array of the names and their iso2 country codes using .map
// REQS: use .map

export const getCountryCodes = (countries) => {
  const cNameIso = countries.map((c) => {
    const nameIso = [c.name, c.iso2];
    return nameIso;
  });
  return cNameIso;
};

// INPUT: the array of countries from data.js
// OUTPUT: only countries in Oceana
// REQS: use .filter

export const filterOceania = (countries) => {
  const oceaniaCountries = countries.filter((c) => {
    if (c.continent === 'Oceania') {
      return c.iso2;
    }
  });
  return oceaniaCountries;
};

// INPUT: the array of countries from data.js
// OUTPUT: only countries that include the letters 'au'
// REQS: use .filter


export const filterAu = (countries) => {
  const filtered = countries.filter((c) => c.name.includes('au'));
  return filtered;
};

// export const filterAu = (countries) => {
//   const filtered = countries.filter((c) => {
//     if (c.includes('au')){
//       return c.name;
//     }});
//   return filtered;
// };

// INPUT: the array of brands from data.js
// OUTPUT: an array of all the sneakers brands
// REQS: use .reduce

export const getSneaks = (brands) => {
  return brands.reduce((acc, brand) => [...acc, ...brand.shoes], []);
};
