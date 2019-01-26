import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

//Set up headers -- set them up here then you don't need to call them in each function.
const headers = new HttpHeaders();
headers.append('Content-Type', 'application/json');
headers.append('Access-Control-Allow-Origin', '*');

@Injectable()
export class DataService {

  constructor(
    private http: HttpClient) { }

  // ====================
  // Get TreeHouse JSON DATA
  // ====================

  getData() {
    // Change the url to a domain when live. =====
    return this.http.get('https://treehouseapi.herokuapp.com/api/getdata', { headers });

  }

}
