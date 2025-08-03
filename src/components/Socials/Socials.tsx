import { Icon, IconName } from '../Icon';
import { StyledLink, StyledSocialItem, StyledSocials } from './Social.styles';

interface SocialItem {
  name: IconName;
  url: string;
}

export function Socials() {
  const icons: SocialItem[] = [
    { name: 'VkIcon', url: 'https://vk.com' },
    { name: 'YtIcon', url: 'https://youtube.com' },
    { name: 'OkIcon', url: 'https://ok.ru' },
    { name: 'TgIcon', url: 'https://telegram.org' },
  ];

  return (
    <StyledSocials>
      {icons.map(({ name, url }, index) => (
        <StyledSocialItem key={`${name}-${index}`}>
          <StyledLink href={url} target="_blank" rel="noopener noreferrer">
            <Icon name={name} />
          </StyledLink>
        </StyledSocialItem>
      ))}
    </StyledSocials>
  );
}
