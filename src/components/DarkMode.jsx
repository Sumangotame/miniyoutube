import React, { useContext, useEffect } from 'react'
import { VideoContext } from '../contexts/VideoContext'
const DarkMode = () => {
    const { darkMode, toggleDarkMode } = useContext(VideoContext)
    useEffect(() => {
        console.log(darkMode);
    }, [darkMode]);

    const handleDarkMode = () => {
        toggleDarkMode();
    }
    return (
        <div className="flex justify-end mb-4">
            <button onClick={handleDarkMode} className="text-gray-500">
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </div>
    )
}

export default DarkMode