import React, { useEffect } from 'react';

function VideoPlayer({ match }) {
    const videoId = match.params.id;

    useEffect(() => {
        console.log(match)
    })

    return (
        <div className='mx-10 mt-10'>
            <h1 className='mb-2 p-3 text-center w-1/3 font-bold '>Video Player</h1>
            <div>
                <iframe
                    title="YouTube Video Player"
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    allowFullScreen={true}
                ></iframe>
            </div>
        </div>
    );
}

export default VideoPlayer;
