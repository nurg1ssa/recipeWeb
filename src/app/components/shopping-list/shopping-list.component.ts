import { Component, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/inhredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnDestroy{
  ingredients: Ingredient[]
  private subscription: Subscription

  constructor(private shoppingListService: ShoppingListService) {
    this.ingredients = this.shoppingListService.getIngredients()
    this.subscription = this.shoppingListService.addedIngredient.subscribe(
      ingredients => this.ingredients = ingredients
    )
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
