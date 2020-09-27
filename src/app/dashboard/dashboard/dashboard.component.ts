import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
import { NgCircleProgressModule } from "ng-circle-progress";
import {
  DataService,
  Data,
  PopulationData,
} from "src/app/service/data.service";
import { DxChartModule } from "devextreme-angular";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";


@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  dataSource: Data[];
  population: PopulationData[];

  constructor(private dataService: DataService) {
    this.dataSource = this.dataService.getDataSutun();
    this.population = this.dataService.getDataPopulation();
  }

  ngOnInit() {
    this.tabsBarInit();
  }

  tabsBarInit() {
    $("#tabs li a:not(:last)").addClass("inactive");
    $(".container").hide();
    $(".container:last").show();

    $("#tabs li .textTab").click(function () {
      console.log('.textTab')
      var t = $(this).attr("id");
      console.log(t)
      if ($(this).hasClass("inactive")) {
        //this is the start of our condition
        $("#tabs li a").addClass("inactive");
        $(this).removeClass("inactive");

        $(".container").hide();
        $("#" + t + "C").fadeIn("slow");
      }
    });

    this.closeTab();
    this.closeAllTabs()
  }


  closeTab(){
    $("#tabs li .closeTab").unbind().click( function(e){
      e.stopPropagation();
      
      const parent = $(this).parent();
      const liElement = parent.parent();
      const idTab = parent.attr('id'); 

    liElement.remove();
     $(`#${idTab}C`).remove();

    if(!parent.hasClass("inactive")){
      const lastElId=$("#tabs li a:last").attr('id')
      $("#tabs li a:last").removeClass("inactive");
      $("#" + lastElId + "C").fadeIn("slow");

    }

      console.log(parent.hasClass("inactive"));
    });  
  }

  closeAllTabs(){
    $("#tabs li .closeAll").unbind().click(function (e) {
      e.stopPropagation();
      
      $("#tabs li:not(:first)").remove();
      $(".container").remove();

    })

    
  }


}


