import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SeriesListComponent } from './series-list.component';

describe('SeriesListComponent', () => {
  let component: SeriesListComponent;
  let fixture: ComponentFixture<SeriesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesListComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getSeriesEpisodes should be truthy', () => {
    expect(component.getSeriesEpisodes()).toBeUndefined();
  });

  it('viewEpisodes should be truthy', () => {
    expect(component.viewEpisodes(1)).toBeUndefined();
  });

  it('viewEpisodes should be truthy', () => {
    expect(component.ngOnInit()).toBeUndefined();
  });
});
