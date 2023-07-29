import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { PostElementComponent } from '../post-element/post-element.component';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit, AfterViewInit {
  @Input() inputMessageFromParent!: string;

  @ViewChild(PostElementComponent) postElementComponent!:
    PostElementComponent;
  
  center: string = 'centerContent';
  
  recivedOutputFromChild: string = '';
  
  ngAfterViewInit(): void {
    this.center = this.postElementComponent.messageFromPostElement;
  }
  
  ngOnInit(): void { }
  
  reciveMessage($event: string) {
    this.recivedOutputFromChild = $event;
  }

}