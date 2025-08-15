// Base interface for examples
interface Userrrt {
  readonly id: number;
  name: string;
  email?: string;
  age: number;
}

// 1. BASIC MAPPED TYPE
// Transform all properties to strings
type StringifyUser = {
  [K in keyof Userrrt]: string;
};
// Result: { readonly id: string; name: string; email?: string; age: string; }

// 2. MAPPED TYPE MODIFIERS

// Remove readonly modifier with -readonly
type MutableUser = {
  -readonly [K in keyof Userrrt]: Userrrt[K];
};
// Result: { id: number; name: string; email?: string; age: number; }

// Remove optional modifier with -?
type RequiredUser = {
  [K in keyof Userrrt]-?: Userrrt[K];
};
// Result: { readonly id: number; name: string; email: string; age: number; }

// Add optional modifier with +? (+ is default, can be omitted)
type OptionalUser = {
  [K in keyof Userrrt]?: Userrrt[K];
};
// Result: { readonly id?: number; name?: string; email?: string; age?: number; }

// Add readonly modifier with +readonly (+ is default)
type ReadonlyUser = {
  +readonly [K in keyof Userrrt]: Userrrt[K];
};
// Result: { readonly id: number; readonly name: string; readonly email?: string; readonly age: number; }

// Combine modifiers: remove readonly and optional
type PlainUser = {
  -readonly [K in keyof Userrrt]-?: Userrrt[K];
};
// Result: { id: number; name: string; email: string; age: number; }

// 3. PRACTICAL USE CASES

// API Response type (all optional for partial updates)
type UserUpdatePayload = {
  [K in keyof Userrrt]?: Userrrt[K];
};

// Database entity (all readonly after creation)
type UserEntity = {
  +readonly [K in keyof Userrrt]-?: Userrrt[K];
};

// Form state (all mutable and required)
type UserFormState = {
  -readonly [K in keyof Userrrt]-?: Userrrt[K];
};

// 4. UTILITY MAPPED TYPES

// Custom Partial (makes all properties optional)
type MyPartial<T> = {
  [K in keyof T]?: T[K];
};

// Custom Required (makes all properties required)
type MyRequired<T> = {
  [K in keyof T]-?: T[K];
};

// Custom Readonly (makes all properties readonly)
type MyReadonly<T> = {
  +readonly [K in keyof T]: T[K];
};

// Custom Mutable (removes readonly)
type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};

// 5. ADVANCED MAPPED TYPES

// Nullable - add null to all properties
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

// Getters - transform properties to getter functions
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

// Example usage
type UserGetters = Getters<Userrrt>;
// Result: { getId: () => number; getName: () => string; getEmail: () => string | undefined; getAge: () => number; }

// 6. CONDITIONAL MAPPED TYPES

// Only string properties
type StringProperties<T> = {
  [K in keyof T]: T[K] extends string ? T[K] : never;
};

type UserStringProps = StringProperties<Userrrt>;
// Result: { readonly id: never; name: string; email?: string; age: never; }

// 7. REAL-WORLD EXAMPLES

const originalUser: Userrrt = {
  id: 1,
  name: "John",
  email: "john@example.com",
  age: 30
};

// Partial update
const userUpdate: UserUpdatePayload = {
  name: "John Doe",
  age: 31
};

// Immutable entity
const userEntity: UserEntity = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  age: 31
};

// Form state (all properties mutable and required)
const formState: UserFormState = {
  id: 1,
  name: "John Doe", 
  email: "john@example.com",
  age: 31
};

// Function using mapped types
function updateUser(user: Userrrt, updates: UserUpdatePayload): Userrrt {
  return { ...user, ...updates };
}

const updatedUser = updateUser(originalUser, userUpdate);
console.log(updatedUser);

// Function creating readonly version
function freezeUser(user: Mutable<Userrrt>): ReadonlyUser {
  return user as ReadonlyUser;
}

console.log("Mapped types and modifiers examples completed!");