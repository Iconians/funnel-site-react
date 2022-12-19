import React from "react";
import InputBase from "../InputBase/InputBase";

const Section2 = () => (
  <section>
    <div className="results-div">
      <div>
        <p>How long before you can see results?</p>
        <p>
          We like to compare progress at 15, 30, 60 & 90 days. It takes 10-15
          days days to customize your app.
        </p>
      </div>
      <div>
        <InputBase />
      </div>
    </div>
    <div className="what-I-need-to-div">
      <p>What do I have to do?</p>
      <p>
        unless you are doing the completely done for you option, then you to do
      </p>
      <ol>
        <li>A call to discuss your branding and unigueness of your shop.</li>
        <li>Get images and descriptions of your products</li>
        <li>Register your payment portal if you don't already have one.</li>
      </ol>
    </div>
  </section>
);

export default Section2;
