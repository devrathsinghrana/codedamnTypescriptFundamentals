type Point2DTypeAlias = {
  x: number;
  y: number;
};

type Point3DTypeAlias = Point2DTypeAlias & {
  z: number;
};

const typeAliasNumber: Point3DTypeAlias = { x: 1, y: 2, z: 3 };

/*
Interface is a very powerful way to define the shape of an object.
It can be extended, implemented, and merged.
Helps developer to adapt to the codebase who are coming from other languages like Java or C# and used to OOPs.
Most importantly interfaces are open-ended, meaning you can add new properties to them without breaking existing code.
This is not the case with type aliases, which are closed and cannot be extended.
i.e. type aliases do not have power to redefine same name type within the same scope with additional properties.
But interfaces can be extended with new properties in the same scope WHICH is ALSO KNOWN AS INTERFACE DECLARATION MERGING.
This is a very powerful feature of interfaces.
*/
interface Point2DInterface {
  x: number;
  y: number;
}

interface Point3DInterface extends Point2DInterface {
  z: number;
}

const typeInterfaceNumber: Point3DTypeAlias = { x: 1, y: 2, z: 3 };

// Interface DECLARTION MERGING
// eg

interface Requests {
  body: string;
}

interface Requests {
  json: string;
}

const requestWithInterfaceMerging: Requests = {
  body: "Hello",
  json: "World",
};

// This will throw an error because type aliases cannot be merged - you can consider them similar to constant variables in js
// type RequestsTypeAlias = {
//   body: string;
// };

// type RequestsTypeAlias = {
//   json: string;
// };
