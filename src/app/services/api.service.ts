import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  Url = 'http://localhost:5000/';
  data: any;
  constructor(private http: HttpClient) { }

  // post(DepressionQuestions) {
  //   return this.http.post<any>(this.Url + 'predict', DepressionQuestions);
  // }

  // post(DepressionQuestions) {
  //   return this.http.post<any>(this.Url + 'predict', DepressionQuestions);
  // }

  set probabilities(v) {
    localStorage.setItem("probabilities", v);
  }

  get probabilities() {
    return JSON.parse(localStorage.getItem("probabilities"))
  }
  post(DepressionQuestions) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST,GET DELETE, PUT');
    headers.append(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    return this.http.post<any>(this.Url + 'predict', DepressionQuestions, {
      headers: headers,
    });
  }

  async postT(DepressionQuestions: any) {
    return axios.post(this.Url + 'predict', DepressionQuestions)
  }
}
