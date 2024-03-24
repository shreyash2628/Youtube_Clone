import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ReactPlayer from 'react-player/youtube';
import home from '../Assests/home_icon.png';
import { optionsRapidApiYoutubeV3 } from '../Utils/Constants';

const WatchPage = () => {
  const [videoId, setVideoId] = useState();
  const [comments, setComments] = useState([]);
  const [suggestedVideos, setSuggestedVideos] = useState([]);
  const [videoDetails, setVideoDetails] = useState(null);

  const videoContent = useSelector((store) => store.video.items);

  useEffect(() => {
    const vId = localStorage.getItem('videoData');
    setVideoId(vId);
    getVideoDetails(vId);
    getSuggestedVideos(vId);
    getCommentsForVideo(vId);

  }, []);

  const onDuration = (data) => {
    const time = convertIntoMins(data);
  };

  const convertIntoMins = (seconds) => {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    return minutes + ':' + remainingSeconds;
  };

  const getCommentsForVideo = async (videoId) => {
    const CommentsUrl = `https://youtube-v31.p.rapidapi.com/commentThreads?part=snippet&videoId=${videoId}&maxResults=50`;
    const commentsData = await fetch(CommentsUrl, optionsRapidApiYoutubeV3);
    const jsonCommentsData = await commentsData.json();
    setComments(jsonCommentsData.items);
  };

  const getVideoDetails = async (videoId) => {
    console.log("iNside get video detials");
    const videoDetailsUrl = `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${videoId}`;
    const videoDetails = await fetch(videoDetailsUrl, optionsRapidApiYoutubeV3);
    const jsonVideoDetails = await videoDetails.json();
    setVideoDetails(jsonVideoDetails.items[0]);
    console.log("VideoDetails", jsonVideoDetails);
  }

  const getSuggestedVideos = async (videoId) => {
    const suggestedVideosUrl = `https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=${videoId}&part=id%2Csnippet&type=video&maxResults=50`;
    const suggestedVideos = await fetch(suggestedVideosUrl, optionsRapidApiYoutubeV3);
    const jsonSuggestedVideos = await suggestedVideos.json();
    setSuggestedVideos(jsonSuggestedVideos);
  }

  return (
    <div className='p-4 h-screen flex flex-col border border-white  lg:flex-row bg-black md:h-auto md:w-full md:mx-48'>
      <div className='lg:w-3/4 h-full md:h-auto flex flex-col w-full  justify-start border '>
        <iframe
          className='w-full h-48 md:h-96'
          src={`https://www.youtube.com/embed/${videoId}`}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title='Embedded youtube'
        />

{
  videoDetails === null ? null : (
    <div className='border border-white h-auto w-full flex flex-col'>
      {
      videoDetails.snippet && videoDetails.snippet.title && (
        <h1 className='text-2xl p-2 text-white font-bold'>{videoDetails.snippet.title}</h1>
      )
      }
      <div className='flex flex-row border h-8 w-full items-center justify-start'>
        <img className='p-1 ml-2' src={home} />
        <h1 className='text-white'>{videoDetails.snippet.channelTitle}</h1>
      </div>
    </div>
  )
}


        <div className='md:h-full h-96 overflow-y-auto pt-6'>
          {comments.map((data, id) => (
            <div className='md:w-full md:flex md:flex-row md:mx-4 pt-2' key={id}>
              <div className='md:w-16'>
                <img src={data.snippet.topLevelComment.snippet.authorProfileImageUrl} className='h-12 w-12 md:w-full md:h-full md:p-2' alt='profile' />
              </div>
              <div className='md:flex md:flex-col md:w-full md:px-4'>
                <p className='text-white text-xs pb-1'>{data.snippet.topLevelComment.snippet.authorDisplayName}</p>
                <p className='text-white text-md font-bold'>{data.snippet.topLevelComment.snippet.textOriginal}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id='suggested-videos' className='border border-white w-full lg:w-1/4 ml-auto'>
        {/* Content for suggested videos */}
      </div>
    </div>
  );
};

export default WatchPage;
