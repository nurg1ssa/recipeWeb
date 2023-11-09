import { RouterModule, Routes } from "@angular/router";
import { ShoppingListComponent } from "./components/shopping-list/shopping-list.component";
import { RecipesComponent } from "./components/recipes/recipes.component";
import { NgModule } from "@angular/core";
import { RecipeDetailsComponent } from "./components/recipes/recipe-details/recipe-details.component";
import { RecipesStartComponent } from "./components/recipes/recipes-start/recipes-start.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'shopping-list', component: ShoppingListComponent},
    {path: 'recipes', component: RecipesComponent, children: [
        {path: '', component: RecipesStartComponent},
        {path: ':id', component: RecipeDetailsComponent}
    ]},
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{

}