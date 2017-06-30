import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeenListComponent } from './teen-list.component';

describe('TeenListComponent', () => {
  let component: TeenListComponent;
  let fixture: ComponentFixture<TeenListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeenListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
