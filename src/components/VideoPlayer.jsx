import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { VideoContext } from '../contexts/VideoContext';


function VideoPlayer({ match }) {
    const videoId = match.params.id;
    const location = useLocation()
    const { videoTitle } = location.state || {};
    const { darkMode } = useContext(VideoContext)

    useEffect(() => {
        console.log(videoTitle)
    })

    return (
        <div className={` ${darkMode ? 'bg-slate-950' : 'bg-gray-100'} min-h-screen shadow-lg`}>
            <div className={`w-auto flex flex-col items-center justify-center`}>
                <div className='mx-10 mt-10 shadow-lg border-solid border-black p-4'>
                    <div className='w-auto'>
                        <h1 className={`mb-2 p-3 text-5xl text-center font-bold  ${darkMode ? 'text-white' : 'text-black'}`}>Video Player</h1>
                    </div>
                    <div>
                        <iframe
                            title="YouTube Video Player"
                            width="1000"
                            height="500"
                            src={`https://www.youtube.com/embed/${videoId}`}
                            allowFullScreen={true}
                            className='mb-4 rounded-lg w-full'
                        ></iframe>
                        <p className={`text-3xl font-extrabold ${darkMode ? ' text-white' : 'text-black'}`}>{videoTitle}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoPlayer;
