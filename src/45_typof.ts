const aPointObj = {
  x: 1,
  y: 1,
};

type Apointy = typeof aPointObj; //this automatically generates type and can be used inline instead of type alias

// Property 'y' is missing in type '{ x: number; }' but required in type '{ x: number; y: number; }'.
const akPointObj: Apointy = {
  x: 100,
  y: 10,
};
