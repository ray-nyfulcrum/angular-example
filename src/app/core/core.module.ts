import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { AppComponent } from './containers/root/app.component';
import { SampleComponent } from './components/sample/sample.component';

import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';

export const COMPONENTS = [AppComponent, LandingComponent, SampleComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule, MatCardModule, MatSidenavModule, RouterModule],
  exports: [COMPONENTS],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [],
    };
  }
}
