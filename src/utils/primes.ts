export const calcJsBruteUnoptimized = (upperBound: number) => {
  let primesAccumulator = [];
  for (let currNum = 1; currNum < upperBound; currNum++) {
    let divisibleNums = [];
    for (let j = 1; j < currNum; j++) {
      if (currNum % j === 0) {
        divisibleNums.push(true);
      }
    }
    if (divisibleNums.length === 1) {
      primesAccumulator.push(currNum);
    }
  }
  return primesAccumulator;
};

export const calcJsPrimeSieve = (upperBound: number) => {
  let primes = [];

  for (let i = 0; i < upperBound + 1; i++) {
    if (i === 2 || (i & 1) !== 0) {
      primes.push(true);
      continue;
    }
    primes.push(false);
  }
  let num = 3;

  while (num * num <= upperBound) {
    let j = num * num;
    while (j <= upperBound) {
      primes[j] = false;
      j += num;
    }
    num += 2;
  }

  // Remove `1` as it's not prime
  primes.shift();

  primes = primes
    .map((e, i) => {
      if (e) {
        return i;
      } else {
        return;
      }
    })
    .filter((e) => e);
  return primes;
};
