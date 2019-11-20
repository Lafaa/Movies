import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMoviesButtonComponent } from './all-movies-button.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AllMoviesButtonComponent', () => {
  let component: AllMoviesButtonComponent;
  let fixture: ComponentFixture<AllMoviesButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AllMoviesButtonComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMoviesButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
