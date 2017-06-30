import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdmovieListComponent } from './idmovie-list.component';

describe('IdmovieListComponent', () => {
  let component: IdmovieListComponent;
  let fixture: ComponentFixture<IdmovieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdmovieListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdmovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
