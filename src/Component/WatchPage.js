import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import ReactPlayer from 'react-player/youtube'
import { onPause } from 'react-player/youtube';
import home from '../Assests/home_icon.png'
import { optionsRapidApiYoutubeV3 } from '../Utils/Constants';

const WatchPage = () => {

  const [videoId, setVideoId] = useState();
  const [comments, setComments] = useState([]);
  const videoContent = useSelector((store) => store.video.items);

  useEffect(() => {
    const a = localStorage.getItem('videoData');
    setVideoId(a);
    getCommentsForVideo(a);

  }, []);


  const onDuration = (data) => {
    const time = convertIntoMins(data);
  }

  const convertIntoMins = (seconds) => {

    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;

    // // Format minutes and seconds as two digits
    // var formattedMinutes = String(minutes).padStart(2, '0');
    // var formattedSeconds = String(remainingSeconds).padStart(2, '0');

    // // Return the formatted time string
    return minutes + ':' + remainingSeconds;
  }

  const getCommentsForVideo = async (videoId) => {
    const CommentsUrl = `https://youtube-v31.p.rapidapi.com/commentThreads?part=snippet&videoId=${videoId}&maxResults=50`;
    const commentsData = await fetch(CommentsUrl, optionsRapidApiYoutubeV3);
    const jsonCommentsData = await commentsData.json();
    console.log("Comments are ->", jsonCommentsData.items);
    setComments(jsonCommentsData.items);
    // console.log("Comments are ->",comments);

  }

  const videoUrl = `https://www.youtube.com/watch?v=${videoId}&ab_channel=fotios`;

  return (
    <div className='p-4  h-auto flex lg:w-auto  bg-black lg:h-screen lg:w-full md:flex md:flex-row '>


      <div id='Video-and-comments' className='lg:w-3/4 md:items-center lg:h-auto flex flex-col w-auto h-48 justify-start border overflow-hidden'>
        <iframe
          className='w-4/5 h-full'
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
        <div id='comments' className=' h-full w-full overflow-y-auto md:pt-6'>

        {
  comments.map((data, id) => {
    return (
      <div className='w-2/3 md:h-auto flex flex-row md:mx-24 md:pt-2' key={id}>
        <div className='md:h-full md:w-16  '>
          <img src={data.snippet.topLevelComment.snippet.authorProfileImageUrl} className='md:flex md:justify-center md:items-center md:w-full md:h-full md:p-2'></img>
        </div>
        <div className='flex flex-col w-full px-4'>
          <p className='text-white text-xs pb-1'>{data.snippet.topLevelComment.snippet.authorDisplayName}</p>
          <p className='text-white text-md font-bold'>{data.snippet.topLevelComment.snippet.textOriginal}</p>
        </div>
      </div>
    );
  })
}

        </div>
      </div>


      <div id='suggested-videos' className='border border-white md:w-1/4 md:ml-auto'>

      </div>
    </div>

  )
}

export default WatchPage
