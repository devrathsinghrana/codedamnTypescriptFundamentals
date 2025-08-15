type ConditionalType<T> = T extends boolean
  ? "boolean"
  : T extends number
  ? "number"
  : T extends string
  ? "string"
  : T extends undefined
  ? "undefined"
  : T extends null
  ? "null"
  : T extends Function
  ? "function"
  : T extends symbol
  ? "symbol"
  : T extends BigInt
  ? "bigInt"
  : "object";

function typeName<T>(value: T): ConditionalType<T> {
  return typeof value as ConditionalType<T>; //we need to assert type as it gives error
}

const typeName1 = typeName(true);
const typeName2 = typeName(23);
const typeName3 = typeName("My name");
const typeName4 = typeName(undefined);
const typeName5 = typeName(null);
const typeName6 = typeName(() => {});
const typeName7 = typeName(Symbol());
const typeName8 = typeName(1n);
const typeName9 = typeName({});

const typeNames = [
  typeName1,
  typeName2,
  typeName3,
  typeName4,
  typeName5,
  typeName6,
  typeName7,
  typeName8,
  typeName9,
];

for (let i = 0; i < typeNames.length; i++) {
  console.log(`typeName${i + 1}:`, typeNames[i]);
}
