import React, { useContext, useState } from 'react';
import DarkMode from './DarkMode';
import { VideoContext } from '../contexts/VideoContext';
import Search from './Search';
import YouTube from '../assets/YouTube.svg'
import YoutubeWhite from '../assets/YoutubeWhite.svg'



function Header() {
    const { darkMode } = useContext(VideoContext)
    return (
        <div className="px-3 flex justify-between flex-col flex-start md:flex-row items-center">
            <div>
                {darkMode ?
                    <img src={YoutubeWhite} alt="youtube image" className=' h-32' /> : <img src={YouTube} alt="youtube image" className=' h-32' />
                }
            </div>
            <div>
                <Search />
            </div>
            <div className='pt-5'>
                <DarkMode />
            </div>
        </div>
    );
}

export default Header;
