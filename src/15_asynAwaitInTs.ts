type Delay = (milliseconds: number) => Promise<void>;

const delay: Delay = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

const asyncFunction = async () => {
  console.log("Starting delay...");
  await delay(2000); // Wait for 2 seconds
  console.log("Delay completed!");
}
