import React from "react";
import "./TrafficOverview.css";
import { Line, Chart } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const index = () => {
  const taha = React.createRef();
  console.log(taha);

  // let gradient = ctx.createLinearGradient(0, 0, 0, 400);
  // gradient.addColorStop(0, "rgba(58,123,213,1");
  // gradient.addColorStop(1, "rgba(0,210,255,0.3");

  const labels = [
    "Dec 19",
    "Jan 20",
    "Feb 20",
    "Mar 20",
    "Apr 20",
    "May 20",
    "Jun 20",
    "Jul 20",
    "Aug 20",
    "Sep 20",
    "Oct 20",
  ];

  const data = {
    labels,
    datasets: [
      {
        data: [
          10000, 90000, 120000, 270000, 220000, 270000, 250000, 300000, 270000,
          350000, 500000,
        ],
        label: "Website details",
        fill: true,
        borderColor: "#4a1172",
        hoverBorderWidth: 7,
        pointBorderWidth: 5,
      },
    ],
  };
  const config = {
    type: "line",
    data: data,
    options: {
      responsive: true,
    },
  };
  return (
    <div className="traffic-overview-section">
      <div className="traffic-overview-heading">
        <h2>Traffic overview</h2>
      </div>
      <div className="note">
        <p>
          <p>
            The traffic data below is pulled directly from the seller's Google
            Analytics account via API. It's updated weekly and everything is
            100% verified.
          </p>
        </p>
      </div>
      <div className="graph-container">
        <div className="graph-buttons">
          <div className="graph-button">
            <h4>View data as</h4>
            <button className="btn-primary-light">graph</button>
            <button className="btn-primary-light">table</button>
          </div>
          <div className="graph-button">
            <h4>Group data by</h4>

            <button className="btn-primary-light">weeks</button>
            <button className="btn-primary-light">months</button>
          </div>
        </div>
        <div className="graph">
          <Line ref={taha} data={data} options={config} />
        </div>
      </div>
    </div>
  );
};

export default index;
