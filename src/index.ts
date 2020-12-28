import helloWorld from './utils/hello';
import { series } from './utils/math';
export { fibonacci } from './utils/math';

export function firstN(length: number) {
  const result = []
  const fn = series(length, 1024, (current) => current / 3)

  let current = fn.next()
  while (!current.done) {
    result.push(current.value)
  }

  return result;
}

