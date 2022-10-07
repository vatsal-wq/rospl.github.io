import React from "react";
import img1 from "./image/qrsw.png";
import "./Commitments.css";

function Commitments() {
  return (
    <div className="commits">
      <h2 className = "write"> What is the QRSW Quartet? </h2>
      <div className="commits-row">
        <img
          className="qrsw"
          src={img1}
          alt="Loading! We will be back in a sec?"
        />
      <p> You can count us on Quality, Reliability, Service and Warranty! </p>
      </div>
    </div>
  );
}

export default Commitments;
