import { filterAu, filterOceania, getCountryCodes, getCountryNames, getSneaks } from '..';
import { brands, countries } from '../data';

test('getCountryNames should return the country names', () => {
  expect(getCountryNames(countries)).toStrictEqual([
    'Ecuador',
    'Lesotho',
    'Yemen',
    'Saudi Arabia',
    'Saint Kitts and Nevis',
    'Sierra Leone',
    'Saint Vincent and the Grenadines',
    'United Kingdom',
    'Jersey',
    'Gambia',
    'Kiribati',
    'Sri Lanka',
    'Burkina Faso',
    'Sao Tome and Principe',
    'Cape Verde',
    'Andorra',
    'Martinique',
    'Malaysia',
    'Mauritania',
    'Japan',
    'Heard Island and Mcdonald Islands',
    'Estonia',
    'Gibraltar',
    'Marshall Islands',
    'French Polynesia',
    'Bosnia and Herzegovina',
    'Marshall Islands',
  ]);
});

test('getCountryCodes return a nested array of countries and their codes', () => {
  expect(getCountryCodes(countries)).toStrictEqual([
    ['Ecuador', 'EC'],
    ['Lesotho', 'LS'],
    ['Yemen', 'YE'],
    ['Saudi Arabia', 'SA'],
    ['Saint Kitts and Nevis', 'KN'],
    ['Sierra Leone', 'SL'],
    ['Saint Vincent and the Grenadines', 'VC'],
    ['United Kingdom', 'GB'],
    ['Jersey', 'JE'],
    ['Gambia', 'GM'],
    ['Kiribati', 'KI'],
    ['Sri Lanka', 'LK'],
    ['Burkina Faso', 'BF'],
    ['Sao Tome and Principe', 'ST'],
    ['Cape Verde', 'CV'],
    ['Andorra', 'AD'],
    ['Martinique', 'MQ'],
    ['Malaysia', 'MY'],
    ['Mauritania', 'MR'],
    ['Japan', 'JP'],
    ['Heard Island and Mcdonald Islands', 'HM'],
    ['Estonia', 'EE'],
    ['Gibraltar', 'GI'],
    ['Marshall Islands', 'MH'],
    ['French Polynesia', 'PF'],
    ['Bosnia and Herzegovina', 'BA'],
    ['Marshall Islands', 'MH'],
  ]);
});

test.skip('filterOceania returns countries in Oceania', () => {
  expect(filterOceania(countries).map((elem) => elem.iso2)).toStrictEqual(['KI', 'MH', 'PF', 'MH']);
});

test.skip('filterAu returns countries that contain au', () => {
  expect(filterAu(countries).map((elem) => elem.name)).toStrictEqual([
    'Saudi Arabia',
    'Mauritania',
  ]);
});

test.skip('getSneaks returns the list of sneaker brands', () => {
  expect(getSneaks(brands)).toStrictEqual([
    'Air Max',
    'Air Force',
    'Air Jordan',
    'Air Mag',
    'Pegasus',
    'Kobe',
    'Clyde',
    'Suede',
    'Roma',
    'California',
    'Ultraboost',
    'Gazelle',
    'Samba',
    'Superstar',
  ]);
});
