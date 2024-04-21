import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipesComponent } from './recipes.component';
import { RecipeListsComponent } from './recipe-lists/recipe-lists.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipe-lists/recipe-item/recipe-item.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesStartComponent } from './recipes-start/recipes-start.component';
import { RecipesRoutingnModule } from './recipes.routing.module';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListsComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    RecipesStartComponent,
    RecipeEditComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    RecipesRoutingnModule,
  ],
  exports: [],
})
export class RecipesModule {}
