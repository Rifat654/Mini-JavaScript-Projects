# JavaScript ES6 Concepts

## 📌 ES6 / Modern JavaScript

- let / const
- Arrow functions
- Template literals
- Destructuring
- Spread
- Rest
- Default parameters
- Enhanced object literals
- Optional chaining
- Nullish coalescing
- Modules

## let and const

**Definition:** let and const are JavaScript keywords used to declare block-scoped variables. let allows reassignment, while const does not allow reassignment.

```js
let age = 23;
age = 24; // Allowed

const name = "Rifat";
// name = "Rahim"; // TypeError
```

**Note** Remember: A const array or object can still have its contents modified.

```js
const skills = ["HTML", "CSS"];
skills.push("JavaScript"); // Allowed
```

## Arrow functions

**Definition:** An arrow function is a shorter way to write a JavaScript function using the `=>` syntax.
