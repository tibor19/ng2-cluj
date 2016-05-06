import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {RecipeService} from './recipe/recipe.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx'; 

bootstrap(AppComponent, [HTTP_PROVIDERS, RecipeService]);

