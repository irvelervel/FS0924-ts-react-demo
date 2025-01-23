export interface Result {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export interface Movie extends Result {
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Ratings: Rating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}

interface Rating {
  Source: string
  Value: string
}
