import { Injectable } from '@angular/core';
import Movies from '../../assets/movie.mock-data.json';
import { GenreType } from '../model/genreType.model';
import { Thumbnail } from '../model/thumbnail.model.js';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  constructor() {
  }

  getAllMovies() {
    return Movies;
  }

  listAllMovies(): Thumbnail[] {
    return Movies.map(x => ({
      id: x.id,
      img: x.img,
      name: x.name
    }));
  }

  getBestRated(howMany: number = 3) {
    return Movies.sort((a, b) => {
      const aValue = parseFloat(a.rate);
      const bValue = parseFloat(b.rate);
      return aValue < bValue ? 1 : -1;
    }).slice(0, howMany);
  }

  listMoviesByGenre(genre: GenreType) {
    return Movies.filter(movie => movie.genres.includes(genre));
  }

  getMovieDetails(id: number) {
    return Movies.filter(x => x.id === id);
  }

}
