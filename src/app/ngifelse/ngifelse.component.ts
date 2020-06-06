import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngifelse',
  templateUrl: './ngifelse.component.html',
  styleUrls: ['./ngifelse.component.css']
})
export class NGIFELSEComponent implements OnInit {
  mode=true;

  constructor() { }

  ngOnInit() {
  }
  modeon()
  {
    this.mode=!this.mode;
  }

}