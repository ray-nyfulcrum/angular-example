import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutePaths } from './constants';
import { LandingComponent } from './core/components/landing/landing.component';
import { SampleComponent } from './core/components/sample/sample.component';

const routes: Routes = [
  {
    path: RoutePaths.SAMPLE,
    component: SampleComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      scrollPositionRestoration: 'enabled', // Scrolls to top when route changes.
      // enableTracing: true  // Enable for debugging purposes.
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
