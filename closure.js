// JavaSCript Closures 
// JavaScript variables can belong to the local or global scope.
// Global variables can be made local (private) with closures.

// Example 1
// a is a global variable.
// In a web page, global variables belongs to the window Object.
// Global variables can be used (and changed) by all scripts in the page (and in the window).

//  Likewise in the local variable:
// A local variable can only be used inside the function where it is defined. It is hidden from other
// functions and other scripting code.
// Global and local variables with the same name are different variables.
// Modifying one, does not modify the other.

// Note:- Variables created without a declaration keyword (var, let, or const) are always global, even
// if they are created inside a function.

// Variable Lifetime
// Global variables live until the page is is discarded, like when
// you navigate to another page or close the window.
// Local variables have short lives. They are created when the function is invoked, and
// deleted when the function is finished.

// A Counter Dilemma
// Suppose you want to use a variable for counting something, and you want this counter to be
// available to all functions.
// You could use a global variable, and a function to increase the counter:
// Example 2


// There is a problem with the solution above: Any code on the page can change the counter,
// without calling add().
// The counter should be local to the add() function, to prevent other code from changing it:
// Example 3

// It did not work because we display the global counter instead of the local counter.
// We can remove the global counter and access the local counter by letting the function return it:
// Example 4

// It did not work because we reset the local counter every time we call the function.
//  A JavaScript inner function can solve this.

// JavaScript Neested Functions
// All functions have access to the global scope.  
// In fact, in JavaScript, all functions have access to the scope "above" them.
// JavaScript supports nested functions. Nested functions have access to the scope "above" them.
// In this example, the inner function plus() has access to the counter variable in the parent function:

// Example 5
// This could have solved the counter dilemma, if we could reach the plus() function from the outside.
// We also need to find a way to execute counter = 0 only once.
// We need a closure.

// JavaScript Closures
// Remember self-invoking functions? What does this function do?
// Example6

// Example Explained
// The variable add is assigned the return value of a self-invoking function.
// The self-invoking function only runs once. It sets the counter to zero (0), and returns a function
// expression.
// This way add becomes a function. The "wonderful" part is that it can access the counter in the
// parent scope.
// This is called a JavaScript closure. It makes it possible for a function to have "private" variables.
// The counter is protected by the scope of the anonymous function, and can only be changed using
// the add function.

// Note: A closure is a function having access to the parent scope, even after the parent
// function has closed.



     