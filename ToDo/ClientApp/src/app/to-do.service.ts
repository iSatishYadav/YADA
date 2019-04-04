import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  private apiBaseUrl: string;
  private headers: HttpHeaders;
  constructor(private httpClient: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.apiBaseUrl = baseUrl + '/api/todo';
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  }

  public getAllToDoes() {
    return this.httpClient
      .get(this.apiBaseUrl);
  }
  public addToDo(payload) {
    console.log('POST payload', payload);
    return this.httpClient
      .post(this.apiBaseUrl, payload);
  }

  public removeToDo(payload) {
    return this.httpClient
      .delete(`${this.apiBaseUrl}/${payload.id}`);
  }

  public updateToDo(payload) {
    this.httpClient
      .put(`${this.apiBaseUrl}/${payload.id}`, payload);
  }

}
