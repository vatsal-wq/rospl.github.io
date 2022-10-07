import React from "react";
import video from "./videos/video.mp4";
import "./Features.css";

function Feature() {
  return (
    <div className="overlay">
      
        <video className src={video} autoPlay loop muted />

        <div className="content">
          <h2> Welcome to Project Victory! </h2>
          <h2> Experience the bleeding edge of the current technology </h2>
        </div>
      </div>
    
  );
}

export default Feature;
