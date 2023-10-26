import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/inhredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('ingredientName') ingredientName: ElementRef
  @ViewChild('ingredientAmount') ingredientAmount: ElementRef

  constructor(private shoppingListService: ShoppingListService){
  }

  onAdd(){
    const ingName = this.ingredientName.nativeElement.value
    const ingAmount = this.ingredientAmount.nativeElement.value
    const newIngredient = new Ingredient(ingName, ingAmount)
    this.shoppingListService.addIngredient(newIngredient)
  }
   

}
