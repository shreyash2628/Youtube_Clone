import React, { useState , createContext, useContext } from 'react'
import { useDispatch } from 'react-redux';
import { searchContent } from '../Utils/searchSlice';

const Head = ({ handleOpenSideContainer, openSideContainer }) => {

const[search,setSearch]=useState();

const dispatch = useDispatch();

    const handleSearchButton = () => {
        dispatch(searchContent(search));
    }

    const handleOnClickMenuButton = () => {
        handleOpenSideContainer();
    }
    return (


        <div className='h-14 w-screen lg:w-auto grid grid-cols-3 gap-4 bg-black shadow-2xl'>

            <div className="h-12 col-span-1 flex  items-center justify-left " onClick={handleOnClickMenuButton}>
                <div className='HamburgerMenu flex flex-row h-12  ' >
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1200px-Hamburger_icon_white.svg.png' className='h-full p-2' />
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkLNtmqUZQkUcyQl_dAIiKiyEqJWbrw8PlJg&usqp=CAU' className='h-full flex items-center ml-2 ' />
                </div>
            </div>


            <div className="h-12 col-span-1  flex items-center mt-1" >
                <input className='w-36 lg:w-full sm:w-96 sm:py-1 lg:pl-2 lg:py-1 rounded-l-full ' placeholder='search' value={search} onChange={(e) => setSearch(e.target.value)}></input>
                <button className='bg-white border lg:py-1 sm:py-1 sm:px-1 border-black border-2 rounded-r-full lg:px-2' onClick={handleSearchButton}  >🔍</button>
            </div>

            <div className="h-12 col-span-1 p-2 flex justify-end">
                <img src='https://cdn-icons-png.flaticon.com/128/9512/9512683.png' className='h-full '></img>
            </div>
        </div>

    )
}

export default Head;
