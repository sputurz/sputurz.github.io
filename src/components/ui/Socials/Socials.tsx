import styles from './Socials.module.scss';
import { siteConfig } from '../../../config/site.config';
import { Icon } from '../Icon';

export function Socials() {
  return (
    <>
      <ul className={styles.socials}>
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
              ></Icon>
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
