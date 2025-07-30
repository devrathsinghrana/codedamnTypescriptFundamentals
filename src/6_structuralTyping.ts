// It basically means if two type aliases have the same structure, they are considered the same type.
// This is known as structural typing in TypeScript.
// Eg:

type User = {
  id: number;
};

type Product = {
  id: number;
};

// They both have same structure // so they are considered the same type.

let user: User = { id: 1 };
let product: Product = { id: 2 };

user = product; // This is allowed because both have the same structure
product = user; // This is also allowed for the same reason

// This is a key feature of TypeScript that allows for flexibility in type definitions and assignments.// It allows for more generic and reusable code, as types can be defined based on their structure rather than their specific names.
// This is particularly useful in scenarios like function parameters, where you can accept any type that matches the expected structure, regardless of its specific name.
// For example, a function that accepts a User type can also accept a Product type in this case, as both have the same structure:

// Key note is that in structure typing more is fine but less is not fine

type Point2D = { x: number; y: number };
type Point3D = { x: number; y: number; z: number };

let point2D: Point2D = { x: 1, y: 2 };
let point3D: Point3D = { x: 1, y: 2, z: 3 };

point2D = point3D; // This is allowed because Point3D has more properties than Point2D
// point3D = point2D; // This would cause an error because Point2D is missing the 'z' property

function printPoint(point: Point2D) {
  console.log(`Point coordinates: (${point.x}, ${point.y})`);
}
printPoint(point2D); // This works
printPoint(point3D); // This would also work because Point3D has the same structure as Point2D
// However, the reverse is not true, as Point2D does not have the 'z' property, so it cannot be assigned to a Point3D variable.
// This flexibility allows for more generic and reusable code, as types can be defined based on their structure rather than their specific names.
// This is particularly useful in scenarios like function parameters, where you can accept any type that matches the expected structure, regardless of its specific name.

function print3DPoint(point: Point3D) {
  console.log(`3D Point coordinates: (${point.x}, ${point.y}, ${point.z})`);
}
print3DPoint(point3D); // This works
// print3DPoint(point2D); // This would cause an error because Point2D is missing the 'z' property