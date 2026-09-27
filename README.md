# Master Javascript Zero to Hero

## JavaScript Fundamentals

> **JavaScript** is a high-level, dynamically typed programming language mainly used to make web pages interactive and to build modern frontend, backend, desktop, and server-side applications.

---

## 👨‍💻 JavaScript Creator

### Brendan Eich

**Brendan Eich** created JavaScript in **1995** while working at **Netscape**.

- **Creator:** Brendan Eich
- **Created:** 1995
- **Original company:** Netscape
- **Original name:** Mocha
- Later renamed **LiveScript**
- Finally became **JavaScript**

JavaScript was originally created very quickly to add scripting and interactivity to web browsers.

### Important Note

JavaScript and Java are **different programming languages**.

```text
JavaScript ≠ Java
```

The name "JavaScript" was partly chosen for marketing reasons during the language's early history.

---

# Part 1 — JavaScript Fundamentals

## 1. What is JavaScript?

JavaScript is a programming language that allows us to create **logic and behavior** in applications.

For example:

```js
let username = "Rifat";

console.log(`Hello ${username}`);
```

Output:

```text
Hello Rifat
```

JavaScript can be used for:

```text
Frontend
   ↓
HTML + CSS + JavaScript
   ↓
Interactive Web Applications

Backend
   ↓
Node.js + JavaScript
   ↓
APIs / Servers / Databases

Other
   ↓
Mobile / Desktop / Automation / Tools
```

---

# 2. Variables

A variable is a **named container/reference used to store a value**.

```js
let name = "Rifat";
let age = 23;
```

Think:

```text
name ───────→ "Rifat"
age  ───────→ 23
```

JavaScript has three variable declarations:

```js
var
let
const
```

---

# 3. `let`

Use `let` when the variable's value may change.

```js
let age = 23;

age = 24;

console.log(age);
```

Output:

```text
24
```

### Rule

```text
let → can be reassigned
```

---

# 4. `const`

Use `const` when the variable binding should not be reassigned.

```js
const country = "Bangladesh";

country = "India"; // Error
```

### Important

`const` does **not** mean the entire value is deeply immutable.

For example:

```js
const user = {
  name: "Rifat",
};

user.name = "Rahim";

console.log(user.name);
```

This is allowed because the object reference itself was not reassigned.

```text
const user
     │
     └──→ Object
           └── name can change
```

---

# 5. `var`

`var` is the older way of declaring variables.

```js
var name = "Rifat";

name = "Rahim";
```

Modern JavaScript generally prefers:

```js
let
const
```

instead of `var`.

Why?

Because `let` and `const` provide more predictable **block scope** behavior.

---

# 6. `let` vs `const` vs `var`

| Feature                  | `var` | `let` | `const` |
| ------------------------ | ----- | ----- | ------- |
| Reassign                 | ✅    | ✅    | ❌      |
| Block scoped             | ❌    | ✅    | ✅      |
| Modern usage             | Low   | High  | High    |
| Can redeclare same scope | ✅    | ❌    | ❌      |

### Practical rule

```text
Value changes?
     ↓
    let

Value doesn't need reassignment?
     ↓
   const
```

Prefer:

```js
const user = "Rifat";
let age = 23;
```

---

# 7. Data Types

JavaScript values have different data types.

## Primitive Types

```text
String
Number
BigInt
Boolean
Undefined
Null
Symbol
```

Example:

```js
const name = "Rifat"; // String
const age = 23; // Number
const isDeveloper = true; // Boolean
let score; // Undefined
const data = null; // Null
const bigNumber = 123n; // BigInt
```

---

# 8. String

Used for text.

```js
const name = "Rifat";
const language = "JavaScript";
```

You can use:

```js
"Hello";
"Hello"`Hello`;
```

---

# 9. Number

JavaScript uses `Number` for integers and floating-point numbers.

```js
const age = 23;
const price = 99.99;
```

Example:

```js
const a = 10;
const b = 20;

console.log(a + b);
```

Output:

```text
30
```

---

# 10. Boolean

Boolean has only two values:

```js
true;
false;
```

Example:

```js
const isLoggedIn = true;
const isAdmin = false;
```

Boolean values are heavily used in conditions.

```js
if (isLoggedIn) {
  console.log("Welcome");
}
```

---

# 11. Undefined

A variable exists but has not been assigned a value.

```js
let username;

console.log(username);
```

Output:

```text
undefined
```

---

# 12. Null

`null` represents an intentional absence of a value.

```js
const selectedUser = null;
```

Meaning:

```text
There is intentionally no user right now.
```

### Interesting JavaScript fact

```js
typeof null;
```

returns:

```text
"object"
```

This is a historical JavaScript quirk.

---

# 13. BigInt

Used for very large integers.

```js
const bigNumber = 123456789012345678901234567890n;
```

Notice the:

```text
n
```

at the end.

---

# 14. Symbol

`Symbol` creates unique values.

```js
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2);
```

Output:

```text
false
```

Even though both have the same description, each Symbol is unique.

---

# 15. `typeof`

`typeof` tells us the type of a value.

```js
console.log(typeof "Hello");
console.log(typeof 100);
console.log(typeof true);
```

Output:

```text
string
number
boolean
```

Example:

```js
const name = "Rifat";

console.log(typeof name);
```

Output:

```text
string
```

---

# 16. Operators

Operators are symbols used to perform operations.

## Arithmetic Operators

```js
+
-
*
/
%
**
```

Example:

```js
const a = 10;
const b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
console.log(a ** b); // 1000
```

---

# 17. Assignment Operators

```js
=
+=
-=
*=
/=
```

