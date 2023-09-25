import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import {  NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
subscription:Subscription;
editMode=false;
editIndexItem:number;
editedIngredient:Ingredient;
@ViewChild('f',{static:false}) slForm:NgForm;

constructor(private shoppingListService:ShoppingListService){

}
ngOnInit(): void {
  this.subscription=this.shoppingListService.startEditing.subscribe(
    (index:number)=>{
      this.editMode=true;
      this.editIndexItem=index;
      this.editedIngredient=this.shoppingListService.getIngredientt(index);
      this.slForm.setValue({
        name: this.editedIngredient.name,
        amount:this.editedIngredient.amount
      });
    }
  );
}

  onSubmit(form:NgForm){
    const value=form.value;
    const newIngredient=new Ingredient(value.name,value.amount);
    if(this.editMode){
      this.shoppingListService.updateIngredient(this.editIndexItem,newIngredient);
    }
    else{
      this.shoppingListService.addIngredient(newIngredient);

    }
    this.editMode=false;
    form.reset();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
