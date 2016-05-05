import {Component, OnInit} from 'angular2/core';
import {IRecipe, RecipeService} from './recipe.service';
import {ImagePipeTransform} from '../pipes/image';

@Component({
    templateUrl : './app/recipe/weekly-menu.component.html',
    pipes: [ImagePipeTransform]
})
export class WeeklyMenuComponent implements OnInit {
    private daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    title = 'Weekly Menu';
    recipes : IRecipe[];
    
    constructor(private recipeService: RecipeService) {
    }
    
    ngOnInit(){
        this.recipes = this.recipeService.getRecipes().map((r, i) => {
            r.dayOfWeek = this.daysOfWeek[i%this.daysOfWeek.length];
            return r;
        });
    }
}