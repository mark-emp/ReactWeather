// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Oxford', function(err, temp){
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp)
//   }
// });
//
// function getTempPromise(location) {
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       resolve(80);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Oxford').then(function(temp) {
//   console.log('promise success', temp);
// }, function(err){
//   console.log('promise error', err)
// });

// Challenge area

function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' & typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('A and B need to be numbers');
    }
  });
}

addPromise(2,7).then(function(sum) {
  console.log('Success', sum);
}, function(err) {
  console.log('Error', err);
})

addPromise(1,'bacon').then(function(sum) {
  console.log('Success', sum);
}, function(err) {
  console.log('Failue', err);
});
