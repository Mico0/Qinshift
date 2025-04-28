# Class 1: TypeScript Basics

## Topics Covered

- TypeScript setup and configuration
- Basic types
- Interfaces
- Type annotations and inference
- Functions in TypeScript
- Arrays and tuples
- Enums
- Type assertions

## Project Setup Instructions

1. Initialize a new Node.js project:

```bash
npm init -y
```

2. Install TypeScript and ts-node as dev dependencies:

```bash
npm install typescript ts-node --save-dev
```

3. Create TypeScript configuration file:

```bash
npx tsc --init
```

4. In the generated tsconfig.json, uncomment the following lines:
```
"rootDir": "./src", // Specify the root folder within your source files
"outDir": "./dist", // Specify an output folder for all emitted files
```


5. Add these scripts to your package.json:

```json
{
	"scripts": {
		"start": "ts-node index.ts",
		"build": "tsc",
		// --respawn flag automatically restarts the application when file changes are detected
		// This enables a smoother development experience by eliminating manual restarts
		"dev": "ts-node-dev --respawn index.ts"
	}
}
```

6. Create your first TypeScript file:

```bash
mkdir src
touch index.ts
```

Now you can start writing TypeScript code in the index.ts file!