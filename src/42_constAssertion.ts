// We know that in js strings are immutable

const inpStr = "hello";
const uppercaseStr = inpStr.toUpperCase(); //this will not mutate our original string
console.log(inpStr, uppercaseStr);

// But objects behave differently
// even if we assign object in const variable they can't be reassigned but their properties can be mutated
const dave = { name: "daku" };

// dave={name:"kaku"};//not allowed

dave.name = "kaku"; //allowed

console.log(dave);

// how can we make properties of object immutable
// one way is we use readonly which we used earlier with arrays and tuples
// other way is using const assertion
// it is different from other types of assertions which disables type safety.
// this one actually adds to type safety

const pupilKaName = {
  name: "Pupil",
} as const;

// pupilKaName.name="kaju";//Cannot assign to 'name' because it is a read-only property. ERROR

const meraDost = {
  name: "Dharm",
  age: 23 as const,
};

meraDost.name = "kaju"; //no error as we have used const assertion on on ly age property
// meraDost.age = 45; //Type '45' is not assignable to type '23'.
