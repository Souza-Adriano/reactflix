import React from 'react';
import VideoIframeResponsive from './components/VideoIframeResponsive';
import { BannerMainContainer, ContentAreaContainer, WatchButton } from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

function generateRandomInteger(min, max) {
  return Math.floor(min + Math.random()*(max + 1 - min))
}

export const randomBanner = (data) => {
  const category = generateRandomInteger(0, (data.length - 1))
  const video = generateRandomInteger(0, (data[category].videos.length - 1))
  return {
    category: data[category].titulo,
    ...data[category].videos[video]
  }
}

export default function BannerMain({
  videoTitle,
  videoDescription,
  url,
}) {
  const youTubeID = getYouTubeId(url);
  const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;

  return (
    <BannerMainContainer backgroundImage={bgUrl}>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>
            {videoTitle}
          </ContentAreaContainer.Title>

          <ContentAreaContainer.Description>
            {videoDescription}
          </ContentAreaContainer.Description>
        </ContentAreaContainer.Item>

        <ContentAreaContainer.Item>
          <VideoIframeResponsive
            youtubeID={youTubeID}
          />
          <WatchButton>
            Assistir
          </WatchButton>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}
