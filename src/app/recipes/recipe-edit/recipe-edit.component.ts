import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number;
  editMode=false;
  recipeForm:FormGroup;
  constructor(private route:ActivatedRoute,private recipeService:RecipeService){
  
  }

  ngOnInit(): void {

     this.route.params.subscribe(
        (params:Params)=>{
          this.id=+params['id'];
          this.editMode=params['id']!=null;
          this.initForm();
        }
      );
  }

  private initForm(){
    let recipeName='';
    let recipeImageUrl='';
    let recipeDescription='';
    let recipeIngredients= new FormArray([]);

    if(this.editMode){
      const recipe = this.recipeService.getRecipee(this.id);
      recipeName=recipe.name;
      recipeImageUrl=recipe.imagePath;
      recipeDescription=recipe.description;
      if(recipe['ingredients']){
        for(let ingredient of recipe.ingredients){
          recipeIngredients.push(new FormGroup({
            'name':new FormControl(ingredient.name),
            'amount':new FormControl(ingredient.amount),
          }));
        }
      }

    }

    this.recipeForm=new FormGroup({
      'name':new FormControl(recipeName),
      'imagePath':new FormControl(recipeImageUrl),
      'description': new FormControl(recipeDescription),
      'ingredients': recipeIngredients
    });
  }

  onSubmit(){
    console.log(this.recipeForm);
  }

  onAddIngredients(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name':new FormControl(),
        'amount':new FormControl(),
      })
    );
  }

  get controls(){
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

 
}
