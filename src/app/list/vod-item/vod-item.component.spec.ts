import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VodItemComponent } from './vod-item.component';

describe('VodItemComponent', () => {
  let component: VodItemComponent;
  let fixture: ComponentFixture<VodItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VodItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VodItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
