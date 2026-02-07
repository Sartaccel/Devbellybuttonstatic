import React, { useEffect, useRef } from "react";
import "./Video.css";
import demovideo from "../../Images/demovideo.mp4";

function Video() {
  const videoRef = useRef(null);

  useEffect(() => {
  const video = videoRef.current;
  if (!video) return;

  video.muted = true;
  video.playsInline = true;

  // 🔊 enable sound after user interaction
  const enableSound = () => {
    video.muted = false;
    video.volume = 1;
    video.play().catch(() => {});
  };

  window.addEventListener("click", enableSound, { once: true });

  const observer = new IntersectionObserver(
    ([entry]) => {
      entry.isIntersecting
        ? video.play().catch(() => {})
        : video.pause();
    },
    { threshold: 0.6 }
  );

  observer.observe(video);

  return () => {
    observer.disconnect();
    window.removeEventListener("click", enableSound);
  };
}, []);

  return (
    
  <div className="why-right">
    <video
      ref={videoRef}
      src={demovideo}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className="app-video"
      controls     // 👈 THIS LINE
    />
  </div>
);

  
}

export default Video;
