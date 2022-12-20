import React from "react";
import { useAppContext } from "../../providers/app.provider";
import useExternalScripts from "../../hooks/UseExternalScripts";
import "./ScheduleModal.css";

const ScheduleModal = () => {
  const { handlClose, showModal } = useAppContext();
  useExternalScripts(
    "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
  );
  return (
    <div className={`modal ${!showModal ? null : "is-visible"}`}>
      <div className="modal-main">
        <header className="header">
          <h3>Schedule a Time to Talk</h3>
        </header>
        <div>
          <div
            className="meetings-iframe-container"
            data-src="https://meetings.hubspot.com/philip-cutting/store-direct?embed=true"
          ></div>
        </div>
        <div className="modal-btn-div">
          <input
            className="input"
            type="button"
            value="Close"
            onClick={handlClose}
          />
        </div>
      </div>
    </div>
  );
};

export default ScheduleModal;
