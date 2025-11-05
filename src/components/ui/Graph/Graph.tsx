import styles from './Graph.module.scss';

interface IProps {
  title: string;
  tooltip: string;
  value: number;
  minValue?: number;
  maxValue?: number;
  step?: number;
}

export function Graph({
  title,
  tooltip,
  value,
  minValue = 0,
  maxValue = 7,
  step = 1,
}: IProps) {
  return (
    <>
      <div className={styles.graph}>
        <p className={styles.graph__title}>{title}</p>
        <div className={styles['graph__bar-bg']}>
          <div className={styles.graph__value}>
            <span className={styles.graph__tooltip}>{tooltip}</span>
          </div>
        </div>
      </div>
    </>
  );
}
