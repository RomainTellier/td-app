import {Component, OnInit} from '@angular/core';
import {NumberService} from "../services/number.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  data: string;

  constructor(private numberService: NumberService) {}

  ngOnInit() {
  }

  test() {
    this.numberService.getNumber()
      .subscribe(resp => {
      console.log(resp);
      this.data = resp;
      },
        () => {
      console.log('error');
      });
  }

  post() {
    this.numberService.postNumber()
      .subscribe(() => {
        console.log('ok')
        },
        () => {
          console.log('error');
        });
  }
}
