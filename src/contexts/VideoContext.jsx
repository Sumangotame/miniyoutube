import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export const VideoContext = createContext();

function VideoContextProvider({ children }) {
    const [videos, setVideos] = useState([]);
    const history = useHistory();
    const [searchQuery, setSearchQuery] = useState('')

    const fetchVideos = async (searchQuery) => {
        try {
            const API_KEY = 'AIzaSyBeXNBH2LEO3pC0qovx6xkmL4KjoExj0Ig';
            const MAX_RESULTS = 20;

            const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
                params: {
                    key: API_KEY,
                    q: searchQuery,
                    part: 'snippet',
                    type: 'video',
                    maxResults: MAX_RESULTS
                }
            });

            const fetchedVideos = response.data.items.map((item) => ({
                id: item.id.videoId,
                title: item.snippet.title,
                thumbnail: item.snippet.thumbnails.high.url,
            }));

            setVideos(fetchedVideos);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };

    const playVideo = (videoId) => {
        history.push(`/video/${videoId}`);
    };

    return (
        <VideoContext.Provider value={{ videos, fetchVideos, playVideo, setSearchQuery }}>
            {children}
        </VideoContext.Provider>
    );
}

export default VideoContextProvider;
