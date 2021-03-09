// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r/   '); 
// }, 800);
// setTimeout(() => {

//   process.stdout.write('\r-   '); 
// }, 900);
// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 1000);

const animation = ['\r|','\r/','\r-','\r\\','\r/','\r-','\r\\']

const spinningAnimation = (sentence) => {
  let delay = 0;
  for (let i = 0; i < sentence.length; i ++) {
    setTimeout(() => {
      process.stdout.write(sentence[i])
      if (i === sentence.length - 1) {
        process.stdout.write('\n')
      };
    }, delay += 100)
  }
}
spinningAnimation(animation);