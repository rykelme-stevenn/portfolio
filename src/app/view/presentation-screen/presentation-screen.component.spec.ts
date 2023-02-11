import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationScreenComponent } from './presentation-screen.component';

describe('PresentationScreenComponent', () => {
  let component: PresentationScreenComponent;
  let fixture: ComponentFixture<PresentationScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
