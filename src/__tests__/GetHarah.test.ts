import { GetHarah } from '../index';

test('Get a Harah', () => {
  expect(GetHarah({ latitude: 24.831143, longitude: 46.687396 })).toEqual({
    district_id: 10100003150,
    city_id: 3,
    region_id: 1,
    name_ar: 'حي النرجس',
    name_en: 'Al Narjis Dist.',
  });
});
