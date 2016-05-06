import {Component} from 'angular2/core';
import {ImagePipeTransform} from '../pipes/image.pipe'; 

interface IRecipe {
    recipeId: number;
    name: string;
    price: number;
    time: number;
    image: string;
    weekDay?: string;
}

@Component({
    selector: 'weekly-menu',
    templateUrl: './app/recipe/weekly-menu.component.html',
    pipes: [ImagePipeTransform]
})
export class WeeklyMenuComponent {
    weekDays = ['Moday', 'Tuesday', 'Wednesday'];

    recipes: IRecipe[];

    constructor() {
        this.recipes = [{
            "recipeId": 1,
            "name": "Fish sticks and Rice",
            "price": 2.0,
            "time": 20,
            "image": "fishsticks-mine"
        }, {
                "recipeId": 2,
                "name": "Pizza",
                "price": 13.0,
                "time": 30,
                "image": "pizza-clip"
            }].map((r: IRecipe, i: number) => {
                r.weekDay = this.weekDays[i % this.weekDays.length];
                return r;
            });
    }


}