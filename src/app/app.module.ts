import {
  APP_BOOTSTRAP_LISTENER,
  APP_INITIALIZER,
  NgModule,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
// import {
//   bootstrapFactory,
//   initFactory,
//   InitService,
// } from './services/initialize.service';
import { configFactory, ConfigService } from './services/config.service';
import { AppRoutingModule } from './routing.module';
import { ProjectComponent } from './components/project.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule, CommonModule, AppRoutingModule],
  declarations: [AppComponent, ProjectComponent],
  bootstrap: [AppComponent],
  providers: [
    // {
    //   provide: APP_BOOTSTRAP_LISTENER,
    //   useFactory: bootstrapFactory,
    //   multi: true,
    //   deps: [InitService],
    // },
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initFactory,
    //   multi: true,
    //   deps: [InitService],
    // },
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      multi: true,
      deps: [ConfigService],
    },
  ],
})
export class AppModule {}
