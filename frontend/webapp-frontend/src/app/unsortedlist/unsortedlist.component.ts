import { Component } from '@angular/core';

@Component({
  selector: 'app-unsortedlist',
  templateUrl: './unsortedlist.component.html',
  styleUrls: ['./unsortedlist.component.css']
})
export class UnsortedlistComponent {


  postArray: Array<string> = ['Post_0', 'Post_1', 'Post_2', 'Post_3', 'Post_4', 'Post_5'];

  gnome: Array<string> = ['Arr_0', 'Arr_1', 'Arr_2', 'Arr_3', 'Arr_4', 'Arr_5', 'Arr_6',];

  constructor() {


  }

}