Example:

```js
let count = 10;

count += 5;

console.log(count);
```

Output:

```text
15
```

This:

```js
count += 5;
```

means:

```js
count = count + 5;
```

---

# 18. Comparison Operators

Used to compare values.

```js
>
<
>=
<=
===
!==
```

Example:

```js
const age = 23;

console.log(age >= 18);
```

Output:

```text
true
```

---

# 19. `==` vs `===`

This is an important JavaScript concept.

### Loose equality

```js
5 == "5";
```

Result:

```text
true
```

JavaScript performs type conversion.

### Strict equality

```js
5 === "5";
```

Result:

```text
false
```

Because:

```text
5       → number
"5"     → string
```

### Recommended

Prefer:

```js
===
!==
```

because they avoid unexpected type coercion.

---

# 20. Logical Operators

### AND

```js
&&
```

Both conditions need to be truthy.

```js
age >= 18 && isLoggedIn;
```

### OR

```js
||
```

At least one condition needs to be truthy.

```js
isAdmin || isOwner;
```

### NOT

```js
!
```

Reverses a boolean value.

```js
const isLoggedIn = true;

console.log(!isLoggedIn);
```

Output:

```text
false
```

---

# 21. Type Conversion

JavaScript can convert values from one type to another.

### String → Number

```js
const age = "23";

const numberAge = Number(age);

console.log(numberAge);
```

Result:

```text
23
```

### Number → String

```js
const age = 23;

const textAge = String(age);
```

### String → Boolean

```js
Boolean("hello"); // true
Boolean(""); // false
```

---

# 22. Truthy & Falsy

JavaScript converts values to boolean when needed.

### Falsy values

The main falsy values are:

```js
false;
0 - 0;
0n;
("");
null;
undefined;
NaN;
```

Everything else is generally truthy.

Example:

```js
if ("hello") {
  console.log("Runs");
}
```

Because:

```text
"hello" → truthy
```

Example:

```js
if ("") {
  console.log("Runs");
}
```

It does not run because:

```text
"" → falsy
```

---

# 23. Conditional Statements

Conditions allow programs to make decisions.

## `if`

```js
const age = 20;

if (age >= 18) {
  console.log("Adult");
}
```

---

## `if...else`

```js
const age = 16;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

---

## `else if`

```js
const marks = 85;

if (marks >= 90) {
  console.log("A+");
} else if (marks >= 80) {
  console.log("A");
} else {
  console.log("Needs improvement");
}
```

---

# 24. Ternary Operator

Short form of `if...else`.

```js
const age = 20;

const status = age >= 18 ? "Adult" : "Minor";

console.log(status);
```

Think:

```text
condition ? trueValue : falseValue
```

---

# 25. Loops

Loops repeat code.

## `for`

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

Output:

```text
0
1
2
3
4
```

---

## `while`

```js
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
```

---

## `do...while`

The code executes at least once.

```js
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 5);
```

---

# 26. `break`

Stops a loop.

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }

  console.log(i);
}
```

---

# 27. `continue`

Skips the current iteration.

```js
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }

  console.log(i);
}
```

Output:

```text
0
1
3
4
```

---

# 28. Comments

Comments are ignored by JavaScript.

### Single line

```js
// This is a comment
const age = 23;
```

### Multi-line

```js
/*
  This is
  a multi-line comment
*/
```

---

# 29. Template Literals

Template literals use backticks:

```js
``;
```

They allow us to insert variables using:

```js
${}
```

Example:

```js
const name = "Rifat";
const age = 23;

console.log(`My name is ${name} and I am ${age} years old.`);
```

Output:

```text
My name is Rifat and I am 23 years old.
```

This is much cleaner than:

```js
" My name is " + name + " and I am " + age;
```

---

# 30. Basic JavaScript Mental Model

Think of JavaScript like this:

```text
             JAVASCRIPT
                  │
       ┌──────────┴──────────┐
       │                     │
     VALUES                LOGIC
       │                     │
 String / Number         if / else
 Boolean / Null          loops
 Objects / Arrays        functions
       │                     │
       └──────────┬──────────┘
                  │
               PROGRAM
                  │
                  ▼
          User / Browser / Server
```

---

# 31. Fundamentals Checklist

Before moving to Arrays, Objects and Functions, you should be comfortable with:

```text
☐ What is JavaScript?
☐ Brendan Eich
☐ Variables
☐ var / let / const
☐ Data Types
☐ Primitive Types
☐ typeof
☐ Strings
☐ Numbers
☐ Boolean
☐ null
☐ undefined
☐ BigInt
☐ Symbol
☐ Arithmetic Operators
☐ Assignment Operators
☐ Comparison Operators
☐ == vs ===
☐ Logical Operators
☐ Type Conversion
☐ Truthy / Falsy
☐ if
☐ else
☐ else if
☐ Ternary
☐ for loop
☐ while loop
☐ do...while
☐ break
☐ continue
☐ Comments
☐ Template Literals
```

---

## 🧠 Fundamental Mental Model

Don't just memorize syntax.

Understand this flow:

```text
VARIABLE
   ↓
VALUE
   ↓
DATA TYPE
   ↓
OPERATOR
   ↓
CONDITION
   ↓
DECISION
   ↓
LOOP
   ↓
REPEATED LOGIC
   ↓
FUNCTION
```

Example:

```js
const users = 10;

if (users > 0) {
  console.log(`There are ${users} users.`);
}
```

Here you are already combining:

```text
const
  ↓
Number
  ↓
Comparison
  ↓
if
  ↓
Template Literal
  ↓
console.log()
```

That is the foundation of JavaScript.
