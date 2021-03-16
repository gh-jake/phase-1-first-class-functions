function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function hello() {
        return "Hello";
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        return "Hello";
    }
}