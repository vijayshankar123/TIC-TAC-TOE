import React from "react";
import { connect } from "react-redux";
import { setTimer, isDisableStartButton } from "../actions/gameAction";

const Start = ({
  game: { disableStartButton },
  isDisableStartButton,
  setTimer,
}) => {
  //disabliing button and starting timer on initial click
  const clickHandler = () => {
    setTimer();
    isDisableStartButton();
  };

  return (
    <div className="center-align mb-4">
      <button
        disabled={disableStartButton}
        onClick={clickHandler}
        className="btn btn-secondary "
      >
        {disableStartButton ? "Disabled" : "Start"}
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  game: state.game,
});

export default connect(mapStateToProps, { isDisableStartButton, setTimer })(
  Start
);
