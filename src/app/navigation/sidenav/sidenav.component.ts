import { Component, OnInit,  } from "@angular/core";

import * as $ from "jquery";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.css"],
})
export class SidenavComponent implements OnInit {
  
  constructor(
    
  ) {}

  ngOnInit() {
    this.dropdownMenu();
   
  }

  dropdownMenu() {
    const dropdown = document.getElementsByClassName("dropdown-btn");
    let i;
    console.log(dropdown);

    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let arrow = this.getElementsByClassName("fa-angle-right");
        console.log(arrow);
        // arrow.classList.toggle("active")
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    }
  }

  searchMenu() {
    console.log("çalışıyor");

    let input, filter, ul, li, a, i;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    console.log(filter);
    

    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");

    console.log(li);

    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      const parent = $(li[i]).parents(".dropdown-container");
      console.log(parent.length);

      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
        // console.log(li[i]);
        if (parent.length > 0) {
          parent.prev().css("display", "");
          parent.prev().addClass('active')
          parent.css('display','block') 
          if (filter==""){
            parent.prev().removeClass('active')
          parent.css('display','none') 
          }
        }
        console.log(parent.prev().text());
      } else {
        if (parent.length > 0 && parent.prev().css("display") != "none") {
          console.log(parent.prev().css("display"));
        } else {
          li[i].style.display = "none";
        }
      }
    }
  }






}
