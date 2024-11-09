import React, { useEffect, useState } from "react";
import "./LoadingScreen.css";
import cameraLogo from "../Images/camera-Logo-1.png";

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Disable scrolling while loading screen is visible
    document.body.style.overflow = "hidden";

    // Set a timeout to hide the loading screen after a delay
    const timer = setTimeout(() => {
      setIsVisible(false); // Set to false to remove the loading screen
      document.body.style.overflow = "auto"; // Re-enable scrolling once the loading screen is gone
    }, 4500); // Adjust time as needed (4.5 seconds for example)

    // Cleanup the timeout and reset overflow on unmount
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto"; // Ensure scrolling is re-enabled on unmount
    };
  }, []);

  return (
    isVisible && (
      <div className="loading-screen">
        <div className="spinner">
          <img src={cameraLogo} alt="Logo" className="loading-logo" />
        </div>
      </div>
    )
  );
};

export default LoadingScreen;
