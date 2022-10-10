import React from "react";
import InputBase from "../InputBase/InputBase";
import VideoComponet from "../VideoComponet/VideoComponet";
import Section2 from "../Section2/Section2";
import Section3 from "../Section3/Section3";
import Section4 from "../Section4/Section4";
import "./LandingPage.css"
import ScheduleModal from "../ScheduleModal/ScheduleModal";

class LandingPage extends React.Component {

  constructor() {
    super()
    this.state = {
      show: false
    }
    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {  
    return(
      <div className="parent-div">
        <section>
          <div className="video-parent-div">
          <div className="video-div">
            <VideoComponet />
          </div>
          <div>
          <InputBase open={this.showModal} />
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
              <div>
                <p>
                  Guarantee
                  No charge if we can't increase your profit and income anything you using now.
                  If in three months aren't making more money with us we refund any expenses.
                </p>
              </div>
           
            </div>
            <div className="guarantee-stamp">
              <p>90 day Guarentee</p>
            </div>
          </div>
          <div>
            <InputBase open={this.showModal} />
          </div>
          <div className="who-div">
            <p >
              Who is this for? 
            </p>
            <p>
              This is specifically for owners of shops that are looking to increase their income while reducing the cost of employee per 
              sale so that you can utilize them and give your customers a better shopping experience.
            </p>
          </div>
          <ScheduleModal show={this.state.show} handleClose={this.hideModal}>
          <header>
           <h3>Schedule a Time to Talk</h3>
          </header>
          <div>
            <div className="meetings-iframe-container" data-src="https://meetings.hubspot.com/philip-cutting/store-direct?embed=true"></div>
          </div>
          </ScheduleModal>
        </section>
        <Section2 open={this.showModal}/>
        <Section3 open={this.showModal}/> 
        <Section4 open={this.showModal}/>
       
        </div>
    )
  }
}

export default LandingPage;