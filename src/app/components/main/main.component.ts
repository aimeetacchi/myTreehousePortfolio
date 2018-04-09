import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: []
})
export class MainComponent implements OnInit {
  constructor(
  	private data: DataService) {}

  dataReady = false;
  myName: string;
  profile_url: string;
  badges: any;
  points: any;
  profileImg = '';

  ngOnInit() {

  	// Fetch Treehouse JSON
  	this.data.getData().subscribe(
  		(response) => {
        console.log(response);
  		// ASSIGN VALUES
      this.myName = response['name'];
      this.profile_url = response['profile_url'];
      this.badges = response['badges'];
      this.points = response['points'];
  	  this.profileImg = response['gravatar_url'];
      console.log(this.profileImg);
      // Change dataReady to true.
  		this.dataReady = true;
  		}, (error) => {
  			console.log(error);
  		});


  }

}
