import { PaginationMovie } from './../../interfaces/movie.interface';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  @Input() paginateMovies: PaginationMovie[] = [];
  @Output() addPage = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onScroll(){
    this.addPage.emit(this.paginateMovies.length.toString());
  }

}
