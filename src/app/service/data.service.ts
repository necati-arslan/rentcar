import { Injectable } from '@angular/core';

export class Data {
  day: string;
  oranges: number;
}

let data: Data[] = [{
  day: "10",
  oranges: 3
}, {
  day: "20",
  oranges: 2
}, {
  day: "30",
  oranges: 3
}, {
  day: "40",
  oranges: 4
}, {
  day: "50",
  oranges: 6
}, {
  day: "60",
  oranges: 11
}, {
  day: "70",
  oranges: 4
}];

export class PopulationData {
  country: string;
  val: number;
}

let population: PopulationData[] = [
  { country: "Pzt", val: 10 },
  { country: "Salı", val: 20 },
  { country: "Çrş", val: 0 },
  { country: "Prş", val: 5 },
  { country: "Cm", val: 15 },
  { country: "Cms", val: 20 },
  { country: "Pzr", val: 15 }
];


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  getDataSutun(): Data[] {
    return data;
}
  getDataPopulation():PopulationData[]{
    return population;
  }
}
