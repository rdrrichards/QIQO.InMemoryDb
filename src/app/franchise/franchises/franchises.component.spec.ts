import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FranchisesComponent } from './franchises.component';

describe('FranchisesComponent', () => {
  let component: FranchisesComponent;
  let fixture: ComponentFixture<FranchisesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FranchisesComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FranchisesComponent);
    component = fixture.componentInstance;
    component.franchises.push({ id: 1, name: 'Test', movies: [{id: 1, name: 'Test'}]});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit should return void', () => {
    expect(component.ngOnInit()).toBeUndefined();
  });

  it('getFranchiseMovies should return void', () => {
    expect(component.getFranchiseMovies()).toBeUndefined();
  });

  it('viewMovies should toggle show[0] to true', () => {
    component.show.push(false);
    component.viewMovies(1);
    expect(component.show[0]).toBeTruthy();
  });

  it('viewMovies should toggle show[0] to false', () => {
    component.show.push(true);
    component.viewMovies(1);
    expect(component.show[0]).toBeFalsy();
  });
});
