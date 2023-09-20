import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
import { EventEmitter,Injectable } from '@angular/core';

@Injectable()
export class RecipeService{
    recipeSelected=new Subject<Recipe>();
    private recipes :Recipe[]=[
        new Recipe('A Test Recipe 1',
        'This is a simply a test',
        'https://realfood.tesco.com/media/images/1400x919-HuntersChicken-1cddb648-ead8-4325-8e60-f80d1ca4ede3-0-1400x919.jpg',
        [new Ingredient('Meat',1),new Ingredient('Bread',2)]),
        new Recipe('A Test Recipe 2',
        'This is a simply a test',
        'https://realfood.tesco.com/media/images/1400x919-HuntersChicken-1cddb648-ead8-4325-8e60-f80d1ca4ede3-0-1400x919.jpg',
        [new Ingredient('SSS',1),new Ingredient('BBB',2)]),
      ];

     constructor(private shoppinglistService:ShoppingListService){

     } 

    getRecipe(){
        return this.recipes.slice();
    }

    getRecipee(id :number){
        return this.recipes[id];
    }

    addIngredientToShoppingList(ingredient:Ingredient[]){
        this.shoppinglistService.addIngredients(ingredient);
    }

}