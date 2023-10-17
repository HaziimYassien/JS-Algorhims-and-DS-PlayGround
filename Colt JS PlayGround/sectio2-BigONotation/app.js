//6. timing our code :
//comapiring two solutions to one problem

//issue: calculate the sum of all numbers from 1 up to and including
// the number (n)
//solution1:
function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}
//solution2:
function addUpToo(n) {
  return (n * (n + 1)) / 2;
}

//we can use built in timing functions to calculate the speed of the code :
var time1 = performance.now();
addUpToo(1000000000000000000);
var time2 = performance.now();

console.log(`the time that has passed is ${(time2 - time1) / 100} seconds`);

//7. Counting Operations:
//so in add up to first the big o doesn't depend on the n
// but in second it depends on n cuz the bigger the n the longer the loop will need to complete because of i <= n
