import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: String = "StoreTrak";
  store: Number = 104;

  constructor() { }

  ngOnInit() {
  }

  getDate() {
    var today  = new Date();
    //console.log('getDate()');
    return today.toLocaleDateString("en-US");
  }
}

