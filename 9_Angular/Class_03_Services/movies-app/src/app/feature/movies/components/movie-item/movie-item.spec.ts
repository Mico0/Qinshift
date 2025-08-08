import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieItem } from './movie-item';

describe('MovieItem', () => {
  let component: MovieItem;
  let fixture: ComponentFixture<MovieItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
