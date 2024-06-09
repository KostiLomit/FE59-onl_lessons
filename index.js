"use strict";

const arr = ["apple", "banana", "apple", "orange", "banana", "apple"];

const numOfApple = arr.reduce((acc, item) => {
  if (item == "apple") {
    return acc + 1;
  }
  return acc;
}, 0);

console.log(numOfApple);
