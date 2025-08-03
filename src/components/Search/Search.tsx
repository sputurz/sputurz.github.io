import { useForm } from 'react-hook-form';
import { Icon } from '../Icon';
import {
  StyledSearchBackdrop,
  StyledSearchBtnMobile,
  StyledSearchBtnReset,
  StyledSearchResultItem,
  StyledSearchResultList,
  StyledSearchWrap,
} from './Search.styles';
import { useSearch } from '../../hooks/useSearch';
import { ErrorFallback } from '../ErrorFallback';
import { useDebouncedValue } from '../../hooks/useDebouncedValue';
import { SearchCard } from '../SearchCard';
import { useState } from 'react';

type FormValues = {
  searchQuery: string;
};

export function Search() {
  const { register, watch, reset, setFocus } = useForm<FormValues>();
  const searchValue = watch('searchQuery');
  const debouncedSearch = useDebouncedValue(searchValue, 300);
  const { data, error } = useSearch(debouncedSearch);
  const [isMobileSearch, setIsMobileSearch] = useState(false);

  const onMobileSearch = () => {
    setIsMobileSearch(true);
    document.body.style.overflow = 'hidden';
  };

  const onBackdrop = () => {
    setIsMobileSearch(false);
    document.body.style.overflow = '';
  };

  const handleReset = () => {
    reset({ searchQuery: '' });
    setFocus('searchQuery');
    setIsMobileSearch(false);
    document.body.style.overflow = '';
  };

  if (error) return <ErrorFallback>Ошибка: {error.message}</ErrorFallback>;

  return (
    <>
      <StyledSearchBtnMobile onClick={onMobileSearch}>
        <Icon name="SearchIcon" />
      </StyledSearchBtnMobile>

      <StyledSearchBackdrop
        onClick={onBackdrop}
        $isMobileSearch={isMobileSearch}
      ></StyledSearchBackdrop>
      <StyledSearchWrap $isMobileSearch={isMobileSearch}>
        <Icon name="SearchIcon" />
        <input
          type="text"
          placeholder="Поиск"
          {...register('searchQuery')}
          defaultValue=""
        />
        <StyledSearchBtnReset
          $isEmpty={!searchValue}
          onClick={handleReset}
          type="button"
        >
          <Icon name="CloseIcon" />
        </StyledSearchBtnReset>

        {data && data.length > 0 ? (
          <StyledSearchResultList>
            {data?.map((movie) => (
              <StyledSearchResultItem key={movie.id}>
                <SearchCard
                  movie={movie}
                  onCardClick={handleReset}
                ></SearchCard>
              </StyledSearchResultItem>
            ))}
          </StyledSearchResultList>
        ) : null}
      </StyledSearchWrap>
    </>
  );
}
