// Write a script that prints the first argument passed to it

const firstArg = process.argv[2];

if (firstArg !== undefined) {
  console.log(firstArg);
} else {
  console.log('No argument');
}