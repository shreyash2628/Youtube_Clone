import React from 'react';
import HomeIcon from '../Assests/home_icon.png';

const NarrowSideContainer = () => {
    return (
        <div className='h-screen bg-black  lg:w-20 md:red-400 flex flex-col items-center'>

            <li><img src={HomeIcon} className='my-2'/></li>
            <li className='text-white list-none'>Home</li>
            <li><img src={HomeIcon} className='my-2'/></li>
            <li className='text-white list-none'>Home</li>
            <li><img src={HomeIcon} className='my-2'/></li>
            <li className='text-white list-none'>Home</li>
            <li><img src={HomeIcon} className='my-2'/></li>
            <li className='text-white list-none'>Home</li>

        </div>
    )
}

export default NarrowSideContainer
