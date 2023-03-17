import React from "react";
import "./InputBase.css";

const InputBase = () => {
  return (
    <div>
      <button
        id="SOIBTN_InitialProjectCall"
        // className="schedule-btn"
        style={{
          background: "#006DAF",
          color: "#ffffff",
          padding: "10px 20px",
          border: "1px solid #c8c8c8",
          font: "bold 14px Arial",
          cursor: "pointer",
        }}
        data-height="580"
        data-psz="00"
        data-so-page="InitialProjectCall"
        data-delay="1"
      >
        Schedule an Appointment
      </button>
    </div>
  );
};

export default InputBase;
