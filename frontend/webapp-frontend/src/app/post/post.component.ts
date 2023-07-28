import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  ngOnInit(): void {
    //
  }
  contentOfChild: string = 'contentOfChild';
  messageFromChild: string = 'Hi Parent!';

  @Output() outputEventEmitter = new EventEmitter<string>();

  ouputFromPost: string = 'output message from Post Component';

  sendMessageEvent(){
    console.log('sendMessageEvent works!');
  }

}
