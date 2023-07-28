import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { PostElementComponent } from '../post-element/post-element.component';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit, AfterViewInit {

  center: string = 'center';

  @ViewChild(PostElementComponent) postElementComponent!: PostElementComponent;

  variableOfCenter: string = '';

  recivedOutputFromChild:string ='';

  ngAfterViewInit(): void {

    console.log(this.postElementComponent.messageFromPostElement);

    this.center = this.postElementComponent.messageFromPostElement;

  }
  ngOnInit(): void {

  }

  reciveMessage($event: string) {
    console.log($event);
    this.recivedOutputFromChild = $event;
  }

}
