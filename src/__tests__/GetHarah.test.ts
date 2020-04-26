import { GetHarah } from '../index';

test('Get Harah', () => {
  expect(GetHarah({ latitude: 24.831143, longitude: 46.687396 })).toBe('Al Narjis');
});
