import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() displayedComponent = new EventEmitter<string>()
  collapsed = true;

  onSelect(component){
    this.displayedComponent.emit(component)
  }
}
