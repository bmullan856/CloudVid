import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleVidComponent } from './single-vid.component';

describe('SingleVidComponent', () => {
  let component: SingleVidComponent;
  let fixture: ComponentFixture<SingleVidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleVidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleVidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
