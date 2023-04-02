import React from "react";
import RecentlySoldSlider from "../../components/RecentlySoldSlider";
import Buyers from "../../components/Buyers";
import Seller from "../../components/Seller";
import LatestEdition from "../../components/LatestEdition";
import CurrentPosition from "../../components/CurrentPosition";
import JoinThePremium from "../../components/JoinThePremium";
import Testimonials from "../../components/Testimonials";
import FreeResources from "../../components/FreeResources";
import Header from "../../components/Header";
import HomeHeaderData from "../../assets/RequiredData/HomeHeaderData";
import cardData from "../../assets/RequiredData/LatestEditionCardData";
import ScrollToTop from "../../components/ScrollToTop";

const Home = () => {
  const {
    features,
    note,
    heading,
    headerImage,
    buttons,
    backgroundImage,
    isHomeOpen,
  } = HomeHeaderData;

  return (
    <>
      <ScrollToTop />
      <Header
        heading={heading}
        note={note}
        features={features}
        headerImage={headerImage}
        buttons={buttons}
        backgroundImage={backgroundImage}
        isHomeOpen={isHomeOpen}
      />
      <RecentlySoldSlider />
      <Buyers />
      <Seller />
      <LatestEdition cardData={cardData} />
      <CurrentPosition />
      <JoinThePremium />
      <Testimonials />
      <FreeResources />
    </>
  );
};

export default Home;
