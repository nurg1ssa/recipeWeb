import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/inhredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('ingredientName') ingredientName: ElementRef
  @ViewChild('ingredientAmount') ingredientAmount: ElementRef

  @Output() addIngredient =  new EventEmitter<Ingredient>()

  onAdd(){
    const ingName = this.ingredientName.nativeElement.value
    const ingAmount = this.ingredientAmount.nativeElement.value
    const newIngredient = new Ingredient(ingName, ingAmount)
    this.addIngredient.emit(newIngredient)
  }
   

}
