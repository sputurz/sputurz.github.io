export const genres = {
  russian: {
    history: 'историческое',
    horror: 'ужасы',
    scifi: 'фантастика',
    'stand-up': 'стендап',
    fantasy: 'фэнтези',
    drama: 'драма',
    mystery: 'детектив',
    family: 'семейное',
    comedy: 'комедия',
    romance: 'романтика',
    music: 'музыкальное',
    crime: 'криминальное',
    'tv-movie': 'телефильм',
    documentary: 'документальное',
    action: 'боевик',
    thriller: 'триллер',
    western: 'вестерн',
    animation: 'анимационное',
    war: 'военное',
    adventure: 'приключение',
  },
  english: {
    history: 'history',
    horror: 'horror',
    scifi: 'scifi',
    'stand-up': 'stand-up',
    fantasy: 'fantasy',
    drama: 'drama',
    mystery: 'mystery',
    family: 'family',
    comedy: 'comedy',
    romance: 'romance',
    music: 'music',
    crime: 'crime',
    'tv-movie': 'tv-movie',
    documentary: 'documentary',
    action: 'action',
    thriller: 'thriller',
    western: 'western',
    animation: 'animation',
    war: 'war',
    adventure: 'adventure',
  },
} as const;

type LocaleDict = Record<string, Record<string, string>>;

export function getTransletedValue<T extends LocaleDict, K extends string>(
  dict: T,
  lang: string,
  key: K
): string {
  const map = dict[lang];
  return key in map ? map[key as keyof typeof map] : key;
}
