import { Component, OnInit, Input } from '@angular/core';
import { Thumbnail } from 'src/app/model/thumbnail.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.sass']
})
export class MoviesListComponent implements OnInit {
  @Input() moviesToShow: Thumbnail[];

  constructor() {}

  ngOnInit() {
  }

}
