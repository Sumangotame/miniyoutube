import React, { useContext } from 'react';
import { VideoContext } from '../contexts/VideoContext';

function VideoThumbnail({ video }) {
  const { playVideo } = useContext(VideoContext);

  return (
    <div
      className="bg-white rounded-lg shadow-md p-4 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
      onClick={() => playVideo(video.id)}
    >
      <img src={video.thumbnail} alt={video.title} className="mb-2 w-full" />
      <p className="text-sm">{video.title}</p>
    </div>
  );
}

export default VideoThumbnail;
