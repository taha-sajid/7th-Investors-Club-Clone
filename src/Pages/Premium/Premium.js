import React from "react";
import PremiumHeaderData from "../../assets/RequiredData/PremiumHeaderData";
import Header from "../../Components/Header";
import FeaturedIn from "../../Components/FeaturedIn";
import OurMemberShip from "../../Components/OurMemberShip";
import RequireBusiness from "../../Components/RequireBuisness";
import PremiumTestimonials from "../../Components/PremiumTestimonials";
import FAQs from "../../Components/FAQs";
import ScrollToTop from "../../Components/ScrollToTop";
const Premium = () => {
  const { slogon, heading, buttons, isHomeOpen, features, headerImage } =
    PremiumHeaderData;
  return (
    <div>
      <ScrollToTop />
      <Header
        slogon={slogon}
        buttons={buttons}
        isHomeOpen={isHomeOpen}
        features={features}
        heading={heading}
        headerImage={headerImage}
      />

      {/* <h1 style={{ textAlign: "center",  color: '#4a1172'}} > PREMIUM </h1> */}
      <FeaturedIn />
      <RequireBusiness />
      <OurMemberShip />
      <PremiumTestimonials />
      <FAQs />
    </div>
  );
};

export default Premium;
