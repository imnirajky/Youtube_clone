import VideoCard from './VideoCard';
import {YOUTUBE_VIDEOS_API} from '../utils/constant';
import {useState, useEffect} from 'react';

const VideoSuggestion = () => {
  const [videoList, setVideoList] = useState({});
  
  useEffect(()=>{
    async function fetchVideoList(){
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const videos = await data.json();
    setVideoList(videos)
    }
    fetchVideoList();
    }, []);
  
  return Object.keys(videoList).length===0?(null):(
    <div className="flex flex-col p-2 mr-20">
      {videoList.items.map((video)=><VideoCard video={video}/>)}
    </div>
  )
}

export default VideoSuggestion
