import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  displayingComponent: string = 'recipes'
  
  displayedComponent(component: string){
    this.displayingComponent = component
  }

}
