import {Link} from 'react-router-dom';

const VideoCard = ({video}) => {
    // console.log(video);
  const {snippet, statistics} = video;
  return (
    <Link to={"watch?v="+video.id}>
    <div className='w-96 h-96 p-3 my-2'>
      <div>
        <img className="w-96 h-64 rounded-2xl" src={snippet?.thumbnails?.maxres?.url} alt="video-thumbnail" />
      </div>
      <div className="my-2">
        <div className="text-lg font-semibold">{snippet?.title}</div>
        <div className="text-base text-gray-600">{snippet?.channelTitle} | {statistics?.viewCount} views</div>
      </div>
    </div>
    </Link>
  )
}

export default VideoCard;
