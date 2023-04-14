import React from "react";
import Header from "../../Components/Header/Header";
import RecentlySoldSlider from "../../Components/RecentlySoldSlider";
import SellerHeaderData from "../../assets/RequiredData/SellerHeaderData";
import SellerFeatures from "../../Components/SellerFeatures";
import HowItWorks from "../../Components/HowItWorks";
import CompareUs from "../../Components/CompareUs";
import Testimonials from "../../Components/Testimonials";
import IsSiteFit from "../../Components/IsSiteFit";
import SellingProcess from "../../Components/SellingProcess";
import HowItFeels from "../../Components/HowItFeels";
import TheBestPart from "../../Components/TheBestPart";
import ScrollToTop from "../../Components/ScrollToTop";
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
