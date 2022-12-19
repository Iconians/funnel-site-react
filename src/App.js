import './App.css';
import React from "react";
import InputBase from "./Componets/InputBase/InputBase";
import VideoComponet from "./Componets/VideoComponet/VideoComponet";
import Section2 from "./Componets/Section2/Section2";
import Section3 from "./Componets/Section3/Section3";
import Section4 from "./Componets/Section4/Section4";
import ScheduleModal from "./Componets/ScheduleModal/ScheduleModal";

function App() {
  
    return (
      <div className="parent-div">
        <section>
          <div className="video-parent-div">
            <div className="video-div">
              <VideoComponet />
            </div>
            <div>
              <InputBase />
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
            <InputBase />
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
          <ScheduleModal />
        </section>
        <Section2 />
        <Section3  />
        <Section4 />
      </div>
    );
  };

export default App;
