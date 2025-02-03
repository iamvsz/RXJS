import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Observable';

  ngOnInit(): void {
    const obs =  from('Hello World');


    obs.subscribe({
      next: (x: any) => console.log(x),
      error: (err: string) => console.error('something wrong occurred: ' + err),
      complete: () => console.log('done'),
    });
  }


}
