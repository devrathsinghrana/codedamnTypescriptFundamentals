// It helps to set some mandatory properties or type to be contained even if we are using generics to fulfill special needs
/*
Key Benefits of Generic Constraints:
Type Safety: Ensures generic types have required properties/methods
IntelliSense: Better autocompletion and error checking
Flexibility: Maintains generic benefits while enforcing rules
Documentation: Makes function/class requirements explicit
Runtime Safety: Prevents accessing undefined properties/methods
Generic constraints are essential when you need the flexibility of generics but also need to guarantee certain type characteristics.
*/

type NameConstraintType = { firstName: string; lastName: string };

function addFullName<T extends NameConstraintType>(obj: T): T {
  return {
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`,
  };
}

const existingObjone = {
  //   firstName: "Daku",//commenting this give missing property error below when passing this object as argument below
  firstName: "Daku",
  lastName: "kaku",
  email: "Daku@svf.dfgv",
};

const newObjOne = addFullName(existingObjone);

console.log(newObjOne);
