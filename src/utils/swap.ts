const swap = (arr: number[], i: number, j: number): void => {
  let temp = arr[j];
  arr[j] = arr[j + 1];
  arr[j + 1] = temp;
};

export default swap;
