export interface Movie {
  id: string;
  title: string;
  director: string;
  year: number;
  author: string;
  rating: number;
  text: string;
  genres: string;
  likeCount: number;
}

export interface ReviewFormValue {
  title: string;
  director: string;
  year: number;
  genres: string;
  author: string;
  rating: number;
  text: string;
}
