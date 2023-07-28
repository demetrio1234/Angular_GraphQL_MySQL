import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post-element',
  templateUrl: './post-element.component.html',
  styleUrls: ['./post-element.component.css']
})

export class PostElementComponent implements OnInit {

  @Output() outputEventEmitter = new EventEmitter<string>();

  messageFromPostElement: string = 'I\'m a post-element article!';

  outputMessageFromPostElementComponent: string = 'Output from the PostElementComponent works!';

  emittedMessageFromPostElementComponent: string = 'emittedMessageFromPostElementComponent works!';

  ngOnInit(): void {

  }



  clickEventFromButtonOfPostElementComponent() {
    console.log('Output on click from post element component works!');

    this.outputEventEmitter.emit(this.emittedMessageFromPostElementComponent);
  }


}
