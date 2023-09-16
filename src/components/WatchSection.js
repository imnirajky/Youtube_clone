import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { VIDEO_BY_ID } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';

const WatchSection = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');
  const dispatch = useDispatch();
  dispatch(closeMenu());
  const [videoDetails, setVideoDetails] = useState({});
  async function fetchVideoById() {
    const data = await fetch(VIDEO_BY_ID + videoId);
    const video = await data.json();
    setVideoDetails(video);
  }

  useEffect(() => {
    fetchVideoById();
  }, []);

  return Object.keys(videoDetails).length === 0 ? null : (
    <div className="ml-8 p-10 h-auto max-w-7xl fixed-height">
      {console.log(videoDetails?.items[0]?.statistics?.likeCount)}
      <iframe
        width="1200"
        height="700"
        src={'https://www.youtube.com/embed/' + videoId}
        title={videoDetails?.snippet?.title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
        allowfullscreen="true"
      ></iframe>
      <div className="text-xl font-bold mt-2">
        {videoDetails?.items[0]?.snippet?.title}
      </div>
      <div className="text-lg font-semiBold">
        {videoDetails?.items[0]?.statistics?.likeCount} Likes | {videoDetails?.items[0]?.statistics?.viewCount} Views
      </div>
      <button className='text-lg font-bold text-white bg-red-600 rounded h-10 w-28 p-2 mt-2'>SUBSCRIBE</button>
    </div>
  );
};

export default WatchSection;
