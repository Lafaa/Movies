import { Component, OnInit } from '@angular/core';
import { Thumbnail } from 'src/app/model/thumbnail.model';
import { DataBaseService } from 'src/app/services/data-base.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  mostAppreciated: Thumbnail[] = [];

  constructor(private dataBase: DataBaseService) {
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

  }

}
