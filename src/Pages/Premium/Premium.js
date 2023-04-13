import React from "react";
import PremiumHeaderData from "../../assets/RequiredData/PremiumHeaderData";
import Header from "../../components/Header/Header";
import FeaturedIn from "../../components/FeaturedIn/FeaturedIn";
import OurMemberShip from "../../components/OurMemberShip/OurMemberShip";
import RequireBusiness from "../../components/RequireBuisness/RequireBusiness";
import PremiumTestimonials from "../../components/PremiumTestimonials/PremiumTestimonials";
import FAQs from "../../components/FAQs/FAQs";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
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
