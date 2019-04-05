import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OnlineService } from './services/online.service';
import { IndexedDbService } from './services/indexed-db.service';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  private apiBaseUrl: string;
  private headers: HttpHeaders;

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') baseUrl: string, private readonly onlineService: OnlineService, private dbService: IndexedDbService) {
    //this.apiBaseUrl = baseUrl + '/api/todo';
    this.apiBaseUrl = 'https://localhost:44397' + '/api/todo';
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.registetrToEvents(onlineService);
    this.dbService.createDatabase();
  }

  public getAllToDoes() {
    //TODO: get from local db as well.
    return Promise.all([
      this.dbService.getAllFromDatabase(),
      this.httpClient.get(this.apiBaseUrl).toPromise()]);
    //return this.httpClient
    //  .get(this.apiBaseUrl).toPromise();

  }
  public addToDo(payload) {
    console.log('POST payload', payload);
    if (this.onlineService.isOnline) {
      console.log('Online, sending right away');
      return this.httpClient
        .post(this.apiBaseUrl, payload).toPromise();
    }
    else {
      console.log('Offline, sending to local db');
      return this.dbService.addToDatabase(payload);
    }
  }

  //public removeToDo(payload) {
  //  return this.httpClient
  //    .delete(`${this.apiBaseUrl}/${payload.id}`);
  //}

  //public updateToDo(payload) {
  //  this.httpClient
  //    .put(`${this.apiBaseUrl}/${payload.id}`, payload);
  //}

  async sendFromDatabase() {
    const allItems = await this.dbService.getAllFromDatabase();
    console.log('Getting all items to sync.');
    allItems.forEach((item) => {
      //TODO: send items to backend
      console.log(`ToDo ${item.id} - ${item.name} sending to backend.`);
      this.addToDo({ name: item.name })
        .then(data => {
          this.dbService.deleteFromDatabase(item.id).then(() => {
            console.log(`ToDo ${item.id} - ${item.name} deleted from local database.`);
          })
        })
        .catch(e => {
          console.error(e);
        });
    });
  }

  private registetrToEvents(onlineService: OnlineService) {
    onlineService.connectionChanged.subscribe(online => {
      if (online) {
        console.log('Online now');

        this.sendFromDatabase();
      }
      else {
        console.log('Went offline');
      }
    });
  }
}
