[How to use JavaScript Promises](https://www.youtube.com/watch?v=104J7_HyaG4) by Decypher Media

* an alternative to callbacks


for example:

    $.ajax({
        url: "test.html",
        cache: false,
        success: function(html) {
            $("#results").append(html);
        }
    });

* then you have a callback function as a success handler
* callbacks work great when your logic
* the real world is more complicated
* promises just make it easier to manage multiple async request
* the only tradeoff is it might be a little confusing to wrap your head around the concept of promises initially

design pattern

* at a high level, there's really only two concepts to wrap your head around
    * deferred object
    * promise object

* promise object
    * think of a progress bar
    * manifests as a javascript object
    * the task not have finished yet
    * you might not have access to the data
    * but you want a reference to that in-progress task itself, so you can write logic around it.
        * example: i want to run 3 separate tasks, and I want to aggregate the result when all 3 come back.
        * that's a hard concept to represent in the "callback model", because you don't have access to that in-progress object
* deferred object
    * like an interface into that promise object (progress bar)


`code --> deferred object --> promise object (progress bar)`

* we start with a **deferred object** (normal javascript object)
    * but it has a property on it, called "promise".
    * two separate objects
        * can go `deferred.promise` to **get to** the promise at any time.

* **promise object** has two properties on it
    * status
        * default is pending
    * value
        * default is undefined


https://stackoverflow.com/questions/27889687/promise-defer-browser-support
According to the MDN article on Deferred, the .defer method is obsolete. If you look at this bug issue, it says that Promise.defer is non-standard, so it's not likely to return.

Promise.defer

    var deferred = Promise.defer();
    doSomething(function cb(good) {
        if (good)
            deferred.resolve();
        else
            deferred.reject();
    });
    return deferred.promise;

new Promise

    return new Promise(function(resolve, reject) {
        doSomething(function cb(good) {
            if (good)
                resolve();
            else
                reject();
        });
    });