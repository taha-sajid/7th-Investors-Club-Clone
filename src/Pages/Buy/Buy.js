import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import BuyerHeaderData from "../../assets/RequiredData/BuyerHeaderData";
import Cards from "../../Components/Cards/Cards";
import BuyerFeatures from "../../Components/BuyerFeatures";
import LatestEdition from "../../Components/LatestEdition";
import Highlight from "../../Components/Highlight/Highlight";
import ShowKindness from "../../Components/ShowKindness";
import cardData from "../../assets/RequiredData/BuyPageLatestEditionData";
import Analyze from "../../Components/Analyze";
import JoinUsToday from "../../Components/JoinUsToday";
import CompareUs from "../../Components/CompareUs";
import PremiumServices from "../../Components/PremiumServices";
import Testimonials from "../../Components/Testimonials";
import ScrollToTop from "../../Components/ScrollToTop";
const Buy = () => {
  const { heading, slogon, features, buttons, backgroundImage, isHomeOpen } =
    BuyerHeaderData;

  return (
    <>
      <ScrollToTop />
      <Header
        heading={heading}
        features={features}
        slogon={slogon}
        buttons={buttons}
        backgroundImage={backgroundImage}
        isHomeOpen={isHomeOpen}
      />
      <Cards />
      <BuyerFeatures />
      <div style={{ backgroundColor: "#f4f7ff" }}>
        <LatestEdition cardData={cardData} />

        <Highlight />
        <ShowKindness />
        <Analyze />
      </div>
      <JoinUsToday />
      <CompareUs />
      <Testimonials />
      <PremiumServices />
      <JoinUsToday />
    </>
  );
};

export default Buy;
