import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setResult } from "../actions/gameAction";

const Timer = ({ setResult, game: { tic, resetTimer } }) => {
  //timer of 5 seconds
  const [time, setTime] = useState(5);

  //TIMER FUNCTION INSIDE USEEFFECT
  useEffect(() => {
    if (resetTimer !== 0) {
      var timer = setInterval(function () {
        if (time > 0) {
          setTime(time - 1);
        } else {
          setResult(tic === "X" ? "0" : "X");
          clearInterval(timer);
        }
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [time, resetTimer]);

  //RESETTING TIMER ON EACH CLICK
  useEffect(() => {
    setTime(5);
  }, [resetTimer]);

  return (
    <div className="timer-container">
      <div className="mb-1">Timer</div>

      <div className="arrows">
        <div>
          <i
            className={
              tic === "X"
                ? "fas fa-3x fa-arrow-left arrow unhide"
                : "hide fas fa-3x fa-arrow-left arrow"
            }
          ></i>
        </div>

        <div className="timer">
          <div
            className="center-align"
            style={{
              color: "white",
              fontSize: "30px",
            }}
          >
            {time}
          </div>
        </div>
        <div>
          <i
            className={`fas fa-3x fa-arrow-right arrow ${
              tic === "0" ? "unhide" : "hide"
            }`}
          ></i>
        </div>
      </div>
    </div>
  );
};

//GETTING STATES FROM REDUX
const mapStateToProps = (state) => ({
  game: state.game,
});

export default connect(mapStateToProps, { setResult })(Timer);
