import {Component} from 'angular2/core';
import {WeeklyMenuComponent} from './recipe/weekly-menu.component';

@Component({
    selector : 'recipe-app',
    templateUrl : './app/app.component.html',
    directives: [WeeklyMenuComponent],
    styleUrls:['./app/app.component.css']
})
export class AppComponent {
    message : string;
    
    constructor(){
        this.message = 'Hello World';
    }
}