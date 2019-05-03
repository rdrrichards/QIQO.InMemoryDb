import { Component, OnInit } from '@angular/core';
import { Series } from 'src/app/model/series';
import { SeriesService } from 'src/app/shared/series.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {
  series: Series[] = [];
  show = false;

  constructor(private seriesService: SeriesService) { }

  ngOnInit() {
    this.seriesService.getSeries().subscribe(series => {
      this.series = series;
      this.getSeriesEpisodes();
    });
  }
  getSeriesEpisodes() {
    this.series.map(s => {
      const sid = s.id;
      this.seriesService.getSeriesEpisodes(sid).subscribe(epis => {
        s.episodes = epis;
      });
    });
  }
  viewEpisodes(id: number) {
    this.show = !this.show;
  }
}
