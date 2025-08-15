// Define a user interface
interface Usert {
  id: number;
  name: string;
  email: string;
  profile: {
    age: number;
    address: string;
    preferences: {
      theme: 'light' | 'dark';
      notifications: boolean;
    }
  };
  roles: string[];
}

// Say we have to use particular property type of an object as return type of a function
// One way is to define type alias separately and the modify the existing type object
// Which can be tedious if we are getting that data from backend team so we need to inform them
// So, why not directly use that property to get it's type and use it to annotate function return type
//  This way of extracting types of particular property is known as lookup type

// Lookup types - extract specific property types
type UserId = Usert['id'];                    // number
type UserName = Usert['name'];                // string
type UsertProfile = Usert['profile'];         // { age: number; address: string; preferences: {...} }
type UserPreferences = Usert['profile']['preferences'];  // { theme: 'light' | 'dark'; notifications: boolean }
type UserTheme = Usert['profile']['preferences']['theme'];  // 'light' | 'dark'

// Use with arrays
type UserRoles = Usert['roles'];              // string[]
type SingleRole = Usert['roles'][number];    // string (single element type)

// Multiple property lookup
type UserBasicInfo = Usert['id' | 'name' | 'email'];  // number | string

// Practical use cases

// 1. Function parameters using lookup types
function updateUserProfile(userId: UserId, profile: Partial<UsertProfile>) {
  console.log(`Updating profile for user ${userId}`);
  // Implementation here
}

// 2. API response handlers
function handleThemeChange(theme: UserTheme) {
  if (theme === 'dark') {
    console.log('Switching to dark mode');
  } else {
    console.log('Switching to light mode');
  }
}

// 3. Working with nested object properties
function validatePreferences(prefs: UserPreferences): boolean {
  return typeof prefs.notifications === 'boolean' && 
         (prefs.theme === 'light' || prefs.theme === 'dark');
}

// 4. Generic lookup types
type PropertyType<T, K extends keyof T> = T[K];

// Usage example
type ExampleType = PropertyType<Usert, 'email'>;  // string

// 5. Real-world example with API configuration
const apiEndpoints = {
  users: '/api/users',
  posts: '/api/posts',
  comments: '/api/comments'
} as const;

type ApiEndpoint = typeof apiEndpoints[keyof typeof apiEndpoints];  // '/api/users' | '/api/posts' | '/api/comments'
type EndpointKey = keyof typeof apiEndpoints;  // 'users' | 'posts' | 'comments'

function makeApiCall(endpoint: ApiEndpoint) {
  console.log(`Making API call to: ${endpoint}`);
}

makeApiCall('/api/users');  // Valid
// makeApiCall('/api/invalid');  // Error