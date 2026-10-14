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

## Template literals

**Definition:** Template literals are strings enclosed in backticks that allow embedded expressions using ${} and support multiline strings.

```js
const name = "Rifat";
const age = 23;

console.log(`My name is ${name} and I am ${age} years old.`);
```

## Destructuring

**Definition:** Destructuring is a JavaScript syntax that allows values from arrays or properties from objects to be unpacked into separate variables.

```js
const user = {
  name: "Rifat",
  age: 23,
};

const { name, age } = user;

console.log(name); // Rifat
console.log(age); // 23
```

## Spread operator `(...)`

**Definition:** The spread operator expands the elements of an iterable or the properties of an object into another array, object, or function call.

```js
const first = [1, 2, 3];
const second = [...first, 4, 5];

console.log(second); // [1, 2, 3, 4, 5]
```

## Rest parameters `(...)`

**Definition:** Rest parameters collect multiple function arguments into a single array, allowing a function to accept a variable number of arguments.

```js
const sum = (...numbers) => {
  return numbers.reduce((total, number) => total + number, 0);
};

console.log(sum(10, 20, 30)); // 60
```

## Default parameters

**Definition:** Default parameters allow function parameters to use predefined values when an argument is omitted or explicitly passed as undefined.

```js
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greet()); // Hello, Guest!
console.log(greet("Rifat")); // Hello, Rifat!
```

## Enhanced object literals

**Definition:** Enhanced object literals provide shorter syntax for defining object properties, methods, and computed property names.

```js
const name = "Rifat";

const user = {
  name,
  greet() {
    return `Hello, ${this.name}`;
  },
};

console.log(user.greet()); // Hello, Rifat
```

## Optional chaining `(?.)`

**Definition:** Optional chaining allows you to safely access nested object properties or call methods without throwing an error when an intermediate value is null or undefined.

```js
const user = {
  profile: {
    city: "Dhaka",
  },
};

console.log(user.profile?.city); // Dhaka
console.log(user.address?.city); // undefined
```

## Nullish coalescing `(??)`

**Definition:** The nullish coalescing operator returns its right-hand value only when the left-hand value is null or undefined.

```js
const username = null ?? "Guest";
console.log(username); // Guest

const score = 0 ?? 100;
console.log(score); // 0
```

```
`Note:` Unlike ||, ?? preserves valid falsy values such as 0, false, and "".
```
