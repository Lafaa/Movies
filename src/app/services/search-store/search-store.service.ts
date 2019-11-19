import { Injectable } from '@angular/core';
import { createStore } from 'redux';

export class SearchState {
  constructor(public searchText = '', public genre = '') { }
}
export enum SearchActionsTypes {
  newGenre = 'NEW_GENRE',
  newSearch = 'NEW_SEARCH_STRING',
  reset = 'RESET'
}

@Injectable({
  providedIn: 'root'
})
export class SearchStoreService {
  store = createStore(counter);

  constructor() {
  }

  getState() {
    return this.store.getState();
  }
  changeState(action) {
    this.store.dispatch(action);
  }
  reset() {
    this.store.dispatch({ type: SearchActionsTypes.reset });
  }

}

function counter(state: SearchState = new SearchState(), action) {
  switch (action.type) {
    case SearchActionsTypes.newSearch:
      return new SearchState(action.value, state.genre);
    case SearchActionsTypes.newGenre:
      return new SearchState(state.searchText, action.value);
    case SearchActionsTypes.reset:
      return new SearchState();
    default:
      return state;
  }
}
