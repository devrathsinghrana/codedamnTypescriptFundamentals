# TypeScript Fundamentals Project

This project demonstrates TypeScript basics and development workflow setup. It's part of a Codedamn TypeScript fundamentals course.

## Project Setup Commands

### 1. Initialize Node.js Project
```bash
npm init -y
```
**Purpose**: Creates a `package.json` file with default settings. The `-y` flag accepts all default values automatically without prompting for input.

**Result**: Generates `package.json` with basic project metadata like name, version, description, entry point, and scripts.

### 2. Install TypeScript
```bash
npm i typescript
```
**Purpose**: Installs TypeScript as a local dependency in the project.

**Result**: 
- Adds TypeScript to `node_modules/` folder
- Updates `package.json` with TypeScript dependency
- Allows use of TypeScript compiler (`tsc`) via `npx`

### 3. Initialize TypeScript Configuration
```bash
npx tsc --init --rootdir src --outdir lib
```
**Purpose**: Creates a TypeScript configuration file with custom source and output directories.

**Parameters**:
- `--init`: Creates a new `tsconfig.json` file
- `--rootdir src`: Sets the root directory for TypeScript source files
- `--outdir lib`: Sets the output directory for compiled JavaScript files

**Result**: Generates `tsconfig.json` with comprehensive TypeScript compiler options and the specified directory structure.

### 4. Create Source Directory
```bash
mkdir src
```
**Purpose**: Creates the source directory where all TypeScript files will be stored.

### 5. Create Output Directory
```bash
mkdir lib
```
**Purpose**: Creates the output directory where compiled JavaScript files will be generated.

### 7. Install ts-node for Direct TypeScript Execution
```bash
npm install ts-node --save-dev
```
**Purpose**: Installs ts-node as a development dependency to run TypeScript files directly without compilation.

**Benefits**:
- **Direct execution**: Run `.ts` files without compiling to `.js` first
- **Faster development**: No build step needed during development
- **Real-time feedback**: See TypeScript errors and results immediately
- **Modern workflow**: Industry-standard approach for TypeScript development

### 8. Create First TypeScript File
```bash
touch src/1_primitiveTypes.ts
```
**Purpose**: Creates the first TypeScript file to start learning primitive types.

**Note**: On Windows, if `touch` is not available, you can use:
```powershell
New-Item -Path "src\1_primitiveTypes.ts" -ItemType File
```

### 9. Start TypeScript Compiler in Watch Mode
```bash
npx tsc --watch
```
**Purpose**: Starts the TypeScript compiler in watch mode, which automatically recompiles files when changes are detected.

**Benefits**:
- Automatic compilation on file changes
- Real-time error checking
- Continuous development workflow

### 10. Add npm Scripts for TypeScript Direct Execution
Add these scripts to your `package.json` for easier development:

```json
{
  "scripts": {
    "ts:primitive": "ts-node src/1_primitiveTypes.ts",
    "ts:instance": "ts-node src/2_instanceTypes.ts",
    "ts:array": "ts-node src/3_ArrayAndTuple.ts",
    "ts:object": "ts-node src/4_ObjectTypesMadeUsingTypeAliasAndLetVsConstDeclarationInTs.ts",
    "ts:function": "ts-node src/5_FunctionTypeDeclarationAndUsingTypeAliasForFirstClassFunctionTypeAnnotation.ts",
    "ts:structural": "ts-node src/6_structuralTyping.ts",
    "ts:class": "ts-node src/7_classTyping.ts",
    "ts:generics": "ts-node src/8_genericsVsClassSpecialization.ts",
    "ts:any": "ts-node src/9_anyVsUnknownType.ts",
    "ts:utility": "ts-node src/10_universalUtility.ts",
    "ts:assertion": "ts-node src/11_typeAssertion.ts",
    "ts:casting": "ts-node src/12_typeCasting.ts",
    "ts:special": "ts-node src/13_typeDeclarationForSpecialVariables.ts",
    "ts:palindrome": "ts-node src/14_palidromePackagePublishedByUs.ts",
    "ts:run": "ts-node"
  }
}
```

**Usage**: Run any TypeScript lesson directly:
```bash
npm run ts:primitive    # Learn primitive types
npm run ts:array        # Learn arrays and tuples
npm run ts:class        # Learn class typing
npm run ts:palindrome   # Test published package
```

