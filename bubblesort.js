function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
        }
      }
    }
    return arr;
  }
  
  
  console.log(bubbleSort([5, 6, 1, 3, 4, 2])); // [1, 2, 3, 4, 5, 6]
  