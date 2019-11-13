import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxbUiComponent } from './ngxb-ui.component';

describe('NgxbUiComponent', () => {
  let component: NgxbUiComponent;
  let fixture: ComponentFixture<NgxbUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxbUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxbUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
