import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import BuyerHeaderData from "../../assets/RequiredData/BuyerHeaderData";
import Cards from "../../components/Cards/Cards";
import BuyerFeatures from "../../components/BuyerFeatures/BuyerFeatures";
import LatestEdition from "../../components/LatestEdition/LatestEdition";
import Highlight from "../../components/Highlight/Highlight";
import ShowKindness from "../../components/ShowKindness/ShowKindness";
import cardData from "../../assets/RequiredData/BuyPageLatestEditionData";
import Analyze from "../../components/Analyze/Analyze";
import JoinUsToday from "../../components/JoinUsToday/JoinUsToday";
import CompareUs from "../../components/CompareUs/CompareUs";
import PremiumServices from "../../components/PremiumServices/PremiumServices";
import Testimonials from "../../components/Testimonials/Testimonials";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
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
