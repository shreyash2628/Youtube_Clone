import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../Utils/Constants';
import VideoCard from './VideoCard';
import { useSelector } from 'react-redux';
import { optionsRapidApiYoutubeV3 } from '../Utils/Constants';
import ErrorComponent from './ErrorComponent';
import ShimmerUi from './ShimmerUi';

const VideoContainer = () => {

  const [sideScrollBarData] = useState(['All', 'Music', 'Sports', 'Trading', 'Games', 'Stock Market', 'Bollywood', 'Podcasts', 'Public Speaking', 'Comedy', 'Fitness', 'Cooking', 'Dance']);
  const [Videos, SetVideos] = useState([]);

  const searchValue = useSelector((store) => store.search.items);
  useEffect(() => {
    SetVideos(null);
    getVideos();
    if (searchValue !== '') {
      getSpecificSearchedVideo(searchValue);
    }
  }, [searchValue]);

  const getSpecificSearchedVideo = async (searchValue) => {
    SetVideos(null);
    const url = `https://youtube-v31.p.rapidapi.com/search?q=${searchValue}&part=snippet%2Cid&regionCode=IN&maxResults=100&order=date`;
    const data = await fetch(url, optionsRapidApiYoutubeV3);
    const jsonData = await data.json();
    SetVideos(jsonData.items);
  }

  const getVideos = async () => {
    SetVideos(null);
    const data = await fetch(YOUTUBE_VIDEOS_API, optionsRapidApiYoutubeV3);
    const jsonData = await data.json();
    if (jsonData && jsonData.items) {
      const filteredShortsAndReels = jsonData.items.filter((data) => {
        return data.snippet.description !== '';
      });

      SetVideos(filteredShortsAndReels);
      localStorage.setItem('APILIMIT',null);
    } else if (jsonData.message = "You have exceeded the DAILY quota for Request on your current plan, BASIC. Upgrade your plan at https://rapidapi.com/ytdlfree/api/youtube-v31") {
      SetVideos('error');
      localStorage.setItem('APILIMIT','Exceeded');
    };
  }

  const handleOnClickCategoryButton = async (data) => {
    SetVideos(null);
    console.log("Value from localstorage is", data);
    const url = `https://youtube-v31.p.rapidapi.com/search?q=${data}&part=snippet%2Cid&regionCode=IN&maxResults=100&order=viewCount`;

    const response = await fetch(url, optionsRapidApiYoutubeV3);
    const jsonData = await response.json();
    SetVideos(jsonData.items);
  }
  return (
    <div className='flex flex-col  '>
      {/* Top sliding buttons */}

      <div className='overflow-x-auto h-10 w-72 mx-auto lg:h-10 flex flex-row  lg:mx-auto lg:w-full lg:justify-center md:w-3/4 md:overflow-x-auto md:justify-center'>
        {
          sideScrollBarData.map((data, index) => {
            return <button key={index} className='text-black border border-white bg-slate-500 lg:px-2 lg:mx-2 hover:bg-slate-300 hover:shadow-xl lg:rounded-lg mx-1 px-1 my-1 rounded-md ' onClick={() => handleOnClickCategoryButton(data)}>
              {data}

            </button>
          })
        }

      </div>

      <div className='  flex flex-wrap lg:w-auto lg:mx-auto mx-10 my-2 bg-black'>
        {
          Videos === null ? (
            <>
              {Array.from({ length: 50 }).map((_, index) => (
                <ShimmerUi key={index} />
              ))}
            </>
          ) : Videos === 'error' ? (
            <ErrorComponent /> // Render ErrorComponent when Videos is 'error'
          ) : (
            Videos.map((data) => <VideoCard info={data} />)
          )
        }

      </div>

    </div>
  )
}

export default VideoContainer;
