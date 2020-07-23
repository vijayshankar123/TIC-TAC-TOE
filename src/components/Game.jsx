import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Square from "./Square";
import { setTic, setResult, setTimer } from "../actions/gameAction";
import { checkResult } from "../helpers/checkResult";

const Game = ({
  setTimer,
  setTic,
  setResult,
  game: { disableStartButton, result, tic },
}) => {
  //values for boxes
  let initialBoxes = [
    { id: 1, value: null },
    { id: 2, value: null },
    { id: 3, value: null },
    { id: 4, value: null },
    { id: 5, value: null },
    { id: 6, value: null },
    { id: 7, value: null },
    { id: 8, value: null },
    { id: 9, value: null },
  ];

  const [box, setBox] = useState(initialBoxes);

  //handle function on clicking on boxes
  const handle = (id) => {
    if (!disableStartButton) {
      return window.alert(
        "Please click on the start button to start the game !"
      );
    }
    var oldBox = [...box];
    oldBox.find((item) => item.id === id).value = tic;
    setBox(oldBox);
    setTic();
    setTimer();
  };

  //checking result on each click
  useEffect(() => {
    var result = checkResult(box);

    if (result === "X" || result === "0" || result === "draw") {
      setResult(result);
      setBox(initialBoxes);
    }
  }, [tic]);

  //updating values on each click
  useEffect(() => {
    setBox(initialBoxes);
  }, [result]);

  return (
    <div>
      <div className="board">
        {box.map((item) => (
          <Square item={item} key={item.id} clickHandler={handle} />
        ))}
      </div>
      <div className="winner">
        {result && result.length > 0 && (
          <div>
            {result === "draw" ? "DRAW" : `Winner : ${result} `}
            {result !== "draw" && <i className="fas fa-trophy"></i>}
            <p>Press Start to Play again !</p>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  game: state.game,
});

export default connect(mapStateToProps, { setResult, setTimer, setTic })(Game);
