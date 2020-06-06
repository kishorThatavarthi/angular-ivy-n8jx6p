import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NGSTYLEComponent implements OnInit {
  status=true;

  constructor() { }

  ngOnInit() {
  }
  changestatus()
  {
    this.status=!this.status;
  }
  getcolor()
  {
    return this.status === true ? 'blue' :'red';
  }

}