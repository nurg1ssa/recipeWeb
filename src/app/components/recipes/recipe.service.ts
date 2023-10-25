import { Recipe } from "./recipes.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'This is a simply test', 'https://img.taste.com.au/hbNtzI2Q/taste/2021/08/clinkers-cake-173208-2.jpg'),
        new Recipe('A test recipe 2', 'This is a simply test 2', 'https://img.taste.com.au/hbNtzI2Q/taste/2021/08/clinkers-cake-173208-2.jpg')
      ]

      getRecipes() {
        return this.recipes.slice()
      }
}