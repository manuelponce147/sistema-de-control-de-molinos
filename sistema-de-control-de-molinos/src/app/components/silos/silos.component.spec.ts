import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SilosComponent } from './silos.component';

describe('SilosComponent', () => {
  let component: SilosComponent;
  let fixture: ComponentFixture<SilosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SilosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SilosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
