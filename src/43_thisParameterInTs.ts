//  we give type to this parameter so that we can prvent errors like object has incorrect property name
function double(this: { value: number; double: () => number }) {
  return this.value * 2;
}

const andRandObj = {
  value: 10,
  double,
};

console.log(andRandObj.double());

const andRandObj2 = {
  //   valu: 20,
  value: 20,
  double,
};

console.log(andRandObj2.double()); //gives error so need to fix object property name valu
