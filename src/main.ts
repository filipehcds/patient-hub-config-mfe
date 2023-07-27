import './polyfills';

// import { enableProdMode, PLATFORM_INITIALIZER } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// import {
//   InitService,
//   platformInitFactory,
// } from './app/services/initialize.service';

platformBrowserDynamic()
//   [
//   {
//     provide: PLATFORM_INITIALIZER,
//     useValue: platformInitFactory,
//     multi: true,
//     deps: [InitService],
//   },
// ]
  .bootstrapModule(AppModule)
  .then((ref) => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
      window['ngRef'].destroy();
    }
    window['ngRef'] = ref;

    // Otherwise, log the boot error
  })
  .catch((err) => console.error(err));
