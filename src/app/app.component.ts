import { Component, effect, OnInit, signal } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  from,
  map,
  mergeMap,
  of,
  switchMap,
} from 'rxjs';
interface userInterface {
  id: string;
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
    const users = [
      {
        id: 1,
        name: 'Jack',
        age: 30,
      },
      {
        id: 2,
        name: 'Mike',
        age: 30,
      },
      {
        id: 3,
        name: 'John',
        age: 30,
      },
      {
        id: 4,
        name: 'Augustia',
        age: 30,
      },
    ];
    const messagePromise = new Promise((resolved) => {
      setTimeout(() => {
        resolved('Promise resolved!');
      }, 1000);
    });
    const users$ = of(users);
    const message$ = from(messagePromise);

    users$.subscribe((data) => {
      console.log(data);
    });
    message$.subscribe((data) => {
      console.log(data);
    });
  }
}
