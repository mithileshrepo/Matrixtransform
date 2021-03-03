import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  // initial image class
  imgClass:any='downward';

  mouseWheelDir: string = '';

  mouseWheelUpFunc() {
    this.mouseWheelDir = 'upward direction';

    // upward direction
    console.log(this.mouseWheelDir);
    this.imgClass = 'upward';
  }

  mouseWheelDownFunc() {
    this.mouseWheelDir = 'downward direction';

    // downward direction
    console.log(this.mouseWheelDir);
    this.imgClass = 'downward';
  }

}