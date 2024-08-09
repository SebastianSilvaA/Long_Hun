"use client"
import { useRef, useEffect, useState } from 'react';

const HeaderWithVideo = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const handleVideoEnd = () => {
      setVideoEnded(true);
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      video.style.display = 'none';
      canvas.style.display = 'block';
    };

    const resetVideoAndCanvas = () => {
      setVideoEnded(false);
      video.style.display = 'block';
      canvas.style.display = 'none';
      video.load();
      video.play();
    };

    video.addEventListener('ended', handleVideoEnd);

    // if (videoEnded) {
    //   resetVideoAndCanvas();
    // }

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
    };
  }, [videoEnded]);

  return (
    <header className='relative w-full h-auto pt-20 pb-10 overflow-hidden bg-transparent !bg-black lg:flex lg:justify-center'>
      <video ref={videoRef} autoPlay muted playsInline  className="w-full h-auto lg:!w-2/3"
        style={{ display: videoEnded ? 'none' : 'block' }}>
        <source src="/assets/video/torneo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <canvas ref={canvasRef}
        className={`w-full h-auto lg:!w-2/3 ${videoEnded ? 'block' : 'hidden'}`}
        style={{ display: videoEnded ? 'block' : 'none' }}/>
    </header>
  );
};

export default HeaderWithVideo;

