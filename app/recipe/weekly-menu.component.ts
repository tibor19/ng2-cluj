import {Component} from 'angular2/core';
import {ImagePipeTransform} from '../pipes/image.pipe'; 
import {IRecipe, RecipeService} from './recipe.service';
import {DemoService} from './demo.service';

@Component({
    selector: 'weekly-menu',
    templateUrl: './app/recipe/weekly-menu.component.html',
    pipes: [ImagePipeTransform],
    providers: [DemoService]
})
export class WeeklyMenuComponent {
    weekDays = ['Moday', 'Tuesday', 'Wednesday'];
    data: string;

    recipes: IRecipe[];

    constructor(service : RecipeService, demoService : DemoService) {
        this.recipes = service.getRecipes().map((r, i) => {
                r.weekDay = this.weekDays[i % this.weekDays.length];
                return r;
            });
            
            this.data = demoService.data;
    }


}