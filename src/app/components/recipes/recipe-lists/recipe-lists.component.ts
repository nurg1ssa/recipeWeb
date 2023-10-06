import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-lists',
  templateUrl: './recipe-lists.component.html',
  styleUrls: ['./recipe-lists.component.css']
})
export class RecipeListsComponent {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a simply test', 'https://img.taste.com.au/hbNtzI2Q/taste/2021/08/clinkers-cake-173208-2.jpg'),
    new Recipe('A test recipe 2', 'This is a simply test 2', 'https://img.taste.com.au/hbNtzI2Q/taste/2021/08/clinkers-cake-173208-2.jpg')
  ]
  @Output() selectedRecipe = new EventEmitter<Recipe>()

  clickedRecipe(recipe: Recipe){
    this.selectedRecipe.emit(recipe)
  }
}
