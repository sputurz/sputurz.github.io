import { IMovie } from '../models';

export function setRatingColor(rating: IMovie['tmdbRating']) {
  if (rating >= 8) {
    return `#A59400`;
  } else if (rating < 8 && rating >= 6) {
    return `#308E21`;
  } else if (rating < 6 && rating >= 4) {
    return `#777777`;
  } else {
    return `#C82020`;
  }
}
