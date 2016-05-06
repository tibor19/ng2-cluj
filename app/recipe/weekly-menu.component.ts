import {Component} from 'angular2/core';
import {ImagePipeTransform} from '../pipes/image.pipe'; 
import {IRecipe, RecipeService} from './recipe.service';

@Component({
    selector: 'weekly-menu',
    templateUrl: './app/recipe/weekly-menu.component.html',
    pipes: [ImagePipeTransform],
    providers: [RecipeService]
})
export class WeeklyMenuComponent {
    weekDays = ['Moday', 'Tuesday', 'Wednesday'];

    recipes: IRecipe[];

    constructor(service : RecipeService) {
        this.recipes = service.getRecipes().map((r, i) => {
                r.weekDay = this.weekDays[i % this.weekDays.length];
                return r;
            });
    }


}