import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastestDesignsHomeComponent } from './lastest-designs-home.component';

describe('LastestDesignsHomeComponent', () => {
  let component: LastestDesignsHomeComponent;
  let fixture: ComponentFixture<LastestDesignsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastestDesignsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastestDesignsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
