import { Component } from '@angular/core';

import { RoutePaths } from 'src/app/constants';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent {
  readonly RoutePaths = RoutePaths;

  mainPaths = {
    sample: {
      path: [RoutePaths.SAMPLE],
    },
  };
}
