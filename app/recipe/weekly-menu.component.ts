import {Component, OnInit} from 'angular2/core';
import {ImagePipeTransform} from '../pipes/image.pipe'; 
import {IRecipe, RecipeService} from './recipe.service';
import {DemoService} from './demo.service';

@Component({
    templateUrl: './app/recipe/weekly-menu.component.html',
    pipes: [ImagePipeTransform],
    providers: [DemoService]
})
export class WeeklyMenuComponent implements OnInit {
    weekDays = ['Moday', 'Tuesday', 'Wednesday'];
    data: string;

    recipes: IRecipe[];

    constructor(private service : RecipeService, demoService : DemoService) {
        this.data = demoService.data;
    }

    ngOnInit(){
        // this.service.getRecipes().subscribe(
        this.service.getRecipesPromise().then(
            recipes => this.recipes = recipes.map((r, i) => {
                r.weekDay = this.weekDays[i % this.weekDays.length];
                return r;
            }));
    }

}