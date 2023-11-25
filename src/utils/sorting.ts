import swap from './swap';

// Worst case = O(n^2) Best case O(n)
export const bubbleSort = (arr: number[]): number[] => {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};

// Worst case = O(n^2) Best case O(n)
export const selectionSort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }

    swap(arr, i, lowest);
  }

  return arr;
};

// Worst case = O(n^2) Best case O(n)
export const insertionSort = (arr: number[]): number[] => {
  for (let i = 1; i < arr.length; i++) {
    let currVal = arr[i];
    let index = i;
    for (let j = i - 1; j >= 0 && arr[j] > currVal; j--) {
      arr[j + 1] = arr[j];
      index = j;
    }
    arr[index] = currVal;
  }
  return arr;
};
