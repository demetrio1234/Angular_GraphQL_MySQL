import { Component } from '@angular/core';

@Component({
  selector: 'app-unsortedlist-of-objects',
  templateUrl: './unsortedlist-of-objects.component.html',
  styleUrls: ['./unsortedlist-of-objects.component.css']
})
export class UnsortedlistOfObjectsComponent implements MyObjectType{
  id!: number;
  objectName!: string;
  objectTitle!: string;
  
  objectsArray: MyObjectType[] = [
    { id: 0, objectName: 'object_0', objectTitle: 'objectTitle_0' },
    { id: 1, objectName: 'object_1', objectTitle: 'objectTitle_1' },
    { id: 2, objectName: 'object_2', objectTitle: 'objectTitle_2' },
    { id: 3, objectName: 'object_3', objectTitle: 'objectTitle_3' },
    { id: 4, objectName: 'object_4', objectTitle: 'objectTitle_4' },

  ];

}

interface MyObjectType {
  id: number;
  objectName: string;
  objectTitle: string;
}
