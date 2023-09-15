import { Recipe } from "./recipe.model";

export class RecipeService{
    private recipes :Recipe[]=[
        new Recipe('A Test Recipe 1','This is a simply a test','https://realfood.tesco.com/media/images/1400x919-HuntersChicken-1cddb648-ead8-4325-8e60-f80d1ca4ede3-0-1400x919.jpg'),
        new Recipe('A Test Recipe 2','This is a simply a test','https://realfood.tesco.com/media/images/1400x919-HuntersChicken-1cddb648-ead8-4325-8e60-f80d1ca4ede3-0-1400x919.jpg'),
      ];

    getRecipe(){
        return this.recipes.slice();
    }
}