import { Component } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {
  recipe: Recipe
  id: number

  constructor(private recipeService: RecipeService, private route: ActivatedRoute){
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id']
        this.recipe = this.recipeService.getRecipe(this.id)
      }
    )
  }

  onAddToShoppingList(ingredients){
    this.recipeService.addIngredientsToShoppingList(ingredients)
  }
}
