// node module imports
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// localimport
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//load up modules e.g bootstrap module
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
