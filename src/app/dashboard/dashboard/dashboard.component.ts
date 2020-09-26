import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { NgCircleProgressModule } from 'ng-circle-progress';
import { DataService, Data,PopulationData } from 'src/app/service/data.service';
import { DxChartModule } from 'devextreme-angular';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dataSource: Data[];
  population: PopulationData[];

  constructor(private dataService:DataService) {
    this.dataSource=this.dataService.getDataSutun();
    this.population=this.dataService.getDataPopulation();
   }
 
  ngOnInit() {
    
  }

}
