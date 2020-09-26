import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import {NavigateService} from '../navigate-service.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  hamburgMenu:Function;

  constructor(private navigateService:NavigateService,
    private elementRef:ElementRef,
    private renderer: Renderer2) { }

  ngOnInit() {



  }
  ngAfterViewInit() {

  this.elementRef.nativeElement.querySelector('#hamburgMenu')
               .addEventListener('click', (e)=>{
                  e.stopPropagation();
                  this.openSideNav();
                                 });

  }

  ngOnDestroy(){

    this.hamburgMenu();

  }

  openSideNav(){
  this.navigateService.stateNavEmit(true);
  }

}
 