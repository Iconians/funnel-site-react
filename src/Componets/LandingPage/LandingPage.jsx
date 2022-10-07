import React from "react";
import InputBase from "../InputBase/InputBase";
import VideoComponet from "../VideoComponet/VideoComponet";
import Section2 from "../Section2/Section2";
import Section3 from "../Section3/Section3";
import Section4 from "../Section4/Section4";
import "./LandingPage.css"

class LandingPage extends React.Component {

  render() {
    return(
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
            <div>
              <p>Short Description</p>
            </div>
            <div>
              <img src="" alt="" />
            </div>
          </div>
          <div className="guarantee-div">
            <div className="guarantee-statement">
              <div>
                <p>
                  Guarantee
                  No charge if we can't increase your profit and income anything you using now.
                  If in three months aren't making more money with us we refund any expenses.
                </p>
              </div>
              <div>
              <InputBase />
              </div>
            </div>
            <div className="guarantee-stamp">
              <p>90 day Guarentee</p>
            </div>
          </div>
          <div>
            <p>
              Who is this for?
              This is specifically for owners of shops that are looking to increase their income while reducing the cost of employee per 
              sale so that you can utilize them and give your customers a better shopping experience.
            </p>
          </div>
        </section>
        <Section2 />
        <Section3 />
        <Section4 />
        </div>
    )
  }
}

export default LandingPage;