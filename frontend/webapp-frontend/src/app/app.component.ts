import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild(PostComponent) childComponent!: PostComponent;

  constructor(private cd: ChangeDetectorRef) { }

  title: string = 'webapp-frontend';

  inputMessageFromParent: string = 'this is the inputMessageFromParent';

  ngAfterViewInit() {

    //this.title = this.childComponent.messageFromChild;

    //this.cd.detectChanges();

  }

}