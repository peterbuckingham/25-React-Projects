import React, { useState, useEffect, useRef } from "react";
import videobg from "../assets/Final-Comp.mp4";
import finalImage from "../Images/finalImage.jpg"; // Image to show after video ends

function Hero() {
  const [isVideoPlayed, setIsVideoPlayed] = useState(false); // Track if video has ended
  const [hasVideoStarted, setHasVideoStarted] = useState(false); // Track if video has started
  const videoRef = useRef(null); // Create a reference to the video element

  // Function to handle when the video ends
  const handleVideoEnd = () => {
    setIsVideoPlayed(true); // Set to true when the video ends
  };

  // Delay the video start using useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasVideoStarted(true); // Trigger video start after 5 seconds
    }, 4000); // 5000ms = 5 seconds delay

    // Cleanup the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  // Set the playback rate once the component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5; // Set playback rate to 1.5x (or adjust as needed)
    }
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className="hero-section">
      {hasVideoStarted ? (
        !isVideoPlayed ? (
          <video
            ref={videoRef} // Attach ref to the video element
            src={videobg}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            className="hero-video"
          />
        ) : (
          <img
            src={finalImage}
            alt="Image after video ends"
            className="hero-image"
          />
        )
      ) : null}
    </div>
  );
}



export default Hero;
