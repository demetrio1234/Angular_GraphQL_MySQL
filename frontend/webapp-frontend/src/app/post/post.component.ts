import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Output() outputEventEmitter = new EventEmitter<string>();
  messageFromChild: string = 'Hi Parent!';
  ouputFromPost: string = 
      'output message from Post Component';
  ngOnInit(): void {}
  
  sendMessageEvent(){ 
      console.log('sendMessageEvent works!');
  }
}
