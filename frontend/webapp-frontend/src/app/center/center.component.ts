import { Component } from '@angular/core';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements Post {

  error: boolean = false
  post_user_name: string = '';
  post_title: string = '';
  post_content: string = '';
  errorMessage: string = '';
  today: number = 0;
  dateControllerNumber: number = 0;
  username_birthdate: Date = new Date();

  postArray: Post[] = []

  isOver18: boolean = false;

  EIGHTEEN_YEARS = 1000 * 60 * 60 * 24 * 365 * 18

  addNewPost(post_user_name: string, username_birthdate: string, post_title: string, post_content: string) {

    let tempBirthdate = new Date(this.username_birthdate)

    let difference = this.millisecondsBetween(tempBirthdate, new Date())

    this.isOver18 = difference >= 18;

    if (this.post_user_name.length < 4) {

      this.errorMessage = 'Bitte den Benutzername hinzufügen!'
      this.error = true;

    } else if (this.post_title.length < 4) {

      this.errorMessage = 'Bitte den Post-Titel hinzufügen!'
      this.error = true;

    } else if (this.post_content.length < 5) {

      this.errorMessage = 'Kein leeres Post, bitte Inhalt hinzufügen!'
      this.error = true;

    } else if (!this.isOver18) {

      this.errorMessage = 'Du bist zu jung!';

      this.error = true;

    } else {

      this.error = false;

      this.postArray.push(
        {
          post_user_name: this.post_user_name,
          post_title: this.post_title,
          post_content: this.post_content,
          username_birthdate: this.username_birthdate,
        });

    }

  }

  deletePost(i: number) {
    this.postArray.splice(i, 1)
  }

  /**
   * 
   */
  millisecondsBetween = function (date1: Date, date2: Date) {
    //Get 1 day in milliseconds
    var one_day = 1000 * 60 * 60 * 24;

    // Convert both dates to milliseconds
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();

    // Calculate the difference in milliseconds
    var difference_ms = date2_ms - date1_ms;

    // Convert back to days and return
    return Math.round(difference_ms / (one_day * 365));
  }

}

interface Post {
  post_user_name: string,
  post_title: string,
  post_content: string,
  username_birthdate: Date,
}
