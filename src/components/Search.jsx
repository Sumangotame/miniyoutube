import React, { useState } from 'react'

const Search = () => {
    const [searchTerm, setSearchTerm] = useState(' ');

    const handleSearch = () => {
        onSearch(searchTerm);
    };
    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search videos..."
                className="border text-black border-gray-300 rounded-md px-3 py-2 mr-2 outline-zinc-900 my-2"
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