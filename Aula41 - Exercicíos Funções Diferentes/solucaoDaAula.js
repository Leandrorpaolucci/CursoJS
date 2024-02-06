
// função normal
function max(x, y) {
  if (x > y) return x > y ? x : y;
}
// função avançada 
const max2 = (num1, num2) => {
    return num1 > num2 ? num1 : num2;
};

// função em uma linha
const max3 = (num1, num2) => num1 > num2 ? num1 : num2;

console.log(max(10,2));
console.log(max2(20, 35));
console.log(max3(20, 15));