import { Component, OnInit } from '@angular/core';
import { DataBaseService } from 'src/app/services/data-base.service';

@Component({
  selector: 'app-see-all-movies',
  templateUrl: './see-all-movies.component.html',
  styleUrls: ['./see-all-movies.component.sass']
})
export class SeeAllMoviesComponent implements OnInit {
  currentPage = 1;
  perPage = 10;
  moviesToShow = [];

  constructor(private dataBase: DataBaseService) {

  }

  ngOnInit() {
  }

}
