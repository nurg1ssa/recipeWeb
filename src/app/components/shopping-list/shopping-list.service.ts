import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "src/app/shared/inhredient.model";

@Injectable()

export class ShoppingListService {
    addedIngredient = new Subject<Ingredient[]>()
    startedEditting = new Subject<number>()

    private ingredients: Ingredient[]  = [
        new Ingredient('Eggs', 2),
        new Ingredient('Flour', 2),
      ];
    getIngredients(){
        return this.ingredients.slice()
    }

    getIngredient(index: number){
        return this.ingredients[index]
    }


    addIngredient(ingredient){
        this.ingredients.push(ingredient)
        this.addedIngredient.next(this.ingredients.slice())
    }

    addIngredients(ingredients){
        this.ingredients.push(...ingredients)
        this.addedIngredient.next(this.ingredients.slice())
    }x
}