import {
  SET_TIMER,
  SET_TIC,
  SET_RESULT,
  SET_NAMES,
  DISABLE_START_BUTTON,
} from "../actions/gameAction";

//initialstates
const initialState = {
  resetTimerP1: false,
  resetTimerP2: false,
  resetTimer: 0,
  disableStartButton: false,
  player1: "",
  player2: "",
  tic: "X",
  result: "",
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    //adding names from user prompt
    case SET_NAMES:
      return {
        ...state,
        loading: false,
        player1: action.payload.player1,
        player2: action.payload.player2,
      };
    //setting timer on each user click
    case SET_TIMER:
      return {
        ...state,
        loading: false,
        resetTimer: state.resetTimer + 1,
      };
    // disabling start button once user clicks start button
    case DISABLE_START_BUTTON:
      return {
        ...state,
        loading: false,
        result: "",
        disableStartButton: true,
      };
    //setting the value of each box on user click
    case SET_TIC:
      let newTic = "";
      if (state.tic === "X") {
        newTic = "0";
      } else {
        newTic = "X";
      }
      return {
        ...state,
        tic: newTic,
        loading: false,
      };
    //setting result
    case SET_RESULT:
      let finalResult = "";
      if (action.payload === "X") finalResult = state.player1;
      else if (action.payload === "0") finalResult = state.player2;
      else finalResult = "draw";
      return {
        ...state,
        result: finalResult,
        loading: false,
        resetTimer: 0,
        tic: "X",
        disableStartButton: false,
      };
    default:
      return state;
  }
}
