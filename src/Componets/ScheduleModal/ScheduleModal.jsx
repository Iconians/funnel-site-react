import React from "react";
import { useAppContext } from "../../providers/app.provider";
import useExternalScripts from "../../hooks/UseExternalScripts";
import "./ScheduleModal.css";

const ScheduleModal = () => {
  const { handlClose, showModal } = useAppContext();
  const showHideClassName = showModal
    ? "modal display-block"
    : "modal display-none";
  useExternalScripts(
    "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
  );
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <header>
          <h3>Schedule a Time to Talk</h3>
        </header>
        <div>
          <div
            className="meetings-iframe-container"
            data-src="https://meetings.hubspot.com/philip-cutting/store-direct?embed=true"
          ></div>
        </div>
        <input
          className="input"
          type="button"
          value="Close"
          onClick={handlClose}
        />
      </section>
    </div>
  );
};

export default ScheduleModal;
