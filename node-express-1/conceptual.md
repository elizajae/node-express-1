### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
Some ways of managing asynchronous code in JavaScript are using callbacks, promises, and async/await.
- What is a Promise?
A promise is an object that represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
- What are the differences between an async function and a regular function?
An async function is a function that returns a promise, while a regular function does not.

- What is the difference between Node.js and Express.js?
Node.js is a runtime environment that allows you to run JavaScript on the server side, while Express.js is a web application framework for Node.js.

- What is the error-first callback pattern?
The error-first callback pattern is a pattern where the first argument of a callback function is an error object, and the second argument is the data.

- What is middleware?
Middleware is a function that has access to the request object (req), the response object (res), and the next function in the application’s request-response cycle.

- What does the `next` function do?
The `next` function is used to pass control to the next middleware function in the application’s request-response cycle.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
Some of the issues in the following code are:
-  The code is not DRY (Don't Repeat Yourself) as the same code is repeated multiple times.
-  The code is not efficient as it makes multiple requests to the same API endpoint.
- and other issues.


```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
