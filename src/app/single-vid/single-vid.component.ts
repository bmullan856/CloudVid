import { Component } from '@angular/core';

@Component({
  selector: 'app-single-vid',
  templateUrl: './single-vid.component.html',
  styleUrls: ['./single-vid.component.scss']
})
export class SingleVidComponent {
  data: any = {
    'title': 'Best Movie ever',
     'publisher':  "brendan Movie Production",
     'producer': 'Tom Hanks',
     'genre': 'Commady',
     "age": "18 +",
  }

}
