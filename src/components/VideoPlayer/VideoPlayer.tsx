import React from 'react';
import ReactPlayer from 'react-player';
import {
  VideoPlayerBackdrop,
  VideoPlayerBtnClose,
  VideoPlayerError,
  VideoPlayerInner,
} from './VideoPlayer.styles';
import { Icon } from '../Icon';

interface MovieTrailerProps {
  trailerUrl: string;
  trailerYouTubeId: string;
  onBackdrop: () => void;
  onClose: () => void;
}

export const VideoPlayer: React.FC<MovieTrailerProps> = ({
  trailerUrl,
  trailerYouTubeId,
  onBackdrop,
  onClose,
}) => {
  const videoSrc = trailerYouTubeId
    ? `https://youtube.com/watch?v=${trailerYouTubeId}`
    : trailerUrl;

  return (
    <VideoPlayerBackdrop onClick={onBackdrop}>
      <VideoPlayerInner onClick={(e) => e.stopPropagation()}>
        {videoSrc ? (
          <ReactPlayer src={videoSrc} />
        ) : (
          <VideoPlayerError>Видео не найдено</VideoPlayerError>
        )}
        <VideoPlayerBtnClose onClick={onClose}>
          <Icon name="CloseIcon"></Icon>
        </VideoPlayerBtnClose>
      </VideoPlayerInner>
    </VideoPlayerBackdrop>
  );
};
