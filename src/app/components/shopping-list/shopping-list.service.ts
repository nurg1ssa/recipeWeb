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

    updateIngredient(index: number, newIngredient:Ingredient){
        this.ingredients[index] = newIngredient
        this.addedIngredient.next(this.ingredients.slice())
    }

    deleteIngredient(index: number){
        this.ingredients.splice(index, 1)
        this.addedIngredient.next(this.ingredients.slice())

    }

    addIngredients(ingredients){
        this.ingredients.push(...ingredients)
        this.addedIngredient.next(this.ingredients.slice())
    }x
}