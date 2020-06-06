import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NGFORComponent implements OnInit {
  friends=["murali","kiran","kishor","rvr"];

  constructor() { }

  ngOnInit() {
  }

}