import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Observable';

  ngOnInit(): void {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [6, 7, 8, 9, 10];
    const obs = of(array1, array2);


    obs.subscribe({
      next: (x: any) => console.log(x),
      error: (err: string) => console.error('something wrong occurred: ' + err),
      complete: () => console.log('done'),
    });
  }


}
