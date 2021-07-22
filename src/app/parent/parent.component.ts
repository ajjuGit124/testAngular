import { Component, OnInit,HostListener, ElementRef } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  counter = 0;

  aks:string="Ajeet Kumar Singh";

constructor(private el:ElementRef){
  
}

// @HostListener('click')onClick(){
//   alert("Hello Clicked me");
// }

@HostListener('click', ['$event'])

onEvent($e) {
  this.counter++;
  event.stopPropagation();
}

resetCounter() {
  this.counter = 0;
}

  ngOnInit() {
  let now = moment();
 

  console.log('Singh', new Date());
  console.log('Singh', now.format('MM/DD/YYYY HH:mm'));
  
  }

}
