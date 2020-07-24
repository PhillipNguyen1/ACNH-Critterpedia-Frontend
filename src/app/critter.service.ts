import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// import { Critter } from 'src/models/Critter';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CritterService {
  FISHES_URL = 'http://acnhapi.com/v1a/fish';
  BUGS_URL = 'http://acnhapi.com/v1a/bugs';
  // url = 'http://localhost:3000/api/fishes';

  constructor(private http: HttpClient) {}

  getFishes(): Observable<any[]> {
    return this.http.get<any[]>(this.FISHES_URL);
  }

  getFishById(id: string): Observable<any> {
    return this.http.get<any>(`${this.FISHES_URL}/${id}`);
  }

  getBugs(): Observable<any[]> {
    return this.http.get<any[]>(this.BUGS_URL);
  }

  getBugById(id: string): Observable<any> {
    return this.http.get<any>(`${this.BUGS_URL}/${id}`);
  }
}
