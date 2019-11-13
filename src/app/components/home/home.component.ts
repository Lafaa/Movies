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
    this.mostAppreciated = dataBase.getBestRated(3);
  }

  ngOnInit() {

  }

}
