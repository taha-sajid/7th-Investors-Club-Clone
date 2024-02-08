import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import LatestEdition from "../../Components/LatestEdition/LatestEdition";
import "../Dashboard/Dashboard.css";
import cardData from "../../assets/RequiredData/LatestEditionCardData";

const Listings = () => {
  return (
    <>
      <Navbar />
      <main className="dashboard-container">
        <h1> This is listings Page </h1>
        <LatestEdition cardData={cardData} />
        <LatestEdition cardData={cardData} />
      </main>
      ;
    </>
  );
};

export default Listings;
