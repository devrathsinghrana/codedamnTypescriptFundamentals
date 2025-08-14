// say we have a variable that is not initialized but declared
let x!: number;
// we have a function dice that is actually intializing the variable x
function dice() {
  x = Math.floor(Math.random() * 6 + 1);
}

// we are calling the function dice which initializes the variable x
dice();
console.log(x); // this will work as we are calling the function dice which initializes the variable x
// console.log(x); // Variable 'x' is used before being assigned. error is given as ts is not able to understand that calling dice() will initialize the variable x

// we can use not null assertion operator to tell ts that we are sure that x will be initialized before it is used
// console.log(x!); // this will work as we are telling ts that we are sure that x will be initialized before it is used
// but this is not a good practice as it can lead to runtime errors if we are not careful
// like if we forget to call the dice function before using x, it will lead to runtime error or if we again console.log(x) it will give error
// console.log(x); here we need to again use not null assertion operator to tell ts that we are sure that x will be initialized before it is used which makes code less readable and maintainable

// a better way is to use definite assignment assertion which tells ts that the variable will be initialized and we don't need to use not null assertion operator every time we use the variable
// we can use the definite assignment assertion by using the ! operator after the variable name during declaration  but this is not recommended as it can lead to runtime errors if we are not careful like forgetting to call the dice function before using x
