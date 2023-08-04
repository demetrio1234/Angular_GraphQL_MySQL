import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-directive',
  templateUrl: './ng-if-directive.component.html',
  styleUrls: ['./ng-if-directive.component.css']
})
export class NgIFDirectiveComponent implements DataObject {
  id: number = 0;
  name: string = '';
  surname: string = '';
  birthdate: string = '';

  dataObject: DataObject[] = [

  ]
  inputField: any;

  deleteObject(i: number) {
    this.dataObject.splice(i, 1);
  }
  addNewData() {
    this.dataObject.push({ id: 1, name: '', surname: '', birthdate: '' });
  }


}

interface DataObject {

  id: number;
  name: string;
  surname: string;
  birthdate: string;

}