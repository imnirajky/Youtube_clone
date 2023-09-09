import React from 'react';
import ButtonItems from './ButtonItems';

const ButtonList = () => {
  const buttonListItems = ["All", "News", "Live", "Music", "Debates", "Latest Music", "Game Show", "Web Development", "React.js", "Films", "JEE", "NEET", "Recently Uploaded", "Watched", "The Lallantop", "New", "G20", "Arijit Music"];
  return (
    <div className='flex w-auto p-2 mx-5'>
      {
        buttonListItems.map((item) => (
          <ButtonItems name={item} key={item} /> // Adding 'key' prop for React list rendering
      ))
      }
    </div>
  )
}

export default ButtonList;
