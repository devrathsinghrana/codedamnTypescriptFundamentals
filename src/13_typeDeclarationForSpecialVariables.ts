// declare const process: any; // This is a special variable that is available in Node.js environment, it contains information about the current Node.js process.

// declare const process: any="hello"; //Initializers are not allowed in ambient contexts. as we shouldn't assign a value to a variable that is declared using declare keyword for type declaration purposes only

const USER = process.env.USER || "defaultUser"; // This is a special variable that holds the username of the current user, or a default value if not available.
