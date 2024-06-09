const sort = (left, right) => {
  // Created an arrow function with 2 params.
  let sortedArray = []; // Sorted items will go here.
  while (left.length && right.length) {
    // If the value of the first index in the left array is smaller than the value of the first index on the right.
    // Insert the smallest item into sortedArray.
    if (left[0] < right[0]) {
      // If the while loop condition is met, remove the first value from the left index & insert this value into SortedArray.
      sortedArray.push(left.shift());
    } else {
      // if the while loop condition is not met, remove the first value from the right array and insert this value into sortedArray.
      sortedArray.push(right.shift());
    }
  }
  // Use spread operators to create a new array, combining the three arrays. Left and right arrays are included because eventually, one of these arrays will not have any items stored inside while the other array has item(s) remaining- this does not meet the while loop condition.
  return [...sortedArray, ...left, ...right];
};

const mergeSort = (array) => {
  // Base case: if there is one or no items in the array, return the value as there is no sorting to do.
  if (array.length < 2) {
    return array;
  }
  // The mid variable divides the length of the array into 2 and rounds any floating points down. This is to break down each array into subarrays (divide and conquer).
  let mid = Math.floor(array.length / 2);
  // Recursive calls:
  // The left and right slices will recursively call the mergeSort function until the base case condition is met.
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));
  //As we come up the call stack, each slice will get sorted, until we have our final sorted array.
  return sort(left, right);
};

const arrayToSort = [1, 2, 4, 3];
console.log(mergeSort(arrayToSort));
