import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { Employee } from './employee';
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

    this.getEmployee();
  }
  getEmployee(): void {
    this.heroService.getEmployee().subscribe(data => {
      console.log(data);
      this.mydata = data;
    });
  }
}
