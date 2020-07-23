export const SET_TIMER = "SET_TIMER";
export const SET_TIC = "SET_TIC";
export const SET_NAMES = "SET_NAMES";
export const SET_RESULT = "SET_RESULT";
export const DISABLE_START_BUTTON = "DISABLE_START_BUTTON";

//function for setting timer
export const setTimer = () => {
  return (dispatch) => {
    dispatch({
      type: SET_TIMER,
    });
  };
};

//function for setting value of each box on user click
export const setTic = () => {
  return (dispatch) => {
    dispatch({
      type: SET_TIC,
    });
  };
};

//function to set the result to state and hence print the result
export const setResult = (result) => {
  return (dispatch) => {
    dispatch({
      type: SET_RESULT,
      payload: result,
    });
  };
};

//function to disable the button on first user click
export const isDisableStartButton = () => {
  return (dispatch) => {
    dispatch({
      type: DISABLE_START_BUTTON,
    });
  };
};

//function to set user names into the state
export const setNames = (player1, player2) => {
  return (dispatch) => {
    dispatch({
      type: SET_NAMES,
      payload: { player1, player2 },
    });
  };
};
