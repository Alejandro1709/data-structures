import swap from './swap.js';

// O(n^2)
export const bubbleSort = (arr: number[]): number[] => {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, i, j);
      }
    }
  }
  return arr;
};
