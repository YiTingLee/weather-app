console.log('Starting app');

setTimeout(() => {
  console.log('one');
}, 2000);

setTimeout(() => {
  console.log('two');
}, 0);

console.log('Finishing up');
