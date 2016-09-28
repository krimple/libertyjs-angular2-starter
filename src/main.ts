import './polyfills.ts';
import 'hammerjs';   // for material design
import '!style!css!sass!../node_modules/bootstrap/scss/bootstrap-flex.scss';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
