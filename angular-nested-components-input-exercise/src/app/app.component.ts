import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-nested-components-input-exercise';
  myPosts: string[] =['Post 1','Post 2','Post 3','Post 4','Post 5'];
}
