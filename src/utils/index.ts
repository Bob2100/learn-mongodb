import db from './db'
export default {
  db,
  sum(...rest: number[]): number {
    let sum = 0
    for (let n of rest) {
      sum += n
    }
    return sum
  },
}
