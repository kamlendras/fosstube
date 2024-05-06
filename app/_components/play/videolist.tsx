"use client"
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import Video from "./video";
import type { VideoType } from "./videotype";
import { styled } from "styled-components";
import { toast } from "react-hot-toast";
import InfiniteScroll from "react-infinite-scroll-component";

type ApiResponseType = {
  data: {
    posts: VideoType[];
  };
};

const VideoListStyled = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
  .video-list {
    display: grid;
    place-items: center;
    gap: 1rem;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    max-height: calc(100vh + 1rem);
    @media (min-width: 768px) {
      & {
        gap: 2rem;
      }
    }
    & > div:first-child {
      margin-top: 1rem;
    }
    & .video {
      scroll-snap-align: center;
    }
  }
`;

const VideoList = () => {
  const [videos, setVideos] = useState<VideoType[]>([]);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [page, setPage] = useState<number>(0);
  const [mute, setMute] = useState<boolean>(true);

  const getVideos = async (currentPage: number) => {
    try {
      const res: AxiosResponse<ApiResponseType> = await axios.get(
        `https://internship-service.onrender.com/videos?page=${currentPage}`
      );
      setVideos((prevVideos) => {
        const filteredVideos = res.data.data.posts.filter(
          (video) => !prevVideos.some((v) => v.postId === video.postId)
        );
        return [...prevVideos, ...filteredVideos];
      });
    } catch (err: unknown) {
      console.log(err);
      toast.error("Something went wrong!");
    }
  };

  useEffect(() => {
    getVideos(page);
  }, [page]);

  useEffect(() => {
    setPlayingVideo(videos?.length ? videos[0].postId : null);
  }, [videos]);
  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };
  return (
    <VideoListStyled className="container">
      {videos.length ? (
        <InfiniteScroll
          dataLength={videos.length}
          next={handleNextPage}
          hasMore={true}
          loader={<span className="loader"></span>}
          endMessage={<p className="end-message">You have reached the end!</p>}
          onScroll={() => {
            scrollBy(0, -1);
          }}
          className="video-list"
        >
          {playingVideo &&
            videos.map((video) => (
              <Video
                key={video.postId}
                video={video}
                mute={mute}
                setMute={setMute}
                playingVideo={playingVideo}
                setPlayingVideo={setPlayingVideo}
              />
            ))}
        </InfiniteScroll>
      ) : (
        <span className="loader"></span>
      )}
    </VideoListStyled>
  );
};

export default VideoList;