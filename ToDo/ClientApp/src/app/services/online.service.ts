import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

declare const window: any;

@Injectable({
  providedIn: 'root'
})
export class OnlineService {
  private internalConnectionChanged = new Subject<boolean>();
  constructor() {
    window.addEventListener('online', () => this.updateOnlineStatus());
    window.addEventListener('offline', () => this.updateOnlineStatus());
  }

  get connectionChanged() {
    return this.internalConnectionChanged.asObservable();
  }

  get isOnline() {
    return !!window.navigator.onLine;
  }

  private updateOnlineStatus() {
    this.internalConnectionChanged.next(window.navigator.onLine);
  }
}
