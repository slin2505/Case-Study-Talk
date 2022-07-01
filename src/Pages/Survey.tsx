import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../Themes/Pages/survey.css";

const Survey: React.FC = () => {
  const [chamber, setChamber] = useState<string>("");
  const [restaurant, setRestaurant] = useState<boolean>();
  const [restSpot, setRestSpot] = useState<string>("");
  const [next, setNext] = useState<boolean>(true);

  // Data to make loop for buttons
  const chambersData: string[] = ["1-10", "10-50", "50-100", "100-200", "200+"];
  const restSpotData: string[] = ["1-10", "10-25", "25-50", "50+"];

  const handleData = () => {
    // We can guess that at some point we will post data to database so this function should serve that purpose
    console.log(chamber);
    console.log(restaurant);
    console.log(restSpot);
  };

  return (
    <div className="main-container">
      <div className="left-part">
        <h1>🛌 Votre établissement</h1>
        <h2>
          Ces informations importantes serviront à mieux connaître votre
          établissement et à adapter notre communication en fonction de vos
          réponses.
        </h2>

        <div className="question-container">
          <h3>Combien de chambres avez-vous dans votre hôtel ?</h3>
          <div className="button-container">
            {chambersData.map((c: string) => {
              return (
                <button
                  type="button"
                  className={
                    chamber === c ? "survey-button active" : "survey-button"
                  }
                  key={c}
                  onClick={() => setChamber(`${c}`)}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>

        {chamber !== "" && (
          <div className="question-container">
            <h3>Avez-vous un restaurant ?</h3>
            <div className="button-container">
              <button
                type="button"
                className={
                  restaurant === true ? "survey-button active" : "survey-button"
                }
                onClick={() => {
                  setNext(true);
                  setRestaurant(true);
                }}
              >
                Oui
              </button>
              <button
                type="button"
                className={
                  restaurant === false
                    ? "survey-button active"
                    : "survey-button"
                }
                onClick={() => {
                  setRestaurant(false);
                  setRestSpot("");
                  setNext(false);
                }}
              >
                Non
              </button>
            </div>
          </div>
        )}

        {restaurant === true && (
          <div className="question-container">
            <h3>Combien de places assises avez-vous au restaurant ?</h3>
            <div className="button-container">
              {restSpotData.map((r: string) => {
                return (
                  <button
                    type="button"
                    className={
                      restSpot === r ? "survey-button active" : "survey-button"
                    }
                    key={r}
                    onClick={() => {
                      setNext(false);
                      setRestSpot(`${r}`);
                    }}
                  >
                    {r}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <button
          type="button"
          className="button-next"
          disabled={next}
          onClick={() => handleData()}
        >
          <span>Etape suivante</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>

        <button type="button" className="button-cancel">
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Retour</span>
        </button>
      </div>

      <div className="right-part">
        <img src="./images/room.svg" alt="room-img" />
      </div>
    </div>
  );
};

export default Survey;
