import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import ReactPlayer from 'react-player/youtube'
import {onPause} from 'react-player/youtube';

const WatchPage = () => {

  const videoContent = useSelector((store) => store.video.items);

  // const[times,setTime]=useState(0);

  // onPause(()=>{
  //     console.log("Video is paused");
  // })

 const onDuration = (data)=>{
 

  const time=convertIntoMins(data);
  console.log("Duration->",time);
 }

 const convertIntoMins = (seconds)=>{

    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    
    // // Format minutes and seconds as two digits
    // var formattedMinutes = String(minutes).padStart(2, '0');
    // var formattedSeconds = String(remainingSeconds).padStart(2, '0');
    
    // // Return the formatted time string
    return minutes + ':' + remainingSeconds;
}



  // console.log("State",state);
  // console.log(state?.infoId);

  // const time=ReactPlayer.getDuration();
  // setTime(ReactPlayer.getDuration());
  // console.log("Duration is ->",times);
  console.log("Video content in watchpage",videoContent.id.videoId);
  const videoUrl = `https://www.youtube.com/watch?v=${videoContent.id.videoId}&ab_channel=fotios`;
  console.log("url->",videoUrl);

  // const onPause=()=>{
  //   console.log("Video paused");
  // };

  return (
    <div className='p-4  flex lg:w-auto lg:ml-16 bg-black lg:h-screen lg:w-full lg:mr-16 justify-center'>
    <div className='lg:w-2/3  lg:h-2/3 bg-slate-200 flex w-auto h-48 '> {/* Added items-center class */}
    <ReactPlayer url={videoUrl}  width='100%'
          height='100%' onPause={onPause} onDuration={onDuration}/>
    </div>
  </div>
  
  )
}

export default WatchPage
