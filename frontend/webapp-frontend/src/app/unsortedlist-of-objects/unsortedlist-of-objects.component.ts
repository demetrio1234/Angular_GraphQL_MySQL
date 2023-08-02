import { Component } from '@angular/core';

@Component({
  selector: 'app-unsortedlist-of-objects',
  templateUrl: './unsortedlist-of-objects.component.html',
  styleUrls: ['./unsortedlist-of-objects.component.css']
})
export class UnsortedlistOfObjectsComponent implements MyObjectType, Message {
  user!: string;
  title!: string;
  content!: string;
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

  messageArray: Message[] = [
    { id: 0, user: 'user_0', title: 'title_0', content: 'content_0' },
    { id: 1, user: 'user_1', title: 'title_1', content: 'content_1' },
    { id: 2, user: 'user_2', title: 'title_2', content: 'content_2' },
    { id: 3, user: 'user_3', title: 'title_3', content: 'content_3' },
  ]

  tempInput: string = '';

  addNew() {
    this.messageArray.push({ id: this.messageArray.length, user: this.tempInput, title: '', content: '' });
  }
  removeLast(){
    this.messageArray.pop();
  }

  objectIndex!:number;
  removeObjectById(message: Message){
    let index = this.messageArray.indexOf(message);
    this.messageArray.splice(index, 1);
  }

}

interface MyObjectType {
  id: number;
  objectName: string;
  objectTitle: string;
}

interface Message {
  id: number;
  user: string;
  title: string;
  content: string;
}