## Current Project Structure

```
codedamnTypescriptFundamentals/
├── .gitignore            # Git ignore rules
├── package.json          # Node.js project configuration
├── package-lock.json     # Lock file for dependencies (ignored by Git)
├── tsconfig.json         # TypeScript compiler configuration
├── scripts/              # Custom utility scripts
│   └── run-file.js       # Dynamic file execution script
├── src/                  # Source TypeScript files (14 lessons)
│   ├── 1_primitiveTypes.ts
│   ├── 2_instanceTypes.ts
│   ├── 3_ArrayAndTuple.ts
│   ├── 4_ObjectTypesMadeUsingTypeAliasAndLetVsConstDeclarationInTs.ts
│   ├── 5_FunctionTypeDeclarationAndUsingTypeAliasForFirstClassFunctionTypeAnnotation.ts
│   ├── 6_structuralTyping.ts
│   ├── 7_classTyping.ts
│   ├── 8_genericsVsClassSpecialization.ts
│   ├── 9_anyVsUnknownType.ts
│   ├── 10_universalUtility.ts
│   ├── 11_typeAssertion.ts
│   ├── 12_typeCasting.ts
│   ├── 13_typeDeclarationForSpecialVariables.ts
│   └── 14_palidromePackagePublishedByUs.ts
├── lib/                  # Compiled JavaScript output (auto-generated)
│   ├── 1_primitiveTypes.js
│   ├── 2_instanceTypes.js
│   ├── 3_ArrayAndTuple.js
│   ├── 4_ObjectTypesMadeUsingTypeAliasAndLetVsConstDeclarationInTs.js
│   ├── 5_FunctionTypeDeclarationAndUsingTypeAliasForFirstClassFunctionTypeAnnotation.js
│   ├── 6_structuralTyping.js
│   ├── 7_classTyping.js
│   ├── 8_genericsVsClassSpecialization.js
│   ├── 9_anyVsUnknownType.js
│   ├── 10_universalUtility.js
│   ├── 11_typeAssertion.js
│   ├── 12_typeCasting.js
│   └── 14_palidromePackagePublishedByUs.js
├── palind/               # Published npm package directory
│   ├── package.json      # Package configuration
│   ├── tsconfig.json     # TypeScript config for package
│   ├── README.md         # Package documentation
│   ├── src/
│   │   └── index.ts      # Package source code
│   └── lib/              # Compiled package output
│       ├── index.js
│       ├── index.d.ts
│       ├── index.js.map
│       └── index.d.ts.map
└── node_modules/         # NPM dependencies (ignored by Git)
```

## File Content Explanations

### `package.json`
Contains Node.js project metadata including:
- Project name, version, and description
- Dependencies (TypeScript, @devrath/palind)
- DevDependencies (ts-node, rimraf)
- Scripts for running/building the project
- Entry point and other configuration

**Key Dependencies:**
- **TypeScript**: Core TypeScript compiler
- **ts-node**: TypeScript execution engine for Node.js
- **@devrath/palind**: Published palindrome checking package
- **rimraf**: Cross-platform directory cleanup utility

**Script Categories:**
- **Build scripts**: `build`, `watch`, `clean`, `rebuild`
- **TypeScript direct execution**: `ts:*` scripts for running .ts files directly
- **JavaScript execution**: `start:*` scripts for running compiled .js files
- **Development scripts**: `dev:*` scripts that build and run

### `tsconfig.json`
TypeScript compiler configuration file that specifies:
- **Compilation target**: ES2020
- **Module system**: CommonJS
- **Root directory**: `src/` (where TypeScript files are located)
- **Output directory**: `lib/` (where compiled JavaScript files go)
- **Strict mode**: Enabled for better type checking
- **Source maps**: Disabled (can be enabled for debugging)

### `src/` Directory
Contains TypeScript source files organized as progressive lessons:

**Basic Types & Syntax:**
- **`1_primitiveTypes.ts`**: Basic TypeScript primitive types (string, number, boolean, undefined, null, bigint, symbol)
- **`2_instanceTypes.ts`**: Classes, generics, built-in instance types (RegExp, Set, Array), and custom generic classes
- **`3_ArrayAndTuple.ts`**: Array type syntax shorthand and tuple types with fixed sizes

