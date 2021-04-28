import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking-bar',
  templateUrl: './ranking-bar.component.html',
  styleUrls: ['./ranking-bar.component.css']
})
export class RankingBarComponent implements OnInit {

  @Input() vote_average:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
