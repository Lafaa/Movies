import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBaseService } from './services/database/data-base.service';
import { MovieThumbnailComponent } from './components/movie-thumbnail/movie-thumbnail.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SeeAllMoviesComponent } from './components/see-all-movies/see-all-movies.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { HomeButtonComponent } from './components/home-button/home-button.component';
import { AllMoviesButtonComponent } from './components/all-movies-button/all-movies-button.component';
import { SearchStoreService } from './services/search-store/search-store.service';

@NgModule({
  declarations: [
    AppComponent,
    MovieThumbnailComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    HomeComponent,
    NotFoundComponent,
    SeeAllMoviesComponent,
    BackButtonComponent,
    HomeButtonComponent,
    AllMoviesButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataBaseService, SearchStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
