import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MouseWheelDirective } from './directives/mousewheel.directive';

@NgModule({
  declarations: [
    AppComponent,
    MouseWheelDirective
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
