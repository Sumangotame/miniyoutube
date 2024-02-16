import React, { useContext, useState } from 'react';
import DarkMode from './DarkMode';
import { VideoContext } from '../contexts/VideoContext';
import Search from './Search';

function Header({ onSearch }) {
    const { darkMode } = useContext(VideoContext)



    return (
        <div className="px-3 flex justify-between flex-col flex-start md:flex-row">
            <div className={`font-bold text-3xl ${darkMode ? 'text-white' : 'text-black'}`}>Logo</div>
            <div className="items-center">
                <Search />
            </div>
            <div className='pt-5'>
                <DarkMode />
            </div>
        </div>
    );
}

export default Header;
