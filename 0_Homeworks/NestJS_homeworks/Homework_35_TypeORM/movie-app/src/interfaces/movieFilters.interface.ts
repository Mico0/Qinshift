import { Genre } from 'src/movies/enums/genre.enum';

export class MovieFilters {
  genre?: Genre | undefined;
  minRating?: number | null;
  maxDuration?: number | null;
  title?: string | null;
  sortDirection?: string | null;
  sortBy?: string | null;
}
