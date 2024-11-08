import React, { useState, useEffect, useRef } from "react";
import videobg from "../assets/Final-Comp.mp4";
import placeholderImage from "../Images/image2.jpg"; // Import your placeholder image

function Hero() {
  const [isVideoPlayed, setIsVideoPlayed] = useState(false);
  const videoRef = useRef(null); // Create a reference to the video element

  // Function to handle when the video ends
  const handleVideoEnd = () => {
    setIsVideoPlayed(true); // Set to true when the video ends
  };

  // Set the playback rate once the component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5; // Set playback rate to 3x (or adjust as needed)
    }
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className="hero-section">
      {!isVideoPlayed ? (
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
          src={placeholderImage}
          alt="Image after video ends"
          className="hero-image"
        />
      )}
    </div>
  );
}

export default Hero;
