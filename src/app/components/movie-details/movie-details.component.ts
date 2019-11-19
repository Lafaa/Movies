import { Component, OnInit } from '@angular/core';
import { DataBaseService } from 'src/app/services/database/data-base.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.sass']
})
export class MovieDetailsComponent implements OnInit {
  movie: any = {};
  similiarMovies: any = [];

  constructor(private dataBase: DataBaseService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = parseInt(params.id, 10);
      this.movie = this.dataBase.getMovieDetails(id);
      if (this.movie === undefined) {
        this.router.navigate(['404']);
      } else {
        this.similiarMovies = this.dataBase.getSimiliarMovies(id);
      }
    });
  }

  getGenres() {
    return this.movie.genres.map((x: string) => x.charAt(0).toUpperCase() + x.slice(1)).join(', ');
  }

  getColor(rating = parseFloat(this.movie.rate)) {
    switch (true) {
      case (rating < 3):
        return '#FF0000';
      case (rating < 5):
        return '#FF7F00';
      case (rating < 7):
        return '#d5e213';
      case (rating < 9):
        return '#6fdc02';
      default:
        return '#02b702';
    }
  }




}
