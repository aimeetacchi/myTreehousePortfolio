import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styles: []
})
export class BadgesComponent implements OnInit {
 	@Input() badges : any;
  constructor() { 
  		
  }

  ngOnInit() {
		
  }

  ngOnChanges(changes: SimpleChanges){
  	console.log(this.badges)
  }

 
  	



}
