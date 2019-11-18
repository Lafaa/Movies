import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsComponent } from './movie-details.component';
import { MovieThumbnailComponent } from '../movie-thumbnail/movie-thumbnail.component';
import { MoviesListComponent } from '../movies-list/movies-list.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { SeeAllMoviesComponent } from '../see-all-movies/see-all-movies.component';
import { AppComponent } from 'src/app/app.component';
import { HomeComponent } from '../home/home.component';
import { BackButtonComponent } from '../back-button/back-button.component';
import { HomeButtonComponent } from '../home-button/home-button.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MovieThumbnailComponent,
        MoviesListComponent,
        MovieDetailsComponent,
        HomeComponent,
        NotFoundComponent,
        SeeAllMoviesComponent,
        BackButtonComponent,
        HomeButtonComponent
      ],
      imports: [ RouterTestingModule, FormsModule  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
