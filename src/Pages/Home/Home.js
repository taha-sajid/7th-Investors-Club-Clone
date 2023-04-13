import React from "react";
import RecentlySoldSlider from "../../components/RecentlySoldSlider/RecentlySoldSlider";
import Buyers from "../../components/Buyers/Buyers";
import Seller from "../../components/Seller/Seller";
import LatestEdition from "../../components/LatestEdition/LatestEdition";
import CurrentPosition from "../../components/CurrentPosition/CurrentPosition";
import JoinThePremium from "../../components/JoinThePremium/JoinThePremium";
import Testimonials from "../../components/Testimonials/Testimonials";
import FreeResources from "../../components/FreeResources/FreeResources";
import Header from "../../components/Header/Header";
import HomeHeaderData from "../../assets/RequiredData/HomeHeaderData";
import cardData from "../../assets/RequiredData/LatestEditionCardData";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

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
