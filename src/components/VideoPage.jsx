import React, { useContext, useState, useEffect } from 'react';
// import { AuthContext } from '../contexts/AuthContext';
import { VideoContext } from '../contexts/VideoContext';
import VideoThumbnail from './VideoThumbnail';
import SearchBar from './SearchBar';

function VideoPage() {

    const { fetchVideos, videos, searchQuery } = useContext(VideoContext);
    const [loading, setLoading] = useState(true);
    useEffect((searchQuery) => {
        fetchVideos(searchQuery),
            setLoading(false);
    }, [searchQuery])
    
    const handleSearch = (searchQuery) => {
        setLoading(true);
        fetchVideos(searchQuery);

        setLoading(false);
    };



    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Welcome to Video Player</h1>
            <SearchBar onSearch={handleSearch} />
            {loading ? (
                <p>Search Video First...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {videos.map((video) => (
                        <VideoThumbnail key={video.id} video={video} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default VideoPage;
