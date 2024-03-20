import React, { useEffect, useState } from 'react'
import Head from './Head';
import SideContainer from './SideContainer';
import VideoContainer from './VideoContainer';
import NarrowSideContainer from './NarrowSideContainer';
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const [openSideContainer, setOpenSideContainer] = useState(false);
  const [searchedVideo, setSearchedVideo] = useState('');
  const handleOpenSideContainer = (data) => {
    setOpenSideContainer(data);
  }

  const searchValue = useSelector((store) => store.search.items);
  console.log("MainContainer me value", searchValue);

  useEffect(() => {
    setSearchedVideo(searchValue);
    console.log("MainContainer me value", searchValue);
  }, [searchValue]);


  return (
    <div className='flex flex-col '>
      <Head handleOpenSideContainer={handleOpenSideContainer} openSideContainer={openSideContainer} />
      <div className='flex flex-row'>
        {
          openSideContainer ? <SideContainer /> : <NarrowSideContainer />
        }
        <VideoContainer />

      </div>
    </div>
  )
}

export default MainContainer;
