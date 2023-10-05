import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  BASEURL = environment.BASEURL
  constructor(private http: HttpClient) {
  }

  findAll() {
    return this.http.get(`${this.BASEURL}/dashboard`)
  }
}
