type Point2DDoubleAssertion = { x: number; y: number };
type Point3DDoubleAssertion = { x: number; y: number; z: number };
type PeopleDoubleAssertion = { name: string };

let pointy2D: Point2DDoubleAssertion = { x: 1, y: 2 };
let pointy3D: Point3DDoubleAssertion = { x: 1, y: 1, z: 3 };
let peopleiy: PeopleDoubleAssertion = { name: "Devr" };

pointy2D = pointy3D; //this is possible
// pointy3D=pointy2D//this is not as type are structural in nature to prevent this we can use ASSERTION
pointy3D = pointy2D as Point3DDoubleAssertion;
// but for some case single assertion is not enough as below
// pointy3D = peopleiy as Point3DDoubleAssertion;
/*
Above line gives error
Conversion of type 'PeopleDoubleAssertion' to type 'Point3DDoubleAssertion' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
  Type 'PeopleDoubleAssertion' is missing the following properties from type 'Point3DDoubleAssertion': x, y, z
*/
// so we can use double assertion
pointy3D = peopleiy as unknown as Point3DDoubleAssertion;
