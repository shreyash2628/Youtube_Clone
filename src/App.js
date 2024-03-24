import { RouterProvider, createHashRouter } from 'react-router-dom';
import MainContainer from './Component/MainContainer';
import VideoContainer from './Component/VideoContainer';
import Head from './Component/Head';
import WatchPage from './Component/WatchPage';
import { useEffect, useState } from 'react';
import SideContainer from './Component/SideContainer';
import NarrowSideContainer from './Component/NarrowSideContainer';
import { Provider } from 'react-redux';
import appStore from './Utils/appStore';
import ErrorComponent from './Component/ErrorComponent';

const appRouter = createHashRouter([
  {
    path: "/",
    element: <VideoContainer />
  }, {
    path: "WatchPage",
    element: <WatchPage />
  }
])
function App() {

  const [openSideContainer, setOpenSideContainer] = useState(false);
  const [APILimit,setApiLimit]=useState(null);
  const handleOpenSideContainer = () => {
    setOpenSideContainer(!openSideContainer);
  }

  useEffect(()=>{
    const ApiLimit = localStorage.getItem('APILIMIT');
      setApiLimit(ApiLimit);
  })
  return (
    <Provider store={appStore}>

      {
        APILimit==='Exceeded'?<ErrorComponent/>:
   

      <div className=" lg:h-auto lg:w-auto bg-black">
        <Head handleOpenSideContainer={handleOpenSideContainer} openSideContainer={openSideContainer} />
        <div className='flex flex-row'>
          {
            openSideContainer ? <></> : <NarrowSideContainer />

          }
          <RouterProvider router={appRouter} />
        </div>
      </div>
         }
    </Provider>

  );
}

export default App;
