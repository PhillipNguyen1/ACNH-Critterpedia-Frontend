import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Critter } from 'src/models/Critter';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CritterService {
  url = 'http://localhost:3000/api/fishes';

  constructor(private http: HttpClient) {}

  getFishes(): Observable<Critter[]> {
    return this.http.get<Critter[]>(this.url);
  }

  getFishById(id: string): Observable<Critter> {
    return this.http.get<Critter>(`${this.url}/${id}`);
  }
}
