# JavaScript Under The Hood

## Thread of Execution and the Call Stack

* <https://www.youtube.com/watch?v=-G9c4CMMUKc>
* Thread of Execution
    * JavaScript is a single-threaded language.
    * Single sequential flow of control
    * JavaScript is a synchronous language with aynchronous capabilities.
    * A thread has a call stack and memory.
* The Call Stack
    * Stack of functions to be executed
    * Manages execution contexts
    * Stacks are LIFO last in first out

## Execution Context

* <https://www.youtube.com/watch?v=Fd9VaW0M7K4>
* When you run any JavaScript, a special environment is created to handle the transformation and execution of code. This is called the execution context. It contains the currently running code and everything that aids in its execution.
* Execution Context Phases
    * Memory Creation Phase
        * Create the global object (browser = window, Node.js = global)
        * Create the "this" object and bind it to the global object.
        * Setup memory heap for storing variables and function references
        * Store functions and variables in global execution context and set to "undefined"
    * Execution Phase
        * Execute code line by line
        * Create a new execution context for each function call.
* Hoisting
    * often referred to as the process where the interpreter appears to move the declaration of functions and variables to the top of their scope prior to the execution of code.