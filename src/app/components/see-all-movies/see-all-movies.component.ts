import { Component, OnInit } from '@angular/core';
import { DataBaseService } from 'src/app/services/data-base.service';
import { GenreType } from '../../model/genreType.model';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-see-all-movies',
  templateUrl: './see-all-movies.component.html',
  styleUrls: ['./see-all-movies.component.sass']
})
export class SeeAllMoviesComponent {
  currentPage = 1;
  pages = [];
  perPage = 8;
  showPages = false;
  selectedGenre = '';
  selectedGenreChanged: Subject<string> = new Subject<string>();
  searchInput = '';
  searchInputChanged: Subject<string> = new Subject<string>();
  moviesToShow = [];
  filteredMovies = [];
  allMovies = [];
  GenreType = GenreType;

  constructor(private dataBase: DataBaseService) {
    this.allMovies = dataBase.listAllMovies();
    this.searchInputChanged
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe(newValue => {
        this.searchInput = newValue;
        this.currentPage = 1;
        this.loadMoviesToShow();
      });
    this.selectedGenreChanged
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe(newValue => {
        this.selectedGenre = newValue;
        this.currentPage = 1;
        this.loadMoviesToShow();
      });
    this.loadMoviesToShow();
  }

  changedSearchText(searchInput: string) {
    this.searchInputChanged.next(searchInput);
  }

  loadMoviesToShow() {
    this.filteredMovies = this.allMovies
      .filter(x => (this.searchInput === '' || x.name.toUpperCase().indexOf(this.searchInput.toUpperCase()) !== -1))
      .filter(x => (this.selectedGenre === '' || x.genres.includes(this.selectedGenre)));
    if (this.filteredMovies.length > this.perPage) {
      this.showPages = true;
      this.pages = Array(Math.ceil(this.filteredMovies.length / this.perPage)).fill(0).map((x, i) => i);
      // TODO: controllare perché escono due pagine
    } else {
      this.showPages = false;
      this.pages = [1];
    }
    this.loadPage(1);
  }
  changedGenre(genre: string) {
    this.selectedGenreChanged.next(genre);
  }
  loadPage(page) {
    if (page === 0 || page > this.pages.length) {
      return;
    }
    this.currentPage = page;
    const startingIndex = (page - 1) * this.perPage;
    this.moviesToShow = this.filteredMovies.slice(startingIndex, startingIndex + this.perPage);
    window.scroll(0, 0);
  }

}
