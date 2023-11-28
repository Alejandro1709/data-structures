// Worst case = O(n) | Average case = O(n) | Best case = O(1) | Space complexity = O(1)
export const linearSearch = (arr: number[], target: number) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

// Worst case = O(n) | Average case = O(n) | Best case = O(1) | Space complexity = O(1)
export const binarySearch = (arr: number[], target: number): number => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== target && start <= end) {
    middle = Math.floor((start + end) / 2);
    if (target < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return arr[middle] === target ? middle : -1;
};
