import { Component, OnInit } from '@angular/core';
import { DataBaseService } from 'src/app/services/database/data-base.service';
import { SearchStoreService } from 'src/app/services/search-store/search-store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  mostAppreciated = [];

  constructor(private dataBase: DataBaseService, private searchStore: SearchStoreService) {
    // load a number of movies for the home page so thate they appear in one row,
    // unless we have a very tiny screen, in which case the 2 loaded movies will appear in 2 rows
    switch (true) {
      case window.innerWidth >= 1200:
        this.mostAppreciated = dataBase.getBestRated(4);
        break;
      case window.innerWidth > 991:
        this.mostAppreciated = dataBase.getBestRated(3);
        break;
      default:
        this.mostAppreciated = dataBase.getBestRated(2);
    }

  }

  ngOnInit() {
    this.searchStore.reset();
  }

}
