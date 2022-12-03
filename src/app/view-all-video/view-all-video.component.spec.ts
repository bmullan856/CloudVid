import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllVideoComponent } from './view-all-video.component';

describe('ViewAllVideoComponent', () => {
  let component: ViewAllVideoComponent;
  let fixture: ComponentFixture<ViewAllVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
