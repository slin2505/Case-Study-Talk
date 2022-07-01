import React from "react";
import "../Themes/Components/surveyButton.css";

type SurveyButtonTypes = {
  children: string;
};

const SurveyButton: React.FC<SurveyButtonTypes> = ({ children }) => {
  return (
    <button type="button" className="survey-button">
      {children}
    </button>
  );
};

export default SurveyButton;
