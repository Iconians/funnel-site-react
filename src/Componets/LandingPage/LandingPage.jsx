import React from "react";
import InputBase from "../InputBase/InputBase";
import VideoComponet from "../VideoComponet/VideoComponet";
import Section2 from "../Section2/Section2";
import Section3 from "../Section3/Section3";
import Section4 from "../Section4/Section4";
import "./LandingPage.css";
import ScheduleModal from "../ScheduleModal/ScheduleModal";
import { useState } from "react";

const LandingPage = () => {
  const [showModal, setShowModal] = useState(true);

  const handleOpen = () => {
    setShowModal(true);
  };

  const handlClose = () => {
    setShowModal(false);
  };

  return (
    <div className="parent-div">
      <section>
        <div className="video-parent-div">
          <div className="video-div">
            <VideoComponet />
          </div>
          <div>
            <InputBase open={handleOpen} />
          </div>
        </div>
        <div className="description-div">
          <div className="short-description">
            <p>Short Description</p>
          </div>
          <div>
            <img src="" alt="Screen Shot" />
          </div>
        </div>
        <div className="guarantee-div">
          <div className="guarantee-statement">
            <p>
              Guarantee No charge if we can't increase your profit and income
              anything you using now. If in three months aren't making more
              money with us we refund any expenses.
            </p>
          </div>
          <div className="guarantee-stamp">
            <p>90 day Guarentee</p>
          </div>
        </div>
        <div>
          <InputBase open={handleOpen} />
        </div>
        <div className="who-div">
          <p>Who is this for?</p>
          <p>
            This is specifically for owners of shops that are looking to
            increase their income while reducing the cost of employee per sale
            so that you can utilize them and give your customers a better
            shopping experience.
          </p>
        </div>
        <ScheduleModal show={showModal} handleClose={handlClose} />
      </section>
      <Section2 open={handleOpen} />
      <Section3 open={handleOpen} />
      <Section4 open={handleOpen} />
    </div>
  );
};

export default LandingPage;
