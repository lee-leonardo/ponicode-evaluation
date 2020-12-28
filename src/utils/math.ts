function defaultSeriesCompute(current: number) {
  return current + 2;
}

export function* series(count = 10, start = 1, compute = defaultSeriesCompute) {
  let i = 0;
  let current = start;

  while (i < count) {
    yield current;
    i++;
    current = compute(current);
  }
}

export function* fibonacci(startPos = 0) {
  let last = 1;
  let current = 2;

  for (let i = 0; true; i++) {
    let prevCurr = current;
    current = last + current;
    last = prevCurr;

    if (i < startPos) {
      continue;
    }

    yield current;
  }
}