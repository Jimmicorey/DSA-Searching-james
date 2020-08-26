/* eslint-disable strict */

/* 1. How many searches */
function binSearch(array, value, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  if (start > end) {
    console.log(`${value} is not in the list`);
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  console.log(`searched indexes: ${start} to ${end}`);
  console.log(`checked index ${index}, value ${item}`);
  

  if (item == value) {
    console.log(`the value ${value} is at index ${index}`);
    return index;
  }
  else if (item < value) {
    return binSearch(array, value, index + 1, end);
  }
  else if (item > value) {
    return binSearch(array, value, start, index - 1);
  }
}


let sortedList = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];

//binSearch(sortedList, 8);
/*
searched indexes: 0 to 10
checked index 5, value 12
searched indexes: 0 to 4
checked index 2, value 6
searched indexes: 3 to 4
checked index 3, value 8
the value 8 is at index 3
*/


binSearch(sortedList, 16);
/*
searched indexes: 0 to 10
checked index 5, value 12
searched indexes: 6 to 10
checked index 8, value 17
searched indexes: 6 to 7
checked index 6, value 14
searched indexes: 7 to 7
checked index 7, value 15
16 is not in the list
*/


