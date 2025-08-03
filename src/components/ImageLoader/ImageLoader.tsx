import { FC, useEffect, useState } from 'react';
import { StyledImage, StyledImageLoader } from './ImageLoader.styles';
import { Loader } from '../Loader';

type Props = {
  src: string;
  alt?: string;
  isFetching: boolean;
  isLoading: boolean;
  onImageLoadedChange?: (loaded: boolean) => void;
  className?: string;
};

export const ImageLoader: FC<Props> = ({
  src,
  alt,
  isFetching,
  isLoading,
  onImageLoadedChange,
  className,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // сбрасываем состояние загрузки при новом fetch или новом src
  useEffect(() => {
    setImageLoaded(false);
    onImageLoadedChange?.(false); // уведомляем родителя
  }, [src, isFetching, onImageLoadedChange]);

  const handleImageLoad = () => {
    setImageLoaded(true);
    onImageLoadedChange?.(true); // уведомляем родителя
  };

  const isBusy = isFetching || isLoading || !imageLoaded;

  return (
    <StyledImageLoader className={className}>
      <StyledImage
        $isBusy={isBusy}
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
      />
      {isBusy && <Loader />}
    </StyledImageLoader>
  );
};
