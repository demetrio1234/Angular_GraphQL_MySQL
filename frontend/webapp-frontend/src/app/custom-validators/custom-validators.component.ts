import { Component } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-custom-validators',
  templateUrl: './custom-validators.component.html',
  styleUrls: ['./custom-validators.component.css']
})
export class CustomValidatorsComponent {



  AgeValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    if (control.value > 18) {
      return { age: true };
    }
    return null;
  }

}