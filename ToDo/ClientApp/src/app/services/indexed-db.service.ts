import { Injectable } from '@angular/core';
import Dexie from 'dexie';

@Injectable({
  providedIn: 'root'
})
export class IndexedDbService {
  private db: any;

  constructor() { }

  createDatabase() {
    this.db = new Dexie("ToDo");
    this.db.version(1).stores({
      toDos: '++uniqueId,name'
    });
  }

  async addToDatabase(toDo) {
    return this.db.toDos
      .add(toDo)
      .then(async () => {
        console.log('[IDB] Added to database', toDo);
        const allItems = await this.getAllFromDatabase();
        console.log('[IDB] New state', allItems);
      })
      .catch(e => {
        console.error('[IDB]', e);
      });
  }

  async getAllFromDatabase() {
    console.log('[IDB] Getting all items');
    let allItems = await this.db.toDos.toArray();
    console.log('[IDB] All items in db', allItems);
    return allItems;
  }

  deleteFromDatabase(id) {
    console.log('[IDB] Deleting item: ', id);
    return this.db.toDos.delete(id).then(() => {
      console.log(`[IDB] ${id} deleted.`);
    });
  }

  //async sendFromDatabase(sendingToBackendFunc) {
  //  const allItems = await this.getAllFromDatabase();
  //  console.log('Getting all items to sync.');
  //  allItems.forEach((item) => {
  //    //TODO: send items to backend
  //    console.log(`ToDo ${item.id} - ${item.name} deleted from local database.`);
  //    sendingToBackendFunc({ name: item.name })
  //      .subscribe(data => {
  //        this.db.toDos.delete(item.id).then(() => {
  //          console.log(`ToDo ${item.id} - ${item.name} deleted from local database.`);
  //        })
  //      });
  //  });
  //}
}
