import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'Rxjs/observable';

export interface IRecipe {
    recipeId: number;
    name: string;
    price: number;
    time: number;
    image: string;
    weekDay?: string;
}

@Injectable() 
export class RecipeService {

    constructor(private http: Http){
        
    }
    
    getRecipes(): Observable<IRecipe[]> {
        
        return this.http.get('/Artifacts/data/recipies.json')
            .map(response => <IRecipe[]>response.json());
    }
    
    getRecipesPromise(): Promise<IRecipe[]> {
        
        return this.http.get('/Artifacts/data/recipies.json')
            .toPromise()
            .then(response => <IRecipe[]>response.json());
    }
    
}