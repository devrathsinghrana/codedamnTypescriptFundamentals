class Personnel {
  // Using public access modifier to automatically create properties
  // This is a shorthand for creating properties in the constructor
  // public personnelName: string;//not required to define type as it is already defined in constructor
  // public personnelId: number;//not required to define type as it is already defined in constructor
  constructor(public personnelName: string, public personnelId: number) {
    this.personnelName = personnelName;
    this.personnelId = personnelId;
  }
}

const personnel=new Personnel("John Doe", 12345);
console.log(personnel.personnelName); // "John Doe" 
console.log(personnel.personnelId); // 12345
