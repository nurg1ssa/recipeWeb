import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-lists',
  templateUrl: './recipe-lists.component.html',
  styleUrls: ['./recipe-lists.component.css']
})
export class RecipeListsComponent {
  recipes: Recipe[]

  constructor(private recipeService: RecipeService){
    this.recipes = this.recipeService.getRecipes()
  }
  @Output() selectedRecipe = new EventEmitter<Recipe>()

  clickedRecipe(recipe: Recipe){
    this.selectedRecipe.emit(recipe)
  }
}
