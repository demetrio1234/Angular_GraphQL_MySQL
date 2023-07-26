import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  constructor(private cd: ChangeDetectorRef) {
    
  }
  

  title = 'webapp-frontend';

  @ViewChild(PostComponent) childComponent: any;

  ngAfterViewInit() {
    console.log(this.childComponent);

  }

}