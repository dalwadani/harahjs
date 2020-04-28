import districts from './districts.json';
import { Area, Point } from './area';

export function GetHarah({ latitude, longitude }: Point): Area {
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

  const [x, y] = point;

  let inside = false;
  for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
    const [xi, yi] = vs[i];
    const [xj, yj] = vs[j];

    const intersect = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }

  return inside;
}
