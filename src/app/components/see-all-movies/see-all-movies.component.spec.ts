import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeAllMoviesComponent } from './see-all-movies.component';
import { AppComponent } from 'src/app/app.component';
import { MovieThumbnailComponent } from '../movie-thumbnail/movie-thumbnail.component';
import { MoviesListComponent } from '../movies-list/movies-list.component';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { HomeComponent } from '../home/home.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { BackButtonComponent } from '../back-button/back-button.component';
import { HomeButtonComponent } from '../home-button/home-button.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('SeeAllMoviesComponent', () => {
  let component: SeeAllMoviesComponent;
  let fixture: ComponentFixture<SeeAllMoviesComponent>;

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
    fixture = TestBed.createComponent(SeeAllMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
