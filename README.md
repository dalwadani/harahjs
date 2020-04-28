# harahjs

A library to resolve GPS cooredinates into the area name for Saudi cities.
The raw data is taken from https://github.com/homaily/Saudi-Arabia-Regions-Cities-and-Districts

## Example

```javascript
const harahjs = require('harahjs');

const area_one = harahjs.GetHarah({
  latitude: 24.829157,
  longitude: 46.68869,
});
const area_two = harahjs.GetHarah({
  latitude: 20.480251,
  longitude: 45.586672,
});
console.table({ area_one, area_two });
```

output:

```
┌──────────┬─────────────┬─────────┬───────────┬─────────────┬───────────────────┐
│ (index)  │ district_id │ city_id │ region_id │   name_ar   │      name_en      │
├──────────┼─────────────┼─────────┼───────────┼─────────────┼───────────────────┤
│ area_one │ 10100003150 │    3    │     1     │ 'حي النرجس' │ 'Al Narjis Dist.' │
│ area_two │ 10101361002 │  1361   │     1     │ 'حي الروضة' │ 'Ar Rawdah Dist.' │
└──────────┴─────────────┴─────────┴───────────┴─────────────┴───────────────────┘
```
