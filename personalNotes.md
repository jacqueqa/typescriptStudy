# typescript Study Notes

## Random notes

### Tuples
Tuples are arrays with with a fixed number of elements where the types of the elements are known and specific to each position.

```
let tupleExample: [number, boolean, string];
ourTuple = [5, false, 'hi'];
console.log(tupleExample)
``` 

On a more practical example, a function for an e-commerce store: 

```

// Define a tuple type for the product info
let productInfo: [string, number, boolean];

// Our tuple
productInfo = ["TV", 699.99, true];

// Function to display product information
function displayProductInfo(product: [string, number, boolean]): void {
    const [name, price, inStock] = product;
    console.log(`Product: ${name}`);
    console.log(`Price: $${price}`);
    console.log(`Available: ${inStock ? "In stock" : "Out of stock"}`);
}

// To see the output
displayProductInfo(productInfo);

``` 

**_Using tuples helps ensure type safety by enforcing the correct data types in a specific order, which is useful when dealing with small, fixed sets of related data._**

### Enum
Enum allows us to define a set of named constants, which can represent a collection of related values. They can be useful when you have a fixed set of options.

A more practical example for the use of enum, is to represent different roles in an application

```
enum UserRole {
    Admin,
    Editor,
    Viewer
}

// here is a function to get permissions based on user role
function getPermissions(role: UserRole): string[] {
    switch (role) {
        case UserRole.Admin:
            return ["create", "edit", "delete", "view"];
        case UserRole.Editor:
            return ["edit", "view"];
        case UserRole.Viewer:
            return ["view"];
        default:
            return [];
    }
}

// Using the enum
let userRole: UserRole = UserRole.Editor;

// Getting the permissions for the current role
const permissions = getPermissions(userRole);

console.log(`Permissions for Editor: ${permissions}`);

```

**Benefits of Using Enums:**

- **Clarity**: Instead of using arbitrary values (`0, 1, or "admin"`), the enum provides meaningful names (`UserRole.Admin, UserRole.Editor`).
- **Type Safety**: TypeScript ensures that only valid enum values can be assigned to variables or passed to functions, reducing the chance of bugs due to invalid values.
- **Readability**: It improves code readability by making it clear what specific values mean in the context of your application.
Enums can also have custom values (string or numeric) or be used in bitwise operations, making them quite flexible depending on your use case.

### Function Void

Void functions in TypeScript are functions that do not return a value. They perform actions or computations without producing a result that needs to be captured. Commonly used for side effects like logging, modifying external state, or triggering asynchronous operations, they enhance code clarity.

```

function functionName(parameters: ParameterType): void {
    // Function body
    // No return statement or return type annotation is needed
}

```

- Void function can return undefined, which is treated as having no return value.
- Void functionscan perform asynchronous operations, but they do not return a promise or any other value.


