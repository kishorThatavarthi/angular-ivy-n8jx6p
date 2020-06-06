import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NGIFComponent implements OnInit {
  liston=false;

  constructor() { }

  ngOnInit() {
  }
  modeon()
  {
    this.liston=!this.liston;
  }

}