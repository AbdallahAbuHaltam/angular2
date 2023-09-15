import { Component,OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[];
  constructor(private shoppinglistService:ShoppingListService){

  }
  ngOnInit(): void {
    this.ingredients= this.shoppinglistService.getIngredient();
    this.shoppinglistService.ingredientsChanged.subscribe((ingredient:Ingredient[])=>{
      this.ingredients=ingredient;
    });
  }


  //  onIngredientAdded(ingredient: Ingredient){
  //    this.shoppinglistService.addIngredient(ingredient);
  //  }
}
