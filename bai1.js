
let arr = [12, 2, 65, 45, 30, 16];
let max = [];
let max1 = [];
let max2 = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
  if (arr[i] > max1 && arr[i] < max) {
    max1 = arr[i];
  }
}
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max2 && arr[i] < max1) {
    max2 = arr[i];
  }
}
console.log(max2);
console.log(max1);
console.log(max);