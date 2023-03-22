import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './core/containers/root/app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, CoreModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
