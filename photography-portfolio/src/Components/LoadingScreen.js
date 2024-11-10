import React, { useEffect, useState } from "react";
import "./LoadingScreen.css";
import cameraLogo from "../Images/camera-Logo-1.png";

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Disable scrolling while loading screen is visible
    document.body.style.overflow = "hidden";

    // Set a timeout to trigger the fade-out effect after a delay
    const timer = setTimeout(() => {
      setFadeOut(true); // Trigger fade-out effect
      // Set another timeout to hide the loading screen after the fade-out
      setTimeout(() => {
        setIsVisible(false); // Remove the loading screen after fade-out
        document.body.style.overflow = "auto"; // Re-enable scrolling once the loading screen is gone
      }, 1000); // Time for the fade-out effect (adjust as needed)
    }, 3500); // Time before the fade-out begins (adjust as needed)

    // Cleanup the timeout and reset overflow on unmount
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto"; // Ensure scrolling is re-enabled on unmount
    };
  }, []);

  return (
    isVisible && (
      <div className={`loading-screen ${fadeOut ? "fade-out" : ""}`}>
        <div className="spinner">
          <img src={cameraLogo} alt="Logo" className="loading-logo" />
        </div>
      </div>
    )
  );
};

export default LoadingScreen;
