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

  getSimiliarMovies(id: number): any {
    const genres = Movies.filter(x => x.id === id)[0].genres;
    const scores = [];
    Movies.forEach(m => {
      if (m.id === id) {
        return;
      }
      scores[m.id] = {
        id: m.id,
        img: m.img,
        name: m.name,
        score: 0
      };
      m.genres.forEach(g => {
        if (genres.includes(g)) {
          scores[m.id].score++;
        }
      });
    });
    scores.sort((a, b) => {
      return a.score < b.score ? 1 : -1;
    });
    return scores.filter(m => m.score > 0).slice(0, 3);
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
    return Movies.filter(x => x.id === id)[0];
  }

}
