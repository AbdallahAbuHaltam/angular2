import { Component,OnDestroy,OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients:Ingredient[];
  private igChangeSub:Subscription;
  constructor(private shoppinglistService:ShoppingListService){

  }
  ngOnInit(): void {
    this.ingredients= this.shoppinglistService.getIngredient();
    this.igChangeSub=this.shoppinglistService.ingredientsChanged.subscribe((ingredient:Ingredient[])=>{
      this.ingredients=ingredient;
    });
  }
  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }

  onEdit(index:number){
    this.shoppinglistService.startEditing.next(index);
  }

  //  onIngredientAdded(ingredient: Ingredient){
  //    this.shoppinglistService.addIngredient(ingredient);
  //  }
}
