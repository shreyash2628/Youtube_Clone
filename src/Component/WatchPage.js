import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import ReactPlayer from 'react-player/youtube'

const WatchPage = () => {

  const videoContent = useSelector((store) => store.video.items);


  // console.log("State",state);
  // console.log(state?.infoId);
  console.log("Video content in watchpage",videoContent.id.videoId);
  const videoUrl = `https://www.youtube.com/watch?v=${videoContent.id.videoId}&ab_channel=fotios`;
  console.log("url->",videoUrl);

  return (
    <div className='border border-white flex lg:w-auto lg:ml-16 bg-black lg:h-screen lg:w-full lg:mr-16 justify-center'>
    <div className='lg:w-2/3 lg:h-2/3 bg-slate-200 flex border border-white'> {/* Added items-center class */}
    <ReactPlayer url={videoUrl}  width='100%'
          height='100%' />
    </div>
  </div>
  
  )
}

export default WatchPage