**Advanced Type System:**
- **`4_ObjectTypesMadeUsingTypeAliasAndLetVsConstDeclarationInTs.ts`**: Object types, type aliases, and declaration differences
- **`5_FunctionTypeDeclarationAndUsingTypeAliasForFirstClassFunctionTypeAnnotation.ts`**: Function types and first-class function annotations
- **`6_structuralTyping.ts`**: TypeScript's structural type system and duck typing
- **`7_classTyping.ts`**: Class types, inheritance, and access modifiers

**Generics & Type Safety:**
- **`8_genericsVsClassSpecialization.ts`**: Generic types vs specialized class implementations
- **`9_anyVsUnknownType.ts`**: Differences between `any` and `unknown` types for type safety
- **`10_universalUtility.ts`**: Universal utility types and type manipulation

**Type Manipulation:**
- **`11_typeAssertion.ts`**: Type assertions and when to use them safely
- **`12_typeCasting.ts`**: Type casting techniques and best practices
- **`13_typeDeclarationForSpecialVariables.ts`**: Ambient declarations using `declare` keyword for external variables

### `lib/` Directory
Contains compiled JavaScript files corresponding to each TypeScript lesson:
- All `.ts` files are automatically compiled to `.js` equivalents
- Files are generated when running `npx tsc`, `npm run build`, or `npm run watch`
- Note: `13_typeDeclarationForSpecialVariables.js` is not generated as it contains only ambient declarations

### `scripts/` Directory
Contains custom utility scripts:
- **`run-file.js`**: Node.js script for dynamic file execution, enables running any compiled file by name

## Development Workflow

1. Write TypeScript code in the `src/` directory
2. The TypeScript compiler (running in watch mode) automatically compiles changes
3. Compiled JavaScript appears in the `lib/` directory
4. Run the compiled JavaScript files with Node.js if needed

## NPM Scripts for Development

The `package.json` file includes several useful scripts for TypeScript development:

### Build Scripts
```bash
# Compile TypeScript files once
npm run build

# Compile and watch for changes (auto-recompile)
npm run watch
```

### TypeScript Direct Execution Scripts (Recommended)
```bash
# Run TypeScript files directly without compilation using ts-node
npm run ts:primitive      # Runs 1_primitiveTypes.ts
npm run ts:instance       # Runs 2_instanceTypes.ts
npm run ts:array          # Runs 3_ArrayAndTuple.ts
npm run ts:object         # Runs 4_ObjectTypesMadeUsingTypeAliasAndLetVsConstDeclarationInTs.ts
npm run ts:function       # Runs 5_FunctionTypeDeclarationAndUsingTypeAliasForFirstClassFunctionTypeAnnotation.ts
npm run ts:structural     # Runs 6_structuralTyping.ts
npm run ts:class          # Runs 7_classTyping.ts
npm run ts:generics       # Runs 8_genericsVsClassSpecialization.ts
npm run ts:any            # Runs 9_anyVsUnknownType.ts
npm run ts:utility        # Runs 10_universalUtility.ts
npm run ts:assertion      # Runs 11_typeAssertion.ts
npm run ts:casting        # Runs 12_typeCasting.ts
npm run ts:special        # Runs 13_typeDeclarationForSpecialVariables.ts
npm run ts:palindrome     # Runs 14_palidromePackagePublishedByUs.ts

# Generic ts-node runner for any TypeScript file
npm run ts:run src/filename.ts
```

### JavaScript Execution Scripts (Traditional)
```bash
# Run the main file (1_primitiveTypes.js)
npm start

# Run any file by name (dynamic) - Works with all 13 lessons
npm run start:file <filename>
npm run start:file 1_primitiveTypes
npm run start:file 3_ArrayAndTuple
npm run start:file 9_anyVsUnknownType
npm run start:file 13_typeDeclarationForSpecialVariables

# Run specific TypeScript lessons (predefined)
npm run start:primitive    # Runs 1_primitiveTypes.js
npm run start:instance     # Runs 2_instanceTypes.js
```

### Development Scripts (Build + Run)
```bash
# Compile and run main file
npm run dev

# Compile and run any file by name (dynamic) - Works with all lessons
npm run dev:file <filename>
npm run dev:file 1_primitiveTypes
npm run dev:file 7_classTyping
npm run dev:file 11_typeAssertion

# Compile and run specific lessons (predefined)
npm run dev:primitive      # Build and run 1_primitiveTypes.js
npm run dev:instance       # Build and run 2_instanceTypes.js
```

