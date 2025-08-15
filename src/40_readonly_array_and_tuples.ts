function reverseSortAnArray(input: readonly number[]): number[] {
  // return input.sort().reverse();//Property 'sort' does not exist on type 'readonly number[]' error is thrown as we can't mutate readonly variables or parameters
  return [...input].sort().reverse();
}

const inArrReq = [3, 2, 5, 6, 1, 8, 9, 4, 7];
const resultRe = reverseSortAnArray(inArrReq);

console.log(inArrReq, resultRe);

// Tuples
type PointReadonly = readonly [number, number];

function move(inp: PointReadonly, x: number, y: number): PointReadonly {
  //   inp[0] += x;//Cannot assign to '0' because it is a read-only property.
  //   inp[1] += y;//Cannot assign to '1' because it is a read-only property.
  //   return inp;
  return [inp[0] + x, inp[1] + y];
}

const initialPointReq: PointReadonly = [0, 0];

const res1 = move(initialPointReq, 10, 10);
const res2 = move(res1, 2, 90);
console.log(initialPointReq, res1, res2);
