import React from "react";
import { useAppContext } from "../../providers/app.provider";
import "./ScheduleModal.css";

const ScheduleModal = () => {
  const { handlClose, showModal } = useAppContext();
  return (
    <div className={`modal ${!showModal ? null : "is-visible"}`}>
      <div className="modal-main">
        <header className="header">
          <h3>Schedule a Time to Talk</h3>
        </header>
        <div>
          <div className="meetings-iframe-container">
            <iframe
              src="https://meetings.hubspot.com/philip-cutting/store-direct?embed=true"
              title="modalSchedule"
              frameborder="0"
            ></iframe>
          </div>
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
