import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  apiUrl: string = 'https://projectapi.gerasim.in/api/BusBooking/';

  constructor(private http: HttpClient) {}

  getLocations() {
    return this.http.get(this.apiUrl + 'GetBusLocations');
  }
}
