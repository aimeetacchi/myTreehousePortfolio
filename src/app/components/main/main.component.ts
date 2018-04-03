import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: []
})
export class MainComponent implements OnInit {

  constructor(
  	private data : DataService) { }

  dataReady : boolean = false;

  ngOnInit() {

  	// Fetch Treehouse JSON
  	this.data.getData().subscribe(
  		(response) => {

  		// ASSIGN VALUES
  		console.log(response)

  		// Change dataReady to true.
  		this.dataReady = true;
  		}, (error)=> {
  			console.log(error);
  		});

  }

}
