import { Component } from '@angular/core';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipe-lists',
  templateUrl: './recipe-lists.component.html',
  styleUrls: ['./recipe-lists.component.css']
})
export class RecipeListsComponent {
  recipes: Recipes[] = [
    new Recipes('A test recipe', 'This is a simply test', 'https://img.taste.com.au/hbNtzI2Q/taste/2021/08/clinkers-cake-173208-2.jpg'),
    new Recipes('A test recipe', 'This is a simply test', 'https://img.taste.com.au/hbNtzI2Q/taste/2021/08/clinkers-cake-173208-2.jpg')
  ]
}
