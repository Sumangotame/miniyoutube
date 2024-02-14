import React, { useEffect } from 'react';

function VideoPlayer({ match }) {
    const videoId = match.params.id;

    useEffect(() => {
        console.log(match)
    })

    return (
        <div className='w-auto flex flex-col items-center justify-center'>
            <div className='mx-10 mt-10'>
                <div className='w-auto'>
                    <h1 className='mb-2 p-3 text-center font-bold '>Video Player</h1>
                </div>
                <div>
                    <iframe
                        title="YouTube Video Player"
                        width="560"
                        height="400"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        allowFullScreen={true}
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default VideoPlayer;
