const sort = (left, right) => {
  // Created an arrow function with 2 params.
  let sortedArray = [] // Sorted items will go here.
  while (left.length && right.length) {
    // If the value of the first index in the left array is smaller than the value of the first index on the right.
    // Insert the smallest item into sortedArray
    if (left[0] < right[0]) {
      sortedArray.push(left.shift())
    } else {
      sortedArray.push(right.shift())
    }
  }
  // Use spread operators to create a new array, combining the three arrays
  return [...sortedArray, ...left, ...right]
}

function mergeSort(arr) {
  // Base case
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  // Recursive calls
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)
}
mergeSort([3, 5, 8, 5, 99, 1]) // [1, 3, 5, 5, 8, 99]
