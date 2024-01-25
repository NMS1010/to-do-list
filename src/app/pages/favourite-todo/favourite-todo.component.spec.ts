import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteTodoComponent } from './favourite-todo.component';

describe('FavouriteTodoComponent', () => {
  let component: FavouriteTodoComponent;
  let fixture: ComponentFixture<FavouriteTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavouriteTodoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavouriteTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
