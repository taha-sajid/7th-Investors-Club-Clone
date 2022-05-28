import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import BuyerHeaderData from "../../assets/RequiredData/BuyerHeaderData";
import Cards from "../../components/Cards";
import Features from "../../components/Features";
import LatestEdition from "../../components/LatestEdition";
import Highlight from "../../components/Highlight";
import ShowKindness from "../../components/ShowKindness";
import cardData from "../../assets/RequiredData/BuyPageLatestEditionData";
import Analyze from "../../components/Analyze";
import JoinUsToday from "../../components/JoinUsToday";
import CompareUs from "../../components/CompareUs";
const Buy = () => {
  const { heading, slogon, features, buttons, backgroundImage, isHomeOpen } =
    BuyerHeaderData;

  return (
    <>
      <Header
        heading={heading}
        features={features}
        slogon={slogon}
        buttons={buttons}
        backgroundImage={backgroundImage}
        isHomeOpen={isHomeOpen}
      />
      <Cards />
      <Features />
      <div style={{ backgroundColor: "#f4f7ff" }}>
        <LatestEdition cardData={cardData} />

        <Highlight />
        <ShowKindness />
        <Analyze />
      </div>
      <JoinUsToday />
      <CompareUs />
    </>
  );
};

export default Buy;