### Utility Scripts
```bash
# Clean compiled output directory
npm run clean

# Clean and rebuild everything
npm run rebuild
```

### Typical Development Workflow

#### **Method 1: Direct TypeScript Execution (Recommended)**
Run TypeScript files directly without compilation:

```bash
# Run any TypeScript lesson directly
npm run ts:primitive      # Learn primitive types
npm run ts:array          # Learn arrays and tuples
npm run ts:class          # Learn class typing
npm run ts:generics       # Learn generics
npm run ts:palindrome     # Test published package
```

**Benefits:**
- **Instant execution** - No compilation step needed
- **Real-time development** - See results immediately
- **Error detection** - TypeScript errors shown instantly
- **Modern workflow** - Industry standard approach

#### **Method 2: Traditional Watch Mode**
For continuous development with compiled output:

1. **Start development with watch mode:**
   ```bash
   npm run watch
   ```
   This keeps TypeScript compiler running and auto-compiles on file changes.

2. **In another terminal, run your code:**
   ```bash
   npm run start:file 3_ArrayAndTuple        # Run arrays and tuples lesson
   npm run start:file 9_anyVsUnknownType     # Run type safety lesson
   npm run start:file 13_typeDeclarationForSpecialVariables  # Run ambient declarations
   ```

3. **Or use the combined approach:**
   ```bash
   npm run dev:file 7_classTyping            # Build and run class typing lesson
   ```

#### **Method 3: Quick Testing**
For testing specific lessons quickly:

```bash
# Examples with different lessons
npm run ts:object         # Object types and aliases
npm run ts:function       # Function type declarations
npm run ts:structural     # Structural typing concepts
npm run ts:utility        # Universal utility types
npm run ts:assertion      # Type assertions
npm run ts:casting        # Type casting techniques
```

#### **Method 4: Generic TypeScript Runner**
For running any TypeScript file:

```bash
# Run any TypeScript file directly
npm run ts:run src/1_primitiveTypes.ts
npm run ts:run src/8_genericsVsClassSpecialization.ts
npm run ts:run src/14_palidromePackagePublishedByUs.ts

# Or use npx directly
npx ts-node src/filename.ts
```

## Learning Path

This project provides a comprehensive TypeScript learning curriculum with 14 progressive lessons:

### **Level 1: Foundations (Lessons 1-3)**
1. **Primitive Types** (`1_primitiveTypes.ts`) - Basic type annotations (string, number, boolean, undefined, null, bigint, symbol)
2. **Instance Types** (`2_instanceTypes.ts`) - Classes, generics, built-in instance types, and custom generic classes
3. **Arrays & Tuples** (`3_ArrayAndTuple.ts`) - Array syntax shorthand and fixed-size tuple types

### **Level 2: Type System Mastery (Lessons 4-7)**
4. **Object Types & Aliases** (`4_ObjectTypesMadeUsingTypeAliasAndLetVsConstDeclarationInTs.ts`) - Object typing and type aliases
5. **Function Types** (`5_FunctionTypeDeclarationAndUsingTypeAliasForFirstClassFunctionTypeAnnotation.ts`) - Function signatures and first-class functions
6. **Structural Typing** (`6_structuralTyping.ts`) - TypeScript's duck typing system
7. **Class Typing** (`7_classTyping.ts`) - Class types, inheritance, and access modifiers

### **Level 3: Advanced Concepts (Lessons 8-10)**
8. **Generics vs Specialization** (`8_genericsVsClassSpecialization.ts`) - Generic types vs specialized implementations
9. **Type Safety** (`9_anyVsUnknownType.ts`) - Understanding `any` vs `unknown` for better type safety
10. **Utility Types** (`10_universalUtility.ts`) - Built-in utility types and type manipulation

### **Level 4: Advanced Techniques (Lessons 11-13)**
11. **Type Assertion** (`11_typeAssertion.ts`) - Safe type assertions and when to use them
12. **Type Casting** (`12_typeCasting.ts`) - Type casting techniques and best practices
13. **Ambient Declarations** (`13_typeDeclarationForSpecialVariables.ts`) - Using `declare` keyword for external variables

