import { Icon } from '../Icon';
import {
  StyledTabNav,
  StyledTabNavLink,
  StyledTabNavLinkText,
} from './TabNav.styles';

export function TabNav() {
  return (
    <StyledTabNav>
      <StyledTabNavLink to="/profile/favorites">
        <Icon name="LikeIcon"></Icon>
        <StyledTabNavLinkText>Избранное</StyledTabNavLinkText>
      </StyledTabNavLink>
      <StyledTabNavLink to="/profile/settings">
        <Icon name="UserIcon"></Icon>
        <StyledTabNavLinkText>Настройки</StyledTabNavLinkText>
      </StyledTabNavLink>
    </StyledTabNav>
  );
}
