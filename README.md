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
├── package.json          # Node.js project configuration
├── tsconfig.json         # TypeScript compiler configuration
├── src/                  # Source TypeScript files
│   ├── 1_primitiveTypes.ts
│   └── 2_instanceTypes.ts
└── lib/                  # Compiled JavaScript output
    └── 1_primitiveTypes.js
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
Contains TypeScript source files:
- **`1_primitiveTypes.ts`**: Demonstrates basic TypeScript primitive types (string, number, boolean, etc.)
- **`2_instanceTypes.ts`**: Covers TypeScript instance types (arrays, objects, functions, etc.)

### `lib/` Directory
Contains compiled JavaScript files:
- **`1_primitiveTypes.js`**: Compiled JavaScript version of the TypeScript file
- Files are automatically generated when running `npx tsc` or `npx tsc --watch`

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

# Run any file by name (dynamic)
npm run start:file <filename>
npm run start:file 1_primitiveTypes
npm run start:file 2_instanceTypes

# Run specific TypeScript lessons (predefined)
npm run start:primitive    # Runs 1_primitiveTypes.js
npm run start:instance     # Runs 2_instanceTypes.js
```

### Development Scripts (Build + Run)
```bash
# Compile and run main file
npm run dev

# Compile and run any file by name (dynamic)
npm run dev:file <filename>
npm run dev:file 1_primitiveTypes
npm run dev:file 2_instanceTypes

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
   npm run start:file 1_primitiveTypes
   ```

3. **Or use the combined approach:**
   ```bash
   npm run dev:file 1_primitiveTypes
   ```

4. **For new files, you can run any compiled TypeScript file:**
   ```bash
   # If you create src/3_advancedTypes.ts and compile it
   npm run start:file 3_advancedTypes
   ```

## Learning Path

This project structure supports learning TypeScript concepts in a progressive manner:
1. **Primitive Types** - Basic type annotations
2. **Instance Types** - Complex types like arrays, objects, and functions
3. **Advanced Types** - Unions, intersections, generics (future files)

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
