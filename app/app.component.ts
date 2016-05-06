import {Component} from 'angular2/core';
import {WeeklyMenuComponent} from './recipe/weekly-menu.component';
import {DemoService} from './recipe/demo.service';

@Component({
    selector : 'recipe-app',
    templateUrl : './app/app.component.html',
    directives: [WeeklyMenuComponent],
    styleUrls:['./app/app.component.css'],
    providers: [DemoService]
})
export class AppComponent {
    message : string;
    
    constructor(service : DemoService){
        this.message = service.data = 'Hello World';
    }
}