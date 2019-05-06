import { Episode } from './episode';

export interface Series {
  id: number;
  name: string;
  episodes: Episode[];
}
