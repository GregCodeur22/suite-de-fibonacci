//suite de fibo
twoBefore = 0;
oneBefore = 1;

for (let i = 0; i < 10; i++) {
  current = twoBefore + oneBefore;
  //   console.log(current);
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
// console.log(fibo);

// le tri à bulles
const ages = [17, 1, 28, 5];
for (let i = ages.length - 1; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    if (ages[j + 1] < ages[j]) {
      // échanger les 2 valeurs
      const temp = ages[j + 1];
      ages[j + 1] = ages[j];
      ages[j] = temp;
    }
  }
}
// console.log(ages);

const scores = [58, 13, 29, 100, 203, 1, 5, 13, 56, 33, 123];
for (let i = scores.length - 1; i > 0; i++) {
  for (let j = 0; j < i; j++) {
    if (scores[j + 1] < scores[j]) {
      // échanger les 2 valeurs
      const box = scores[j + 1];
      scores[j + 1] = scores[j];
      scores[j] = box;
    }
  }
}
console.log(scores);
