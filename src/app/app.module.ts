import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBaseService } from './services/data-base.service';
import { MovieThumbnailComponent } from './components/movie-thumbnail/movie-thumbnail.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SeeAllMoviesComponent } from './components/see-all-movies/see-all-movies.component';
import { BackButtonComponent } from './components/back-button/back-button.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieThumbnailComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    HomeComponent,
    NotFoundComponent,
    SeeAllMoviesComponent,
    BackButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataBaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
