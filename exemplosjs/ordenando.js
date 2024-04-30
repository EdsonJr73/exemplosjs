const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

const shuffle = (arr, n = 1) => {
  while (n > 0) {
    const i = Math.floor(Math.random() * arr.length);
    const j = Math.floor(Math.random() * arr.length);
    swap(arr, i, j);
    n--;
  }
};

const bubble_sort = (arr) => {
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

const selection_sort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }
  return arr;
};

const quick_sort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = partition(arr, left, right);
    quick_sort(arr, left, pivotIndex - 1);
    quick_sort(arr, pivotIndex + 1, right);
  }
  return arr;
};

const partition = (arr, start, end) => {
  const pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      swapIndex++;
      swap(arr, i, swapIndex);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
};
