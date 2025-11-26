import { siteConfig } from '../../../config/site.config';
import { ContactForm } from '../../ui/ContactForm';
import { SectionHead } from '../../ui/SectionHead';
import styles from './Contact.module.scss';

export function Contact() {
  return (
    <>
      <section
        className={styles.contact}
        id={siteConfig.navLinks.contact.name}
        aria-labelledby={`${siteConfig.navLinks.contact.name}-title`}
      >
        <SectionHead
          isHeadLine={false}
          isDark
          id={`${siteConfig.navLinks.contact.name}-title`}
          name={siteConfig.navLinks.contact.name}
          title="Say Hello."
          text="Lorem ipsum Dolor adipisicing nostrud et aute Excepteur amet commodo ea dolore irure esse Duis nulla sint fugiat cillum ullamco proident aliquip quis qui voluptate dolore veniam Ut laborum non est in officia."
        />
        <div className={styles.contact__wrap}>
          <ContactForm />
          <div className={styles.contact__info}>
            <div className={styles['contact__info-item']}>
              <span className={styles['contact__info-title']}>Email</span>
              <span className={styles['contact__info-text']}>
                <a
                  href="mailto:sputurza@gmail.com"
                  aria-label="developer Email"
                >
                  sputurza@gmail.com
                </a>
              </span>
            </div>
            <div className={styles['contact__info-item']}>
              <span className={styles['contact__info-title']}>Address</span>
              <span className={styles['contact__info-text']}>
                Belarus, Minsk
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
