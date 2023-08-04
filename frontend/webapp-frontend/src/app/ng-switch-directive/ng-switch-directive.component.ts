import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch-directive',
  templateUrl: './ng-switch-directive.component.html',
  styleUrls: ['./ng-switch-directive.component.css']
})
export class NgSwitchDirectiveComponent {

stepForm: any;

  onClick(arg0: string) {
    this.stepForm = arg0;
  }

}
