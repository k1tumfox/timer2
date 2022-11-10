const beepIntervals = process.argv.slice(2);

beepIntervals.forEach(boop => {
  if (!(boop < 0 && isNaN(boop))) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, boop*1000);
  }
});

// for (let boop of beepIntervals) {
//   if (boop > 0 && Number.isInteger(boop)) {
//     setTimeout(() => {
//       console.log(boop);
//       process.stdout.write('\x07');
//     }, boop*1000);
//   }  
// }