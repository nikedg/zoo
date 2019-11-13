import { BeastsService } from 'src/app/services/beasts.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beasts-panel',
  templateUrl: './beasts-panel.component.html',
  styleUrls: ['./beasts-panel.component.css']
})
export class BeastsPanelComponent implements OnInit {

  constructor(public beastsSvc: BeastsService) {
    console.log('BeastsPanelComponent ctor')
   }

  ngOnInit() {
  }

}
