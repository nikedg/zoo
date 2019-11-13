import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeastsService {

  constructor() { 
    console.log('ctor BeastsService', this.beasts);
   }

   beasts=[
    { name:'cow', size: 'large', lifeSpan:'15y', habitat:'africa', img:'https://images.unsplash.com/photo-1490191943407-e44bafe496ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60' },
    { name:'pig', size: 'small', lifeSpan:'1y', habitat:'holand', img:'https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60' },
    { name:'ram', size: 'large', lifeSpan:'5y', habitat:'israel' , img:'https://images.unsplash.com/photo-1447783333881-70715fdf7aa3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60' },
    { name:'sheep', size: 'medium', lifeSpan:'10y', habitat:'africa' , img:'https://images.unsplash.com/photo-1470093014438-2ede8d7a4818?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'},
  ]
  
  
  currentBeastIndex = 0
  currentBeast = this.beasts[this.currentBeastIndex]
  
  
  
}
