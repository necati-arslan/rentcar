import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  Renderer,
} from "@angular/core";
import { NavigateService } from "../navigate-service.service";
import * as $ from "jquery";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.css"],
})
export class SidenavComponent implements OnInit {
  sideNavState$;
  isOpen = false;

  globalListenFunc: Function;
  sidemenu: Function;
  constructor(
    private navigateService: NavigateService,
    private elementRef: ElementRef,
    private renderer: Renderer
  ) {}

  ngOnInit() {
    this.dropdownMenu();
    this.navigateService.stateNavEmit(false);
    this.sideNavState$ = this.navigateService.isOpen.subscribe((value) => {
      console.log(value);
      this.openNav();
    });
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

  ngOnDestroy() {
    this.sideNavState$.unsubscribe();
    this.globalListenFunc();
    this.sidemenu();
  }

  ngAfterViewInit() {
    this.sidemenu = this.elementRef.nativeElement
      .querySelector("#sideMenu")
      .addEventListener("click", (e) => {
        e.stopPropagation();
      });

    this.globalListenFunc = this.renderer.listen(
      "document",
      "click",
      (event) => {
        // Do something with 'event'
        console.log("dddd");
        this.closeNav();
      }
    );
  }

  openNav() {
    if (!this.isOpen) {
      document.getElementById("sideMenu").style.width = "80%";
    } else {
      document.getElementById("sideMenu").style.width = "0";
    }
    this.isOpen = !this.isOpen;
  }

  closeNav() {
    if (!this.isOpen) return;
    document.getElementById("sideMenu").style.width = "0";
    this.isOpen = false;
  }
}
