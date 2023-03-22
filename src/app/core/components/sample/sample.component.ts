import { Component } from '@angular/core';

import { RoutePaths } from 'src/app/constants';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
})
export class SampleComponent {
  rootPath = RoutePaths.ROOT;
}
