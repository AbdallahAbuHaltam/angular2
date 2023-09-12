import { Component,ElementRef,ViewChild,EventEmitter,Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
@ViewChild('nameInput',{static:false}) name:ElementRef;
@ViewChild('amountInput',{static:false}) amount:ElementRef;
@Output() ingredientAdded=new EventEmitter<Ingredient>();


  onAddItem(){
    const newIngredient=new Ingredient(this.name.nativeElement.value,this.amount.nativeElement.value);
    this.ingredientAdded.emit(newIngredient);
  }
}
