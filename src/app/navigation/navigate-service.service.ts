import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigateService {

  isOpen=  new Subject<boolean>();
  constructor() { }
  
   stateNavEmit(value){
     this.isOpen.next(value);
   }
  

}
