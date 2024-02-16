import React, { useContext, useState } from 'react'
import { VideoContext } from '../contexts/VideoContext';

const Search = () => {
    const { setSearchQuery, searchQuery,setLoading,fetchVideos } = useContext(VideoContext)
    const handleSearch = () => {
        setLoading(true);
        fetchVideos(searchQuery);
        setLoading(false);
    };

    return (
        <div>
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search videos..."
                className="border border-gray-300 rounded-md px-3 py-2 mr-2 outline-zinc-900 my-2"
            />
            <button
                onClick={handleSearch}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
                Search
            </button>
        </div>
    )
}

export default Search