import React, { useContext, useEffect } from 'react'
import { VideoContext } from '../contexts/VideoContext'
import { DarkModeSwitch } from 'react-toggle-dark-mode';
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
            {/* <button onClick={handleDarkMode} className="text-gray-500">
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button> */}
            {/* <DarkModeToggle
                onChange={handleDarkMode}
                checked={darkMode}
                size={80}
            /> */}

            <DarkModeSwitch
                style={{ marginBottom: '1rem' }}
                checked={darkMode}
                onChange={handleDarkMode}
                size={35}
            />
        </div>
    )
}

export default DarkMode