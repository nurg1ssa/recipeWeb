import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "src/app/shared/inhredient.model";

@Injectable()

export class ShoppingListService {
    addedIngredient = new EventEmitter<Ingredient[]>()

    private ingredients: Ingredient[]  = [
        new Ingredient('Eggs', 2),
        new Ingredient('Flour', 2),
      ];
    getIngredients(){
        return this.ingredients.slice()
    }

    addIngredient(ingredient){
        this.ingredients.push(ingredient)
        this.addedIngredient.emit(this.ingredients.slice())
    }
}