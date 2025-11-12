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
  const [bntClassname, setBntClassname] = useState<string>('');
  const containerRef = useRef<HTMLDivElement>(null);

  const shownItems = isSliced ? array.slice(0, initialCount) : array;
  const hasMoreItems = array.length > initialCount;

  const onSlice = () => {
    if (!isSliced) {
      setItemClassname(styles['show-more__item--hide']);
      setBntClassname(styles['show-more__btn--sticky--hide']);
      setTimeout(() => {
        setSliced(true);
      }, 400);
    } else {
      setItemClassname(styles['show-more__item--show']);
      setBntClassname(styles['show-more__btn--sticky--show']);
      setSliced(false);
    }
  };

  return (
    <div ref={containerRef} className={styles['show-more']}>
      {hasMoreItems && (
        <>
          {!isSliced && (
            <button
              className={`${styles['show-more__btn']} ${styles['show-more__btn--sticky']} ${bntClassname}`}
              aria-label={'Collapse'}
              title={'Collapse'}
              onClick={onSlice}
              type="button"
            >
              {'↑'}
            </button>
          )}
          <button
            className={`${styles['show-more__btn']} ${
              !isSliced ? styles['show-more__btn--trans'] : ''
            }`}
            aria-label={isSliced ? 'Show more' : 'Collapse'}
            onClick={onSlice}
            type="button"
          >
            {isSliced ? 'Show more' : 'Collapse'}
          </button>
        </>
      )}
      <ul
        className={`${styles['show-more__list']} ${
          !isSliced ? styles['show-more__list--full'] : ''
        }`}
      >
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

<div>
  <button></button>
  <ul></ul>
</div>;
