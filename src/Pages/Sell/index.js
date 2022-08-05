import React from "react";
import Header from "../../components/Header";
import RecentlySoldSlider from "../../components/RecentlySoldSlider";
import SellerHeaderData from "../../assets/RequiredData/SellerHeaderData";
import SellerFeatures from "../../components/SellerFeatures";
import HowItWorks from "../../components/HowItWorks";
import CompareUs from "../../components/CompareUs";
import Testimonials from "../../components/Testimonials";
import IsSiteFit from "../../components/IsSiteFit";
import SellingProcess from "../../components/SellingProcess";
import HowItFeels from "../../components/HowItFeels";
import TheBestPart from "../../components/TheBestPart";
const Sell = () => {
  const { heading, slogon, features, buttons, backgroundImage, isHomeOpen } =
    SellerHeaderData;
  return (
    <div>
      <Header
        heading={heading}
        features={features}
        slogon={slogon}
        buttons={buttons}
        backgroundImage={backgroundImage}
        isHomeOpen={isHomeOpen}
      />
      <RecentlySoldSlider />
      <SellerFeatures />

      <HowItWorks />
      <Testimonials />
      <IsSiteFit />
      <CompareUs />
      <SellingProcess />
      <HowItFeels />
      <TheBestPart />
      {/* <h1 style={{ textAlign: "center", color: "#4a1172" }}> SELL </h1> */}
    </div>
  );
};

export default Sell;
