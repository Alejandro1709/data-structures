import swap from './swap';

// BASIC SORTING ALGORITHMS

// Worst case = O(n^2) | Average case = O(n^2) | Best case = O(n) | Space complexity = O(1)
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

// Worst case = O(n^2) | Average case = O(n^2) | Best case = O(n^2) | Space complexity = O(1)
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

// Worst case = O(n^2) | Average case = O(n^2) | Best case = O(n) | Space complexity = O(1)
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

// INTERMEDIATE SORTING ALGORITHMS

// Worst case = O(n log n) | Average case = O(n log n) | Best case = O(n log n) | Space complexity = O(n)
export const mergeSort = (arr: number[]): number[] => {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

const merge = (arr1: number[], arr2: number[]): number[] => {
  let results: number[] = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
};

// Worst case = O(n log n) | Average case = O(n log n) | Best case = O(n log n) | Space complexity = O(n)
export const quickSort = (
  arr: number[],
  left: number = 0,
  right = arr.length - 1
) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

const pivot = (
  arr: number[],
  start: number = 0,
  end: number = arr.length + 1
) => {
  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }

  swap(arr, start, swapIndex);
  return swapIndex;
};
