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

### 6. Create First TypeScript File
```bash
touch src/1_primitiveTypes.ts
```
**Purpose**: Creates the first TypeScript file to start learning primitive types.

**Note**: On Windows, if `touch` is not available, you can use:
```powershell
New-Item -Path "src\1_primitiveTypes.ts" -ItemType File
```

### 7. Start TypeScript Compiler in Watch Mode
```bash
npx tsc --watch
```
**Purpose**: Starts the TypeScript compiler in watch mode, which automatically recompiles files when changes are detected.

**Benefits**:
- Automatic compilation on file changes
- Real-time error checking
- Continuous development workflow

## Current Project Structure

```
codedamnTypescriptFundamentals/
├── .gitignore            # Git ignore rules
├── package.json          # Node.js project configuration
├── package-lock.json     # Lock file for dependencies (ignored by Git)
├── tsconfig.json         # TypeScript compiler configuration
├── scripts/              # Custom utility scripts
│   └── run-file.js       # Dynamic file execution script
├── src/                  # Source TypeScript files (13 lessons)
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
│   └── 13_typeDeclarationForSpecialVariables.ts
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
│   └── 12_typeCasting.js
└── node_modules/         # NPM dependencies (ignored by Git)
```

## File Content Explanations

### `package.json`
Contains Node.js project metadata including:
- Project name, version, and description
- Dependencies (TypeScript)
- Scripts for running/building the project
- Entry point and other configuration

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

### Execution Scripts
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

4. **For any of the 13 lessons, you can run:**
   ```bash
   # Examples with different lessons
   npm run start:file 4_ObjectTypesMadeUsingTypeAliasAndLetVsConstDeclarationInTs
   npm run start:file 8_genericsVsClassSpecialization
   npm run start:file 12_typeCasting
   ```

## Learning Path

This project provides a comprehensive TypeScript learning curriculum with 13 progressive lessons:

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

### **Key Learning Notes:**
- **Array Generics**: `Array<number>` specifies element type, not array size. Use tuple types `[number, number]` for fixed sizes.
- **Progression**: Each lesson builds upon previous concepts, creating a solid TypeScript foundation.
- **Hands-on**: All lessons include practical examples and can be executed individually using the dynamic scripts.

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
