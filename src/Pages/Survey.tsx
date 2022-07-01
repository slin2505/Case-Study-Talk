import React from "react";
import SurveyButton from "../Components/SurveyButton";
import "../Themes/Pages/survey.css";

const Survey: React.FC = () => {
  const handleData = () => {};
  return (
    <div className="main-container">
      <div className="left-part">
        <h1>🛌 Votre établissement</h1>
        <h2>
          Ces informations importantes serviront à mieux connaître votre
          établissement et à adapter notre communication en fonction de vos
          réponses.
        </h2>

        <div>
          <h3>Combien de chambres avez-vous dans votre hôtel ?</h3>
          <div className="button-container">
            <SurveyButton>1-10</SurveyButton>
            <SurveyButton>10-50</SurveyButton>
            <SurveyButton>50-100</SurveyButton>
            <SurveyButton>100-200</SurveyButton>
            <SurveyButton>200+</SurveyButton>
          </div>
        </div>

        <div>
          <h3>Avez-vous un restaurant ?</h3>
          <div className="button-container">
            <SurveyButton>Oui</SurveyButton>
            <SurveyButton>Non</SurveyButton>
          </div>
        </div>

        <div>
          <h3>Combien de places assises avez-vous au restaurant ?</h3>
          <div className="button-container">
            <SurveyButton>1-10</SurveyButton>
            <SurveyButton>10-25</SurveyButton>
            <SurveyButton>25-50</SurveyButton>
            <SurveyButton>50+</SurveyButton>
          </div>
        </div>
      </div>

      <div className="right-part">
        <img src="./images/room.png" alt="room-img" />
      </div>
    </div>
  );
};

export default Survey;
