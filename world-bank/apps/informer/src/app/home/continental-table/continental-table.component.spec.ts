import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentalTableComponent } from './continental-table.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ContinentalTableComponent', () => {
  let component: ContinentalTableComponent;
  let fixture: ComponentFixture<ContinentalTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinentalTableComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
