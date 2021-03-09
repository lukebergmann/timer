const myArgs = process.argv.slice(2);
// Implement an alarm clock / timer which will beep after a specified amound of time has passed. The user can specify an unlimited number of alarms using command line arguments. 
const alarm = function (arr) {
  if (myArgs >= 0){
    for (let i = 0; i < arr.length; i++) {
      setTimeout(() => {
        process.stdout.write('Beep\n');
      }, 1000 * arr[i]);
    }
  }
};
alarm(myArgs);
