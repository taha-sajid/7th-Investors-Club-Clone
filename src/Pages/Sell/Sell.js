import React from "react";
import Header from "../../components/Header/Header";
import RecentlySoldSlider from "../../components/RecentlySoldSlider/RecentlySoldSlider";
import SellerHeaderData from "../../assets/RequiredData/SellerHeaderData";
import SellerFeatures from "../../components/SellerFeatures/SellerFeatures";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import CompareUs from "../../components/CompareUs/CompareUs";
import Testimonials from "../../components/Testimonials/Testimonials";
import IsSiteFit from "../../components/IsSiteFit/IsSiteFit";
import SellingProcess from "../../components/SellingProcess/SellingProcess";
import HowItFeels from "../../components/HowItFeels/HowItFeels";
import TheBestPart from "../../components/TheBestPart/TheBestPart";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
const Sell = () => {
  const { heading, slogon, features, buttons, backgroundImage, isHomeOpen } =
    SellerHeaderData;
  return (
    <div>
      <ScrollToTop />
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
