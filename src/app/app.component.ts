import { Component } from '@angular/core';
import { HeroService } from './hero.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-karma';
  mydata = {};
  constructor(
    private heroService: HeroService
  ) {}
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.heroService.getEmployee().subscribe(data => {
      console.log(data);
      this.mydata = data;
    });
  }
}
