//function for checking results
export const checkResult = (boxes) => {
  for (let i = 0; i <= boxes.length - 1; i += 3) {
    if (
      boxes[i].value === boxes[i + 1].value &&
      boxes[i].value === boxes[i + 2].value &&
      boxes[i].value !== null
    ) {
      return boxes[i].value;
    }
  }
  for (let i = 0; i < 3; i++) {
    if (
      boxes[i].value === boxes[i + 3].value &&
      boxes[i].value === boxes[i + 6].value &&
      boxes[i].value !== null
    ) {
      return boxes[i].value;
    }
  }
  if (
    (boxes[0].value === boxes[4].value &&
      boxes[0].value === boxes[8].value &&
      boxes[4].value !== null) ||
    (boxes[2].value === boxes[4].value &&
      boxes[4].value === boxes[6].value &&
      boxes[4].value !== null)
  ) {
    return boxes[4].value;
  }
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].value === null) {
      return;
    }
  }
  return "draw";
};
