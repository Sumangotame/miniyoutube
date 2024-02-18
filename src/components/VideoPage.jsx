import React, { useContext, useState, useEffect } from 'react';
// import { AuthContext } from '../contexts/AuthContext';
import { VideoContext } from '../contexts/VideoContext';
import VideoThumbnail from './VideoThumbnail';
import Header from './Header';

function VideoPage() {

    const { fetchVideos, videos, searchQuery, darkMode, setLoading, loading } = useContext(VideoContext);
    useEffect(() => {
        fetchVideos(searchQuery);
        setLoading(false);
    }, [searchQuery])




    return (
        <div className={`${darkMode ? ' bg-slate-950' : ''}`}>
            <div className="p-4">
                <Header />
                <h1 className={`px-8 text-3xl font-bold mb-4 ${darkMode ? 'text-white' : ''} text-black`}>Welcome to Video Player</h1>

                {loading ? (
                    <p>Search Video First...</p>
                ) : (
                    <div className="px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {videos.map((video) => (
                            <VideoThumbnail key={video.id} video={video} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default VideoPage;
