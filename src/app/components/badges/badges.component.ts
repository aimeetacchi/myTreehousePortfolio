import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styles: []
})
export class BadgesComponent implements OnInit {
 	@Input() badges : any;
   showingBadges: boolean = false;
  constructor() { 
  		
  }

  ngOnInit() {
		
  }

  ngOnChanges(changes: SimpleChanges){
  	//console.log(this.badges)
  }

  showBadges(){
    this.showingBadges = true;
  }

  closeBadges() {
      this.showingBadges = false;
  }

 
  	



}
