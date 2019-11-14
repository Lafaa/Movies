import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeAllMoviesComponent } from './see-all-movies.component';

describe('SeeAllMoviesComponent', () => {
  let component: SeeAllMoviesComponent;
  let fixture: ComponentFixture<SeeAllMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeAllMoviesComponent ]
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
