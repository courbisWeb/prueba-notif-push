import { Component } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import {mergeMapTo} from "rxjs";

@Component({
  selector: 'app-root',
  template: `
  <button (click)="requestPermission()">
    Hello this is a chat app. You should let us send you notifications for this reason.
  </button>
  `
})
export class AppComponent {

  constructor(private afMessaging: AngularFireMessaging) {
    this.getToken();
  }

  requestPermission() {
    this.afMessaging.requestPermission
      .pipe(mergeMapTo(this.afMessaging.tokenChanges))
      .subscribe(
        (token) => { console.log('Permission granted! Save to the server!', token); },
        (error) => { console.error(error); },
      );
  }

  getToken(){
    this.afMessaging.getToken.subscribe((res)=> console.log('Token:', res));
  }
}
