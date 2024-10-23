export const topics = {
  beginner: [
    {
      title: "Basics of JavaScript",
      description: "Learn the fundamental concepts of JavaScript, including syntax, variables, functions, and more. JavaScript is a versatile, high-level programming language used to create dynamic and interactive websites.",
      example: `// Example: Function Declaration
      // A function is a reusable block of code that performs a specific task
      // In this case, the function greet takes a 'name' as a parameter and returns a greeting message
      function greet(name) {
        return \`Hello, \${name}!\`;
      }
    
      // Calling the function with 'World' as the argument
      // The output will be 'Hello, World!'
      console.log(greet('World')); // Output: Hello, World!`,
      subtopics: [
        {
          title: "Variables",
          description: "Understanding variables in JavaScript and the differences between var, let, and const. Variables store data values that can be used and manipulated throughout a program.",
          example: `// Example: Variable Declaration
      // 'let' allows you to declare a block-scoped variable, meaning its value can be updated within that block
      let name = 'Alice';
    
      // 'const' is used to declare variables whose values cannot be reassigned after their initial assignment
      // This is useful when you want to create constants
      const age = 30;
    
      // 'var' is function-scoped and was traditionally used before 'let' and 'const' were introduced
      // However, 'var' is prone to issues due to hoisting and is generally not recommended for use today
      var city = 'New York';
    
      // Variables defined with 'let' and 'const' are block-scoped, making them safer to use in most situations.`
        },
        {
          title: "Data Types",
          description: "JavaScript has dynamic typing, meaning a variable's type is determined at runtime. JavaScript data types are categorized into two main types: primitive and non-primitive. The primitive types include numbers, strings, booleans, undefined, null, symbol, and bigint, while non-primitive types are objects, arrays, and functions.",
          example: `// Example: Data Types

            // JavaScript has two types of data: Primitive and Non-Primitive

            // Primitive Data Types:

            // 'number' is used for both integers and floating-point numbers
            let number = 10; // Number (Primitive)

          // 'string' represents a sequence of characters, such as words or sentences
          let text = 'Hello'; // String (Primitive)

          // 'boolean' can only have two values: true or false
          let isActive = true; // Boolean (Primitive)

          // 'undefined' is a type for a variable that has been declared but not yet assigned a value
          let something; // Undefined (Primitive)

          // 'null' represents the intentional absence of any object value
          let empty = null; // Null (Primitive)

          // 'symbol' is a unique and immutable primitive used for object property keys
          let uniqueId = Symbol('id'); // Symbol (Primitive)

          // 'bigint' is used for arbitrarily large integers
          let largeNumber = BigInt(9007199254740991); // BigInt (Primitive)

          // Non-Primitive Data Types:

          // 'object' is used to store more complex data in key-value pairs
          let user = { name: 'John', age: 25 }; // Object (Non-Primitive)

          // 'array' is a type of object that stores multiple values in a single variable
          let colors =['red', 'green', 'blue']; // Array (Non-Primitive)

          // 'function' is a callable object that allows encapsulating code
          function greet() { console.log('Hello'); } // Function (Non-Primitive)`
        },
        {
          title: "Operators",
          description: "Operators are used to perform operations on values. JavaScript supports arithmetic, comparison, and logical operators, among others.",
          example: `// Example: Arithmetic and Comparison Operators
      // Arithmetic operators perform mathematical operations:
      let sum = 5 + 3; // Addition, sum equals 8
      let difference = 10 - 2; // Subtraction, difference equals 8
      let product = 4 * 2; // Multiplication, product equals 8
      let quotient = 16 / 2; // Division, quotient equals 8
    
      // Comparison operators compare two values and return a boolean result:
      let isEqual = 10 === 10; // Strict equality, checks both value and type, returns true
      let isNotEqual = 10 !== 5; // Strict inequality, returns true
      let isGreaterThan = 10 > 5; // Greater than, returns true
    
      // Logical operators like && (AND), || (OR), and ! (NOT) are also commonly used in conditions and loops.`
        },
        {
          title: "Functions",
          description: "Functions in JavaScript allow you to encapsulate reusable blocks of code. There are several types of functions, including function declarations, function expressions, and arrow functions.",
          example: `// Example: Function Declarations
      function add(a, b) {
        return a + b; // Returns the sum of 'a' and 'b'
      }
      console.log(add(2, 3)); // Output: 5
    
      // Example: Function Expressions
      const subtract = function(a, b) {
        return a - b; // Returns the difference of 'a' and 'b'
      };
      console.log(subtract(5, 2)); // Output: 3
    
      // Example: Arrow Functions
      const multiply = (x, y) => x * y; // Arrow function with implicit return
      console.log(multiply(4, 5)); // Output: 20
    
      // Arrow functions are a shorter syntax for writing functions and do not have their own 'this' context,
      which makes them useful in certain cases like callbacks.`
        },
        {
          title: "Conditionals",
          description: "Conditional statements allow you to execute different code based on conditions using if-else statements or switch cases.",
          example: `// Example: If-Else
      let num = 10;
      if (num > 5) {
        console.log('Greater than 5'); // This block runs if the condition is true
      } else {
        console.log('5 or less'); // This block runs if the condition is false
      }
    
      // Example: Switch Case
      let fruit = 'apple';
      switch(fruit) {
        case 'apple':
          console.log('Apple is selected');
          break;
        case 'banana':
          console.log('Banana is selected');
          break;
        default:
          console.log('Unknown fruit');
      }`
        },
        {
          title: "Loops",
          description: "Loops in JavaScript are used to repeat a block of code. Common loop types include for, while, and do-while.",
          example: `// Example: For Loop
      for (let i = 0; i < 5; i++) {
        console.log(i); // Output: 0, 1, 2, 3, 4
      }
    
      // Example: While Loop
      let count = 0;
      while (count < 3) {
        console.log(count); // Output: 0, 1, 2
        count++;
      }
    
      // Example: Do-While Loop
      let i = 0;
      do {
        console.log(i); // Output: 0, 1, 2
        i++;
      } while (i < 3);`
        },
        {
          title: "Arrays",
          description: "Arrays are used to store multiple values in a single variable. JavaScript arrays provide several built-in methods for manipulating arrays.",
          example: `// Example: Array Creation and Methods
      let fruits = ['apple', 'banana', 'cherry'];
    
      // Accessing array elements
      console.log(fruits[0]); // Output: 'apple'
    
      // Adding elements using push
      fruits.push('date'); // Adds 'date' to the array
      console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date']
    
      // Removing the last element using pop
      fruits.pop(); // Removes 'date'
      console.log(fruits); // Output: ['apple', 'banana', 'cherry']
    
      // Iterating over an array
      fruits.forEach((fruit) => {
        console.log(fruit);
      }); // Output: 'apple', 'banana', 'cherry'`
        },
        {
          title: "Objects",
          description: "Objects in JavaScript are collections of key-value pairs. Each key is a string (or symbol), and the value can be any type.",
          example: `// Example: Object Creation and Access
      let user = {
        name: 'John',
        age: 30,
        isAdmin: true
      };
    
      // Accessing properties
      console.log(user.name); // Output: 'John'
    
      // Adding new properties
      user.email = 'john@example.com';
      console.log(user.email); // Output: 'john@example.com'
    
      // Deleting properties
      delete user.isAdmin;
      console.log(user.isAdmin); // Output: undefined
    
      // Objects can also contain methods:
      user.greet = function() {
        console.log('Hello, ' + this.name);
      };
      user.greet(); // Output: 'Hello, John'`
        },
        {
          title: "Events",
          description: "JavaScript is often used to respond to user actions or other events, such as mouse clicks or key presses. Event handling allows developers to add interactivity to web pages.",
          example: `// Example: Event Handling
      // Adding a click event listener to a button element
      const button = document.querySelector('button');
      button.addEventListener('click', function() {
        console.log('Button was clicked!');
      });
    
      // Another example using an arrow function
      button.addEventListener('click', () => {
        console.log('Button clicked again!');
      });
    
      // JavaScript provides various events like 'click', 'mouseover', 'keydown', etc., 
      to handle user interactions with the webpage.`
        }
      ]
    },
    {
      title: "HTML Fundamentals",
      description: "Understand the basic structure and elements of HTML, which forms the foundation of all web pages. HTML (HyperText Markup Language) is used to define the structure and content of a webpage, from text and images to forms and links.",
      example: `<!-- Example: Basic HTML Structure -->
    <!DOCTYPE html>
    <html>
    <head>
      <title>Document</title>
    </head>
    <body>
      <h1>Hello World</h1>
    </body>
    </html>`,
      subtopics: [
        {
          title: "HTML Elements",
          description: "HTML elements are the building blocks of a webpage. They define how the content is displayed in the browser, such as text, links, images, and more.",
          example: `<!-- Example: HTML Elements -->
    <p>This is a paragraph.</p>
    <a href="#">This is a link.</a>`
        },
        {
          title: "Attributes",
          description: "Attributes provide additional information about an HTML element. They are always included in the opening tag of an element and typically consist of a name-value pair.",
          example: `<!-- Example: HTML Attributes -->
    <img src="image.jpg" alt="Image description" />`
        },
        {
          title: "Forms",
          description: "HTML forms allow users to send data to a server. Forms are essential for user input and interactivity, whether it’s for login forms, search fields, or contact forms.",
          example: `<!-- Example: HTML Form -->
    <form action="/submit">
      <input type="text" name="username" />
      <button type="submit">Submit</button>
    </form>`
        },
        {
          title: "Headings and Paragraphs",
          description: "Headings (`h1` to `h6`) and paragraphs (`p`) are used to structure text content on a webpage. Headings indicate sections, while paragraphs represent blocks of text.",
          example: `<!-- Example: Headings and Paragraphs -->
    <h1>Main Heading</h1>
    <p>This is a paragraph explaining the main heading.</p>
    <h2>Subheading</h2>
    <p>Another paragraph explaining the subheading.</p>`
        },
        {
          title: "Lists",
          description: "HTML supports both ordered (`ol`) and unordered (`ul`) lists. These are used to display a list of items, either in a numbered or bullet-point format.",
          example: `<!-- Example: Ordered and Unordered Lists -->
    <ul>
      <li>First item in unordered list</li>
      <li>Second item</li>
    </ul>
    
    <ol>
      <li>First item in ordered list</li>
      <li>Second item</li>
    </ol>`
        },
        {
          title: "Images",
          description: "The `img` element is used to display images on a webpage. The `src` attribute specifies the image path, and `alt` provides alternative text in case the image cannot be displayed.",
          example: `<!-- Example: Image -->
    <img src="image.jpg" alt="Description of the image" />`
        },
        {
          title: "Links and Navigation",
          description: "The `a` (anchor) tag is used to create hyperlinks. It can link to other pages, sections of the same page, or external websites. Links are a fundamental part of website navigation.",
          example: `<!-- Example: Links -->
    <a href="https://www.example.com">Go to Example Website</a>
    <a href="#section1">Go to Section 1</a>`
        },
        {
          title: "Tables",
          description: "HTML tables are used to display data in rows and columns. The table element includes other elements like `thead`, `tbody`, `tr`, `th`, and `td` to define the structure of a table.",
          example: `<!-- Example: Table -->
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Alice</td>
          <td>30</td>
        </tr>
        <tr>
          <td>Bob</td>
          <td>25</td>
        </tr>
      </tbody>
    </table>`
        },
        {
          title: "Semantic HTML",
          description: "Semantic HTML uses elements that clearly describe their meaning in a way that both browsers and developers can understand. Examples include `header`, `footer`, `article`, and `section`.",
          example: `<!-- Example: Semantic HTML -->
    <header>
      <h1>Welcome to My Website</h1>
    </header>
    <section>
      <article>
        <h2>Article Title</h2>
        <p>This is an article inside a section.</p>
      </article>
    </section>
    <footer>
      <p>© 2024 My Website</p>
    </footer>`
        },
        {
          title: "Media",
          description: "HTML supports various media elements like `audio`, `video`, and `embed`. These elements are used to integrate media files like music, videos, or external content into a webpage.",
          example: `<!-- Example: Audio and Video -->
    <audio controls>
      <source src="audio.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
    
    <video width="320" height="240" controls>
      <source src="video.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>`
        },
        {
          title: "Comments",
          description: "HTML comments are notes for developers that are not displayed on the webpage. They are helpful for documentation and leaving messages inside the code.",
          example: `<!-- Example: HTML Comments -->
    <!-- This is a comment in HTML. It is not visible on the page. -->
    <p>This paragraph is displayed, but the comment above is not.</p>`
        }
      ]
    },
    {
      title: "CSS Fundamentals",
      description: "CSS (Cascading Style Sheets) is used to control the appearance of web pages. It allows developers to define the layout, colors, fonts, and other stylistic elements of a webpage. CSS works alongside HTML to enhance the design and user experience.",
      example: `/* Example: Basic CSS */
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
      color: #333;
    }
    h1 {
      color: #007BFF;
    }`,
      subtopics: [
        {
          title: "Selectors",
          description: "CSS selectors define the elements on which styles should be applied. Common selectors include type selectors, class selectors, and ID selectors.",
          example: `/* Example: CSS Selectors */
    p {
      color: blue;
    }
    #main-heading {
      font-size: 24px;
    }
    .container {
      padding: 20px;
    }`
        },
        {
          title: "Box Model",
          description: "The CSS box model represents the structure of an element, including the content, padding, border, and margin. It defines the space around elements on a webpage.",
          example: `/* Example: CSS Box Model */
    div {
      width: 300px;
      padding: 10px;
      border: 1px solid black;
      margin: 20px;
    }`
        },
        {
          title: "Flexbox",
          description: "Flexbox is a layout model in CSS that makes it easier to design flexible and responsive layout structures. It provides alignment control over elements in a container.",
          example: `/* Example: CSS Flexbox */
    .container {
      display: flex;
      justify-content: space-around;
    }
    .item {
      flex: 1;
      padding: 10px;
    }`
        },
        {
          title: "Grid Layout",
          description: "CSS Grid Layout provides a powerful two-dimensional system to create grid-based layouts. It offers control over both rows and columns, making complex layouts simpler to implement.",
          example: `/* Example: CSS Grid */
    .container {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 10px;
    }
    .item {
      padding: 20px;
      border: 1px solid #ccc;
    }`
        },
        {
          title: "Typography",
          description: "CSS allows for detailed control over typography, including fonts, sizes, line heights, and other text-related properties. This ensures a good reading experience across devices.",
          example: `/* Example: CSS Typography */
    h1 {
      font-family: 'Georgia', serif;
      font-size: 36px;
      line-height: 1.5;
      color: #333;
    }
    p {
      font-family: 'Arial', sans-serif;
      font-size: 16px;
      color: #666;
    }`
        },
        {
          title: "Colors and Backgrounds",
          description: "CSS allows developers to control colors and backgrounds of elements, including setting solid colors, gradients, or images. This helps in defining the visual identity of a webpage.",
          example: `/* Example: Colors and Backgrounds */
    body {
      background-color: #f0f0f0;
    }
    h1 {
      color: #333;
    }
    button {
      background-color: #007BFF;
      color: white;
      border: none;
      padding: 10px;
    }`
        },
        {
          title: "Positioning",
          description: "CSS positioning allows developers to place elements on a webpage in various ways. Elements can be positioned relatively, absolutely, fixed, or sticky based on the design requirements.",
          example: `/* Example: CSS Positioning */
    .container {
      position: relative;
    }
    .item {
      position: absolute;
      top: 20px;
      left: 30px;
    }`
        },
        {
          title: "Transitions and Animations",
          description: "CSS transitions and animations enable developers to add visual effects to elements. Transitions allow changes in CSS properties to happen over time, while animations can create more complex movements.",
          example: `/* Example: Transitions and Animations */
    button {
      transition: background-color 0.3s ease;
    }
    button:hover {
      background-color: #0056b3;
    }
    
    /* Animation */
    @keyframes slide {
      from { left: 0; }
      to { left: 100px; }
    }
    div {
      position: relative;
      animation: slide 2s infinite;
    }`
        },
        {
          title: "Media Queries",
          description: "Media queries allow CSS to adapt to different screen sizes and resolutions. They are a key part of creating responsive designs that work across various devices.",
          example: `/* Example: Media Queries */
    body {
      font-size: 16px;
    }
    @media (max-width: 600px) {
      body {
        font-size: 14px;
      }
    }`
        },
        {
          title: "Z-Index and Stacking",
          description: "The `z-index` property controls the stacking order of elements on a page. Elements with higher `z-index` values will appear above others, which is important for overlapping elements.",
          example: `/* Example: Z-Index */
    div {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 10;
    }
    header {
      z-index: 5;
    }`
        },
        {
          title: "Pseudo-classes and Pseudo-elements",
          description: "CSS pseudo-classes and pseudo-elements are used to apply styles to elements in specific states or target specific parts of elements, like first letter or line.",
          example: `/* Example: Pseudo-classes and Pseudo-elements */
    a:hover {
      color: red;
    }
    p::first-letter {
      font-size: 2em;
      font-weight: bold;
    }`
        },
        {
          title: "CSS Variables",
          description: "CSS variables (custom properties) allow developers to reuse values throughout a stylesheet. Variables make CSS more maintainable and scalable by defining values that can be reused.",
          example: `/* Example: CSS Variables */
    :root {
      --primary-color: #007BFF;
    }
    h1 {
      color: var(--primary-color);
    }`
        },
        {
          title: "CSS Resets and Normalize",
          description: "CSS resets and normalize.css are used to ensure consistent styling across different browsers by removing or standardizing default styles. This helps avoid inconsistencies in design.",
          example: `/* Example: CSS Reset */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }`
        },
        {
          title: "Float and Clear",
          description: "The `float` property was historically used for layout before Flexbox and Grid became more popular. It's often paired with `clear` to control how elements wrap around floated elements.",
          example: `/* Example: Float and Clear */
    img {
      float: left;
      margin-right: 10px;
    }
    p {
      clear: both;
    }`
        }
      ]
    }
  ],
  advanced: [
    {
      title: "Asynchronous JavaScript",
      description: "Understanding and handling asynchronous operations in JavaScript is crucial for managing tasks like API calls, file handling, and timers. Promises and async/await provide powerful patterns to handle these tasks efficiently.",
      example: `// Example: Using Promises to Handle Asynchronous API Calls
    function fetchData() {
      fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error fetching data:', error));
    }
  
    // Promises provide a cleaner way to handle asynchronous code than 
    callbacks by chaining .then() for success and .catch() for errors.`,
      subtopics: [
        {
          title: "Promises",
          description: "Promises represent a value that may be available now, or in the future, or never. They provide a clean and efficient way to handle asynchronous operations, avoiding the 'callback hell' problem.",
          example: `// Example: Creating and Using Promises
    const promise = new Promise((resolve, reject) => {
      const success = true;
      if (success) {
        resolve('Promise fulfilled!');
      } else {
        reject('Promise rejected!');
      }
    });
  
    promise
      .then(result => console.log(result))
      .catch(error => console.error(error));
    
    // Promises allow you to handle both success and error cases in a 
    structured manner without deeply nested callbacks.`
        },
        {
          title: "Async/Await",
          description: "Async/await is syntactic sugar built on top of Promises, allowing for asynchronous code to be written in a more synchronous fashion. It makes code easier to read and maintain.",
          example: `// Example: Async/Await for API Calls
    async function fetchData() {
      try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    fetchData();
    
    // Async/await helps you write asynchronous code that looks and behaves 
    like synchronous code, making it easier to follow and manage.`
        },
        {
          title: "Error Handling with Async/Await",
          description: "Handling errors in asynchronous code is essential. Async/await uses try/catch blocks to manage errors, making it easier to handle rejections.",
          example: `// Example: Handling Errors with Async/Await
    async function fetchData() {
      try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }
  
    fetchData();
  
    // Using try/catch with async/await provides a clear way to handle errors, 
    making the error flow easier to follow compared to .catch() with promises.`
        },
        {
          title: "Promise.all",
          description: "Promise.all allows multiple promises to be executed in parallel, resolving when all promises have resolved. It's useful for managing multiple asynchronous tasks that can run concurrently.",
          example: `// Example: Using Promise.all to Run Tasks in Parallel
    const promise1 = fetch('https://api.example.com/data1').then(response => response.json());
    const promise2 = fetch('https://api.example.com/data2').then(response => response.json());
  
    Promise.all([promise1, promise2])
      .then(results => {
        console.log('Data from both requests:', results);
      })
      .catch(error => console.error('Error fetching data:', error));
  
    // Promise.all allows you to handle multiple asynchronous tasks 
    concurrently and collect their results in one place.`
        },
        {
          title: "Chaining Promises",
          description: "Chaining promises allows sequential execution of asynchronous tasks, where the result of one task is passed on to the next. This ensures that tasks dependent on one another are executed in the correct order.",
          example: `// Example: Chaining Promises
    function fetchData() {
      return fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => {
          console.log('First API call data:', data);
          return fetch('https://api.example.com/otherData');
        })
        .then(response => response.json())
        .then(otherData => console.log('Second API call data:', otherData))
        .catch(error => console.error('Error fetching data:', error));
    }
  
    fetchData();
  
    // Chaining promises allows you to handle dependent asynchronous 
    operations sequentially. Each .then() block receives the result of the previous one.`
        }
      ]
    },
    {
      title: "JavaScript Design Patterns",
      description: "Design patterns provide reusable solutions to common problems in software design. This section covers various design patterns in JavaScript, including Singleton, Factory, Observer, and Module patterns.",
      example: `// Example: Singleton Pattern
const Singleton = (function () {
  let instance;

  function createInstance() {
    return { name: 'Singleton Instance' };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // true - both instances are the same

// The Singleton pattern ensures that only one instance of a class is 
created, providing a global point of access.`,
      subtopics: [
        {
          title: "Singleton Pattern",
          description: "The Singleton pattern restricts the instantiation of a class to one single instance and provides a global point of access to it.",
          example: `// Example: Singleton Pattern
const Singleton = (function () {
  let instance;

  function createInstance() {
    return { name: 'Singleton Instance' };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // true - both instances are the same`
        },
        {
          title: "Factory Pattern",
          description: "The Factory pattern defines an interface for creating objects but allows subclasses to alter the type of objects that will be created.",
          example: `// Example: Factory Pattern
class Car {
  constructor(model) {
    this.model = model;
  }
}

class CarFactory {
  static createCar(model) {
    return new Car(model);
  }
}

const car1 = CarFactory.createCar('Sedan');
console.log(car1.model); // Sedan

// The Factory pattern helps in creating objects without specifying 
the exact class of the object that will be created.`,
        },
        {
          title: "Observer Pattern",
          description: "The Observer pattern defines a dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.",
          example: `// Example: Observer Pattern
class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  notifyObservers(message) {
    this.observers.forEach(observer => observer.update(message));
  }
}

class Observer {
  update(message) {
    console.log('Observer received message:', message);
  }
}

const subject = new Subject();
const observer = new Observer();
subject.addObserver(observer);
subject.notifyObservers('Hello Observers!');

// The Observer pattern allows objects to notify other objects about 
changes without tight coupling.`,
        },
        {
          title: "Module Pattern",
          description: "The Module pattern helps to create encapsulated modules by using closures to provide public and private access to variables and functions.",
          example: `// Example: Module Pattern
const MyModule = (function () {
  let privateVar = 'I am private';

  return {
    publicMethod: function () {
      console.log('Accessing private variable:', privateVar);
    }
  };
})();

MyModule.publicMethod(); // Accessing private variable: I am private

// The Module pattern allows for data encapsulation and reduces the 
risk of variable conflicts by exposing only selected members of the module.`,
        }
      ]
    },
    {
      title: "Web Performance Optimization (Advanced Techniques)",
      description: "Advanced techniques for enhancing web performance, including efficient asset management, lazy loading, and optimizing server responses.",
      example: `// Example: Efficient Asset Management
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.href = '/path/to/important/asset.css';
    preloadLink.as = 'style';
    document.head.appendChild(preloadLink);
    
    // Preloading critical assets improves page load times by fetching 
    important resources early in the page load process.`,
      subtopics: [
        {
          title: "Lazy Loading",
          description: "Lazy loading defers the loading of non-critical resources until they are needed, improving initial page load performance.",
          example: `// Example: Lazy Loading Images
    <img src="placeholder.jpg" data-src="real-image.jpg" class="lazyload" />
    
    <script>
      document.addEventListener('DOMContentLoaded', () => {
        const lazyImages = document.querySelectorAll('img.lazyload');
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src;
              img.classList.remove('lazyload');
              observer.unobserve(img);
            }
          });
        });
        lazyImages.forEach(image => imageObserver.observe(image));
      });
    </script>
    
    // Lazy loading images improves performance by loading only 
    images that are in or near the viewport.`,
        },
        {
          title: "Efficient Asset Management",
          description: "Managing assets efficiently through techniques like HTTP/2, asset minification, and bundling can reduce load times and improve overall performance.",
          example: `// Example: Asset Minification with Webpack
    const path = require('path');
    const TerserPlugin = require('terser-webpack-plugin');
    
    module.exports = {
      entry: './src/index.js',
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
      },
      optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
      },
    };
    
    // Minifying JavaScript files reduces their size, which helps 
    in decreasing load times and improving the performance of web applications.`,
        },
        {
          title: "Server-Side Optimization",
          description: "Optimizing server-side performance by implementing caching strategies, database indexing, and reducing server response times.",
          example: `// Example: Server-Side Caching with Redis
    const redis = require('redis');
    const client = redis.createClient();
    
    app.get('/data', (req, res) => {
      const cacheKey = 'someCacheKey';
      client.get(cacheKey, (err, data) => {
        if (data) {
          return res.send(JSON.parse(data));
        }
        // Fetch data from database
        fetchDataFromDatabase().then(data => {
          client.setex(cacheKey, 3600, JSON.stringify(data));
          res.send(data);
        });
      });
    });
    
    // Caching responses reduces the load on the server and speeds 
    up response times by serving frequently requested data from memory.`,
        },
        {
          title: "Code Splitting",
          description: "Splitting code into smaller chunks and loading them on demand helps to decrease the initial load time and improve the performance of web applications.",
          example: `// Example: Code Splitting with React.lazy
    import React, { Suspense } from 'react';
    const LazyComponent = React.lazy(() => import('./LazyComponent'));
    
    function App() {
      return (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
          </Suspense>
        </div>
      );
    }
    
    export default App;
    
    // Code splitting helps to load only the necessary components 
    for the initial render, improving page load times and reducing 
    the amount of code that needs to be parsed and executed initially.`,
        }
      ]
    },
    {
      title: "Performance Optimization",
      description: "Techniques to optimize the performance of web applications, reduce load times, and improve user experience. These techniques include code splitting, lazy loading, caching, and more.",
      example: `// Example: Code Splitting for Performance Optimization
  import('./component').then(module => {
    const Component = module.default;
    // Dynamically load the component only when needed to improve page load time
  });
  
  // This technique helps to reduce the initial load size by splitting 
  the code into smaller bundles.`,
      subtopics: [
        {
          title: "Code Splitting",
          description: "Code splitting involves breaking down your code into smaller chunks that can be loaded on demand, reducing the initial load time. This is especially useful in large applications.",
          example: `// Example: Code Splitting with React
  const LazyComponent = React.lazy(() => import('./LazyComponent'));
  
  // React's lazy loading feature allows the component to be loaded only 
  when it's needed, which improves performance by avoiding unnecessary 
  loading of large components.`
        },
        {
          title: "Lazy Loading",
          description: "Lazy loading is the practice of loading components or data only when they are needed. It can be applied to images, components, and data to save bandwidth and improve load times.",
          example: `// Example: Lazy Loading with React
  const LazyComponent = React.lazy(() => import('./LazyComponent'));
  
  <Suspense fallback={<div>Loading...</div>}>
    <LazyComponent />
  </Suspense>
  
  // Suspense is used to display a loading spinner or message while the 
  component is being loaded. This improves perceived performance, providing 
  feedback to the user.`
        },
        {
          title: "Caching",
          description: "Caching stores copies of resources or data so that future requests can be served faster, reducing the need to re-fetch data or reload assets. It can significantly improve the performance of web applications.",
          example: `// Example: Caching with Service Workers
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request); // Serve from cache if available, otherwise fetch from network
      })
    );
  });
  
  // Caching allows repeated requests to be served quickly from stored 
  data, avoiding unnecessary server requests.`
        },
        {
          title: "Minification",
          description: "Minification refers to removing unnecessary characters from code, like whitespace and comments, to reduce file size and speed up loading times.",
          example: `// Example: Minified JavaScript
  // Original code:
  function add(a, b) {
    return a + b;
  }
  
  // Minified version:
  function add(a,b){return a+b;}
  
  // Minification reduces file size, resulting in faster downloads and 
  improved load times.`
        },
        {
          title: "Image Optimization",
          description: "Optimizing images involves compressing them without losing quality, using modern formats like WebP, and serving different image sizes depending on screen size.",
          example: `<!-- Example: Optimized Image Loading -->
  <img src="image.webp" alt="Optimized Image" loading="lazy">
  
  <!-- The 'loading' attribute with 'lazy' value defers loading the image 
  until it's visible on the screen, saving bandwidth and improving load time. -->`
        }
      ]
    },
    {
      title: "Advanced Function Concepts",
      description: "In-depth exploration of advanced concepts in functional programming, including higher-order functions, closures, and currying.",
      example: `// Example: Higher-Order Function
    function multiply(factor: number) {
      return function (number: number) {
        return number * factor;
      };
    }
    
    const double = multiply(2);
    console.log(double(5)); // Output: 10
    
    // Higher-order functions take other functions as arguments or return 
    them as results, enabling powerful functional programming patterns.`,
      subtopics: [
        {
          title: "Higher-Order Functions",
          description: "Higher-order functions are functions that take other functions as arguments or return them as results. They enable more abstract and reusable code.",
          example: `// Example: Mapping with Higher-Order Function
    function map(array: number[], transform: (value: number) => number): number[] {
      return array.map(transform);
    }
    
    const numbers = [1, 2, 3, 4];
    const doubled = map(numbers, (n) => n * 2);
    console.log(doubled); // Output: [2, 4, 6, 8]
    
    // Higher-order functions like 'map' abstract common operations on 
    collections, enhancing code readability and reusability.`,
        },
        {
          title: "Closures",
          description: "Closures allow a function to retain access to variables from its lexical scope even after that function has finished executing. They are crucial for creating private data and factory functions.",
          example: `// Example: Closures in Action
    function createCounter() {
      let count = 0;
      return function () {
        count += 1;
        return count;
      };
    }
    
    const counter = createCounter();
    console.log(counter()); // Output: 1
    console.log(counter()); // Output: 2
    
    // Closures capture the environment where they are created, allowing 
    functions to access private variables and state.`,
        },
        {
          title: "Currying",
          description: "Currying transforms a function that takes multiple arguments into a sequence of functions that each take a single argument. This technique simplifies the creation of partially applied functions.",
          example: `// Example: Currying Function
    function add(a: number) {
      return function (b: number) {
        return a + b;
      };
    }
    
    const add5 = add(5);
    console.log(add5(10)); // Output: 15
    
    // Currying enables the creation of specialized functions by partially 
    applying arguments, enhancing code modularity and reusability.`,
        },
        {
          title: "Function Composition",
          description: "Function composition involves combining multiple functions to produce a new function. This technique is useful for building complex operations from simpler functions.",
          example: `// Example: Function Composition
    function compose<T>(f: (x: T) => T, g: (x: T) => T): (x: T) => T {
      return function (x: T) {
        return f(g(x));
      };
    }
    
    const double = (x: number) => x * 2;
    const square = (x: number) => x * x;
    const doubleThenSquare = compose(square, double);
    
    console.log(doubleThenSquare(3)); // Output: 36
    
    // Function composition creates new functions by combining existing ones, 
    facilitating the construction of complex operations from simple functions.`,
        }
      ]
    },
    {
      title: "Security Best Practices",
      description: "Best practices for securing web applications against common vulnerabilities such as Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), and weak authentication methods.",
      example: `// Example: Preventing XSS Attacks
  const safeContent = DOMPurify.sanitize(userInput); // Sanitize user input before rendering it
  document.getElementById('content').innerHTML = safeContent;
  
  // Sanitizing input prevents malicious scripts from being executed in 
  the browser, mitigating XSS attacks.`,
      subtopics: [
        {
          title: "XSS (Cross-Site Scripting)",
          description: "XSS attacks involve injecting malicious scripts into web pages that are viewed by other users. Preventing XSS is crucial for maintaining the security of web applications.",
          example: `// Example: XSS Prevention using DOMPurify
  const safeContent = DOMPurify.sanitize(userInput);
  document.getElementById('content').innerHTML = safeContent;
  
  // Input sanitization ensures that no harmful scripts are executed on 
  the user's browser. Always sanitize or escape user-generated content before rendering.`
        },
        {
          title: "CSRF (Cross-Site Request Forgery)",
          description: "CSRF attacks trick users into performing actions on a web application they are authenticated in without their consent. Implementing anti-CSRF tokens is a common defense.",
          example: `// Example: CSRF Token Implementation
  const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  
  // Including a CSRF token in each request ensures that the 
  request originates from a trusted source. This prevents malicious 
  actions from being performed on behalf of an authenticated user.`
        },
        {
          title: "Authentication",
          description: "Securing authentication processes is essential for protecting user data. Implement strong authentication methods like JWT, OAuth, or Multi-Factor Authentication (MFA).",
          example: `// Example: JWT (JSON Web Token) Authentication
  const token = jwt.sign({ userId: 123 }, 'your-secret-key');
  console.log(token); // The generated token can be sent to the client and stored in localStorage or cookies.
  
  // JWT tokens are a stateless way to manage authentication in 
  web applications, allowing the server to validate user identity 
  without storing sessions.`
        },
        {
          title: "Password Hashing",
          description: "Passwords should never be stored in plain text. Hashing and salting ensure that even if the database is compromised, passwords are not easily readable.",
          example: `// Example: Password Hashing with bcrypt
  const bcrypt = require('bcrypt');
  const password = 'userpassword';
  const saltRounds = 10;
  
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) throw err;
    console.log('Hashed Password:', hash);
  });
  
  // Password hashing transforms the password into an irreversible 
  hash, making it difficult to decode if compromised. Salting adds an extra layer of security.`
        },
        {
          title: "Input Validation",
          description: "Validating user input on both the client and server-side helps prevent security vulnerabilities like SQL Injection and ensures that only correct data is processed.",
          example: `// Example: Input Validation with Joi
  const Joi = require('joi');
  
  const schema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required()
  });
  
  const validation = schema.validate({ username: 'John', email: 'john@example.com' });
  console.log(validation);
  
  // Input validation ensures that only properly formatted and 
  expected data is processed, reducing the risk of malicious data entry.`
        }
      ]
    },
    {
      title: "React.js Performance Optimization (Advanced Techniques)",
      description: "Advanced techniques for optimizing React.js applications, including code splitting, memoization, and efficient component rendering.",
      example: `// Example: Memoization with useMemo
    import React, { useMemo } from 'react';
    
    const ExpensiveComponent = ({ data }) => {
      const computedValue = useMemo(() => {
        // Expensive computation
        return data.reduce((acc, item) => acc + item.value, 0);
      }, [data]);
    
      return <div>Computed Value: {computedValue}</div>;
    };
    
    export default ExpensiveComponent;
    
    // useMemo helps to memoize the result of an expensive computation 
    and only recalculates it when dependencies change.`,
      subtopics: [
        {
          title: "Code Splitting",
          description: "Code splitting in React involves dynamically loading components to improve the initial load time of the application.",
          example: `// Example: Code Splitting with React.lazy
    import React, { Suspense } from 'react';
    const LazyComponent = React.lazy(() => import('./LazyComponent'));
    
    function App() {
      return (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
          </Suspense>
        </div>
      );
    }
    
    export default App;
    
    // Code splitting with React.lazy and Suspense helps load components 
    on demand, reducing the initial bundle size and improving performance.`,
        },
        {
          title: "Memoization",
          description: "Memoization in React can help optimize performance by preventing unnecessary re-renders of components.",
          example: `// Example: Memoization with React.memo
    import React from 'react';
    
    const MemoizedComponent = React.memo(({ data }) => {
      console.log('Rendering:', data);
      return <div>{data}</div>;
    });
    
    export default MemoizedComponent;
    
    // React.memo helps prevent unnecessary re-renders of components 
    by memoizing the component and only re-rendering when props change.`,
        },
        {
          title: "Virtualization",
          description: "Virtualization in React involves rendering only a portion of large lists or tables to improve performance and reduce memory usage.",
          example: `// Example: List Virtualization with react-window
    import React from 'react';
    import { FixedSizeList as List } from 'react-window';
    
    const Row = ({ index, style }) => (
      <div style={style}>Item {index}</div>
    );
    
    function App() {
      return (
        <List
          height={150}
          itemCount={1000}
          itemSize={35}
          width={300}
        >
          {Row}
        </List>
      );
    }
    
    export default App;
    
    // react-window helps to render only the visible items in a list, 
    reducing the number of DOM nodes and improving performance.`,
        },
        {
          title: "Efficient Rendering",
          description: "Efficient rendering techniques in React involve optimizing how and when components update to minimize performance bottlenecks.",
          example: `// Example: Efficient Rendering with useCallback
    import React, { useCallback, useState } from 'react';
    
    const ChildComponent = React.memo(({ onClick }) => {
      console.log('ChildComponent rendered');
      return <button onClick={onClick}>Click Me</button>;
    });
    
    function ParentComponent() {
      const [count, setCount] = useState(0);
    
      const handleClick = useCallback(() => {
        setCount(count + 1);
      }, [count]);
    
      return (
        <div>
          <ChildComponent onClick={handleClick} />
          <div>Count: {count}</div>
        </div>
      );
    }
    
    export default ParentComponent;
    
    // useCallback helps to memoize event handlers and prevent 
    unnecessary re-renders of child components.`,
        }
      ]
    },
    {
      title: "Next.js Server-Side Rendering (SSR)",
      description: "Techniques and best practices for implementing Server-Side Rendering (SSR) in Next.js to improve SEO and initial page load performance.",
      example: `// Example: Basic SSR with Next.js
    import { GetServerSideProps } from 'next';
    
    const Page = ({ data }) => {
      return (
        <div>
          <h1>Data from Server:</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      );
    };
    
    export const getServerSideProps: GetServerSideProps = async (context) => {
      // Fetch data from an API or database
      const res = await fetch('https://api.example.com/data');
      const data = await res.json();
    
      // Pass data to the page component via props
      return { props: { data } };
    };
    
    export default Page;
    
    // Server-Side Rendering ensures that the page is rendered on 
    the server for each request, providing fresh data and better SEO.`,
      subtopics: [
        {
          title: "Data Fetching with getServerSideProps",
          description: "Use `getServerSideProps` to fetch data on each request and render the page on the server. This method allows for dynamic data fetching and rendering.",
          example: `// Example: Fetching Data in getServerSideProps
    import { GetServerSideProps } from 'next';
    
    const Page = ({ posts }) => {
      return (
        <div>
          <h1>Blog Posts</h1>
          {posts.map(post => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      );
    };
    
    export const getServerSideProps: GetServerSideProps = async (context) => {
      const res = await fetch('https://api.example.com/posts');
      const posts = await res.json();
    
      return { props: { posts } };
    };
    
    export default Page;
    
    // Fetching data server-side ensures the latest data is served 
    with each request and can be used for personalized content.`,
        },
        {
          title: "SEO Benefits of SSR",
          description: "Server-Side Rendering improves SEO by rendering pages on the server, allowing search engines to crawl and index content more effectively compared to client-side rendering.",
          example: `// Example: SEO Metadata with Next.js Head
    import Head from 'next/head';
    
    const Page = () => {
      return (
        <div>
          <Head>
            <title>SEO Optimized Page</title>
            <meta name=description content="This page is optimized for SEO with server-side rendering in Next.js." />
          </Head>
          <h1>Welcome to our SEO Optimized Page!</h1>
        </div>
      );
    };
    
    export default Page;
    
    // Using the <Head> component from Next.js allows you to manage SEO 
    metadata directly in your pages.`,
        },
        {
          title: "Handling Dynamic Routes with SSR",
          description: "Render pages with dynamic routes on the server by using `getServerSideProps` or `getStaticPaths` with `getStaticProps` for improved performance and SEO.",
          example: `// Example: Dynamic Routes with getServerSideProps
    import { GetServerSideProps } from 'next';
    
    const Post = ({ post }) => {
      return (
        <div>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </div>
      );
    };
    
    export const getServerSideProps: GetServerSideProps = async (context) => {
      const { id } = context.params;
      const res = await fetch('https://api.example.com/posts/id');
      const post = await res.json();
    
      return { props: { post } };
    };
    
    export default Post;
    
    // Dynamic routes can be handled server-side to fetch and render specific 
    content based on URL parameters.,`
        },
        {
          title: "Optimizing SSR Performance",
          description: "Optimize server-side rendering performance by leveraging caching strategies, reducing server response times, and optimizing data fetching.",
          example: `// Example: Caching with SWR for SSR
    import useSWR from 'swr';
    
    const fetcher = (url) => fetch(url).then(res => res.json());
    
    const Page = () => {
      const { data, error } = useSWR('/api/data', fetcher);
    
      if (error) return <div>Failed to load</div>;
      if (!data) return <div>Loading...</div>;
    
      return (
        <div>
          <h1>Data from SWR:</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      );
    };
    
    export default Page;
    
    // Using SWR for client-side data fetching with caching and revalidation 
    can complement SSR for improved performance.`,
        }
      ]
    },
    {
      title: "Backend Performance Optimization (Advanced Techniques)",
      description: "Advanced techniques for enhancing backend performance, including efficient database queries, caching strategies, and optimizing server responses.",
      example: `// Example: Efficient Database Query
    const getUser = async (userId) => {
      const user = await UserModel.findByPk(userId);
      return user;
    };
    
    // Efficient queries reduce the time spent accessing the database and 
    improve overall application performance.`,
      subtopics: [
        {
          title: "Database Optimization",
          description: "Optimizing database performance through indexing, efficient queries, and query optimization techniques.",
          example: `// Example: Database Indexing
    // Add an index to improve query performance on a 'username' field
    UserModel.sync({ alter: true }).then(() => {
      UserModel.addIndex('username_index', { unique: true, fields: ['username'] });
    });
    
    // Indexing helps speed up searches and queries by creating an 
    index on commonly searched fields.`,
        },
        {
          title: "Caching Strategies",
          description: "Implementing caching mechanisms to reduce the load on the database and improve response times for frequently requested data.",
          example: `// Example: Caching with Redis
    const redis = require('redis');
    const client = redis.createClient();
    
    app.get('/data', (req, res) => {
      const cacheKey = 'dataCacheKey';
      client.get(cacheKey, (err, data) => {
        if (data) {
          return res.send(JSON.parse(data));
        }
        // Fetch data from database
        fetchDataFromDatabase().then(data => {
          client.setex(cacheKey, 3600, JSON.stringify(data));
          res.send(data);
        });
      });
    });
    
    // Caching responses reduces the load on the database and speeds 
    up response times by storing frequently requested data in memory.`,
        },
        {
          title: "Server-Side Performance",
          description: "Optimizing server-side performance by managing resources, reducing response times, and handling large volumes of requests efficiently.",
          example: `// Example: Handling Large Volumes of Requests
    app.use((req, res, next) => {
      // Implement rate limiting
      rateLimiter(req, res, next);
    });
    
    // Rate limiting controls the number of requests a client can make 
    in a given time period, reducing server overload and improving performance.`,
        },
        {
          title: "Asynchronous Processing",
          description: "Using asynchronous processing to handle long-running tasks and background jobs efficiently without blocking the main application flow.",
          example: `// Example: Background Job Processing with Bull
    const Bull = require('bull');
    const queue = new Bull('jobQueue');
    
    queue.process(async job => {
      // Process the job
      await processJob(job.data);
    });
    
    const addJobToQueue = async (data) => {
      await queue.add(data);
    };
    
    // Background job processing allows the application to handle tasks 
    asynchronously, improving the responsiveness of the main application.`,
        }
      ]
    },
    {
      title: "Server-Side Rendering (SSR) with React",
      description: "Advanced techniques for implementing Server-Side Rendering (SSR) with React to improve SEO, performance, and initial page load times.",
      example: `// Example: Basic SSR Setup with Express and React
    import express from 'express';
    import React from 'react';
    import ReactDOMServer from 'react-dom/server';
    import App from './App'; // Your main React component
    
    const app = express();
    
    app.use(express.static('public')); // Serve static files
    
    app.get('*', (req, res) => {
      const reactApp = ReactDOMServer.renderToString(<App />);
    
      res.send(
        < !DOCTYPE html>
    <html>
      <head>
        <title>SSR with React</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <div id="root">reactApp</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
      );
    });
    
    app.listen(3000, () => {
      console.log('Server is listening on port 3000');
    });
    
    // Server-side rendering provides a fully rendered HTML page 
    to the client, improving the initial load time and SEO.`,
      subtopics: [
        {
          title: "Initial Rendering",
          description: "Rendering the initial HTML on the server to provide a fully populated page to the client, improving the user experience and SEO.",
          example: `// Example: Initial Rendering with ReactDOMServer
    import React from 'react';
    import ReactDOMServer from 'react-dom/server';
    import App from './App';
    
    const renderApp = () => {
      return ReactDOMServer.renderToString(<App />);
    };
    
    // renderApp() returns the HTML content of the React component, 
    which can be sent as the response to the client for faster page 
    loads and better SEO.`,
        },
        {
          title: "Data Fetching for SSR",
          description: "Fetching data on the server before rendering the page to ensure that the client receives a fully populated page.",
          example: `// Example: Data Fetching in SSR
    import express from 'express';
    import React from 'react';
    import ReactDOMServer from 'react-dom/server';
    import App from './App';
    import fetchData from './fetchData'; // Function to fetch data
    
    const app = express();
    
    app.get('*', async (req, res) => {
      const data = await fetchData(); // Fetch data before rendering
      const reactApp = ReactDOMServer.renderToString(<App initialData={data} />);
    
      res.send(
          < !DOCTYPE html>
      <html>
        <head>
          <title>SSR with React</title>
          <link rel="stylesheet" href="/styles.css" />
        </head>
        <body>
          <div id="root">reactApp</div>
          <script src="/bundle.js"></script>
        </body>
      </html>
      );
    });
    
    // fetchData() retrieves necessary data before rendering the 
    React component, ensuring that the client receives a fully populated page.`,
        },
        {
          title: "Code Splitting in SSR",
          description: "Implementing code splitting to load only necessary JavaScript for the initial render, reducing the amount of code sent to the client.",
          example: `// Example: Code Splitting with React.lazy and React.Suspense
    import React, { Suspense, lazy } from 'react';
    
    const LazyComponent = lazy(() => import('./LazyComponent'));
    
    const App = () => (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>
      </div>
    );
    
    // Code splitting allows loading components only when they 
    are needed, improving initial load times and performance.`,
        },
        {
          title: "Server-Side Caching",
          description: "Implementing caching strategies on the server to reduce rendering times and improve response performance.",
          example: `// Example: Server-Side Caching with Redis
    import express from 'express';
    import React from 'react';
    import ReactDOMServer from 'react-dom/server';
    import App from './App';
    import redis from 'redis';
    
    const app = express();
    const client = redis.createClient();
    
    app.get('*', (req, res) => {
      const cacheKey = 'ssrCache';
      
      client.get(cacheKey, (err, cachedPage) => {
        if (cachedPage) {
          return res.send(cachedPage);
        }
    
        const reactApp = ReactDOMServer.renderToString(<App />);
        const fullPage = 
        < !DOCTYPE html >
          <html>
            <head>
              <title>SSR with React</title>
              <link rel="stylesheet" href="/styles.css" />
            </head>
            <body>
              <div id="root">reactApp</div>
              <script src="/bundle.js"></script>
            </body>
          </html>
  ;
        
        client.setex(cacheKey, 3600, fullPage); // Cache the full page for 1 hour
        res.send(fullPage);
      });
    });
    
    // Server-side caching reduces rendering times by 
    storing the rendered HTML and serving it from cache, 
    improving response performance.`,
        }
      ]
    },
    {
      title: "Microservices Architecture (Advanced Techniques)",
      description: "Advanced techniques for building, managing, and optimizing microservices-based architectures, focusing on service communication, data consistency, and deployment strategies.",
      example: `// Example: Basic Microservice Communication with REST
      const express = require('express');
      const app = express();
      
      app.get('/user/:id', async (req, res) => {
        const userId = req.params.id;
        const user = await fetch(http://auth-service/users/userId);
        res.json(user);
      });
      
      app.listen(3000, () => {
        console.log('User service running on port 3000');
      });
      
      // In microservices, services often communicate via HTTP or 
      messaging protocols to stay decoupled.`,
      subtopics: [
        {
          title: "Service Communication",
          description: "Different communication patterns between microservices, including synchronous and asynchronous communication using REST, gRPC, and messaging systems.",
          example: `// Example: Asynchronous Communication with RabbitMQ
      const amqp = require('amqplib/callback_api');
      
      amqp.connect('amqp://localhost', (error0, connection) => {
        if (error0) throw error0;
      
        connection.createChannel((error1, channel) => {
          const queue = 'taskQueue';
      
          channel.assertQueue(queue, { durable: false });
          channel.consume(queue, (msg) => {
            console.log("Received message: ", msg.content.toString());
          });
        });
      });
      
      // Asynchronous messaging allows microservices to 
      communicate without waiting for a response, increasing 
      scalability and resilience.`,
        },
        {
          title: "Data Consistency",
          description: "Managing data consistency in a distributed system, including techniques like eventual consistency, two-phase commit, and the Saga pattern.",
          example: `// Example: Saga Pattern for Distributed Transactions
      const createOrderSaga = async (orderData) => {
        try {
          const payment = await processPayment(orderData);
          const inventory = await reserveInventory(orderData);
          if (payment.success && inventory.success) {
            // Commit transaction
          } else {
            // Rollback transaction
          }
        } catch (error) {
          // Handle failure and trigger rollback
        }
      };
      
      // The Saga pattern breaks distributed transactions into a 
      series of smaller, compensatable actions.`,
        },
        {
          title: "API Gateway",
          description: "Using API gateways to manage client requests and route them to the appropriate microservice, handling cross-cutting concerns like authentication and load balancing.",
          example: `// Example: API Gateway with Nginx
      server {
        listen 80;
      
        location /user/ {
          proxy_pass http://user-service;
        }
      
        location /order/ {
          proxy_pass http://order-service;
        }
      }
      
      // An API gateway serves as the single entry point for all 
      client requests, routing them to the appropriate microservice 
      and managing cross-service communication.`,
        },
        {
          title: "Deployment and Scalability",
          description: "Strategies for deploying and scaling microservices, including containerization with Docker, orchestration with Kubernetes, and autoscaling.",
          example: `// Example: Deploying Microservices with Kubernetes
      apiVersion: apps/v1
      kind: Deployment
      metadata:
        name: user-service
      spec:
        replicas: 3
        selector:
          matchLabels:
            app: user-service
        template:
          metadata:
            labels:
              app: user-service
          spec:
            containers:
            - name: user-service
              image: user-service:latest
              ports:
              - containerPort: 3000
      
      // Kubernetes provides a way to automate the deployment and 
      scaling of microservices across multiple containers and hosts.`,
        }
      ]
    },
    {
      title: "WebSockets and Real-Time Communication (Advanced Techniques)",
      description: "Advanced techniques for implementing real-time communication in web applications using WebSockets, managing connections, and handling real-time data updates efficiently.",
      example: `// Example: WebSocket Server with Node.js and Socket.io
      const io = require('socket.io')(server);
    
      io.on('connection', (socket) => {
        console.log('A user connected');
        
        // Listen for messages from the client
        socket.on('message', (data) => {
          console.log('Message received:', data);
          
          // Broadcast message to all connected clients
          io.emit('message', data);
        });
    
        // Handle disconnection
        socket.on('disconnect', () => {
          console.log('User disconnected');
        });
      });
    
      // WebSockets provide real-time, bidirectional communication 
      between the client and server, allowing for instant data updates 
      and interactions.`,
      subtopics: [
        {
          title: "Handling Real-Time Updates",
          description: "Managing real-time updates between clients and the server, ensuring that data is synchronized and consistent across all clients.",
          example: `// Example: Real-Time Data Sync
      io.on('connection', (socket) => {
        // When a new message is sent by a client, broadcast it to all other clients
        socket.on('newMessage', (message) => {
          socket.broadcast.emit('newMessage', message);
        });
      });
    
      // Real-time synchronization ensures that all clients receive 
      updates as they happen, creating a seamless experience for users.`,
        },
        {
          title: "Connection Management and Scaling",
          description: "Managing large numbers of WebSocket connections and ensuring scalability to handle many concurrent users efficiently.",
          example: `// Example: Scaling WebSockets with Redis
      const redisAdapter = require('socket.io-redis');
      io.adapter(redisAdapter({ host: 'localhost', port: 6379 }));
    
      // Redis adapter allows for horizontal scaling of WebSocket 
      connections by enabling communication between multiple server instances.`,
        },
        {
          title: "Authentication and Authorization in WebSockets",
          description: "Ensuring secure communication over WebSockets by implementing authentication and authorization mechanisms.",
          example: `// Example: WebSocket Authentication
      io.use((socket, next) => {
        const token = socket.handshake.query.token;
        
        // Verify token
        verifyToken(token).then(user => {
          socket.user = user;
          next();
        }).catch(err => {
          next(new Error('Authentication error'));
        });
      });
    
      // Authenticating WebSocket connections ensures that only 
      authorized users can send and receive real-time updates.`,
        },
        {
          title: "Real-Time Notifications",
          description: "Implementing real-time notifications to alert users of new events, updates, or messages.",
          example: `// Example: Real-Time Notifications with Socket.io
      io.on('connection', (socket) => {
        // Notify users when a new notification is available
        socket.on('newNotification', (notification) => {
          io.emit('newNotification', notification);
        });
      });
    
      // Real-time notifications provide immediate updates to users, 
      keeping them informed about important events.`,
        }
      ]
    },
    {
      title: "Serverless Functions Optimization (Advanced Techniques)",
      description: "Advanced techniques for optimizing serverless functions, focusing on improving performance, reducing cold start times, and managing efficient resource usage.",
      example: `// Example: Optimizing Cold Starts
    const AWS = require('aws-sdk');
    const lambda = new AWS.Lambda();
    
    exports.handler = async (event) => {
      const result = await lambda.invoke({
        FunctionName: 'YourServerlessFunction',
        Payload: JSON.stringify(event)
      }).promise();
      
      return JSON.parse(result.Payload);
    };
    
    // Optimizing serverless function cold starts involves minimizing 
    initialization overhead, reducing package sizes, and using 
    provisioned concurrency.`,
      subtopics: [
        {
          title: "Reducing Cold Start Latency",
          description: "Minimizing cold start latency by reducing package sizes, managing dependencies efficiently, and using provisioned concurrency.",
          example: `// Example: Using Provisioned Concurrency in AWS Lambda
    const AWS = require('aws-sdk');
    const lambda = new AWS.Lambda();
    
    const params = {
      FunctionName: 'YourServerlessFunction',
      ProvisionedConcurrentExecutions: 5
    };
    
    lambda.putProvisionedConcurrencyConfig(params, (err, data) => {
      if (err) console.log(err, err.stack);
      else console.log(data);
    });
    
    // Provisioned concurrency helps reduce cold start times by keeping 
    a specific number of function instances initialized and ready to 
    respond to requests.`,
        },
        {
          title: "Efficient Resource Management",
          description: "Optimizing the allocation of memory, CPU, and other resources for serverless functions to ensure efficient execution.",
          example: `// Example: Optimizing Memory Allocation in AWS Lambda
    exports.handler = async (event) => {
      console.time('executionTime');
      
      const data = await processHeavyTask(event);
      
      console.timeEnd('executionTime');
      return {
        statusCode: 200,
        body: JSON.stringify(data),
      };
    };
    
    // Allocate memory efficiently based on the execution time and 
    workload requirements. Monitoring function execution helps adjust 
    memory and resource allocation.`,
        },
        {
          title: "Event-Driven Architecture",
          description: "Leveraging event-driven architecture to trigger serverless functions based on events, optimizing resource usage, and ensuring scalability.",
          example: `// Example: Triggering Serverless Functions with AWS SNS
    const AWS = require('aws-sdk');
    const sns = new AWS.SNS();
    
    exports.handler = async (event) => {
      const params = {
        Message: JSON.stringify(event),
        TopicArn: 'arn:aws:sns:region:account-id:topic-name'
      };
      
      await sns.publish(params).promise();
      
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Event triggered successfully!' }),
      };
    };
    
    // Using SNS to trigger serverless functions based on events 
    helps create a scalable and efficient event-driven architecture.`,
        },
        {
          title: "Error Handling and Retry Mechanisms",
          description: "Implementing proper error handling and automatic retries in serverless functions to ensure robustness and reliability.",
          example: `// Example: Implementing Retries with AWS Lambda
    exports.handler = async (event) => {
      try {
        const result = await performCriticalTask(event);
        return {
          statusCode: 200,
          body: JSON.stringify(result),
        };
      } catch (error) {
        console.error('Task failed, retrying...', error);
        throw new Error('Task failed');
      }
    };
    
    // Automatic retries ensure that serverless functions can recover 
    from transient errors, improving fault tolerance.`,
        }
      ]
    },
    {
      title: "Advanced State Management with React",
      description: "Advanced techniques for managing complex state in React applications, including using Redux Toolkit, React Context, and optimized patterns for improving performance and scalability.",
      example: `// Example: Redux Toolkit Slice for Managing Global State
    import { createSlice } from '@reduxjs/toolkit';
    
    const initialState = { value: 0 };
    
    const counterSlice = createSlice({
      name: 'counter',
      initialState,
      reducers: {
        increment: (state) => { state.value += 1; },
        decrement: (state) => { state.value -= 1; },
        incrementByAmount: (state, action) => { state.value += action.payload; }
      }
    });
    
    export const { increment, decrement, incrementByAmount } = counterSlice.actions;
    export default counterSlice.reducer;
    
    // Redux Toolkit simplifies state management by reducing boilerplate 
    and improving the developer experience.`,
      subtopics: [
        {
          title: "Context API and useReducer",
          description: "Using React's Context API combined with the useReducer hook for managing global state in smaller applications without external libraries.",
          example: `// Example: Global State Management with Context and useReducer
    import React, { createContext, useReducer, useContext } from 'react';
    
    const initialState = { count: 0 };
    
    const reducer = (state, action) => {
      switch (action.type) {
        case 'INCREMENT':
          return { count: state.count + 1 };
        case 'DECREMENT':
          return { count: state.count - 1 };
        default:
          return state;
      }
    };
    
    const CountContext = createContext();
    
    export const useCount = () => useContext(CountContext);
    
    export const CountProvider = ({ children }) => {
      const [state, dispatch] = useReducer(reducer, initialState);
    
      return (
        <CountContext.Provider value={{ state, dispatch }}>
          {children}
        </CountContext.Provider>
      );
    };
    
    // Using Context API and useReducer helps avoid prop drilling 
    and manage local state effectively.`,
        },
        {
          title: "Redux Toolkit with React",
          description: "Leveraging Redux Toolkit to simplify state management in large-scale applications by combining reducers, actions, and middleware in one place.",
          example: `// Example: Redux Store Setup with Redux Toolkit
    import { configureStore } from '@reduxjs/toolkit';
    import counterReducer from './counterSlice';
    
    const store = configureStore({
      reducer: {
        counter: counterReducer
      }
    });
    
    export default store;
    
    // Redux Toolkit offers built-in middleware, DevTools support, and efficient 
    state updates with its 'createSlice' and 'configureStore' functions.`,
        },
        {
          title: "Optimizing Performance with React Query",
          description: "Using React Query to manage server state efficiently by handling asynchronous data fetching, caching, and automatic updates.",
          example: `// Example: Data Fetching with React Query
    import { useQuery } from 'react-query';
    
    const fetchTodos = async () => {
      const res = await fetch('/api/todos');
      return res.json();
    };
    
    const Todos = () => {
      const { data, error, isLoading } = useQuery('todos', fetchTodos);
    
      if (isLoading) return 'Loading...';
      if (error) return 'An error occurred';
    
      return (
        <ul>
          {data.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      );
    };
    
    // React Query handles data fetching and state updates efficiently, 
    reducing the need for manual state management with external libraries.`,
        },
        {
          title: "Recoil for React State Management",
          description: "Using Recoil to manage global state in a React application with a minimal setup, providing better support for concurrent mode and scalability.",
          example: `// Example: Recoil Atom for Global State
    import { atom, useRecoilState } from 'recoil';
    
    const textState = atom({
      key: 'textState',
      default: ''
    });
    
    function TextInput() {
      const [text, setText] = useRecoilState(textState);
    
      const onChange = (event) => {
        setText(event.target.value);
      };
    
      return (
        <div>
          <input type="text" value={text} onChange={onChange} />
          <p>{text}</p>
        </div>
      );
    }
    
    // Recoil provides a simple and scalable way to manage global 
    state with atoms and selectors, allowing for a flexible state architecture.`,
        }
      ]
    },
    {
      title: "Custom Hooks and Context API (Advanced Techniques)",
      description: "Advanced techniques for managing global state and reusable logic using Custom Hooks and Context API in React.",
      example: `// Example: Custom Hook for Fetching Data
      import { useState, useEffect } from 'react';
    
      const useFetchData = (url) => {
        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
    
        useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await fetch(url);
              const result = await response.json();
              setData(result);
            } catch (err) {
              setError(err);
            } finally {
              setLoading(false);
            }
          };
    
          fetchData();
        }, [url]);
    
        return { data, loading, error };
      };
    
      // Custom Hooks encapsulate reusable logic that can be shared 
      across multiple components, improving code modularity and readability.`,
      subtopics: [
        {
          title: "Global State Management with Context API",
          description: "Managing global state with Context API to avoid prop drilling and handle state across multiple components.",
          example: `// Example: Creating a Context for User Authentication
      import React, { createContext, useState, useContext } from 'react';
    
      const AuthContext = createContext();
    
      export const useAuth = () => {
        return useContext(AuthContext);
      };
    
      export const AuthProvider = ({ children }) => {
        const [user, setUser] = useState(null);
    
        const login = (userData) => {
          setUser(userData);
        };
    
        const logout = () => {
          setUser(null);
        };
    
        return (
          <AuthContext.Provider value={{ user, login, logout }}>
            {children}
          </AuthContext.Provider>
        );
      };
    
      // Context API provides a way to pass state globally without 
      having to pass props through every level of the component tree.`,
        },
        {
          title: "Combining Custom Hooks and Context API",
          description: "Creating custom hooks that leverage Context API to make it easier to manage and access global state in functional components.",
          example: `// Example: Custom Hook for Using Authentication Context
      import { useContext } from 'react';
      import { AuthContext } from './AuthProvider';
    
      const useAuth = () => {
        const { user, login, logout } = useContext(AuthContext);
        return { user, login, logout };
      };
    
      // This hook simplifies the usage of AuthContext by providing a 
      cleaner interface for accessing the context's values in any component.`,
        },
        {
          title: "Context API for Theming",
          description: "Using Context API to implement application-wide theming (e.g., dark mode/light mode) and making it accessible to all components.",
          example: `// Example: Theme Context with Dark Mode Toggle
      import { createContext, useState, useContext } from 'react';
    
      const ThemeContext = createContext();
    
      export const useTheme = () => {
        return useContext(ThemeContext);
      };
    
      export const ThemeProvider = ({ children }) => {
        const [theme, setTheme] = useState('light');
    
        const toggleTheme = () => {
          setTheme(theme === 'light' ? 'dark' : 'light');
        };
    
        return (
          <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
          </ThemeContext.Provider>
        );
      };
    
      // Context API is ideal for managing global application states like 
      themes, so users can easily switch between light and dark modes.`,
        },
        {
          title: "Custom Hooks for Side Effects",
          description: "Building custom hooks that encapsulate complex side effects, like API calls, form validation, or subscriptions.",
          example: `// Example: Custom Hook for Managing Forms
      import { useState } from 'react';
    
      const useForm = (initialValues) => {
        const [values, setValues] = useState(initialValues);
    
        const handleChange = (e) => {
          setValues({
            ...values,
            [e.target.name]: e.target.value
          });
        };
    
        const resetForm = () => {
          setValues(initialValues);
        };
    
        return { values, handleChange, resetForm };
      };
    
      // Custom hooks are a great way to reuse logic for handling form states, 
      ensuring consistency across forms in the application.`,
        }
      ]
    },
    {
      title: "Authentication and Authorization (Advanced Techniques)",
      description: "Advanced techniques for securing your application by implementing robust authentication and authorization mechanisms, including JWT, OAuth, role-based access control (RBAC), and multi-factor authentication (MFA).",
      example: `// Example: JWT-based Authentication
    const jwt = require('jsonwebtoken');
    
    const generateToken = (user) => {
      return jwt.sign({ id: user.id, role: user.role }, 'your_jwt_secret', { expiresIn: '1h' });
    };
    
    // JWT tokens allow stateless authentication by passing a signed 
    token between the server and client, improving security and scalability.`,
      subtopics: [
        {
          title: "Token-Based Authentication (JWT)",
          description: "Using JSON Web Tokens (JWT) for stateless authentication, allowing users to authenticate and authorize requests securely.",
          example: `// Example: Middleware for JWT Authentication
    const jwt = require('jsonwebtoken');
    
    const authenticateJWT = (req, res, next) => {
      const token = req.header('Authorization').replace('Bearer ', '');
    
      if (!token) {
        return res.status(401).send({ error: 'Access denied. No token provided.' });
      }
    
      try {
        const decoded = jwt.verify(token, 'your_jwt_secret');
        req.user = decoded;
        next();
      } catch (ex) {
        res.status(400).send({ error: 'Invalid token.' });
      }
    };
    
    // This middleware ensures that only requests with a valid JWT can 
    access certain routes, securing your API endpoints.`,
        },
        {
          title: "Role-Based Access Control (RBAC)",
          description: "Implementing RBAC to restrict access to certain parts of the application based on user roles, such as admin, user, or guest.",
          example: `// Example: Role-Based Access Middleware
    const authorizeRole = (role) => {
      return (req, res, next) => {
        if (req.user.role !== role) {
          return res.status(403).send({ error: 'Access denied. You do not have the required permissions.' });
        }
        next();
      };
    };
    
    // Using this middleware, you can restrict routes to specific roles, 
    enhancing security and preventing unauthorized access to sensitive 
    parts of the application.`,
        },
        {
          title: "OAuth 2.0 and Third-Party Authentication",
          description: "Implementing OAuth 2.0 to allow users to authenticate using third-party services like Google, Facebook, or GitHub.",
          example: `// Example: OAuth with Passport.js
    const passport = require('passport');
    const GoogleStrategy = require('passport-google-oauth20').Strategy;
    
    passport.use(new GoogleStrategy({
      clientID: 'YOUR_GOOGLE_CLIENT_ID',
      clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
      callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
      // Find or create user in the database
      User.findOrCreate({ googleId: profile.id }, (err, user) => {
        return done(err, user);
      });
    }));
    
    app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
    
    // OAuth allows users to sign in via external providers, 
    eliminating the need to manage passwords while improving 
    security and user experience.`,
        },
        {
          title: "Multi-Factor Authentication (MFA)",
          description: "Adding an extra layer of security with MFA, requiring users to provide a second form of authentication (e.g., a code sent to their phone or email).",
          example: `// Example: Implementing TOTP for MFA
    const speakeasy = require('speakeasy');
    const qrcode = require('qrcode');
    
    // Generate TOTP secret
    const secret = speakeasy.generateSecret({ length: 20 });
    console.log(secret.base32); // Save this secret
    
    // Generate QR Code for scanning by MFA app
    qrcode.toDataURL(secret.otpauth_url, (err, imageUrl) => {
      console.log(imageUrl);
    });
    
    // Verifying TOTP token
    const verified = speakeasy.totp.verify({
      secret: secret.base32,
      encoding: 'base32',
      token: req.body.token
    });
    
    if (verified) {
      res.send('MFA verified');
    } else {
      res.status(400).send('Invalid MFA token');
    }
    
    // Implementing MFA adds an extra layer of security, making it 
    harder for unauthorized users to access the system, even if 
    they know the password.`,
        }
      ]
    },
    {
      title: "Data Migration and Schema Evolution (Advanced Techniques)",
      description: "Advanced techniques for managing data migration and evolving database schemas efficiently, ensuring data consistency and minimal downtime.",
      example: `// Example: Data Migration using Mongoose
    const migrateData = async () => {
      const oldUsers = await OldUserModel.find({});
      const newUsers = oldUsers.map(user => ({
        username: user.name,
        email: user.email,
        createdAt: user.created_at,
      }));
    
      await NewUserModel.insertMany(newUsers);
      console.log("Data migration completed successfully.");
    };
    
    // Data migration allows transferring data from an old schema to a 
    new one, ensuring data consistency across different versions.`,
      subtopics: [
        {
          title: "Versioning Schemas",
          description: "Introducing version control to database schemas to manage changes effectively while supporting backward compatibility.",
          example: `// Example: Schema Versioning
    const userSchemaV1 = new mongoose.Schema({
      username: String,
      email: String
    });
    
    const userSchemaV2 = new mongoose.Schema({
      username: String,
      email: String,
      phoneNumber: String, // New field added
    });
    
    // Versioning schemas allows smooth upgrades and backward compatibility when 
    introducing new fields or features.`,
        },
        {
          title: "Database Migration Tools",
          description: "Using database migration tools to automate the process of applying changes to database structures and ensure safe transitions.",
          example: `// Example: Migrate MongoDB using migrate-mongo
    const migrateMongo = require('migrate-mongo');
    
    const config = {
      mongodb: {
        url: "mongodb://localhost:27017",
        databaseName: "mydb"
      }
    };
    
    // Use migrate-mongo CLI to apply migration scripts
    // migrate-mongo up
    // Automates schema changes such as adding new collections or modifying existing ones.`,
        },
        {
          title: "Rolling Back Changes",
          description: "Implementing rollback strategies to revert database schema changes in case of failure or issues during migrations.",
          example: `// Example: Rolling Back a Migration
    // In Sequelize, you can undo a migration using:
    sequelize db:migrate:undo
    
    // Rollback scripts allow you to revert schema changes if the new version causes issues, 
    ensuring safe deployment.`,
        },
        {
          title: "Zero Downtime Migrations",
          description: "Performing migrations without interrupting the application's availability, ensuring that users experience no downtime during schema changes.",
          example: `// Example: Zero Downtime Migration Strategy
    // Add new columns in a backward-compatible manner
    ALTER TABLE users ADD COLUMN phoneNumber VARCHAR(15);
    
    // Update application code to write to both old and new columns.
    // After data is written to the new column, remove the old one in a second migration.
    
    // Zero downtime migrations ensure that changes to the schema 
    do not disrupt the user experience.`,
        }
      ]
    },
    {
      title: "API Rate Limiting and Throttling (Advanced Techniques)",
      description: "Advanced techniques for implementing API rate limiting and throttling to protect your server from abuse, manage resources efficiently, and maintain optimal performance.",
      example: `// Example: Basic Rate Limiting with Express
    const rateLimit = require('express-rate-limit');
    
    const apiLimiter = rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // Limit each IP to 100 requests per windowMs
      message: 'Too many requests from this IP, please try again after 15 minutes.'
    });
    
    app.use('/api/', apiLimiter);
    
    // Rate limiting helps to control the number of requests a client 
    can make within a specific time period, preventing server overload.`,
      subtopics: [
        {
          title: "Token Bucket Algorithm",
          description: "An advanced rate limiting technique using the token bucket algorithm to allow bursts of traffic while maintaining an overall rate limit.",
          example: `// Example: Token Bucket Implementation
    const tokenBucket = {
      tokens: 100,
      capacity: 100,
      refillRate: 1, // Refill 1 token per second
      refill: function() {
        this.tokens = Math.min(this.capacity, this.tokens + this.refillRate);
      },
      consume: function() {
        if (this.tokens > 0) {
          this.tokens--;
          return true;
        }
        return false;
      }
    };
    
    setInterval(() => tokenBucket.refill(), 1000);
    
    // The token bucket algorithm allows clients to make requests until 
    tokens run out, while refilling tokens at a set rate.`,
        },
        {
          title: "Leaky Bucket Algorithm",
          description: "Rate limiting using the leaky bucket algorithm to smooth out traffic by processing requests at a fixed rate.",
          example: `// Example: Leaky Bucket Algorithm with Queue
    let bucket = {
      capacity: 10,
      interval: 1000, // Process 1 request per second
      requests: [],
      processRequest: function() {
        if (this.requests.length > 0) {
          const request = this.requests.shift();
          // Handle request
          console.log('Processing request:', request);
        }
      }
    };
    
    setInterval(() => bucket.processRequest(), bucket.interval);
    
    // The leaky bucket algorithm ensures that requests are processed at 
    a fixed rate, even during traffic spikes.`,
        },
        {
          title: "Distributed Rate Limiting",
          description: "Implementing rate limiting across multiple servers or instances in a distributed system to ensure consistent limits are applied.",
          example: `// Example: Distributed Rate Limiting with Redis
    const redis = require('redis');
    const client = redis.createClient();
    const RATE_LIMIT = 100;
    
    app.use(async (req, res, next) => {
      const ip = req.ip;
      const requests = await client.incr(ip);
      if (requests === 1) {
        client.expire(ip, 60); // Set a 60-second window
      }
      
      if (requests > RATE_LIMIT) {
        return res.status(429).send('Too many requests');
      }
      
      next();
    });
    
    // Distributed rate limiting with Redis allows sharing rate limit 
    data across multiple server instances.`,
        },
        {
          title: "Throttling",
          description: "Implementing request throttling to gradually reduce the speed of requests if a client exceeds the rate limit, instead of blocking them entirely.",
          example: `// Example: Request Throttling with Express
    const rateLimit = require('express-rate-limit');
    
    const throttleLimiter = rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // Start limiting after 100 requests
      delayAfter: 80, // Begin slowing down responses after 80 requests
      delayMs: 500 // Delay each response by 500ms after delayAfter limit
    });
    
    app.use('/api/', throttleLimiter);
    
    // Throttling allows clients to continue making requests but slows down the 
    response time if they exceed a certain limit.`,
        }
      ]
    },
    {
      title: "Micro-Frontends (Advanced Techniques)",
      description: "Advanced techniques for implementing and optimizing micro-frontends, including managing dependencies, integrating multiple frameworks, and optimizing performance.",
      example: `// Example: Basic Micro-Frontend Setup
    import { MicroFrontend } from 'micro-frontend-lib';
    
    const App = () => {
      return (
        <div>
          <MicroFrontend name="app1" url="/microfrontends/app1.js" />
          <MicroFrontend name="app2" url="/microfrontends/app2.js" />
        </div>
      );
    };
    
    export default App;
    
    // Using Micro-Frontend components to load and integrate different 
    frontend applications within a single container.`,
      subtopics: [
        {
          title: "Micro-Frontend Architecture",
          description: "Designing and implementing a micro-frontend architecture to decompose a large frontend application into smaller, independently deployable units.",
          example: `// Example: Micro-Frontend Architecture with Module Federation
    import { ModuleFederationPlugin } from 'webpack/module-federation-plugin';
    
    module.exports = {
      plugins: [
        new ModuleFederationPlugin({
          name: 'app',
          remotes: {
            app1: 'app1@http://localhost:3001/remoteEntry.js',
            app2: 'app2@http://localhost:3002/remoteEntry.js',
          },
        }),
      ],
    };
    
    // Module Federation enables different frontend applications to 
    share and consume modules from one another, facilitating a micro-frontend 
    approach.`,
        },
        {
          title: "Dependency Management",
          description: "Handling shared dependencies between micro-frontends to avoid version conflicts and reduce bundle sizes.",
          example: `// Example: Shared Dependencies Configuration
    import { ModuleFederationPlugin } from 'webpack/module-federation-plugin';
    
    module.exports = {
      plugins: [
        new ModuleFederationPlugin({
          name: 'app',
          shared: {
            react: { singleton: true },
            'react-dom': { singleton: true },
          },
        }),
      ],
    };
    
    // Sharing common dependencies like React between micro-frontends 
    ensures that only a single instance of each dependency is loaded, 
    reducing duplication and version conflicts.`,
        },
        {
          title: "Integration with Multiple Frameworks",
          description: "Integrating micro-frontends built with different frameworks or libraries within a single application.",
          example: `// Example: Integrating React and Angular Micro-Frontends
    // React Micro-Frontend
    import React from 'react';
    import ReactDOM from 'react-dom';
    
    const App = () => <div>React Micro-Frontend</div>;
    
    ReactDOM.render(<App />, document.getElementById('react-root'));
    
    // Angular Micro-Frontend
    import { NgModule, Injector } from '@angular/core';
    import { createCustomElement } from '@angular/elements';
    import { BrowserModule } from '@angular/platform-browser';
    
    @NgModule({
      imports: [BrowserModule],
      declarations: [AppComponent],
      entryComponents: [AppComponent],
    })
    export class AppModule {
      constructor(private injector: Injector) {
        const element = createCustomElement(AppComponent, { injector });
        customElements.define('angular-micro-frontend', element);
      }
    
      ngDoBootstrap() {}
    }
    
    // Integrating micro-frontends built with React and Angular using 
    custom elements allows for seamless integration of different frontend technologies.`,
        },
        {
          title: "Performance Optimization",
          description: "Optimizing the performance of micro-frontends by implementing techniques like lazy loading, efficient bundling, and minimizing the overhead of inter-micro-frontend communication.",
          example: `// Example: Lazy Loading Micro-Frontends
    import React, { Suspense, lazy } from 'react';
    
    const LazyMicroFrontend = lazy(() => import('./MicroFrontend'));
    
    const App = () => (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyMicroFrontend />
      </Suspense>
    );
    
    export default App;
    
    // Lazy loading micro-frontends ensures that only the necessary 
    components are loaded initially, improving application startup times 
    and overall performance.`,
        }
      ]
    },
    {
      title: "Secure Data Transmission (Advanced Techniques)",
      description: "Advanced techniques for securing data transmission, including encryption methods, HTTPS implementation, and secure data handling practices.",
      example: `// Example: Data Encryption with AES
    const crypto = require('crypto');
    
    const algorithm = 'aes-256-cbc';
    const key = crypto.randomBytes(32); // Key should be securely stored
    const iv = crypto.randomBytes(16); // Initialization vector
    
    const encrypt = (text) => {
      let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
      let encrypted = cipher.update(text);
      encrypted = Buffer.concat([encrypted, cipher.final()]);
      return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
    };
    
    const decrypt = (iv, encryptedData) => {
      let ivBuffer = Buffer.from(iv, 'hex');
      let encryptedText = Buffer.from(encryptedData, 'hex');
      let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), ivBuffer);
      let decrypted = decipher.update(encryptedText);
      decrypted = Buffer.concat([decrypted, decipher.final()]);
      return decrypted.toString();
    };
    
    // Encryption ensures that data is securely transmitted, making it 
    unreadable to unauthorized parties.`,
      subtopics: [
        {
          title: "HTTPS Implementation",
          description: "Implementing HTTPS to secure data transmission over the web by encrypting communication between the client and server.",
          example: `// Example: Enforcing HTTPS with Express
    const express = require('express');
    const helmet = require('helmet');
    const app = express();
    
    app.use(helmet());
    app.use((req, res, next) => {
      if (req.secure) {
        return next();
      }
      res.redirect('https://' + req.headers.host + req.url);
    });
    
    // Enforcing HTTPS ensures that all data transmitted between 
    client and server is encrypted, protecting it from interception and tampering.`,
        },
        {
          title: "Data Encryption at Rest and in Transit",
          description: "Encrypting data both when stored (at rest) and during transmission to ensure comprehensive security.",
          example: `// Example: Encrypting Data at Rest with MongoDB
    const mongoose = require('mongoose');
    const crypto = require('crypto');
    
    const UserSchema = new mongoose.Schema({
      name: String,
      email: {
        type: String,
        set: (email) => crypto.createCipher('aes-256-cbc', 'secret-key').update(email, 'utf8', 'hex')
      }
    });
    
    const User = mongoose.model('User', UserSchema);
    
    // Encrypting sensitive data before storing it in the database 
    adds an additional layer of security, protecting data from unauthorized access.`,
        },
        {
          title: "Secure Token Transmission",
          description: "Using secure methods for transmitting tokens, such as JWTs, to prevent token theft and misuse.",
          example: `// Example: Secure JWT Transmission
    const jwt = require('jsonwebtoken');
    const secret = 'your-secret-key';
    
    const generateToken = (user) => {
      return jwt.sign({ id: user._id }, secret, { expiresIn: '1h' });
    };
    
    const verifyToken = (token) => {
      return jwt.verify(token, secret);
    };
    
    // Securely transmitting JWTs ensures that sensitive user 
    information is protected and only accessible to authorized parties.`,
        },
        {
          title: "Data Integrity Verification",
          description: "Ensuring data integrity by implementing methods to verify that data has not been tampered with during transmission.",
          example: `// Example: Data Integrity with Hashing
    const crypto = require('crypto');
    
    const hashData = (data) => {
      return crypto.createHash('sha256').update(data).digest('hex');
    };
    
    const verifyData = (data, hash) => {
      return hashData(data) === hash;
    };
    
    // Hashing data allows verification of its integrity, ensuring that the 
    data received has not been altered during transmission.`,
        }
      ]
    },
    {
      title: "Server-Side Caching (Advanced Techniques)",
      description: "Advanced techniques for implementing server-side caching to enhance performance by reducing load times and improving response efficiency.",
      example: `// Example: Caching with Redis
    const redis = require('redis');
    const client = redis.createClient();
    
    app.get('/data', (req, res) => {
      const cacheKey = 'dataCacheKey';
      client.get(cacheKey, (err, data) => {
        if (data) {
          return res.send(JSON.parse(data));
        }
        // Fetch data from database
        fetchDataFromDatabase().then(data => {
          client.setex(cacheKey, 3600, JSON.stringify(data));
          res.send(data);
        });
      });
    });
    
    // Caching responses reduces the load on the database and speeds up 
    response times by storing frequently requested data in memory.`,
      subtopics: [
        {
          title: "In-Memory Caching",
          description: "Using in-memory caching to store frequently accessed data temporarily within the server’s memory for rapid retrieval.",
          example: `// Example: In-Memory Caching with Node.js
    const NodeCache = require('node-cache');
    const cache = new NodeCache();
    
    app.get('/data', (req, res) => {
      const cacheKey = 'dataCacheKey';
      const cachedData = cache.get(cacheKey);
    
      if (cachedData) {
        return res.send(cachedData);
      }
    
      // Fetch data from database
      fetchDataFromDatabase().then(data => {
        cache.set(cacheKey, data, 3600); // Cache for 1 hour
        res.send(data);
      });
    });
    
    // In-memory caching improves response times by reducing the need to 
    fetch data from slower storage solutions.`,
        },
        {
          title: "Distributed Caching",
          description: "Implementing distributed caching to scale caching mechanisms across multiple servers or instances, ensuring consistency and performance.",
          example: `// Example: Distributed Caching with Redis
    const redis = require('redis');
    const client = redis.createClient({ url: 'redis://localhost:6379' });
    
    app.get('/data', (req, res) => {
      const cacheKey = 'dataCacheKey';
      client.get(cacheKey, (err, data) => {
        if (data) {
          return res.send(JSON.parse(data));
        }
        // Fetch data from database
        fetchDataFromDatabase().then(data => {
          client.setex(cacheKey, 3600, JSON.stringify(data));
          res.send(data);
        });
      });
    });
    
    // Distributed caching allows multiple servers to share a common cache, enhancing 
    scalability and reducing load on individual servers.`,
        },
        {
          title: "Cache Invalidation",
          description: "Strategies for invalidating or updating cached data to ensure that stale or outdated information is not served to users.",
          example: `// Example: Cache Invalidation
    const redis = require('redis');
    const client = redis.createClient();
    
    const updateData = async (data) => {
      // Update data in the database
      await updateDataInDatabase(data);
    
      // Invalidate cache
      client.del('dataCacheKey');
    };
    
    // Call updateData when data changes
    updateData(newData);
    
    // Cache invalidation ensures that users receive the most 
    current data by removing outdated cache entries when data is updated.`,
        },
        {
          title: "Cache Compression",
          description: "Compressing cached data to reduce memory usage and improve cache performance.",
          example: `// Example: Cache Compression with gzip
    const zlib = require('zlib');
    const redis = require('redis');
    const client = redis.createClient();
    
    app.get('/data', (req, res) => {
      const cacheKey = 'dataCacheKey';
      client.get(cacheKey, (err, compressedData) => {
        if (compressedData) {
          zlib.gunzip(compressedData, (err, data) => {
            if (err) throw err;
            res.send(JSON.parse(data));
          });
        } else {
          // Fetch data from database
          fetchDataFromDatabase().then(data => {
            zlib.gzip(JSON.stringify(data), (err, compressedData) => {
              if (err) throw err;
              client.setex(cacheKey, 3600, compressedData);
              res.send(data);
            });
          });
        }
      });
    });
    
    // Compressing cached data reduces memory usage and speeds 
    up data retrieval by storing data in a more efficient format.`,
        }
      ]
    },
    {
      title: "API Documentation and Testing (Advanced Techniques)",
      description: "Advanced techniques for documenting and testing APIs, including generating comprehensive documentation, automated testing, and validating API responses.",
      example: `// Example: Generating API Documentation with Swagger
        const swaggerJsDoc = require('swagger-jsdoc');
        const swaggerUi = require('swagger-ui-express');
        const express = require('express');
        const app = express();
    
        const swaggerOptions = {
          definition: {
            openapi: '3.0.0',
            info: {
              title: 'API Documentation',
              version: '1.0.0',
              description: 'API documentation for the application.'
            }
          },
          apis: ['./routes/*.js'] // Path to the API docs
        };
    
        const swaggerDocs = swaggerJsDoc(swaggerOptions);
    
        app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
    
        // Swagger provides an interactive UI for exploring 
        API endpoints and their details.`,
      subtopics: [
        {
          title: "Automated API Testing",
          description: "Implementing automated tests to verify API functionality and ensure endpoints work as expected.",
          example: `// Example: Automated API Testing with Jest and Supertest
        const request = require('supertest');
        const app = require('../app'); // Your Express app
    
        describe('GET /api/users', () => {
          it('should return a list of users', async () => {
            const response = await request(app).get('/api/users');
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('users');
          });
        });
        
        // Automated testing ensures that API endpoints are 
        functioning correctly and helps in catching bugs early.`,
        },
        {
          title: "API Documentation with Swagger/OpenAPI",
          description: "Creating comprehensive API documentation to describe endpoints, request parameters, and response formats.",
          example: `// Example: Documenting API Endpoints with Swagger
        /**
         * @swagger
         * /api/users:
         *   get:
         *     summary: Retrieve a list of users
         *     responses:
         *       200:
         *         description: A list of users
         *         content:
         *           application/json:
         *             schema:
         *               type: object
         *               properties:
         *                 users:
         *                   type: array
         *                   items:
         *                     type: string
         */
        
        // Swagger annotations provide a clear description of 
        API endpoints and expected responses.`,
        },
        {
          title: "API Mocking and Simulation",
          description: "Using mocking techniques to simulate API responses for testing and development purposes without relying on actual backend services.",
          example: `// Example: Mocking API Responses with MSW (Mock Service Worker)
        import { rest } from 'msw';
        import { setupServer } from 'msw/node';
    
        const server = setupServer(
          rest.get('/api/users', (req, res, ctx) => {
            return res(ctx.json({ users: ['John', 'Jane'] }));
          })
        );
    
        beforeAll(() => server.listen());
        afterEach(() => server.resetHandlers());
        afterAll(() => server.close());
    
        // Mocking responses allows testing of frontend components 
        without hitting the real API endpoints.`,
        },
        {
          title: "API Response Validation",
          description: "Validating API responses to ensure they conform to the expected schema and structure.",
          example: `// Example: Validating API Responses with Joi
        const Joi = require('joi');
    
        const userSchema = Joi.object({
          id: Joi.number().required(),
          name: Joi.string().required()
        });
    
        app.get('/api/users/:id', (req, res) => {
          const user = { id: 1, name: 'John' }; // Example user data
          const { error } = userSchema.validate(user);
          if (error) return res.status(400).send(error.details);
          res.send(user);
        });
    
        // Response validation ensures that API responses meet 
        the defined schema, providing consistency and reliability.`,
        }
      ]
    },
    {
      title: "Continuous Integration and Continuous Deployment (CI/CD)",
      description: "Advanced techniques for automating the build, test, and deployment processes in a software development lifecycle, including setting up CI/CD pipelines and managing deployment environments.",
      example: `// Example: Simple CI/CD Pipeline with GitHub Actions
        // .github/workflows/ci-cd.yml
        name: CI/CD Pipeline
    
        on:
          push:
            branches:
              - main
    
        jobs:
          build:
            runs-on: ubuntu-latest
            steps:
              - name: Checkout code
                uses: actions/checkout@v2
    
              - name: Set up Node.js
                uses: actions/setup-node@v2
                with:
                  node-version: '14'
    
              - name: Install dependencies
                run: npm install
    
              - name: Run tests
                run: npm test
    
              - name: Build application
                run: npm run build
    
              - name: Deploy to Production
                run: npm run deploy
                env:
                  NODE_ENV: production
                  DEPLOYMENT_KEY: secrets.DEPLOYMENT_KEY
        
        // This workflow automates the process of building, testing, 
        and deploying the application whenever changes are pushed to 
        the 'main' branch.`,
      subtopics: [
        {
          title: "Setting Up CI/CD Pipelines",
          description: "Automating the build, test, and deployment processes using CI/CD tools and services to ensure consistent and reliable delivery of software.",
          example: `// Example: Setting Up a CI/CD Pipeline with Jenkins
        pipeline {
          agent any
    
          stages {
            stage('Build') {
              steps {
                checkout scm
                script {
                  sh 'npm install'
                  sh 'npm run build'
                }
              }
            }
            stage('Test') {
              steps {
                script {
                  sh 'npm test'
                }
              }
            }
            stage('Deploy') {
              steps {
                script {
                  sh 'npm run deploy'
                }
              }
            }
          }
        }
        
        // This Jenkins pipeline automates the build, test, and 
        deploy stages, ensuring that each commit is validated and 
        deployed consistently.`,
        },
        {
          title: "Managing Deployment Environments",
          description: "Configuring and managing different environments such as development, staging, and production to ensure smooth and controlled releases.",
          example: `// Example: Environment Configuration with Docker
        // Dockerfile
        FROM node:14
    
        WORKDIR /app
        COPY package*.json ./
        RUN npm install
        COPY . .
    
        ENV NODE_ENV=production
    
        EXPOSE 3000
        CMD ["npm", "start"]
        
        // Using Docker ensures that the application runs 
        consistently across different environments by containerizing 
        it with its dependencies.`,
        },
        {
          title: "Automated Testing",
          description: "Integrating automated testing into the CI/CD pipeline to ensure code quality and catch issues early in the development process.",
          example: `// Example: Running Tests with Jest in a CI Pipeline
        // .github/workflows/test.yml
        name: Run Tests
    
        on:
          push:
            branches:
              - main
    
        jobs:
          test:
            runs-on: ubuntu-latest
            steps:
              - name: Checkout code
                uses: actions/checkout@v2
    
              - name: Set up Node.js
                uses: actions/setup-node@v2
                with:
                  node-version: '14'
    
              - name: Install dependencies
                run: npm install
    
              - name: Run tests
                run: npm test
        
        // This GitHub Actions workflow runs tests automatically 
        on each push to the 'main' branch to ensure code changes 
        do not introduce regressions.`,
        },
        {
          title: "Deployment Strategies",
          description: "Implementing various deployment strategies such as blue-green deployments, canary releases, and rolling updates to minimize downtime and reduce risk.",
          example: `// Example: Blue-Green Deployment Strategy
        // Use two environments: blue and green
        // Switch traffic between environments to deploy updates with zero downtime
        const deployToEnvironment = async (environment) => {
          console.log('Deploying to environment environment...');
          // Deploy application to the specified environment
        };
    
        const switchTraffic = async (currentEnvironment, newEnvironment) => {
          console.log('Switching traffic from currentEnvironment to newEnvironment...');
          // Update load balancer configuration to route traffic to the new environment
        };
    
        // Deploy to green environment and switch traffic
        deployToEnvironment('green').then(() => {
          switchTraffic('blue', 'green');
        });
        
        // Blue-green deployments allow for seamless switching between 
        environments, minimizing downtime during updates.`,
        }
      ]
    },
    {
      title: "Advanced Security Practices",
      description: "Advanced techniques for enhancing the security of web applications, including implementing robust authentication mechanisms, protecting against common vulnerabilities, and securing data transmission.",
      example: `// Example: Implementing JWT Authentication
    const jwt = require('jsonwebtoken');
    const generateToken = (user) => {
      return jwt.sign({ userId: user.id }, 'your-secret-key', { expiresIn: '1h' });
    };
    
    // JWT authentication ensures secure user sessions 
    by generating and validating tokens.`,
      subtopics: [
        {
          title: "Robust Authentication Mechanisms",
          description: "Implementing strong authentication practices to ensure secure access to your application.",
          example: `// Example: Multi-Factor Authentication (MFA)
    const speakeasy = require('speakeasy');
    const otp = speakeasy.totp({ secret: 'your-secret' });
    
    // MFA adds an extra layer of security by requiring 
    additional verification steps beyond just a password.`,
        },
        {
          title: "Protecting Against Common Vulnerabilities",
          description: "Securing applications against vulnerabilities such as XSS, CSRF, and SQL Injection through best practices and preventive measures.",
          example: `// Example: CSRF Protection
    const csurf = require('csurf');
    app.use(csurf({ cookie: true }));
    
    // CSRF protection prevents unauthorized commands 
    from being transmitted from a user that the web application trusts.`,
        },
        {
          title: "Securing Data Transmission",
          description: "Ensuring that data transmitted between the client and server is encrypted and secure.",
          example: `// Example: HTTPS for Secure Data Transmission
    const https = require('https');
    const fs = require('fs');
    
    const server = https.createServer({
      key: fs.readFileSync('path/to/your/private-key.pem'),
      cert: fs.readFileSync('path/to/your/certificate.pem')
    }, app);
    
    server.listen(443, () => {
      console.log('Server is running on HTTPS');
    });
    
    // HTTPS encrypts data transmitted between the client 
    and server, protecting it from eavesdropping and tampering.`,
        },
        {
          title: "Data Encryption and Storage Security",
          description: "Implementing encryption for sensitive data both at rest and in transit to protect it from unauthorized access.",
          example: `// Example: Data Encryption with AES
    const crypto = require('crypto');
    const algorithm = 'aes-256-cbc';
    const key = crypto.randomBytes(32);
    const iv = crypto.randomBytes(16);
    
    const encrypt = (text) => {
      let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
      let encrypted = cipher.update(text);
      encrypted = Buffer.concat([encrypted, cipher.final()]);
      return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
    };
    
    // AES encryption secures sensitive data by converting it 
    into an unreadable format.`,
        }
      ]
    }
  ]
};