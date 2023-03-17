import React from "react";
import InputBase from "../InputBase/InputBase";
import chartImg from "../../assets/chart.jpg";

const descArray = [
  {
    divClass: "possible-div",
    h3: "How is it possible?",
    p: "By maximizing the tech that everyone carries",
    id: 0,
  },
  {
    divClass: "cant-I-hire-someone-div",
    h3: "Why can't I just hire someone to create the same app for me?",
    p: "Even if the only part of the system was the app it would cost you over 150K just to make the basic version and you risk loosing the money invested if it doesn't go well.",
    id: 1,
  },
  {
    divClass: "buy-your-app-div",
    h3: "How much to buy your app for my company?",
    p: "If you want a cash price it's 225k-350k per license",
    id: 2,
  },
  {
    divClass: "waist-months-div",
    h3: "What if I waist 3 months and don't make more money?",
    p: "Then you have paid nothing. But what if happens if you don't get it and your competitors do? We carry all the risks and setup costs. If it is amazing we keep working together. If not, I hope we part friends.",
    id: 3,
  },
];

const Section3 = () => {
  return (
    <section>
      <div className="what-I-get">
        <h3>What do I get?</h3>
        <div className="chart-grid">
          {/* <p>CHART</p> */}
          <img src={chartImg} alt="chart" />
        </div>
        <div className="btn-div">
          <InputBase />
        </div>
      </div>
      <div>
        {descArray.map((par) => (
          <div className={par.divClass} key={par.id}>
            <h3>{par.h3}</h3>
            <p>{par.p}</p>
          </div>
        ))}
      </div>

      <div>
        <div className="meetings-iframe-container">
          <div
            id="SOIDIV_InitialProjectCall"
            data-so-page="InitialProjectCall"
            data-height="550"
            data-style="border: 1px solid #d8d8d8; min-width: 290px; max-width: 900px;"
            data-psz="00"
          ></div>
        </div>
      </div>
    </section>
  );
};
export default Section3;
