import { Component,OnDestroy,OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit,OnDestroy{
recipe:Recipe;
id:number;
private igChangeSub:Subscription;

constructor(private recipeService:RecipeService,private route:ActivatedRoute,private router: Router){

}
ngOnInit() {
  this.igChangeSub=this.route.params.subscribe(
    (params:Params)=>{
      this.id=+params['id'];
      this.recipe=this.recipeService.getRecipee(this.id);
    }
  );
}
ngOnDestroy(): void {
  this.igChangeSub.unsubscribe();
}

onAddToShoppingList(){
this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
}
onEditRecipe(){
this.router.navigate(['edit'],{relativeTo:this.route});
}
}
