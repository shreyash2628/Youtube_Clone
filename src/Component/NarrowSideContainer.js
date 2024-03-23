import React from 'react';
import HomeIcon from '../Assests/home_icon.png';

const NarrowSideContainer = () => {
    return (
        <div className='h-screen border border-white  bg-black w-1/3 lg:w-2/4 md:red-400 flex flex-col items-center '>

            <button className='invisible md:visible md:py-6 flex flex-row  w-full md:items-center md:justify-start '>
                <img src={HomeIcon} className='md:px-3 invisible md:visible' />
                <h1 className='text-white '>Home</h1>
            </button>


            <button className='invisible md:visible  md:py-6 flex flex-row w-full md:items-center md:justify-start '>
                <img src={HomeIcon} className='md:px-3 invisible md:visible' />
                <h1 className='text-white '>Home</h1>
            </button>


            <button className='invisible md:visible  md:py-6  flex flex-row  w-full md:items-center md:justify-start '>
                <img src={HomeIcon} className='md:px-3 invisible md:visible' />
                <h1 className='text-white '>Home</h1>
            </button>


            <button className='invisible md:visible  md:py-6 flex flex-row  w-full md:items-center md:justify-start '>
                <img src={HomeIcon} className='md:px-3 invisible md:visible' />
                <h1 className='text-white '>Home</h1>
            </button>

            <div className='w-full  border '>

            </div>


        </div>
    )
}

export default NarrowSideContainer
