import { IMovie } from '../models';

export function convertMinsToHoursMins(
  totalMins: IMovie['runtime'] | undefined | null
) {
  if (typeof totalMins !== 'number' || isNaN(totalMins)) {
    return '';
  }

  const hours = Math.floor(totalMins / 60);
  const mins = totalMins % 60;
  const hoursStr = hours !== 0 ? `${hours} ч` : '';
  const minsStr = mins !== 0 ? `${mins} мин` : '';

  return `${hoursStr} ${minsStr}`.trim();
}
