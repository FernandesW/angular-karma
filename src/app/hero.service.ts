import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private url = 'http://localhost:4200/api/status';
  constructor(private http: HttpClient) { }
  getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url);
  }
}
