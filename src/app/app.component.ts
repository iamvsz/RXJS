import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Observable';

  ngOnInit(): void {
    const obs =  new  Observable (observer => {
      observer.next('1'),
        observer.next('2'),
        observer.next('3'),

        observer.complete()
    })


    obs.subscribe({
      next: x => console.log(x),
      error: err => console.error('something wrong occurred: ' + err),
      complete: () => console.log('done'),
    });
  }


}
