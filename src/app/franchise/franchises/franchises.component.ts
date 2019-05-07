import { Component, OnInit } from '@angular/core';
import { FranchiseService } from 'src/app/shared/franchise.service';
import { Franchise } from 'src/app/model/franchise';

@Component({
  selector: 'app-franchises',
  templateUrl: './franchises.component.html',
  styleUrls: ['./franchises.component.css']
})
export class FranchisesComponent implements OnInit {
  franchises: Franchise[] = [];
  show = [];

  constructor(private franchisesService: FranchiseService) { }

  ngOnInit() {
    this.franchisesService.getFranchises().subscribe(franchises => {
      this.franchises = franchises;
      this.getFranchiseMovies();
    });
  }
  getFranchiseMovies() {
    this.show = [];
    this.franchises.map(s => {
      const sid = s.id;
      this.show.push(false);
      this.franchisesService.getFranchiseMovies(sid).subscribe(movies => {
        s.movies = movies;
      });
    });
  }
  viewMovies(id: number) {
    this.show[id - 1] = !this.show[id - 1];
  }
}
