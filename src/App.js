import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Timer from "./components/Timer";
import Start from "./components/Start";
import Game from "./components/Game";
import Player1 from "./components/LeftSide/Player1";
import Player2 from "./components/RightSide/Player2";
import { setNames } from "./actions/gameAction";

function App() {
  //variables to store the user input from prompt
  let player1 = undefined;
  player1 = window.prompt("Enter first player's name .");
  let player2 = undefined;
  player2 = window.prompt("Enter second player's name .");
  if (!player1) player1 = "p1";
  if (!player2) player2 = "p2";
  //sending the saved user names to redux
  store.dispatch(setNames(player1, player2));

  return (
    <Provider store={store}>
      <h2 className="text-center mt-3">TIC-TAC-TOE</h2>
      <div
        className="container mt-3"
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <br />
        {/* START */}
        <Start />
        <div className="row">
          <div className="col-md-3">
            {/* PLAYER 1 */}
            <Player1 />
          </div>
          <div className="col-md-6">
            {/* TIMER */}
            <Timer />

            <div className="center-align">
              {/* BOXES */}
              <Game />
            </div>
          </div>
          <div className="col-md-3">
            {/* PLAYER2 */}
            <Player2 />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
