import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { videoContent } from '../Utils/videoSlice';

const VideoCard = ({ info }) => {
  const dispatch = useDispatch();

  // console.log("VideoCardKaData",info);

  const handleOnVideoCardClick = (data) => {
    dispatch(videoContent(data));
    console.log("Data obj me store horha ",data.id.videoId);
    localStorage.setItem('videoData', data.id.videoId);


    // console.log(data);
  }

  return (
    <Link to={{
      pathname: '/WatchPage/',
      state: { infoId: info.id }
    }}
    >
      <div className='lg:w-60 shadow-2xl lg:m-3 lg:p-1 lg:h-72 pb-8 ' onClick={() => handleOnVideoCardClick(info)}>

        <img src={info?.snippet?.thumbnails?.medium?.url} />
        <ul>
          <li className='font-bold text-xl text-white'>{info?.snippet?.channelTitle}</li>
          <li className='font-semibold text-slate-500'>{info?.snippet?.title}</li>
        </ul>
      </div>
    </Link>
  )
}

export default VideoCard
