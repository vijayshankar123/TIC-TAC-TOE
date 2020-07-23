import React from "react";
import { connect } from "react-redux";

const Player2 = ({ game: { player2, tic } }) => {
  //returning name of player 1
  return (
    <div
      style={{ height: "100%" }}
      className={tic === "0" ? "center-align active" : "center-align"}
    >
      {player2.toUpperCase()}
    </div>
  );
};

const mapStateToProps = (state) => ({
  game: state.game,
});

export default connect(mapStateToProps)(Player2);
