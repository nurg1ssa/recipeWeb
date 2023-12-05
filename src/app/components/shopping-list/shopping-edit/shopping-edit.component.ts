import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/inhredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f',{static: false}) form: NgForm
  subscription: Subscription
  editMode = false
  edtittedItemIndex: number
  editedItem: Ingredient

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditting.subscribe(
      (index: number) => {
        this.edtittedItemIndex = index
        this.editMode = true
        this.editedItem = this.shoppingListService.getIngredient(index)
        this.form.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    )
  }

  onSubmitItem(form: NgForm) {
    const value = form.value
    const newIngredient = new Ingredient(value.name, value.amount)
    this.editMode ? 
    this.shoppingListService.updateIngredient(this.edtittedItemIndex, newIngredient) : 
    this.shoppingListService.addIngredient(newIngredient)
    this.editMode = false
    form.reset()
  }

  onClear(){
    this.form.reset()
    this.editMode = false
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}

