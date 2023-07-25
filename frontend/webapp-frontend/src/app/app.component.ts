import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PostElementComponent } from './post-element/post-element.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'webapp-frontend';
  childMessageParentSight: string = '';

  @ViewChild(PostElementComponent) childComponent!:PostElementComponent;

  ngAfterViewInit(): void {
    //console.log(this.childComponent.childMessage);  
    this.childMessageParentSight = this.childComponent.childMessage;
    console.log(this.childMessageParentSight);
  }
  
}