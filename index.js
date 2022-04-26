//suite de fibo
twoBefore = 0;
oneBefore = 1;

for (let i = 0; i < 10; i++) {
  current = twoBefore + oneBefore;
  console.log(current);
  twoBefore = oneBefore;
  oneBefore = current;
}

/** JavaScript : Suite de Fibonacci. */
// const n = Number(prompt("Entrer un entier supérieur à 1:")); // Par exemple, 4

// const fibo = new Array(n);
// fibo[0] = 0;
// fibo[1] = 1;

// for (let i = 2; i < n; i++) {
//   fibo[i] = fibo[i - 1] + fibo[i - 2];
// }

// console.log(fibo);

const n = 15;

const fibo = new Array(n);
fibo[0] = 0;
fibo[1] = 1;
for (let i = 2; i < n; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);
