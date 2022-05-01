import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PoatransportesService {

  url = environment.API_POAT

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<any>(this.url).pipe(map(data => data));
  }

}
