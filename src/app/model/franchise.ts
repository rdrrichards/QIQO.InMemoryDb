import { Movie } from './movie';

export interface Franchise {
  id: number;
  name: string;
  movies: Movie[];
}
