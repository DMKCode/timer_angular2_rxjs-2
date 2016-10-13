import { NgModuleRef } from "@angular/core";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from "./components/app.module";

// enableProdMode(); //Uncomment for production

platformBrowserDynamic().bootstrapModule(AppModule);
