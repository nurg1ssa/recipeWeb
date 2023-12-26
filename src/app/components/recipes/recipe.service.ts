import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';
import { Ingredient } from 'src/app/shared/inhredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  addedRecipes = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Princess Kiss Cake',
      'Good recipe for little girls parties',
      'https://img.taste.com.au/hbNtzI2Q/taste/2021/08/clinkers-cake-173208-2.jpg',
      [new Ingredient('Strawberry', 5), new Ingredient('Sugar powder', 2)]
    ),
    new Recipe(
      'Cheeseburger',
      'Very delicious',
      'https://upload.wikimedia.org/wikipedia/commons/4/43/Burger_King_Quad_Stacker_cheeseburger.jpg',
      [new Ingredient('Buns', 1), new Ingredient('Meat', 1)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes
    this.addedRecipes.next(this.recipes.slice())
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes.slice()[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.addedRecipes.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.addedRecipes.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.addedRecipes.next(this.recipes.slice());
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
