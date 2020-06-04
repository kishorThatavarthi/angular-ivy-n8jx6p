import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { KishorComponent } from './kishor/kishor.component';
import { ServerComponent } from './server/server.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, KishorComponent, ServerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
