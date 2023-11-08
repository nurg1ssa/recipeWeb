import { RouterModule, Routes } from "@angular/router";
import { ShoppingListComponent } from "./components/shopping-list/shopping-list.component";
import { RecipesComponent } from "./components/recipes/recipes.component";
import { NgModule } from "@angular/core";

const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'shopping-list', component: ShoppingListComponent},
    {path: 'recipes', component: RecipesComponent},
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{

}