### **Level 5: Practical Application (Lesson 14)**
14. **Package Usage** (`14_palidromePackagePublishedByUs.ts`) - Using published npm packages in TypeScript projects

### **Key Learning Notes:**
- **Array Generics**: `Array<number>` specifies element type, not array size. Use tuple types `[number, number]` for fixed sizes.
- **Progression**: Each lesson builds upon previous concepts, creating a solid TypeScript foundation.
- **Hands-on**: All lessons include practical examples and can be executed individually using the dynamic scripts.
- **Package Integration**: Learn how to use published packages with proper type safety.

## Git Setup and .gitignore

### Creating .gitignore File
```bash
touch .gitignore
```

**Purpose**: Creates a `.gitignore` file to specify which files and directories Git should ignore.

**On Windows PowerShell**:
```powershell
New-Item -Path ".gitignore" -ItemType File
```

### .gitignore Content Explanation

The `.gitignore` file contains patterns for files and directories that should not be tracked by Git:

#### Node.js Related
- **`node_modules/`**: Contains all npm dependencies (can be recreated with `npm install`)
- **`npm-debug.log*`**: Debug logs from npm
- **`yarn-*.log`**: Yarn package manager logs

#### TypeScript Build Output
- **`lib/`**: Compiled JavaScript files (generated automatically)
- **`dist/`**: Distribution/build directory
- **`build/`**: Build artifacts
- **`*.tsbuildinfo`**: TypeScript incremental build cache

#### Environment and Configuration
- **`.env*`**: Environment variable files (may contain sensitive data)
- **`.vscode/`**: VS Code workspace settings
- **`.idea/`**: IntelliJ/WebStorm IDE settings

#### System Files
- **`.DS_Store`**: macOS system files
- **`Thumbs.db`**: Windows thumbnail cache
- **`*.log`**: Various log files

