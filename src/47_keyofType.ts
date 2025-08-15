interface Productt {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
}

// keyof extracts all property names as a union type
type ProductKeys = keyof Productt; // "id" | "name" | "price" | "category" | "inStock"

// Practical use case: Generic getter function
// here we use generic constraint with keyof type - <T extends ProductKeys>
// and function return type is defined using lookup type - Productt[T] 
function getProductProperty<T extends ProductKeys>(productt: Productt, key: T): Productt[T] {
  return productt[key];
}

const productt: Productt = {
  id: 1,
  name: "Laptop",
  price: 999,
  category: "Electronics",
  inStock: true
};

// Usage - TypeScript knows the exact return type due to signature defined using mixture of generic constraint, keyof types and lookup types.
const productId = getProductProperty(productt, "id");         // Returns number
const productName = getProductProperty(productt, "name");     // Returns string
const productPrice = getProductProperty(productt, "price");   // Returns number
const isInStock = getProductProperty(productt, "inStock");    // Returns boolean

// TypeScript will show error for invalid keys
// const invalid = getProductProperty(productt, "invalidKey"); // Error!

console.log(productId);    // 1
console.log(productName);  // "Laptop"
console.log(isInStock);    // true