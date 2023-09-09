import { useEffect, useState } from 'react';
import VideoCard from './VideoCard'
import { YOUTUBE_VIDEOS_API } from '../utils/constant';


const VideoContainer = () => {
    const [videoList, setVideoList] = useState({});
    
    useEffect(()=>{
      fetchVideos();
    }, []);

    async function fetchVideos(){
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const listOfVideos = await data.json();
      setVideoList(listOfVideos);
      console.log(videoList);
    }
    
    return (Object.keys(videoList).length===0)?(<h2>Loading Videos...</h2>):( 
      <div className='flex flex-wrap justify-evenly'>
      {
        videoList.items.map((video)=>(<VideoCard video={video} key={video.id}/>))
      }
      </div>
    )
}

export default VideoContainer;