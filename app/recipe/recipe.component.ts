import {Component} from 'angular2/core';
import {OnActivate, CanReuse, ComponentInstruction} from 'angular2/router';

import {IRecipe, RecipeService} from './recipe.service';

@Component({
    templateUrl : './app/recipe/recipe.component.html' 
})
export class RecipeComponent implements OnActivate, CanReuse {
    
    recipe : IRecipe;
    
    constructor(private recipeService : RecipeService){
        
    }
    
    routerOnActivate(nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction){
        let recipeId = +nextInstruction.params['id'];
        if(recipeId == 0){
            recipeId = 1 + Math.floor(Math.random() * 9);
        }
        this.recipeService.getRecipe(recipeId)
        .subscribe(r => this.recipe = r);
    }
    
    routerCanDeactivate(nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction){
        let recipeId = +prevInstruction.params['id'];
        return recipeId != 2;
    }
    
    routerCanReuse(nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction){
          let recipeId = +nextInstruction.params['id'];
          return recipeId != 0;
    }
    
}