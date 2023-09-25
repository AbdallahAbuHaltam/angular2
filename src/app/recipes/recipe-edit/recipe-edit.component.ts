import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { FormControl, FormGroup } from '@angular/forms';

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


    if(this.editMode){
      const recipe = this.recipeService.getRecipee(this.id);
      recipeName=recipe.name;
      recipeImageUrl=recipe.imagePath;
      recipeDescription=recipe.description;
    }

    this.recipeForm=new FormGroup({
      'name':new FormControl(),
      'imagePath':new FormControl(),
      'description': new FormControl()
    });
  }
}
