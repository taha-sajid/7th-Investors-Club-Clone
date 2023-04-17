import React from "react";
import { additionalInfo } from "../../assets/RequiredData/FormData";
import { CheckButtonSVG } from "../../assets/RequiredData/Svgs";
import { useState } from "react";

const Index = ({ id, name }) => {
  const [clicked, setClicked] = useState(false);
  const [selectedButton, setSelectedButton] = useState([]);
  const getButton = () => {
    const buttons = [...selectedButton];
    buttons.push(name);
    setClicked(!clicked);
    console.log(buttons);
    setSelectedButton(buttons);
  };
  console.log(selectedButton, "This is selected button");
  return (
    <>
      <button
        className={`btn-lg ${
          clicked ? "btn-secondary" : "btn-neutral--outline"
        } `}
        id={id}
        type="button"
        name={name}
        onClick={getButton}
      >
        <span className="icon">
          <CheckButtonSVG onClick={getButton} />
        </span>
        {name}
      </button>
    </>
  );
};

export default Index;
