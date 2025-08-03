import {
  StyledNav,
  StyledNavLink,
  StyledNavLinkSvg,
  StyledNavLinkText,
} from './Nav.styles';

export function Nav() {
  return (
    <StyledNav>
      <StyledNavLink to={'/'} aria-label="Ссылка на главную страницу">
        <StyledNavLinkText>Главная</StyledNavLinkText>
      </StyledNavLink>
      <StyledNavLink to={'/genres'} aria-label="Ссылка на страницу с жанрами">
        <StyledNavLinkText>Жанры</StyledNavLinkText>
        <StyledNavLinkSvg name="GenresIcon"></StyledNavLinkSvg>
      </StyledNavLink>
    </StyledNav>
  );
}
