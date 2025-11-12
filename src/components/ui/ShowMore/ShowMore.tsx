import { useRef, useState, type ReactNode } from 'react';
import styles from './ShowMore.module.scss';

interface IProps<T> {
  array: readonly T[] | T[];
  renderItem: (item: T, index: number) => ReactNode;
  initialCount?: number;
}

export function ShowMore<T>({
  array,
  renderItem,
  initialCount = 3,
}: IProps<T>) {
  const [isSliced, setSliced] = useState<boolean>(true);
  const [isMounted, setMounted] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const shownItems = isSliced ? array.slice(0, initialCount) : array;
  const hasMoreItems = array.length > initialCount;

  const onSlice = () => {
    setMounted(!isMounted);

    if (isSliced) {
      setSliced(false);
    } else {
      setTimeout(() => {
        setSliced(true);
      }, 300);
    }

    if (!isSliced && containerRef.current) {
      setTimeout(() => {
        containerRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    }
  };

  return (
    <div ref={containerRef} className={styles['show-more']}>
      {hasMoreItems && (
        <button
          className={`${styles['show-more__btn']} ${
            isSliced ? '' : styles['show-more__btn--sticky']
          }`}
          aria-label={isSliced ? 'Show more' : 'Collapse'}
          title={isSliced ? 'Show more' : 'Collapse'}
          onClick={onSlice}
          type="button"
        >
          {isSliced ? '↓' : '↑'}
        </button>
      )}
      <ul className={styles['show-more__list']}>
        {shownItems.map((item, index) => (
          <li
            className={`${
              index >= initialCount
                ? isMounted
                  ? styles['show-more__item--show']
                  : styles['show-more__item--hide']
                : ''
            }`}
            key={index}
          >
            {renderItem(item, index)}
          </li>
        ))}
      </ul>
    </div>
  );
}
