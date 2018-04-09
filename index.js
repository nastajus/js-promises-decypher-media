/*
//code --> deferred object --> promise object (progress bar)

//var deferred = Promise.defer();

//IDE running in debug, A-OK!
//IDE running in console,
//Chrome running, Uncaught TypeError: Promise.defer is not a function at <anonymous>:1:24 VM270:1
*/

‌‌var deferred = new Promise (function(resolve, reject) {});