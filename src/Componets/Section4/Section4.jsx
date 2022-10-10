import React from "react";
import { Helmet } from "react-helmet"

const Section4 = () => (
  
  <section>
  <div className="waist-months-div">
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
)

export default Section4;