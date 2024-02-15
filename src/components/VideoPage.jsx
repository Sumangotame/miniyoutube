import React, { useContext, useState, useEffect } from 'react';
// import { AuthContext } from '../contexts/AuthContext';
import { VideoContext } from '../contexts/VideoContext';
import VideoThumbnail from './VideoThumbnail';
import Header from './Header';

function VideoPage() {

    const { fetchVideos, videos, searchQuery, darkMode } = useContext(VideoContext);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchVideos(' ');
        setLoading(false);
    }, [])
    const handleSearch = () => {
        setLoading(true);
        fetchVideos(searchQuery);
        setLoading(false);
    };



    return (
        <div className={` px-2 ${darkMode ? ' bg-slate-950 text-white' : ''}`}>
            <div className="p-4">
                <Header onSearch={handleSearch} />
                <h1 className={`px-3 text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>Welcome to Video Player</h1>

                {loading ? (
                    <p>Search Video First...</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
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
