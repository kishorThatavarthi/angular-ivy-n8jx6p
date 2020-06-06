import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { KishorComponent } from './kishor/kishor.component';
import { ServerComponent } from './server/server.component';
import { NGIFComponent } from './ngif/ngif.component';
import { NGIFELSEComponent } from './ngifelse/ngifelse.component';
import { NGSTYLEComponent } from './ngstyle/ngstyle.component';
import { NGFORComponent } from './ngfor/ngfor.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, KishorComponent, ServerComponent, NGIFComponent, NGIFELSEComponent, NGSTYLEComponent, NGFORComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  
 }
