import React, { useContext } from 'react';
import { VideoContext } from '../contexts/VideoContext';

function VideoThumbnail({ video }) {
  const { playVideo, darkMode } = useContext(VideoContext);

  return (
    <div
      className={` rounded-lg shadow-md p-4 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 ${darkMode ? ' bg-slate-950 text-white' : 'bg-white'}`}
      onClick={() => playVideo(video)}
    >
      <img src={video.thumbnail} alt={video.title} className="mb-2 w-full" />
      <p className={`text-2xl font-extrabold ${darkMode ? ' text-white' : 'text-black'}`}>{video.title}</p>
    </div>
  );
}

export default VideoThumbnail;
