import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes.component";
import { AuthGuard } from "src/app/auth/auth.guard";
import { RecipesStartComponent } from "./recipes-start/recipes-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RecipeResolver } from "./recipe-resolver.service";

const routes: Routes = [
    {
        path: 'recipes',
        component: RecipesComponent,
        canActivate: [AuthGuard],
        children: [
          { path: '', component: RecipesStartComponent },
          { path: 'new', component: RecipeEditComponent },
          {
            path: ':id',
            component: RecipeDetailsComponent,
            resolve: [RecipeResolver],
          },
          {
            path: ':id/edit',
            component: RecipeEditComponent,
            resolve: [RecipeResolver],
          },
        ],
      },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})

export class RecipesRoutingnModule {

}