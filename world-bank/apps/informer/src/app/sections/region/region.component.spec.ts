import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RegionComponent } from './region.component';
import { RegionsTableComponent } from './regions-table/regions-table.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RegionComponent', () => {
  let component: RegionComponent;
  let fixture: ComponentFixture<RegionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionComponent, RegionsTableComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
