import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WildService {

  constructor() {
    console.log('ctor BeastsService', this.wilds);
  }
  wilds = [
    { name: 'lion', size: 'large', lifeSpan: '15y', habitat: 'africa', img: 'https://images.unsplash.com/photo-1552410260-0fd9b577afa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60' },
    { name: 'leopard', size: 'medium', lifeSpan: '10y', habitat: 'holand', img: 'https://images.unsplash.com/photo-1528238344097-a8994f7c74e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60' },
    { name: 'cheetah', size: 'medium', lifeSpan: '7y', habitat: 'israel', img: 'https://images.unsplash.com/photo-1534759846116-5799c33ce22a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60' },
    { name: 'panther', size: 'small', lifeSpan: '10y', habitat: 'africa', img: 'https://images.unsplash.com/photo-1557692538-9564c4b2cd13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60' },
  ]


  currentWildIndex = 0;
  Wild = this.wilds[this.currentWildIndex];
}