#### Why Ignore These Files?
1. **node_modules/**: Large directory that can be recreated with `npm install`
2. **lib/**: Generated files that should be built from source
3. **Environment files**: May contain secrets or local configuration
4. **IDE files**: Personal development environment settings
5. **System files**: OS-generated files irrelevant to the project

### Removing Previously Committed Files from Git

Sometimes you may add files to `.gitignore` after they've already been committed to the repository. In such cases, you need to remove them from Git tracking while keeping them locally.

#### Example: Removing package-lock.json

```bash
# Remove the file from Git tracking but keep it locally
git rm --cached package-lock.json

# Commit the removal
git commit -m "Remove package-lock.json from Git tracking"

# Push to remote repository
git push origin main
```

#### For Multiple Files or Directories

```bash
# Remove multiple files
git rm --cached file1.txt file2.txt

# Remove entire directory
git rm --cached -r directory_name/

# Remove all files matching a pattern
git rm --cached *.log
```

#### Important Notes

- **`--cached` flag**: Removes files from Git index but keeps them in your working directory
- **Without `--cached`**: Would delete the files from both Git and your local filesystem
- **After removal**: Future changes to these files won't be tracked by Git
- **Team members**: When they pull these changes, the files will be removed from their repositories too

#### Verification Commands

```bash
# Check which files are tracked by Git
git ls-files

# Verify a specific file is no longer tracked
git ls-files | grep filename

# Check current Git status
git status
```

## Commands Summary

### Setup Commands
| Command | Purpose |
|---------|---------|
| `npm init -y` | Initialize Node.js project |
| `npm i typescript` | Install TypeScript |
| `npm install ts-node --save-dev` | Install ts-node for direct TypeScript execution |
| `npx tsc --init --rootdir src --outdir lib` | Create TypeScript config |
| `mkdir src` | Create source directory |
| `mkdir lib` | Create output directory |
| `touch src/1_primitiveTypes.ts` | Create first TypeScript file |
| `touch .gitignore` | Create Git ignore file |

### Development Commands
| Command | Purpose |
|---------|---------|
| `npm run build` | Compile TypeScript files once |
| `npm run watch` | Compile and watch for changes |
| `npm run ts:primitive` | Run primitive types lesson directly |
| `npm run ts:palindrome` | Run palindrome package lesson |
| `npm start` | Run main JavaScript file |
| `npm run start:file <filename>` | Run any file by name (dynamic) |
| `npm run dev` | Build and run main file |
| `npm run dev:file <filename>` | Build and run any file by name (dynamic) |
| `npm run clean` | Clean output directory |
| `npm run rebuild` | Clean and rebuild everything |

### Git Commands
| Command | Purpose |
|---------|---------|
| `git rm --cached <file>` | Remove committed file from Git tracking |
| `git commit -m "message"` | Commit changes with descriptive message |
| `git push origin main` | Push changes to remote repository |

### Legacy Commands (Manual)
| Command | Purpose |
|---------|---------|
| `npx tsc --watch` | Start compiler in watch mode (manual) |
| `node lib/filename.js` | Run specific JavaScript file (manual) |
| `npx ts-node src/filename.ts` | Run TypeScript file directly (manual) |

## Modern TypeScript Development with ts-node

### What is ts-node?
**ts-node** is a TypeScript execution engine and REPL for Node.js that allows you to run TypeScript files directly without the need for a separate compilation step.

### Benefits of ts-node:
- **🚀 Instant Execution**: Run `.ts` files directly without compilation
- **⚡ Faster Development**: No build step needed during development
- **🔄 Real-time Feedback**: See TypeScript errors immediately
- **🛠️ Modern Workflow**: Industry-standard approach for TypeScript development
- **🧪 Easy Testing**: Perfect for running individual lessons or experiments

### Usage Examples:
```bash
# Run specific lessons
npm run ts:primitive      # Basic types
npm run ts:generics       # Advanced generics
npm run ts:palindrome     # Package usage

# Run any TypeScript file
npm run ts:run src/any-file.ts

# Direct npx usage
npx ts-node src/1_primitiveTypes.ts
```

### Traditional vs Modern Workflow:

#### Traditional Workflow:
```bash
# 1. Compile TypeScript
npm run build

# 2. Run JavaScript
node lib/1_primitiveTypes.js
```

#### Modern Workflow with ts-node:
```bash
# Run TypeScript directly
npm run ts:primitive
```

This project is configured with both approaches, allowing you to choose the workflow that best fits your development style.

## 🏢 Enterprise TypeScript Types & Features Reference

This comprehensive reference covers TypeScript types and features extensively used in enterprise applications with **NestJS** and **Next.js**. Keep this handy for quick reference!

### 🎯 **Core Types & Primitives**

#### Basic Types
```typescript
// Primitives
string, number, boolean, undefined, null, bigint, symbol

// Arrays & Tuples
string[], Array<string>, [string, number], readonly string[]

// Objects
{ name: string; age: number }
Record<string, any>
```

#### Enterprise Usage Examples
```typescript
// API Response typing (Next.js)
interface APIResponse<T> {
  data: T;
  status: 'success' | 'error';
  message?: string;
}

// Database Entity (NestJS)
interface User {
  readonly id: string;
  email: string;
  createdAt: Date;
  permissions: readonly string[];
}
```

### 🔧 **Utility Types (Essential for Enterprise)**

#### Built-in Utility Types
```typescript
Partial<T>          // Makes all properties optional
Required<T>         // Makes all properties required
Readonly<T>         // Makes all properties readonly
Pick<T, K>          // Pick specific properties
Omit<T, K>          // Omit specific properties
Record<K, V>        // Create object type with keys K and values V
Exclude<T, U>       // Exclude types from union
Extract<T, U>       // Extract types from union
NonNullable<T>      // Remove null/undefined
ReturnType<T>       // Get return type of function
Parameters<T>       // Get parameters tuple of function
```

#### Enterprise Examples
```typescript
// NestJS DTO patterns
interface CreateUserDto {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

type UpdateUserDto = Partial<Omit<CreateUserDto, 'password'>>;
type UserResponse = Omit<User, 'password'>;

// Next.js API types
type ApiHandler<T = any> = (
  req: NextApiRequest,
  res: NextApiResponse<APIResponse<T>>
) => Promise<void>;
```

### 🎭 **Advanced Types**

#### Union & Intersection Types
```typescript
// Union Types (NestJS Guards, Next.js Auth)
type UserRole = 'admin' | 'user' | 'moderator';
type AuthStatus = 'authenticated' | 'unauthenticated' | 'loading';

// Intersection Types (Mixing interfaces)
type UserWithProfile = User & Profile & Timestamps;

// Discriminated Unions (State management)
type LoadingState = { status: 'loading' };
type SuccessState = { status: 'success'; data: any };
type ErrorState = { status: 'error'; error: string };
type AppState = LoadingState | SuccessState | ErrorState;
```

#### Conditional Types
```typescript
// API Response conditioning
type ApiResult<T> = T extends string 
  ? { message: T } 
  : { data: T };

// NestJS Service return types
type ServiceResponse<T> = T extends User 
  ? UserResponse 
  : T extends Product 
  ? ProductResponse 
  : T;
```

### 🧬 **Generics (Critical for Reusability)**

#### Generic Functions & Classes
```typescript
// Generic API service (Next.js/NestJS)
class ApiService<T> {
  async get(id: string): Promise<T> { /* ... */ }
  async create(data: Partial<T>): Promise<T> { /* ... */ }
  async update(id: string, data: Partial<T>): Promise<T> { /* ... */ }
  async delete(id: string): Promise<void> { /* ... */ }
}

