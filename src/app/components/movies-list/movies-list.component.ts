import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.sass']
})
export class MoviesListComponent implements OnInit {
  @Input() moviesToShow;

  constructor() {}

  ngOnInit() {
  }

}
