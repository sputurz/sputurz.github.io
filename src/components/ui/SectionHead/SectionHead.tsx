import styles from './SectionHead.module.scss';

interface IProps {
  name: string;
  title: string;
  text: string;
  isDark?: boolean;
  id?: string;
  isHeadLine?: boolean;
}

export function SectionHead({
  name,
  title,
  text,
  id,
  isDark = false,
  isHeadLine = true,
}: IProps) {
  return (
    <div
      className={`${styles['section-head']} ${
        isHeadLine && styles['section-head--bar']
      } ${isDark && styles['section-head--dark']}
      `}
    >
      <span className={styles['section-head__name']}>{name}</span>
      <h2 className={styles['section-head__title']} id={id}>
        {title}
      </h2>
      <p className={styles['section-head__text']}>{text}</p>
    </div>
  );
}
