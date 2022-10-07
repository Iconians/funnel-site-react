import React from "react";
import InputBase from "../InputBase/InputBase";
import VideoComponet from "../VideoComponet/VideoComponet";
import { Helmet } from "react-helmet"

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
        <section>
          <div>
            <p>What do I get?</p>
            <div className="chart-grid">

            </div>
            <InputBase />
          </div>
          <div>
            <p>how is it possible</p>
            <p>By maximizing the teck that everyone carries</p>
          </div>
          <div>
            <div>
              <p>
                Why can't I just hire someone to create the same app for me?
              </p>
              <p>
                Even if the only part of the system was the app it would cost you over 150K just to make the basic version and you risk loosing
                the money invested if it doesn't go well.
              </p>
            </div>
            <div>
              <p>
                How much to buy your app for my company?
              </p>
              <p>
                If you want a cash price it's 225k-350k per license
              </p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <p>
              What if I waist 3 months and don't make more money?
            </p>
            <p>
              then you have paid nothing. <br />
              But what if happens if you get it and your competitors do? <br />
              We carry all the risks and setup costs. <br />
              If it is we keep working together. <br />
              If not, I hope we part as friends.
            </p>
          </div>
          <div>
          <div className="meetings-iframe-container" data-src="https://meetings.hubspot.com/philip-cutting/store-direct?embed=true"></div>
          <Helmet>
            <script type="text/javascript" src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"></script>
          </Helmet>   
          </div>
        </section>
        </div>
    )
  }
}

export default LandingPage;