import React from "react";
import InputBase from "../InputBase/InputBase";

const Section3 = ({open}) => (

  <section>
          <div className="what-I-get">
            <p>What do I get?</p>
            <div className="chart-grid">

            </div>
            <InputBase open={open}/>
          </div>
          <div className="possible-div">
            <p>how is it possible?</p>
            <p>By maximizing the tech that everyone carries</p>
          </div>
          <div>
            <div className="cant-I-hire-someone-div">
              <p>
                Why can't I just hire someone to create the same app for me?
              </p>
              <p>
                Even if the only part of the system was the app it would cost you over 150K just to make the basic version and you risk loosing
                the money invested if it doesn't go well.
              </p>
            </div>
            <div className="buy-your-app-div">
              <p>
                How much to buy your app for my company?
              </p>
              <p>
                If you want a cash price it's 225k-350k per license
              </p>
            </div>
          </div>
        </section>
)

export default Section3;