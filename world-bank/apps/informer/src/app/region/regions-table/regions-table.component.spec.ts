import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RegionsTableComponent } from './regions-table.component';
import { RouterTestingModule } from '@angular/router/testing';


describe('RegionsTableComponent', () => {
  let component: RegionsTableComponent;
  let fixture: ComponentFixture<RegionsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionsTableComponent],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
