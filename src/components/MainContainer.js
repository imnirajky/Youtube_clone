import React from 'react';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';

const MainContainer = () => {
  return (
    <div className='flex flex-col col-span-11 p-2'>
        <ButtonList />
        <VideoContainer />
    </div>
  )
}

export default MainContainer;