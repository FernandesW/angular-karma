import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HeroService } from './hero.service';

describe('HeroService', () => {
  let heroService: HeroService;
  let httpMock: HttpTestingController;
  beforeEach(() => {

  TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [HeroService]
  })
  heroService = TestBed.get(HeroService);
  httpMock = TestBed.get(HttpTestingController);
  });
  it(`should fetch posts as an Observable`, async(inject([HttpTestingController, HeroService],
    (httpClient: HttpTestingController, heroService: HeroService) => {
      const objData=[
        {
          "message":"O",
          "title":"bas kar madarc"
        }
      ];
      heroService.getEmployee().subscribe((data:any)=>{
        console.log('====================================')
        console.log(data)
        
        console.log('====================================')
        console.log(data)
        console.log(objData)
        

      })
      let req = httpMock.expectOne('http://localhost:4200/api/status');
     
      req.flush(objData);
      httpMock.verify();

    })));

});
