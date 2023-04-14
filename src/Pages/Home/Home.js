import React from "react";
import RecentlySoldSlider from "../../Components/RecentlySoldSlider";
import Buyers from "../../Components/Buyers/Buyers";
import Seller from "../../Components/Seller/Seller";
import LatestEdition from "../../Components/LatestEdition";
import CurrentPosition from "../../Components/CurrentPosition";
import JoinThePremium from "../../Components/JoinThePremium";
import Testimonials from "../../Components/Testimonials";
import FreeResources from "../../Components/FreeResources";
import Header from "../../Components/Header";
import HomeHeaderData from "../../assets/RequiredData/HomeHeaderData";
import cardData from "../../assets/RequiredData/LatestEditionCardData";
import ScrollToTop from "../../Components/ScrollToTop";

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
