##  Interface vs Type in TypeScript: What's the Difference?
### what are they?
In TypeScript, `interface` and `type` are two ways to describe the shape of data — meaning what properties an object should have and what types those properties are.
They are both tools for making your code easy to understand and also easy for the safety . Instead of writing random objects with `{ name: string, age: number }`everywhere,we can reuse this.


### Why Are They Useful?

- They help us to catch error at compile time.
- They make your code more organized.
- They let you reuse the type across your project.


### Interface vs Type: What’s the Difference?

| Feature                          | `interface`                        | `type`                                  |
|----------------------------------|------------------------------------|------------------------------------------|
| Can describe object shapes       |yes                                | yes                                   |
| Can describe unions or tuples    |no                                  | yes                                  |
| Can be extended                  | yes (`extends`)                      | yes                                 |
| Can be merged (declaration merging) | yes (auto merges)                 | no                                  |
| Used with classes                | yes (perfect for OOP)               | (not ideal)                          |



###  Code Example

```ts
// Using interface
interface User {
  name: string;
  age: number;
}

// Using type
type Admin = {
  name: string;
  age: number;
}
##  What Is Type Inference in TypeScript? Why Is It Helpful?

### What Is Type Inference?

In TypeScript, **type inference** means the compiler automatically figures out the type of a variable or function **based on the value** you assign to it — without you having to write the type yourself.

It’s like TypeScript saying: “Oh, I see you assigned `42` to this variable, so it must be a `number`!”

---

###  Why Is It Useful?

Type inference helps make your code:
-  **Cleaner** (less repetitive typing)
-  **Smarter** (editor gives better suggestions)
-  **Safer** (you still get error checks)

Instead of writing:
```ts
let age: number = 30;
