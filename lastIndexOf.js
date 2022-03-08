function lastIndexOf (array, value) {
  var foundIndex = 0;
  var match = false;
  for (var i = (array.length - 1); i >= 0; i--) {
    if (array[i] == value) {
      foundIndex = i;
      match = true;
     break;
    }
  }
  if (match) {
    return foundIndex;
  } else {
    return -1;
  }
}
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);