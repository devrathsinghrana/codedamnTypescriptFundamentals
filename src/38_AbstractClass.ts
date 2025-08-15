/*
ABSTRACT CLASSES IN TYPESCRIPT

Abstract classes are blueprints that cannot be instantiated directly but can be extended by other classes.
They are useful when you want to:
1. Share common implementation across multiple related classes
2. Enforce that certain methods must be implemented by subclasses
3. Create a template/pattern that subclasses must follow

Key Features:
- Cannot be instantiated directly (new AbstractClass() will throw error)
- Can contain both abstract methods (no implementation) and concrete methods (with implementation)
- Subclasses MUST implement all abstract methods
- Provides a way to share code while enforcing structure
*/

// Abstract class - serves as a base template for command execution
abstract class CommandLine {
  // Abstract method: No implementation provided here
  // Every subclass MUST implement this method
  // This ensures all command classes have a way to define their command string
  // Only abstract what may changes in different subclasses and keep common logic here itself.
  abstract commandLine(): string;
  
  // Concrete method: Shared implementation across all subclasses
  // This method provides common execution logic that all commands can use
  // It calls the abstract commandLine() method, which will be implemented by subclasses
  execute(): void {
    console.log(`Command is: ${this.commandLine()}`);
  }
}

// Concrete class extending the abstract class
// Must implement all abstract methods from the parent class
class GitResetCommand extends CommandLine {
  // Implementation of the abstract method
  // This provides the specific command string for git reset
  commandLine(): string {
    return "git reset --hard";
  }
  // Note: This class automatically inherits the execute() method from CommandLine
}

// Another concrete class extending the abstract class
class GitFetchCommand extends CommandLine {
  // Implementation of the abstract method
  // This provides the specific command string for git fetch
  commandLine(): string {
    return "git fetch";
  }
  // Note: This class also inherits the execute() method from CommandLine
}

// Usage examples:
// Create instances of concrete classes and call their methods
new GitResetCommand().execute(); // Output: Command is: git reset --hard
new GitFetchCommand().execute(); // Output: Command is: git fetch

// This will throw a compile-time error:
// new CommandLine(); // Error: Cannot create an instance of an abstract class.

/*
BENEFITS OF THIS APPROACH:

1. CODE REUSE: The execute() method is shared by all command classes
2. CONSISTENCY: All command classes follow the same pattern/structure
3. ENFORCEMENT: TypeScript ensures all subclasses implement commandLine()
4. EXTENSIBILITY: Easy to add new command types by extending CommandLine
5. MAINTAINABILITY: Changes to execution logic only need to be made in one place

REAL-WORLD USAGE:
- Database connections (shared connection logic, different authentication)
- Payment processors (shared validation, different payment methods)
- File processors (shared file handling, different format parsing)
- API clients (shared HTTP logic, different endpoint implementations)
*/

