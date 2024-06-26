import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { SeriesListComponent } from './series-list.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('SeriesListComponent', () => {
  let component: SeriesListComponent;
  let fixture: ComponentFixture<SeriesListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    declarations: [SeriesListComponent],
    imports: [],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesListComponent);
    component = fixture.componentInstance;
    component.series.push({ id: 1, name: 'Test', episodes: [{ id: 1, name: 'Test' }] });
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
