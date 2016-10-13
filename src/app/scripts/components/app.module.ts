import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { TimerComponent } from "./timer.component";
import { ButtonsComponent } from "./buttons.component";
import { TimerService } from '../services/timer.service';


@NgModule({
    imports: [ BrowserModule ],
    declarations: [
        AppComponent,
        TimerComponent,
        ButtonsComponent    
    ],
    providers: [ TimerService ],
    bootstrap: [ AppComponent ]
})
export class AppModule {

}