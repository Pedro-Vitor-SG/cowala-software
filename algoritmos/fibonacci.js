function myfunc(n) {
  let initial = [0, 1];
  let numbers = [];

  for (let i = 2; i < n; i++) {
    initial[i] = initial[i - 2] + initial[i - 1];
    numbers.push(initial[i]);
  }

  console.log(numbers);
}

myFunc(6);
