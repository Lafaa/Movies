import { Component } from '@angular/core';
import { DataBaseService } from './services/data-base.service';
import { GenreType } from './model/genreType.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor(private dataBase: DataBaseService) {
  }

}
