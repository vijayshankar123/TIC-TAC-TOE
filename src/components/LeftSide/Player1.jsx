import React from "react";
import { connect } from "react-redux";

const Player1 = ({ game: { player1, tic } }) => {
  //returning name of player 1
  return (
    <div
      style={{ height: "100%" }}
      className={tic === "X" ? "center-align active" : "center-align"}
    >
      {player1.toUpperCase()}
    </div>
  );
};

const mapStateToProps = (state) => ({
  game: state.game,
});

export default connect(mapStateToProps)(Player1);
