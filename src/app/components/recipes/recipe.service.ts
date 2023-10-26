import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipes.model";
import { Ingredient } from "src/app/shared/inhredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";


@Injectable()

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
    new Recipe(
      'Princess Kiss Cake',
      'Good recipe for little girls parties',
      'https://img.taste.com.au/hbNtzI2Q/taste/2021/08/clinkers-cake-173208-2.jpg',
      [
        new Ingredient('Strawberry', 5),
        new Ingredient('Sugar powder', 2)
      ]),
    new Recipe(
      'Cheeseburger',
      'Very delicious',
      'https://upload.wikimedia.org/wikipedia/commons/4/43/Burger_King_Quad_Stacker_cheeseburger.jpg',
      [
        new Ingredient('Buns', 1),
        new Ingredient('Meat', 1),
      ])
  ]

  constructor(private slService: ShoppingListService){

  }

  getRecipes() {
    return this.recipes.slice()
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients)
  }
}