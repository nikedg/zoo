import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @Output() moveItem: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }


  moveItemPage(delta: number): void {
    console.log('PaginatorComponent moveItemPage ' + delta);
    this.moveItem.emit(delta);
  }

}

