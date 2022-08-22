import React from "react";
import PremiumHeaderData from "../../assets/RequiredData/PremiumHeaderData";
import Header from "../../components/Header";
import FeaturedIn from "../../components/FeaturedIn";
import OurMemberShip from "../../components/OurMemberShip";
import RequireBusiness from "../../components/RequireBuisness";
import PremiumTestimonials from "../../components/PremiumTestimonials";
import FAQs from "../../components/FAQs";
const Premium = () => {
  const { slogon, heading, buttons, isHomeOpen, features, headerImage } =
    PremiumHeaderData;
  return (
    <div>
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
      <PremiumTestimonials/>
      <FAQs/>
    </div>
  );
};

export default Premium;
