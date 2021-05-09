
// Explanation:
// Immediately invoked function expression (IIFE) that sets up a
// function as class with module level variables, a constructor,
// and adding methods by defining prototype. It is then returned,
// and to set it to MyClass it is immeidately invoked. Keep in mind
// that the IIFE creates scrope.
var MyClass = (function() {

    // module scope
    var key = Symbol("key")

    function MyClass(privateData) {
        // constructor?
        this[key] = privateData;
    }

    MyClass.prototype = {
        work: function() {
            // Symbols are private, but not really because Object.getOwnPropertySymbols can see them
            console.log(this[key]);
        }
    };

    return MyClass;
})();


export default MyClass;
