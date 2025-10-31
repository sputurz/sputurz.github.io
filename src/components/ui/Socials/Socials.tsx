import styles from './Socials.module.scss';
import { siteConfig } from '../../../config/site.config';

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
              <img
                className={styles.socials__icon}
                src={socialsLink.iconUrl}
              ></img>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
