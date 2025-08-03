import {
  selectIsAuthenticated,
  selectUser,
} from '../../store/globalSlices/authSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { openAuthModal } from '../AuthModal/AuthModalSlice';
import { Container } from '../Container';
import { Logo } from '../Logo';
import { Nav } from '../Nav';
import {
  StyledHeader,
  StyledHeaderWrap,
  StyledHeaderNavLink,
  StyledHeaderNavLinkText,
  StyledHeaderBtnModal,
  StyledHeaderBtnModalText,
  StyledHeaderInner,
} from './Header.styles';
import { Icon } from '../Icon';
import { Search } from '../Search';

export function Header() {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const user = useAppSelector(selectUser);

  return (
    <StyledHeader>
      <Container>
        <StyledHeaderWrap>
          <Logo src={'/logoBlack.svg'}></Logo>
          <StyledHeaderInner>
            <Nav></Nav>
            <Search></Search>
          </StyledHeaderInner>
          {isAuthenticated ? (
            <StyledHeaderNavLink to={'/profile'}>
              <StyledHeaderNavLinkText>{user?.name}</StyledHeaderNavLinkText>
              <Icon name="UserIcon"></Icon>
            </StyledHeaderNavLink>
          ) : (
            <StyledHeaderBtnModal onClick={() => dispatch(openAuthModal())}>
              <StyledHeaderBtnModalText>Войти</StyledHeaderBtnModalText>
              <Icon name="UserIcon"></Icon>
            </StyledHeaderBtnModal>
          )}
        </StyledHeaderWrap>
      </Container>
    </StyledHeader>
  );
}
