
import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  postTitle: string = '';

  postDetails: string = '';

  postImageURL: string = '';

  postURL: string = '';

  addBackground: boolean = false;

  titleBackgroundColor: boolean = false;


  onCheckboxChange() {

    this.addBackground = !(this.addBackground);
    console.log(this.addBackground);
  }

  onClicButtonContinue() {

  }

}
