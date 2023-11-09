import { Component } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-start',
  templateUrl: './recipes-start.component.html',
  styleUrls: ['./recipes-start.component.css']
})
export class RecipesStartComponent {
  selectedRecipe: Recipe
  constructor(private recipeService: RecipeService){
     this.recipeService.recipeSelected.subscribe(
        recipe => this.selectedRecipe = recipe
     )
  }
}
