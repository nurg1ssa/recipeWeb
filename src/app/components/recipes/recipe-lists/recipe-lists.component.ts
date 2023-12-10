import { Component, OnDestroy } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-lists',
  templateUrl: './recipe-lists.component.html',
  styleUrls: ['./recipe-lists.component.css']
})
export class RecipeListsComponent implements OnDestroy {
  recipes: Recipe[]
  private subscription: Subscription



  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) {
    this.recipes = this.recipeService.getRecipes()
    this.subscription = this.recipeService.addedRecipes.subscribe(
      recipes => this.recipes = recipes
    )
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
