import {MaterializeDirective} from 'angular2-materialize';
import {Component} from 'angular2/core';

import "angular2-materialize";

@Component({
    selector: 'app',
    templateUrl: 'app.html',
    directives: [MaterializeDirective]
})
export class AppComponent {
}