import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Kishor Thatavarthi' ;
  status:boolean=true;
  status1=false;
  changestatus()
  {
    this.status=!this.status;
    this.status1=!this.status1;
  }
}
