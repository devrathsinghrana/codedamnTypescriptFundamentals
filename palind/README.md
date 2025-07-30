# Palind - Palindrome Checker Package

A TypeScript utility package for checking palindromes.

## 📦 Publishing Steps

Follow these steps to create and publish an npm package:

### 1. Create Project Directory
```bash
mkdir palind
cd palind/
```
**Explanation:** Creates a new directory for your package and navigates into it.

### 2. Initialize npm Package
```bash
npm init -y
```
**Explanation:** 
- Creates a `package.json` file with default values
- The `-y` flag accepts all default prompts automatically
- This file contains metadata about your package (name, version, dependencies, etc.)

### 3. Install TypeScript as Dev Dependency
```bash
npm i typescript -D
```
**Explanation:**
- Installs TypeScript as a development dependency
- `-D` flag adds it to `devDependencies` (not needed in production)
- TypeScript is only needed during development/build time

### 4. Initialize TypeScript Configuration
```bash
npx tsc --init --rootDir src --outDir lib --sourceMap --declaration --declarationMap
```
**Explanation:**
- `npx tsc --init` creates a `tsconfig.json` file
- `--rootDir src` sets source files location to `src/` folder
- `--outDir lib` sets compiled output location to `lib/` folder
- `--sourceMap` generates source map files (`.js.map`) for debugging
- `--declaration` generates TypeScript declaration files (`.d.ts`)
- `--declarationMap` generates declaration map files (`.d.ts.map`)

### 5. Build the Project
```bash
npm run build
```
**Explanation:**
- Runs the build script defined in `package.json`
- Compiles TypeScript files from `src/` to `lib/`
- Generates JavaScript, declaration files, and source maps

### 6. Publish to npm
```bash
npm publish
```
**Explanation:**
- Uploads your package to the npm registry
- Makes it available for others to install via `npm install`
- For scoped packages, use `npm publish --access public`

## 📁 File Structure Explanation

### Root Files

#### `package.json`
```json
{
  "name": "@devrath/palind",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "tsc"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "typescript": "^5.8.3"
  }
}
```
**Purpose:** 
- Contains package metadata and configuration
- Defines package name, version, entry point, and scripts
- Lists dependencies and devDependencies

#### `tsconfig.json`
**Purpose:**
- TypeScript compiler configuration file
- Specifies compilation options, file locations, and compiler behavior
- Defines how TypeScript files are transformed to JavaScript

### Source Directory (`src/`)

#### `src/index.ts`
**Purpose:**
- Main source file containing your TypeScript code
- Entry point for your package functionality
- Contains the palindrome checking logic

### Build Output Directory (`lib/`)

#### `lib/index.js`
**Purpose:**
- Compiled JavaScript output from `src/index.ts`
- This is what actually runs when someone uses your package
- Referenced by the `main` field in `package.json`

#### `lib/index.d.ts`
**Purpose:**
- TypeScript declaration file
- Provides type information for TypeScript users
- Enables IntelliSense and type checking when others import your package

#### `lib/index.d.ts.map`
**Purpose:**
- Declaration source map file
- Maps the generated `.d.ts` file back to the original TypeScript source
- Helps IDEs provide better navigation and debugging experience

#### `lib/index.js.map`
**Purpose:**
- JavaScript source map file
- Maps the compiled JavaScript back to the original TypeScript source
- Enables debugging of TypeScript code in browser developer tools

## 🚀 Usage

After publishing, others can install and use your package:

```bash
npm install @devrath/palind
```

```typescript
import { isPalindrome } from '@devrath/palind';

console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello'));   // false
```

## 🔧 Development

To work on this package locally:

1. Clone/download the project
2. Install dependencies: `npm install`
3. Make changes to `src/index.ts`
4. Build: `npm run build`
5. Test locally before publishing

## 📝 Notes

- Always increment the version in `package.json` before republishing
- The `lib/` directory should be committed to version control if you want others to use the package without building
- Consider adding `.npmignore` to exclude unnecessary files from the published package
- Add proper tests before publishing to production
