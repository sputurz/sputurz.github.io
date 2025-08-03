import { useLogout } from '../../hooks/useLogout';
import { selectUser } from '../../store/globalSlices/authSlice';
import { useAppSelector } from '../../store/hooks';
import { Icon } from '../Icon';
import {
  StyledSettingTab,
  StyledSettingTabBtnLogout,
  StyledSettingTabTag,
  StyledSettingTabList,
  StyledSettingTabText,
  StyledSettingTabTextListItem,
  StyledSettingTabTextWrap,
  StyledSettingTabTextLabel,
} from './SettingTab.styles';

export default function SettingTab() {
  const { handleLogout, isPending } = useLogout();
  const user = useAppSelector(selectUser);

  return (
    <StyledSettingTab>
      <StyledSettingTabList>
        <StyledSettingTabTextListItem>
          <StyledSettingTabTextLabel>{`${user?.name[0]}${user?.surname[0]}`}</StyledSettingTabTextLabel>
          <StyledSettingTabTextWrap>
            <StyledSettingTabTag>Имя Фамилия</StyledSettingTabTag>
            <StyledSettingTabText>{`${user?.name} ${user?.surname}`}</StyledSettingTabText>
          </StyledSettingTabTextWrap>
        </StyledSettingTabTextListItem>
        <StyledSettingTabTextListItem>
          <StyledSettingTabTextLabel>
            <Icon name="MailIcon"></Icon>
          </StyledSettingTabTextLabel>
          <StyledSettingTabTextWrap>
            <StyledSettingTabTag>Электронная почта</StyledSettingTabTag>
            <StyledSettingTabText>{user?.email}</StyledSettingTabText>
          </StyledSettingTabTextWrap>
        </StyledSettingTabTextListItem>
      </StyledSettingTabList>

      <StyledSettingTabBtnLogout onClick={handleLogout} disabled={isPending}>
        Выйти из аккаунта
      </StyledSettingTabBtnLogout>
    </StyledSettingTab>
  );
}
