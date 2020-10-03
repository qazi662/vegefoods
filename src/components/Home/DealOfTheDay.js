import React from "react";
import Countdown from "react-countdown";
import HomeContext from "../../context/home";
import Loading from "../Loading";

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <p className="dotd-success">DEAL IS OVER!</p>;
  } else {
    // Render a countdown
    return (
      <div>
        <div id="timer" className="d-flex mt-5">
          <div className="time ml-2 col-3" id="days">
            {days}
          </div>
          <div className="time ml-2 col-3" id="hours">
            {" "}
            {hours}
          </div>
          <div className="time ml-3 col-3" id="minutes">
            {minutes}
          </div>
          <div className="time ml-3 col-3" id="seconds">
            {seconds}
          </div>
        </div>
        <div id="timer" className="d-flex mt-5">
          <p className="col-3 pl-5">Days</p>
          <p className="col-3 pl-5">Hours</p>
          <p className="col-3 pl-5">Minutes</p>
          <p className="col-3 pl-5">Seconds</p>
        </div>
      </div>
    );
  }
};

const DealOfTheDay = () => {
  const { deal, dealLoading } = React.useContext(HomeContext);

  if (dealLoading) {
    return <Loading />;
  }

  return (
    <section
      className="ftco-section img"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)),url(${
          deal ? deal.image.url : null
        })`,
      }}
    >
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-md-6 heading-section deal-of-the-day">
            <span className="subheading">Best Price For You</span>
            <h2 className="mb-4">Deal of the day</h2>
            <p className="text-white">{deal ? deal.description : null}</p>
            <h3>
              <p className="text-primary">{deal ? deal.title : null}</p>
            </h3>
            <span className="price">
              <span className="dotd-sale text-primary">
                {" "}
                ${deal ? deal.old_price : null}
              </span>
              <p className="d-inline text-white">
                {" "}
                now ${deal ? deal.new_price : null} only
              </p>
            </span>
            <Countdown date={"2020-10-31T19:00:00.000Z"} renderer={renderer} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default DealOfTheDay;
