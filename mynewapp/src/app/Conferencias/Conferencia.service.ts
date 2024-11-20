import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Conferencia } from './Conferencia';

@Injectable({
 providedIn: 'root'
})
export class ConferenciaService {

    private apiUrl: string = environment.baseUrl + 'conferencias';

    constructor(private http: HttpClient) { }
  
    getConferencias(): Observable<Conferencia[]> {
      return this.http.get<Conferencia[]>(this.apiUrl);

    }
}
