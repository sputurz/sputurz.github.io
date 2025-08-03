export function formatStringToRub(str: string | undefined | null) {
  if (typeof str !== 'string' || !str) {
    return '';
  }

  return `${str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}  руб.`;
}
