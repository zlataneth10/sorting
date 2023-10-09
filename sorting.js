function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let currentElement = arr[i];
      let j = i - 1;
      
      while (j >= 0 && arr[j] > currentElement) {
        arr[j + 1] = arr[j];
        j--;
      }
      
      arr[j + 1] = currentElement;
    }
    
    return arr;
  }
  
  // Example usage:
  const array = [5, 2, 8, 1, 9];
  console.log(insertionSort(array)); // Output: [1, 2, 5, 8, 9]