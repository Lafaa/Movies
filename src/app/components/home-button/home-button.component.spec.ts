import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeButtonComponent } from './home-button.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('HomeButtonComponent', () => {
  let component: HomeButtonComponent;
  let fixture: ComponentFixture<HomeButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeButtonComponent
      ],
      imports: [RouterTestingModule, FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
