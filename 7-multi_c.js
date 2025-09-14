// Write a script that prints C is fun <number of times> where <number of times> is the first argument of the script
// If the argument can’t be converted to an integer, print Missing number of occurrences
const count = parseInt(process.argv[2]);

if (isNaN(count)) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < count; i++) {
    console.log('C is fun');
  }
}