import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContryInfoComponent } from './contry-info.component';

describe('ContryInfoComponent', () => {
  let component: ContryInfoComponent;
  let fixture: ComponentFixture<ContryInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContryInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