// Generic Repository pattern (NestJS)
interface Repository<T, K = string> {
  findById(id: K): Promise<T | null>;
  findAll(filters?: Partial<T>): Promise<T[]>;
  create(entity: Omit<T, 'id'>): Promise<T>;
  update(id: K, updates: Partial<T>): Promise<T>;
  delete(id: K): Promise<void>;
}
```

#### Generic Constraints
```typescript
// Entity with ID constraint
interface Entity {
  id: string;
  createdAt: Date;
}

// Service with entity constraint
class BaseService<T extends Entity> {
  protected repository: Repository<T>;
  
  async findById(id: string): Promise<T | null> {
    return this.repository.findById(id);
  }
}
```

### 🏗️ **Interface & Type Aliases**

#### Interface Patterns
```typescript
// Extending interfaces (NestJS modules)
interface BaseConfig {
  environment: 'development' | 'production' | 'test';
  port: number;
}

interface DatabaseConfig extends BaseConfig {
  host: string;
  database: string;
  ssl: boolean;
}

// Merging interfaces (Module augmentation)
declare module 'express-serve-static-core' {
  interface Request {
    user?: User;
  }
}
```

#### Type Alias Patterns
```typescript
// Complex type aliases
type EventHandler<T = any> = (event: T) => void | Promise<void>;
type Middleware<T = any> = (req: Request, res: Response, next: NextFunction) => T;
type ConfigProvider = () => Promise<ApplicationConfig>;

// Mapped types
type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
type Nullable<T> = { [P in keyof T]: T[P] | null };
```

### 🎪 **Decorators (NestJS Heavy Usage)**

#### Class Decorators
```typescript
@Controller('users')
@UseGuards(AuthGuard)
export class UserController { }

@Injectable()
@Scope(Scope.REQUEST)
export class UserService { }

@Entity('users')
export class User { }
```

#### Property & Parameter Decorators
```typescript
export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;
}

export class UserController {
  constructor(
    @Inject(UserService) private userService: UserService,
    @Inject('CONFIG') private config: Config
  ) {}

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<User> {
    return this.userService.findById(id);
  }
}
```

### 🎯 **Template Literal Types**

#### String Manipulation Types
```typescript
// API endpoints
type ApiEndpoint = `api/v1/${string}`;
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type ApiRoute = `${HttpMethod} /${ApiEndpoint}`;

// CSS-in-JS (Next.js styling)
type CSSProperty = `--${string}`;
type ThemeColor = 'primary' | 'secondary' | 'accent';
type ColorVariable = `var(--color-${ThemeColor})`;

// Environment variables
type EnvKey = `NEXT_PUBLIC_${string}` | `DATABASE_${string}`;
```

### 🎨 **Mapped Types**

#### Property Transformation
```typescript
// Make all properties optional except ID
type PartialExceptId<T> = Partial<T> & Pick<T, 'id'>;

// Convert all properties to strings (form handling)
type Stringify<T> = {
  [K in keyof T]: string;
};

// Prefix all keys
type PrefixKeys<T, P extends string> = {
  [K in keyof T as `${P}${Capitalize<string & K>}`]: T[K];
};

