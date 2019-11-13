import { WildService } from './../services/wild.service';
import { Component, OnInit } from '@angular/core';
import { BeastsService } from '../services/beasts.service';

@Component({
  selector: 'app-wild-card',
  templateUrl: './wild-card.component.html',
  styleUrls: ['./wild-card.component.css']
})
export class WildCardComponent implements OnInit {

  constructor(public wildSvc: WildService, public wilds: WildService) {
    console.log('WildCardComponent ctor');
  }

  ngOnInit() {
    console.log('WildCardComponent ngOnInit');
  }

}
