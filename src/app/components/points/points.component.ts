import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styles: []
})
export class PointsComponent implements OnInit {
@Input() points : object;
showingPoints: boolean = false;
  constructor() { }

  ngOnInit() {
  }

   ngOnChanges(changes: SimpleChanges){
  	//console.log(this.points)
  }

  showPoints(){
  	this.showingPoints = true;
  }

  closePoints(){
	this.showingPoints = false;
  }

}
