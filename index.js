function insertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    // Pick the element to be inserted in the sorted sequence
    const currentElement = arr[i];
    let j = i - 1;

    // Move elements of arr[0..i-1] that are greater than the currentElement to one position ahead
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Place the currentElement in its correct position
    arr[j + 1] = currentElement;
  }
}

// Example usage:
const arr = [12, 11, 13, 5, 6];
insertionSort(arr);
console.log(arr); // Output: [5, 6, 11, 12, 13]

