import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/shared/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: Movie;
  constructor(private activeRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      const id = +params.id;
      this.movieService.getMovie(id).subscribe(movie => {
        this.movie = movie;
      });
    });
  }

}
