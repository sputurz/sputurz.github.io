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
  const [itemClassname, setItemClassname] = useState<string>('');
  const containerRef = useRef<HTMLDivElement>(null);

  const shownItems = isSliced ? array.slice(0, initialCount) : array;
  const hasMoreItems = array.length > initialCount;

  const onSlice = () => {
    if (!isSliced) {
      setItemClassname(styles['show-more__item--hide']);
      setTimeout(() => {
        setSliced(true);
      }, 400);
    } else {
      setItemClassname(styles['show-more__item--show']);
      setSliced(false);
    }

    // if (!isSliced && containerRef.current) {
    //   setTimeout(() => {
    //     containerRef.current?.scrollIntoView({
    //       behavior: 'smooth',
    //       block: 'start',
    //     });
    //   }, 100);
    // }
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
          {/* {isSliced ? '↓' : '↑'} */}
          {isSliced ? '...' : '↑'}
        </button>
      )}
      <ul className={styles['show-more__list']}>
        {shownItems.map((item, index) => (
          <li
            {...(index >= initialCount && { className: itemClassname })}
            key={index}
          >
            {renderItem(item, index)}
          </li>
        ))}
      </ul>
    </div>
  );
}
