import WatchSection from './WatchSection';
import VideoSuggestion from './VideoSuggestion';
import LiveChat from './LiveChat';

const WatchPage = () => {
  return (
    <div className='flex justify-between'>
      <WatchSection />
      <div>
      <LiveChat />
      <VideoSuggestion />
      </div>
    </div>
  )
}

export default WatchPage
