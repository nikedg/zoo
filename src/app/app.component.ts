import { WildService } from './services/wild.service';
import { Component } from '@angular/core';
import { PagingService } from './services/paging.service';
import { BirdService } from './services/bird.service';
import { BeastsService } from './services/beasts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'avra-zoo';

  constructor(public paging: PagingService, public birds: BirdService,
    public beasts: BeastsService, public wilds: WildService) { }

  getUp(ev: number) {
    // console.log('AppComponent  getUp', ev);

    switch (this.paging.currentPanel) {
      case 'birds':
        const newBirdIndex = this.getNewCuurentIndex(this.birds.currentBirdIndex, ev, this.birds.birds);
        this.birds.currentBirdIndex = newBirdIndex;
        this.birds.currentBird = this.birds.birds[newBirdIndex];
        break;
      case 'beasts':
        const newCowIndex = this.getNewCuurentIndex(
          this.beasts.currentBeastIndex, ev, this.beasts.beasts);
        this.beasts.currentBeastIndex = newCowIndex;
        this.beasts.currentBeast = this.beasts.beasts[newCowIndex];
        break;
      case 'wilds':
        const newWildIndex = this.getNewCuurentIndex(
          this.wilds[this.wilds.currentWildIndex], ev, this.wilds.wilds);
        this.wilds[this.wilds.currentWildIndex] = newWildIndex;
        this.wilds[this.wilds.currentWildIndex] = this.wilds.wilds[newWildIndex];
        break;

      default:
        break;
    }

  }

  private getNewCuurentIndex(current: number, delta: number, array: {}[]): number {
    const max = array.length - 1;
    let newIndex = current + delta;
    if (newIndex > max) {
      newIndex = 0;
    }
    if (newIndex < 0) {
      newIndex = max;
    }
    return newIndex;
  }

}
