import {Component} from 'angular2/core';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';

import {DemoService} from './recipe/demo.service';

import {WeeklyMenuComponent} from './recipe/weekly-menu.component';
import {HomeComponent} from './home.component';

@Component({
    selector : 'recipe-app',
    templateUrl : './app/app.component.html',
    directives: [WeeklyMenuComponent, ROUTER_DIRECTIVES],
    styleUrls:['./app/app.component.css'],
    providers: [DemoService, ROUTER_PROVIDERS]
})
@RouteConfig([
    { name : 'Home', path : 'home', component: HomeComponent, useAsDefault : true},
    { name : 'WeeklyMenu', path : 'weekly-menu', component: WeeklyMenuComponent}
])
export class AppComponent {
    message : string;
    
    constructor(service : DemoService){
        this.message = service.data = 'Hello World';
    }
}