// Create event handlers
type EventHandlers<T> = {
  [K in keyof T as `on${Capitalize<string & K>}Change`]: (value: T[K]) => void;
};
```

### 🔒 **Access Modifiers & Readonly**

#### Class Member Access
```typescript
class UserService {
  private readonly logger: Logger;          // Internal use only
  protected config: ServiceConfig;         // Subclass access
  public readonly version: string;         // External read-only

  constructor(
    private readonly userRepo: UserRepository,  // Shorthand property
    protected readonly eventBus: EventBus       // Protected shorthand
  ) {}
}
```

### 🎪 **Module System**

#### Import/Export Patterns
```typescript
// Named exports (preferred in enterprise)
export { UserService, UserController, UserModule };
export type { User, CreateUserDto, UpdateUserDto };

// Re-exports (barrel exports)
export * from './user.service';
export * from './user.controller';
export { type UserEntity } from './user.entity';

// Dynamic imports (Next.js code splitting)
const LazyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Spinner />,
  ssr: false
});
```

### 🚨 **Error Handling Types**

#### Result/Either Patterns
```typescript
// Result type for error handling
type Result<T, E = Error> = 
  | { success: true; data: T }
  | { success: false; error: E };

// API error responses
interface ApiError {
  code: string;
  message: string;
  details?: Record<string, any>;
}

// Custom error classes
abstract class BaseError extends Error {
  abstract readonly code: string;
  abstract readonly statusCode: number;
}

class ValidationError extends BaseError {
  readonly code = 'VALIDATION_ERROR';
  readonly statusCode = 400;
}
```

### 🎭 **Type Guards & Assertions**

#### Runtime Type Checking
```typescript
// Type guards
function isUser(obj: any): obj is User {
  return obj && typeof obj.id === 'string' && typeof obj.email === 'string';
}

// Assertion functions
function assertIsUser(obj: any): asserts obj is User {
  if (!isUser(obj)) {
    throw new Error('Object is not a User');
  }
}

// Discriminated union guards
function isErrorState(state: AppState): state is ErrorState {
  return state.status === 'error';
}
```

### 📊 **Performance Types**

#### Lazy Loading & Code Splitting
```typescript
// Lazy component types (Next.js)
type LazyComponent<P = {}> = React.ComponentType<P> & {
  preload?: () => Promise<void>;
};

// Async component factory
type AsyncComponentFactory<P = {}> = () => Promise<{
  default: React.ComponentType<P>;
}>;

// Memoization types
type MemoizedFunction<T extends (...args: any[]) => any> = T & {
  cache: Map<string, ReturnType<T>>;
  clear: () => void;
};
```

### 🎯 **Enterprise Patterns Quick Reference**

#### Repository Pattern
```typescript
interface Repository<T, ID = string> {
  findById(id: ID): Promise<T | null>;
  findMany(criteria: Partial<T>): Promise<T[]>;
  save(entity: T): Promise<T>;
  remove(id: ID): Promise<void>;
}
```

#### Service Layer
```typescript
@Injectable()
export class UserService implements Repository<User> {
  constructor(
    @InjectRepository(User) private repo: Repository<User>,
    private readonly eventBus: EventBus
  ) {}
}
```

#### DTO Pattern
```typescript
export class CreateUserDto {
  @IsEmail() email: string;
  @IsString() @MinLength(8) password: string;
}

export class UpdateUserDto extends PartialType(
  OmitType(CreateUserDto, ['password'])
) {}
```

#### Guard Pattern (NestJS)
```typescript
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateToken(request.headers.authorization);
  }
}
```

#### Middleware Pattern
```typescript
export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  // Middleware logic
}

// Type-safe middleware
type Middleware<T = any> = (
  req: Request,
  res: Response,
  next: NextFunction
) => T | Promise<T>;
```

### 💡 **Pro Tips for Enterprise Development**

1. **Always use `readonly` for** IDs, timestamps, configuration
2. **Prefer `interface` over `type`** for object shapes
3. **Use `Partial<T>` and `Required<T>`** for DTOs
4. **Implement proper error types** with discriminated unions
5. **Use generic constraints** for reusable services
6. **Leverage mapped types** for form handling
7. **Use template literals** for type-safe APIs
8. **Implement proper type guards** for runtime safety
9. **Use module augmentation** for extending third-party types
10. **Always type your async functions** with proper return types

Keep this reference handy for quick TypeScript enterprise development! 🚀
