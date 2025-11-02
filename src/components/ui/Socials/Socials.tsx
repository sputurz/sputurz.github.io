import styles from './Socials.module.scss';
import { siteConfig } from '../../../config/site.config';
import { Icon } from '../Icon';

interface IProps {
  className?: string;
  modifier?: 'footer' | 'hero';
}

export function Socials({ className, modifier }: IProps) {
  console.log('modifier:', modifier);
  return (
    <>
      <ul
        className={`${styles.socials} ${
          modifier === 'hero' ? styles['socials--hero'] : ''
        } ${modifier === 'footer' ? styles['socials--footer'] : ''} ${
          className || ''
        }`}
      >
        {siteConfig.socialsLinks.map((socialsLink) => (
          <li key={socialsLink.name}>
            <a
              target="_blank"
              className={styles.socials__link}
              href={socialsLink.url}
              title={socialsLink.name}
            >
              <Icon
                name={socialsLink.iconName}
                className={styles.socials__icon}
              />
              <span className={styles.socials__tooltip}>
                {socialsLink.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
