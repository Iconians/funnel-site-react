import React from "react";
import InputBase from "../InputBase/InputBase";
import VideoComponet from "../VideoComponet/VideoComponet";

class LandingPage extends React.Component {

  render() {
    return(
      <div className="parent-div">
         <section>
          <div className="video-div">
            <VideoComponet />
            <InputBase />
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
         <section>
          <div className="results-div">
            <div>
              <p>
                How long before uou can see results?
                We like to compare progress at 15, 30, 60 & 90 days.
                It takes 10-15 days days to customize your app.
              </p>
            </div>
            <div>
              <InputBase />
            </div>
          </div>
          <div>
            <p>
              What do I have to do?
              unless you are doing the completely done for you option, then you to do 
            </p>
            <ul>
              <li>A call to discuss your branding and unigueness of your shop.</li>
              <li>Get images and descriptions of your products</li>
              <li>Register your payment portal if you don't already have one.</li>
            </ul>
          </div>
         </section>
         
        </div>
    )
  }
}

export default LandingPage;