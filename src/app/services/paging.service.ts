import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagingService {
  public currentPanel: string;

  constructor() {
    console.log('pagingSevice ctor, currentPanel = ' + this.currentPanel);
   }
}
