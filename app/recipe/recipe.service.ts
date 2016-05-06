

export interface IRecipe {
    recipeId: number;
    name: string;
    price: number;
    time: number;
    image: string;
    weekDay?: string;
}

export class RecipeService {

    getRecipes(): IRecipe[] {
        return [{
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
        }, {
            "recipeId": 3,
            "name": "Pasta with Meatsauce",
            "price": 3.0,
            "time": 11,
            "image": "pasta-clip"
        }];
    }
}