import districts from './districts.json';

interface area {
  district_id: number;
  city_id: number;
  region_id: number;
  name_ar: string;
  name_en: string;
}

interface point {
  latitude: number;
  longitude: number;
}

export function GetHarah({ latitude, longitude }: point): area {
  const area: any = districts.find((x: any) => {
    return is_inside([latitude, longitude], x.boundaries[0]);
  });
  const { district_id, city_id, region_id, name_ar, name_en } = area;
  return {
    district_id,
    city_id,
    region_id,
    name_ar,
    name_en,
  };
}

function is_inside(point: [number, number], vs: [number, number][]) {
  // ray-casting algorithm based on
  // http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html

  var x = point[0],
    y = point[1];

  var inside = false;
  for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
    var xi = vs[i][0],
      yi = vs[i][1];
    var xj = vs[j][0],
      yj = vs[j][1];

    var intersect = yi > y != yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }

  return inside;
}
