import { Component } from '@angular/core';
import { Ingredient } from 'src/app/shared/inhredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[]  = [
    new Ingredient('Eggs', 2),
    new Ingredient('Flour', 2),
  ];
  
  constructor() {

  }
}
