import { Component, ViewEncapsulation } from '@angular/core';

const template = require('./app.component.html');

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-component',
    template: template
    
})
export class AppComponent {
    
}
