import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Passenger } from '../Passenger';
import { Observable } from 'rxjs';


const httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  private apiUrl = 'http://localhost:5000/passenger'

  constructor(
    private http: HttpClient
  ) { }

  addPassenger(passenger:Passenger): Observable<Passenger>{
    
    return this.http.post<Passenger>(this.apiUrl,passenger,httpOptions)
    
  }
}
