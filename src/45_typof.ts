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

// same can be used with api responses 

// Sample API response object
const userApiResponse = {
  id: 123,
  name: "John Doe",
  email: "john@example.com",
  isActive: true,
  profile: {
    age: 30,
    address: "123 Main St"
  },
  tags: ["developer", "typescript"]
};

// Create type from the API response
type UserApiResponse = typeof userApiResponse;

// Now you can use this type for other variables
const anotherUser: UserApiResponse = {
  id: 456,
  name: "Jane Smith",
  email: "jane@example.com",
  isActive: false,
  profile: {
    age: 25,
    address: "456 Oak Ave"
  },
  tags: ["designer", "react"]
};

// Useful for function parameters
function processUser(user: UserApiResponse) {
  console.log(`Processing user: ${user.name}`);
  return user.isActive;
}

processUser(anotherUser);