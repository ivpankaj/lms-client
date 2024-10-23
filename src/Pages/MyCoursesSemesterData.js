// src/data/semestersData.js

// export const semestersData = {
//   1: [
//     {
//       id: 1,
//       name: 'Foundations And Git',
//       unit: 'Unit 01',
//       status: 'Completed',
//       description: {
//         overview: `
//             Web development is a broad field that involves building and maintaining websites and web applications. It encompasses a variety of disciplines and technologies, from front-end design to back-end server management. In this overview, we'll touch on the basics of web development and introduce Git, a powerful tool for version control that is essential for managing code changes in collaborative environments.
//           `,
//         subtopics: [
//           {
//             title: 'Web Development Basics',
//             content: `
//                 **Front-End Development**: This is the part of web development that deals with the user interface and experience. Front-end developers use languages such as HTML (HyperText Markup Language), CSS (Cascading Style Sheets), and JavaScript to create the visual aspects of a website.

//                 **Back-End Development**: This aspect involves the server-side logic of a web application. Back-end developers work with server-side languages like Python, Ruby, Java, or PHP, and databases such as MySQL, PostgreSQL, or MongoDB.

//                 **Full-Stack Development**: Full-stack developers handle both front-end and back-end development, giving them a comprehensive view of the entire web application.
//               `,
//             innersubtopics: [
//               {
//                 title: 'Front-End Development',
//                 content: `
//                     Front-end development involves creating the visual and interactive aspects of a website or web application. This typically includes working with technologies such as HTML, CSS, and JavaScript.
//                   `,
//                 example: `  **Key Technologies:**
//                     - **HTML (HyperText Markup Language):** Structures the content on the web page.
//                     - **CSS (Cascading Style Sheets):** Styles the appearance of the web page.
//                     - **JavaScript:** Adds interactivity and dynamic behavior.

//                     **Example Code:**
//                     \`\`\`html
//                     <!DOCTYPE html>
//                     <html lang="en">
//                     <head>
//                       <meta charset="UTF-8">
//                       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                       <title>My Web Page</title>
//                       <style>
//                         body { font-family: Arial, sans-serif; }
//                         h1 { color: blue; }
//                       </style>
//                     </head>
//                     <body>
//                       <h1>Hello, World!</h1>
//                     </body>
//                     </html>
//                     \`\`\`
//                     This example demonstrates a basic HTML structure with embedded CSS for styling.
//                   `,
//               },
//               {
//                 title: 'Back-End Development',
//                 content: `
//                     Back-end development involves server-side programming that handles data processing, database interactions, and server logic. Common back-end languages include Python, Ruby, Java, and PHP.

//                     **Key Components:**
//                     - **Server-Side Languages:** Handle the logic and data processing (e.g., Python, Node.js).
//                     - **Databases:** Store and manage data (e.g., MySQL, MongoDB).
//                     - **APIs (Application Programming Interfaces):** Enable communication between the server and client.

//                     **Example Code (Node.js with Express):**
//                     \`\`\`javascript
//                     const express = require('express');
//                     const app = express();
//                     const port = 3000;

//                     app.get('/', (req, res) => {
//                       res.send('Hello World!');
//                     });

//                     app.listen(port, () => {
//                       console.log(\`Server running at http://localhost:\${port}/\`);
//                     });
//                     \`\`\`
//                     This example shows a basic server setup using Node.js and Express that responds with "Hello World!".
//                   `,
//                 example: `  **Key Components:**
//       - **Server-Side Languages:** Handle the logic and data processing (e.g., Python, Node.js).
//       - **Databases:** Store and manage data (e.g., MySQL, MongoDB).
//       - **APIs (Application Programming Interfaces):** Enable communication between the server and client.

//       **Example Code (Node.js with Express):**
//       \`\`\`javascript
//       const express = require('express');
//       const app = express();
//       const port = 3000;

//       app.get('/', (req, res) => {
//         res.send('Hello World!');
//       });

//       app.listen(port, () => {
//         console.log(\`Server running at http://localhost:\${port}/\`);
//       });
//       \`\`\`
//       This example shows a basic server setup using Node.js and Express that responds with "Hello World!".
//     `,
//               },
//               {
//                 title: 'Full-Stack Development',
//                 content: `
//                     Full-stack development encompasses both front-end and back-end development, allowing developers to build complete web applications. Full-stack developers are skilled in both client-side and server-side technologies.
//                `,
//                 example: ` **Core Skills:**
//                     - **Front-End Technologies:** HTML, CSS, JavaScript.
//                     - **Back-End Technologies:** Server-side languages, databases, APIs.
//                     - **Integration:** Combining front-end and back-end to build a functional web application.

//                     **Example Stack:**
//                     - **Front-End:** React for building the user interface.
//                     - **Back-End:** Node.js with Express for server logic.
//                     - **Database:** MongoDB for data storage.

//                     **Example Code (React Component):**
//                     \`\`\`javascript
//                     import React from 'react';

//                     function App() {
//                       return (
//                         <div>
//                           <h1>Hello from React!</h1>
//                         </div>
//                       );
//                     }

//                     export default App;
//                     \`\`\`
//                     This example illustrates a simple React component that renders a greeting.

//                  example:  **Core Skills:**
//                  - **Front-End Technologies:** HTML, CSS, JavaScript.
//                  - **Back-End Technologies:** Server-side languages, databases, APIs.
//                  - **Integration:** Combining front-end and back-end to build a functional web application.

//                  **Example Stack:**
//                  - **Front-End:** React for building the user interface.
//                  - **Back-End:** Node.js with Express for server logic.
//                  - **Database:** MongoDB for data storage.

//                  **Example Code (React Component):**
//                  \`\`\`javascript
//                  import React from 'react';

//                  function App() {
//                    return (
//                      <div>
//                        <h1>Hello from React!</h1>
//                      </div>
//                    );
//                  }

//                  export default App;
//                  \`\`\`
//                  This example illustrates a simple React component that renders a greeting.`,

//               },
//               // Add more subtopics as needed
//             ],

//           },
//           {
//             title: 'Introduction to Git',
//             content: `
//                 Git is a distributed version control system that helps developers manage changes to their code. It is especially useful in collaborative projects, where multiple people work on the same codebase. Here are some key concepts:

//                 **Repositories**: A Git repository (repo) is a directory that contains all the project files and the version history of those files. Repositories can be local (on your computer) or remote (hosted on platforms like GitHub or GitLab).

//                 **Commits**: A commit is a snapshot of your code at a particular point in time. Each commit has a unique ID and includes a message describing the changes made.

//                 **Branches**: Branches allow you to work on different features or fixes independently from the main codebase (often called the "main" or "master" branch).

//                 **Merging**: Merging combines changes from different branches. When you finish working on a feature branch, you merge it into the main branch to integrate your changes.

//                 **Collaboration**: Git facilitates collaboration by allowing multiple developers to work on the same project simultaneously.
//               `,
//             innersubtopics: [
//               {
//                 title: 'Repositories',
//                 content: `
//                     A Git repository (repo) is a directory that contains all the project files and the version history of those files. Repositories can be local (on your computer) or remote (hosted on platforms like GitHub or GitLab).

//                     **Example Command:**
//                     \`\`\`bash
//                     git init
//                     \`\`\`
//                     Initializes a new Git repository.
//                   `,
//               },
//               {
//                 title: 'Commits',
//                 content: `
//                     A commit is a snapshot of your code at a particular point in time. Each commit has a unique ID and includes a message describing the changes made.

//                     **Example Command:**
//                     \`\`\`bash
//                     git commit -m "Fixed bug in user authentication module"
//                     \`\`\`
//                     Creates a commit with a message.
//                   `,
//               },
//               // Add more subtopics as needed
//             ],
//           },
//         ],
//       },
//       // example: `
//       //   \`\`\`javascript
//       //   // Example of a Git commit command
//       //   git commit -m "Fixed bug in user authentication module"
//       //   \`\`\`
//       // `,
//       additionalNotes: 'Ensure to understand Git commands like commit, push, pull, and merge.',
//     },
//     {
//       id: 1,
//       name: 'Foundations And Git',
//       unit: 'Unit 01',
//       status: 'Completed',
//       description: {
//         overview: `
//             Web development is a broad field that involves building and maintaining websites and web applications. It encompasses a variety of disciplines and technologies, from front-end design to back-end server management. In this overview, we'll touch on the basics of web development and introduce Git, a powerful tool for version control that is essential for managing code changes in collaborative environments.
//           `,
//         subtopics: [
//           {
//             title: 'Web Development Basics',
//             content: `
//                 **Front-End Development**: This is the part of web development that deals with the user interface and experience. Front-end developers use languages such as HTML (HyperText Markup Language), CSS (Cascading Style Sheets), and JavaScript to create the visual aspects of a website.

//                 **Back-End Development**: This aspect involves the server-side logic of a web application. Back-end developers work with server-side languages like Python, Ruby, Java, or PHP, and databases such as MySQL, PostgreSQL, or MongoDB.

//                 **Full-Stack Development**: Full-stack developers handle both front-end and back-end development, giving them a comprehensive view of the entire web application.
//               `,
//             innersubtopics: [
//               {
//                 title: 'Front-End Development',
//                 content: `
//                     Front-end development involves creating the visual and interactive aspects of a website or web application. This typically includes working with technologies such as HTML, CSS, and JavaScript.
//                   `,
//                 example: `  **Key Technologies:**
//                     - **HTML (HyperText Markup Language):** Structures the content on the web page.
//                     - **CSS (Cascading Style Sheets):** Styles the appearance of the web page.
//                     - **JavaScript:** Adds interactivity and dynamic behavior.

//                     **Example Code:**
//                     \`\`\`html
//                     <!DOCTYPE html>
//                     <html lang="en">
//                     <head>
//                       <meta charset="UTF-8">
//                       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                       <title>My Web Page</title>
//                       <style>
//                         body { font-family: Arial, sans-serif; }
//                         h1 { color: blue; }
//                       </style>
//                     </head>
//                     <body>
//                       <h1>Hello, World!</h1>
//                     </body>
//                     </html>
//                     \`\`\`
//                     This example demonstrates a basic HTML structure with embedded CSS for styling.
//                   `,
//               },
//               {
//                 title: 'Back-End Development',
//                 content: `
//                     Back-end development involves server-side programming that handles data processing, database interactions, and server logic. Common back-end languages include Python, Ruby, Java, and PHP.

//                     **Key Components:**
//                     - **Server-Side Languages:** Handle the logic and data processing (e.g., Python, Node.js).
//                     - **Databases:** Store and manage data (e.g., MySQL, MongoDB).
//                     - **APIs (Application Programming Interfaces):** Enable communication between the server and client.

//                     **Example Code (Node.js with Express):**
//                     \`\`\`javascript
//                     const express = require('express');
//                     const app = express();
//                     const port = 3000;

//                     app.get('/', (req, res) => {
//                       res.send('Hello World!');
//                     });

//                     app.listen(port, () => {
//                       console.log(\`Server running at http://localhost:\${port}/\`);
//                     });
//                     \`\`\`
//                     This example shows a basic server setup using Node.js and Express that responds with "Hello World!".
//                   `,
//                 example: `  **Key Components:**
//       - **Server-Side Languages:** Handle the logic and data processing (e.g., Python, Node.js).
//       - **Databases:** Store and manage data (e.g., MySQL, MongoDB).
//       - **APIs (Application Programming Interfaces):** Enable communication between the server and client.

//       **Example Code (Node.js with Express):**
//       \`\`\`javascript
//       const express = require('express');
//       const app = express();
//       const port = 3000;

//       app.get('/', (req, res) => {
//         res.send('Hello World!');
//       });

//       app.listen(port, () => {
//         console.log(\`Server running at http://localhost:\${port}/\`);
//       });
//       \`\`\`
//       This example shows a basic server setup using Node.js and Express that responds with "Hello World!".
//     `,
//               },
//               {
//                 title: 'Full-Stack Development',
//                 content: `
//                     Full-stack development encompasses both front-end and back-end development, allowing developers to build complete web applications. Full-stack developers are skilled in both client-side and server-side technologies.
//                `,
//                 example: ` **Core Skills:**
//                     - **Front-End Technologies:** HTML, CSS, JavaScript.
//                     - **Back-End Technologies:** Server-side languages, databases, APIs.
//                     - **Integration:** Combining front-end and back-end to build a functional web application.

//                     **Example Stack:**
//                     - **Front-End:** React for building the user interface.
//                     - **Back-End:** Node.js with Express for server logic.
//                     - **Database:** MongoDB for data storage.

//                     **Example Code (React Component):**
//                     \`\`\`javascript
//                     import React from 'react';

//                     function App() {
//                       return (
//                         <div>
//                           <h1>Hello from React!</h1>
//                         </div>
//                       );
//                     }

//                     export default App;
//                     \`\`\`
//                     This example illustrates a simple React component that renders a greeting.

//                  example:  **Core Skills:**
//                  - **Front-End Technologies:** HTML, CSS, JavaScript.
//                  - **Back-End Technologies:** Server-side languages, databases, APIs.
//                  - **Integration:** Combining front-end and back-end to build a functional web application.

//                  **Example Stack:**
//                  - **Front-End:** React for building the user interface.
//                  - **Back-End:** Node.js with Express for server logic.
//                  - **Database:** MongoDB for data storage.

//                  **Example Code (React Component):**
//                  \`\`\`javascript
//                  import React from 'react';

//                  function App() {
//                    return (
//                      <div>
//                        <h1>Hello from React!</h1>
//                      </div>
//                    );
//                  }

//                  export default App;
//                  \`\`\`
//                  This example illustrates a simple React component that renders a greeting.`,

//               },
//               // Add more subtopics as needed
//             ],

//           },
//           {
//             title: 'Introduction to Git',
//             content: `
//                 Git is a distributed version control system that helps developers manage changes to their code. It is especially useful in collaborative projects, where multiple people work on the same codebase. Here are some key concepts:

//                 **Repositories**: A Git repository (repo) is a directory that contains all the project files and the version history of those files. Repositories can be local (on your computer) or remote (hosted on platforms like GitHub or GitLab).

//                 **Commits**: A commit is a snapshot of your code at a particular point in time. Each commit has a unique ID and includes a message describing the changes made.

//                 **Branches**: Branches allow you to work on different features or fixes independently from the main codebase (often called the "main" or "master" branch).

//                 **Merging**: Merging combines changes from different branches. When you finish working on a feature branch, you merge it into the main branch to integrate your changes.

//                 **Collaboration**: Git facilitates collaboration by allowing multiple developers to work on the same project simultaneously.
//               `,
//             innersubtopics: [
//               {
//                 title: 'Repositories',
//                 content: `
//                     A Git repository (repo) is a directory that contains all the project files and the version history of those files. Repositories can be local (on your computer) or remote (hosted on platforms like GitHub or GitLab).

//                     **Example Command:**
//                     \`\`\`bash
//                     git init
//                     \`\`\`
//                     Initializes a new Git repository.
//                   `,
//               },
//               {
//                 title: 'Commits',
//                 content: `
//                     A commit is a snapshot of your code at a particular point in time. Each commit has a unique ID and includes a message describing the changes made.

//                     **Example Command:**
//                     \`\`\`bash
//                     git commit -m "Fixed bug in user authentication module"
//                     \`\`\`
//                     Creates a commit with a message.
//                   `,
//               },
//               // Add more subtopics as needed
//             ],
//           },
//         ],
//       },
//       // example: `
//       //   \`\`\`javascript
//       //   // Example of a Git commit command
//       //   git commit -m "Fixed bug in user authentication module"
//       //   \`\`\`
//       // `,
//       additionalNotes: 'Ensure to understand Git commands like commit, push, pull, and merge.',
//     },
//     // Add more modules as needed
//   ],
//   2: [
//     {
//       id: 1,
//       name: 'java script typescript and tailwind css',
//       unit: 'Unit 01',
//       status: 'Completed',
//       description: {
//         overview: `
//             Web development is a broad field that involves building and maintaining websites and web applications. It encompasses a variety of disciplines and technologies, from front-end design to back-end server management. In this overview, we'll touch on the basics of web development and introduce Git, a powerful tool for version control that is essential for managing code changes in collaborative environments.
//           `,
//         subtopics: [
//           {
//             title: 'Web Development Basics',
//             content: `
//                 **Front-End Development**: This is the part of web development that deals with the user interface and experience. Front-end developers use languages such as HTML (HyperText Markup Language), CSS (Cascading Style Sheets), and JavaScript to create the visual aspects of a website.

//                 **Back-End Development**: This aspect involves the server-side logic of a web application. Back-end developers work with server-side languages like Python, Ruby, Java, or PHP, and databases such as MySQL, PostgreSQL, or MongoDB.

//                 **Full-Stack Development**: Full-stack developers handle both front-end and back-end development, giving them a comprehensive view of the entire web application.
//               `,
//             innersubtopics: [
//               {
//                 title: 'Front-End Development',
//                 content: `
//                     Front-end development involves creating the visual and interactive aspects of a website or web application. This typically includes working with technologies such as HTML, CSS, and JavaScript.
//                   `,
//                 example: `  **Key Technologies:**
//                     - **HTML (HyperText Markup Language):** Structures the content on the web page.
//                     - **CSS (Cascading Style Sheets):** Styles the appearance of the web page.
//                     - **JavaScript:** Adds interactivity and dynamic behavior.

//                     **Example Code:**
//                     \`\`\`html
//                     <!DOCTYPE html>
//                     <html lang="en">
//                     <head>
//                       <meta charset="UTF-8">
//                       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                       <title>My Web Page</title>
//                       <style>
//                         body { font-family: Arial, sans-serif; }
//                         h1 { color: blue; }
//                       </style>
//                     </head>
//                     <body>
//                       <h1>Hello, World!</h1>
//                     </body>
//                     </html>
//                     \`\`\`
//                     This example demonstrates a basic HTML structure with embedded CSS for styling.
//                   `,
//               },
//               {
//                 title: 'Back-End Development',
//                 content: `
//                     Back-end development involves server-side programming that handles data processing, database interactions, and server logic. Common back-end languages include Python, Ruby, Java, and PHP.

//                     **Key Components:**
//                     - **Server-Side Languages:** Handle the logic and data processing (e.g., Python, Node.js).
//                     - **Databases:** Store and manage data (e.g., MySQL, MongoDB).
//                     - **APIs (Application Programming Interfaces):** Enable communication between the server and client.

//                     **Example Code (Node.js with Express):**
//                     \`\`\`javascript
//                     const express = require('express');
//                     const app = express();
//                     const port = 3000;

//                     app.get('/', (req, res) => {
//                       res.send('Hello World!');
//                     });

//                     app.listen(port, () => {
//                       console.log(\`Server running at http://localhost:\${port}/\`);
//                     });
//                     \`\`\`
//                     This example shows a basic server setup using Node.js and Express that responds with "Hello World!".
//                   `,
//                 example: `  **Key Components:**
//       - **Server-Side Languages:** Handle the logic and data processing (e.g., Python, Node.js).
//       - **Databases:** Store and manage data (e.g., MySQL, MongoDB).
//       - **APIs (Application Programming Interfaces):** Enable communication between the server and client.

//       **Example Code (Node.js with Express):**
//       \`\`\`javascript
//       const express = require('express');
//       const app = express();
//       const port = 3000;

//       app.get('/', (req, res) => {
//         res.send('Hello World!');
//       });

//       app.listen(port, () => {
//         console.log(\`Server running at http://localhost:\${port}/\`);
//       });
//       \`\`\`
//       This example shows a basic server setup using Node.js and Express that responds with "Hello World!".
//     `,
//               },
//               {
//                 title: 'Full-Stack Development',
//                 content: `
//                     Full-stack development encompasses both front-end and back-end development, allowing developers to build complete web applications. Full-stack developers are skilled in both client-side and server-side technologies.
//                `,
//                 example: ` **Core Skills:**
//                     - **Front-End Technologies:** HTML, CSS, JavaScript.
//                     - **Back-End Technologies:** Server-side languages, databases, APIs.
//                     - **Integration:** Combining front-end and back-end to build a functional web application.

//                     **Example Stack:**
//                     - **Front-End:** React for building the user interface.
//                     - **Back-End:** Node.js with Express for server logic.
//                     - **Database:** MongoDB for data storage.

//                     **Example Code (React Component):**
//                     \`\`\`javascript
//                     import React from 'react';

//                     function App() {
//                       return (
//                         <div>
//                           <h1>Hello from React!</h1>
//                         </div>
//                       );
//                     }

//                     export default App;
//                     \`\`\`
//                     This example illustrates a simple React component that renders a greeting.

//                  example:  **Core Skills:**
//                  - **Front-End Technologies:** HTML, CSS, JavaScript.
//                  - **Back-End Technologies:** Server-side languages, databases, APIs.
//                  - **Integration:** Combining front-end and back-end to build a functional web application.

//                  **Example Stack:**
//                  - **Front-End:** React for building the user interface.
//                  - **Back-End:** Node.js with Express for server logic.
//                  - **Database:** MongoDB for data storage.

//                  **Example Code (React Component):**
//                  \`\`\`javascript
//                  import React from 'react';

//                  function App() {
//                    return (
//                      <div>
//                        <h1>Hello from React!</h1>
//                      </div>
//                    );
//                  }

//                  export default App;
//                  \`\`\`
//                  This example illustrates a simple React component that renders a greeting.`,

//               },
//             ],

//           },
//           {
//             title: 'Introduction to Git',
//             content: `
//                 Git is a distributed version control system that helps developers manage changes to their code. It is especially useful in collaborative projects, where multiple people work on the same codebase. Here are some key concepts:

//                 **Repositories**: A Git repository (repo) is a directory that contains all the project files and the version history of those files. Repositories can be local (on your computer) or remote (hosted on platforms like GitHub or GitLab).

//                 **Commits**: A commit is a snapshot of your code at a particular point in time. Each commit has a unique ID and includes a message describing the changes made.

//                 **Branches**: Branches allow you to work on different features or fixes independently from the main codebase (often called the "main" or "master" branch).

//                 **Merging**: Merging combines changes from different branches. When you finish working on a feature branch, you merge it into the main branch to integrate your changes.

//                 **Collaboration**: Git facilitates collaboration by allowing multiple developers to work on the same project simultaneously.
//               `,
//             innersubtopics: [
//               {
//                 title: 'Repositories',
//                 content: `
//                     A Git repository (repo) is a directory that contains all the project files and the version history of those files. Repositories can be local (on your computer) or remote (hosted on platforms like GitHub or GitLab).

//                     **Example Command:**
//                     \`\`\`bash
//                     git init
//                     \`\`\`
//                     Initializes a new Git repository.
//                   `,
//               },
//               {
//                 title: 'Commits',
//                 content: `
//                     A commit is a snapshot of your code at a particular point in time. Each commit has a unique ID and includes a message describing the changes made.

//                     **Example Command:**
//                     \`\`\`bash
//                     git commit -m "Fixed bug in user authentication module"
//                     \`\`\`
//                     Creates a commit with a message.
//                   `,
//               },
//             ],
//           },
//         ],
//       },
//       additionalNotes: 'Ensure to understand Git commands like commit, push, pull, and merge.',
//     },
//     {
//       id: 1,
//       name: 'Foundations And Git',
//       unit: 'Unit 01',
//       status: 'Completed',
//       description: {
//         overview: `
//             Web development is a broad field that involves building and maintaining websites and web applications. It encompasses a variety of disciplines and technologies, from front-end design to back-end server management. In this overview, we'll touch on the basics of web development and introduce Git, a powerful tool for version control that is essential for managing code changes in collaborative environments.
//           `,
//         subtopics: [
//           {
//             title: 'Web Development Basics',
//             content: `
//                 **Front-End Development**: This is the part of web development that deals with the user interface and experience. Front-end developers use languages such as HTML (HyperText Markup Language), CSS (Cascading Style Sheets), and JavaScript to create the visual aspects of a website.

//                 **Back-End Development**: This aspect involves the server-side logic of a web application. Back-end developers work with server-side languages like Python, Ruby, Java, or PHP, and databases such as MySQL, PostgreSQL, or MongoDB.

//                 **Full-Stack Development**: Full-stack developers handle both front-end and back-end development, giving them a comprehensive view of the entire web application.
//               `,
//             innersubtopics: [
//               {
//                 title: 'Front-End Development',
//                 content: `
//                     Front-end development involves creating the visual and interactive aspects of a website or web application. This typically includes working with technologies such as HTML, CSS, and JavaScript.
//                   `,
//                 example: `  **Key Technologies:**
//                     - **HTML (HyperText Markup Language):** Structures the content on the web page.
//                     - **CSS (Cascading Style Sheets):** Styles the appearance of the web page.
//                     - **JavaScript:** Adds interactivity and dynamic behavior.

//                     **Example Code:**
//                     \`\`\`html
//                     <!DOCTYPE html>
//                     <html lang="en">
//                     <head>
//                       <meta charset="UTF-8">
//                       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                       <title>My Web Page</title>
//                       <style>
//                         body { font-family: Arial, sans-serif; }
//                         h1 { color: blue; }
//                       </style>
//                     </head>
//                     <body>
//                       <h1>Hello, World!</h1>
//                     </body>
//                     </html>
//                     \`\`\`
//                     This example demonstrates a basic HTML structure with embedded CSS for styling.
//                   `,
//               },
//               {
//                 title: 'Back-End Development',
//                 content: `
//                     Back-end development involves server-side programming that handles data processing, database interactions, and server logic. Common back-end languages include Python, Ruby, Java, and PHP.

//                     **Key Components:**
//                     - **Server-Side Languages:** Handle the logic and data processing (e.g., Python, Node.js).
//                     - **Databases:** Store and manage data (e.g., MySQL, MongoDB).
//                     - **APIs (Application Programming Interfaces):** Enable communication between the server and client.

//                     **Example Code (Node.js with Express):**
//                     \`\`\`javascript
//                     const express = require('express');
//                     const app = express();
//                     const port = 3000;

//                     app.get('/', (req, res) => {
//                       res.send('Hello World!');
//                     });

//                     app.listen(port, () => {
//                       console.log(\`Server running at http://localhost:\${port}/\`);
//                     });
//                     \`\`\`
//                     This example shows a basic server setup using Node.js and Express that responds with "Hello World!".
//                   `,
//                 example: `  **Key Components:**
//       - **Server-Side Languages:** Handle the logic and data processing (e.g., Python, Node.js).
//       - **Databases:** Store and manage data (e.g., MySQL, MongoDB).
//       - **APIs (Application Programming Interfaces):** Enable communication between the server and client.

//       **Example Code (Node.js with Express):**
//       \`\`\`javascript
//       const express = require('express');
//       const app = express();
//       const port = 3000;

//       app.get('/', (req, res) => {
//         res.send('Hello World!');
//       });

//       app.listen(port, () => {
//         console.log(\`Server running at http://localhost:\${port}/\`);
//       });
//       \`\`\`
//       This example shows a basic server setup using Node.js and Express that responds with "Hello World!".
//     `,
//               },
//               {
//                 title: 'Full-Stack Development',
//                 content: `
//                     Full-stack development encompasses both front-end and back-end development, allowing developers to build complete web applications. Full-stack developers are skilled in both client-side and server-side technologies.
//                `,
//                 example: ` **Core Skills:**
//                     - **Front-End Technologies:** HTML, CSS, JavaScript.
//                     - **Back-End Technologies:** Server-side languages, databases, APIs.
//                     - **Integration:** Combining front-end and back-end to build a functional web application.

//                     **Example Stack:**
//                     - **Front-End:** React for building the user interface.
//                     - **Back-End:** Node.js with Express for server logic.
//                     - **Database:** MongoDB for data storage.

//                     **Example Code (React Component):**
//                     \`\`\`javascript
//                     import React from 'react';

//                     function App() {
//                       return (
//                         <div>
//                           <h1>Hello from React!</h1>
//                         </div>
//                       );
//                     }

//                     export default App;
//                     \`\`\`
//                     This example illustrates a simple React component that renders a greeting.

//                  example:  **Core Skills:**
//                  - **Front-End Technologies:** HTML, CSS, JavaScript.
//                  - **Back-End Technologies:** Server-side languages, databases, APIs.
//                  - **Integration:** Combining front-end and back-end to build a functional web application.

//                  **Example Stack:**
//                  - **Front-End:** React for building the user interface.
//                  - **Back-End:** Node.js with Express for server logic.
//                  - **Database:** MongoDB for data storage.

//                  **Example Code (React Component):**
//                  \`\`\`javascript
//                  import React from 'react';

//                  function App() {
//                    return (
//                      <div>
//                        <h1>Hello from React!</h1>
//                      </div>
//                    );
//                  }

//                  export default App;
//                  \`\`\`
//                  This example illustrates a simple React component that renders a greeting.`,

//               },
//             ],

//           },
//           {
//             title: 'Introduction to Git',
//             content: `
//                 Git is a distributed version control system that helps developers manage changes to their code. It is especially useful in collaborative projects, where multiple people work on the same codebase. Here are some key concepts:

//                 **Repositories**: A Git repository (repo) is a directory that contains all the project files and the version history of those files. Repositories can be local (on your computer) or remote (hosted on platforms like GitHub or GitLab).

//                 **Commits**: A commit is a snapshot of your code at a particular point in time. Each commit has a unique ID and includes a message describing the changes made.

//                 **Branches**: Branches allow you to work on different features or fixes independently from the main codebase (often called the "main" or "master" branch).

//                 **Merging**: Merging combines changes from different branches. When you finish working on a feature branch, you merge it into the main branch to integrate your changes.

//                 **Collaboration**: Git facilitates collaboration by allowing multiple developers to work on the same project simultaneously.
//               `,
//             innersubtopics: [
//               {
//                 title: 'Repositories',
//                 content: `
//                     A Git repository (repo) is a directory that contains all the project files and the version history of those files. Repositories can be local (on your computer) or remote (hosted on platforms like GitHub or GitLab).

//                     **Example Command:**
//                     \`\`\`bash
//                     git init
//                     \`\`\`
//                     Initializes a new Git repository.
//                   `,
//               },
//               {
//                 title: 'Commits',
//                 content: `
//                     A commit is a snapshot of your code at a particular point in time. Each commit has a unique ID and includes a message describing the changes made.

//                     **Example Command:**
//                     \`\`\`bash
//                     git commit -m "Fixed bug in user authentication module"
//                     \`\`\`
//                     Creates a commit with a message.
//                   `,
//               },
//             ],
//           },
//         ],
//       },
//       additionalNotes: 'Ensure to understand Git commands like commit, push, pull, and merge.',
//     },
//   ],
// };


export const semestersData = {
  1: [
    {
      id: 1,
      name: 'Foundations of Web Development',
      unit: 'Unit 1',
      status: 'Reading',
      description: {
        overview: 'Foundations of Web Development" covers the essential building blocks of creating websites and web applications. This topic explores the core technologies and principles behind web development, including HTML for structuring content, CSS for designing and styling, and JavaScript for adding interactivity and dynamic functionality. It also introduces best practices in responsive design, accessibility, and performance optimization, ensuring websites are user-friendly across various devices. Additionally, learners will gain insights into version control, web hosting, and the fundamental concepts of backend development, making it a comprehensive starting point for aspiring web developers.',
        subtopics: [
          {
            title: 'Introduction to Web Development and HTML',
            content: `
            **HTML**: HTML (HyperText Markup Language) is the standard language used to structure and display content on the web.
                **Front-End Development**: This is the part of web development that deals with the user interface and experience. Front-end developers use languages such as HTML (HyperText Markup Language), CSS (Cascading Style Sheets), and JavaScript to create the visual aspects of a website.
  
                **Back-End Development**: This aspect involves the server-side logic of a web application. Back-end developers work with server-side languages like Python, Ruby, Java, or PHP, and databases such as MySQL, PostgreSQL, or MongoDB.
  
                **Full-Stack Development**: Full-stack developers handle both front-end and back-end development, giving them a comprehensive view of the entire web application.
              `,
            innersubtopics: [
              {
                title: 'HTML',
                content: 'HTML (HyperText Markup Language) is the foundational code used to structure web pages and organize content for browsers.',
                example: `**Example Overview:**
  - **HTML (HyperText Markup Language):** Structures the content on the web page.
  - **CSS (Cascading Style Sheets):** Styles the appearance of the web page.
  - **JavaScript:** Adds interactivity and dynamic behavior.
  
  **Example Code:**
html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Basic HTML Page</title>
</head>
<body>
  <h1>Welcome to HTML!</h1>
  <p>This is a simple web page using HTML to display text.</p>
</body>
</html>
  `,
              },
              {
                title: 'Front-End Development',
                content: `
                    Front-end development involves creating the visual and interactive aspects of a website or web application. This typically includes working with technologies such as HTML, CSS, and JavaScript.
                  `,
                example: `  **Key Technologies:**
                    - **HTML (HyperText Markup Language):** Structures the content on the web page.
                    - **CSS (Cascading Style Sheets):** Styles the appearance of the web page.
                    - **JavaScript:** Adds interactivity and dynamic behavior.
              
                    **Example Code:**
                    \`\`\`html
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                      <meta charset="UTF-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <title>My Web Page</title>
                      <style>
                        body { font-family: Arial, sans-serif; }
                        h1 { color: blue; }
                      </style>
                    </head>
                    <body>
                      <h1>Hello, World!</h1>
                    </body>
                    </html>
                    \`\`\`
                    This example demonstrates a basic HTML structure with embedded CSS for styling.
                  `,
              },
              {
                title: 'Back-End Development',
                content: `
                    Back-end development involves server-side programming that handles data processing, database interactions, and server logic. Common back-end languages include Python, Ruby, Java, and PHP.
              
                    **Key Components:**
                    - **Server-Side Languages:** Handle the logic and data processing (e.g., Python, Node.js).
                    - **Databases:** Store and manage data (e.g., MySQL, MongoDB).
                    - **APIs (Application Programming Interfaces):** Enable communication between the server and client.
              
                    **Example Code (Node.js with Express):**
                    \`\`\`javascript
                    const express = require('express');
                    const app = express();
                    const port = 3000;
              
                    app.get('/', (req, res) => {
                      res.send('Hello World!');
                    });
              
                    app.listen(port, () => {
                      console.log(\`Server running at http://localhost:\${port}/\`);
                    });
                    \`\`\`
                    This example shows a basic server setup using Node.js and Express that responds with "Hello World!".
                  `,
                example: `  **Key Components:**
      - **Server-Side Languages:** Handle the logic and data processing (e.g., Python, Node.js).
      - **Databases:** Store and manage data (e.g., MySQL, MongoDB).
      - **APIs (Application Programming Interfaces):** Enable communication between the server and client.

      **Example Code (Node.js with Express):**
      \`\`\`javascript
      const express = require('express');
      const app = express();
      const port = 3000;

      app.get('/', (req, res) => {
        res.send('Hello World!');
      });

      app.listen(port, () => {
        console.log(\`Server running at http://localhost:\${port}/\`);
      });
      \`\`\`
      This example shows a basic server setup using Node.js and Express that responds with "Hello World!".
    `,
              },
              {
                title: 'Full-Stack Development',
                content: `
                    Full-stack development encompasses both front-end and back-end development, allowing developers to build complete web applications. Full-stack developers are skilled in both client-side and server-side technologies.
               `,
                example: ` **Core Skills:**
                    - **Front-End Technologies:** HTML, CSS, JavaScript.
                    - **Back-End Technologies:** Server-side languages, databases, APIs.
                    - **Integration:** Combining front-end and back-end to build a functional web application.
              
                    **Example Stack:**
                    - **Front-End:** React for building the user interface.
                    - **Back-End:** Node.js with Express for server logic.
                    - **Database:** MongoDB for data storage.
              
                    **Example Code (React Component):**
                    \`\`\`javascript
                    import React from 'react';
              
                    function App() {
                      return (
                        <div>
                          <h1>Hello from React!</h1>
                        </div>
                      );
                    }
              
                    export default App;
                    \`\`\`
                    This example illustrates a simple React component that renders a greeting.
                  
                 example:  **Core Skills:**
                 - **Front-End Technologies:** HTML, CSS, JavaScript.
                 - **Back-End Technologies:** Server-side languages, databases, APIs.
                 - **Integration:** Combining front-end and back-end to build a functional web application.
           
                 **Example Stack:**
                 - **Front-End:** React for building the user interface.
                 - **Back-End:** Node.js with Express for server logic.
                 - **Database:** MongoDB for data storage.
           
                 **Example Code (React Component):**
                 \`\`\`javascript
                 import React from 'react';
           
                 function App() {
                   return (
                     <div>
                       <h1>Hello from React!</h1>
                     </div>
                   );
                 }
           
                 export default App;
                 \`\`\`
                 This example illustrates a simple React component that renders a greeting.`,

              },
            ]
          },
          {
            title: 'CSS Fundamentals',
            content: `
  **What is CSS?**: CSS (Cascading Style Sheets) is a stylesheet language used to control the presentation of a web page. It allows developers to apply styles such as colors, layouts, fonts, and spacing to HTML elements.

  **Selectors and Properties**: CSS uses selectors to target specific HTML elements and applies properties to control their appearance. For example, you can use the \`color\` property to change text color, or the \`margin\` property to control spacing around an element.

  **Box Model**: The CSS box model explains how elements are displayed on a web page. Each element is treated as a box that consists of four areas: content, padding, border, and margin.

  **Positioning**: CSS provides various positioning techniques to control the layout of elements. Options include static, relative, absolute, and fixed positioning, allowing developers to precisely place elements on a page.

  **Responsive Design**: Responsive design ensures that a website looks good on all devices. CSS media queries allow developers to apply different styles based on screen size, orientation, and resolution.

  **Flexbox and Grid**: Flexbox and Grid are powerful layout models in CSS that enable developers to create complex, flexible, and responsive designs with ease.
`,
            innersubtopics: [
              {
                title: 'What is CSS?',
                content: 'CSS (Cascading Style Sheets) is a language used to define the visual presentation of HTML elements on a web page, including layout, colors, and fonts.',
                example: `**CSS Fundamentals:**
  - **Selectors:** Identify the HTML elements to be styled.
  - **Properties:** Define the styles applied to the selected elements.
  - **Values:** Specify the settings for each property, such as colors or dimensions.

  **Example Code:**
  css
  /* Basic CSS Example */
  body {
    font-family: Arial, sans-serif; /* Sets the font for the entire page */
    background-color: #f0f0f0; /* Light grey background color */
  }
  
  h1 {
    color: #333; /* Dark grey color for headings */
    text-align: center; /* Center-aligns the heading text */
  }
  
  .container {
    width: 80%; /* Container width set to 80% of the viewport width */
    margin: 0 auto; /* Centers the container horizontally */
    padding: 20px; /* Adds padding inside the container */
    background-color: #fff; /* White background for the container */
  }
                `
              },
              {
                title: 'Selectors and Properties',
                content: 'Selectors in CSS are used to target specific HTML elements that you want to style, while properties define the styles applied to those elements, such as color, font-size, and margin.',
                example: `**Selectors and Properties:**
- **Selectors:** Target specific HTML elements to apply styles. For example, \`p\` targets all '< p > ' elements, while \`.class-name\` targets elements with a specific class.
- **Properties:** Define the style of the selected elements. Common properties include \`color\`, \`font-size\`, and \`margin\`.

**Example Code:**
css
/* Selects all <p> elements and sets their text color to red */
p {
  color: red;
}

/* Selects elements with the class 'highlight' and sets their background color */
.highlight {
  background-color: yellow;
}

/* Selects the element with id 'header' and sets its font size */
#header {
  font-size: 24px;
}
                `
              },
              {
                title: 'Box Model',
                content: 'The CSS Box Model describes how every HTML element is rendered as a rectangular box, including content, padding, border, and margin, which collectively determine the element&apos;s size and spacing on the web page.',
                example: `**Key Concepts of Box Model:**
- **Content:** The actual content of the element, such as text or images.
- **Padding:** The space between the content and the border, inside the element.
- **Border:** The line surrounding the padding (and content), which can have different styles and widths.
- **Margin:** The space outside the border, separating the element from other elements.

**Example Code:**
html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Box Model Example</title>
  <style>
    .box {
      width: 200px;
      padding: 20px;
      border: 5px solid black;
      margin: 15px;
      background-color: lightgray;
    }
  </style>
</head>
<body>
  <div class="box">
    This box demonstrates the CSS box model.
  </div>
</body>
</html>
                `
              },
              {
                title: 'Positioning',
                content: 'Positioning in CSS determines how an element is placed on a page, allowing for precise control over its location using techniques like static, relative, absolute, and fixed positioning.',
                example: `**Key Concepts of Positioning:**
- **Static:** The default positioning where elements flow in the normal document flow.
- **Relative:** Elements are positioned relative to their normal position, allowing for offset adjustments.
- **Absolute:** Elements are removed from the document flow and positioned relative to the nearest positioned ancestor.
- **Fixed:** Elements are positioned relative to the viewport and remain in the same place even when the page is scrolled.
- **Sticky:** Elements switch between relative and fixed positioning based on the scroll position.

**Example Code:**
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Positioning Example</title>
  <style>
    /* Static positioning: default positioning, element flows normally in the document */
    .static-box {
      position: static;
      background-color: lightcoral;
      padding: 10px;
    }

    /* Relative positioning: element is positioned relative to its normal position */
    .relative-box {
      position: relative;
      top: 10px; /* Moves the element 10px down from its normal position */
      left: 20px; /* Moves the element 20px to the right from its normal position */
      background-color: lightgreen;
      padding: 10px;
    }

    /* Absolute positioning: element is positioned relative to the nearest positioned ancestor */
    .absolute-box {
      position: absolute;
      top: 50px; /* Moves the element 50px from the top of its positioned ancestor */
      right: 50px; /* Moves the element 50px from the right edge of its positioned ancestor */
      background-color: lightblue;
      padding: 10px;
    }

    /* Fixed positioning: element is positioned relative to the viewport and stays in place on scroll */
    .fixed-box {
      position: fixed;
      bottom: 10px; /* Moves the element 10px from the bottom of the viewport */
      left: 10px; /* Moves the element 10px from the left edge of the viewport */
      background-color: lightgoldenrodyellow;
      padding: 10px;
    }

    /* Sticky positioning: element toggles between relative and fixed positioning based on scroll position */
    .sticky-box {
      position: sticky;
      top: 0; /* The element will stick to the top of its container when scrolling */
      background-color: lightpink;
      padding: 10px;
    }
  </style>
</head>
<body>
  <!-- Static positioning: flows naturally in the document -->
  <div class="static-box">
    Static Positioning
  </div>
  
  <!-- Relative positioning: offset from its normal position -->
  <div class="relative-box">
    Relative Positioning
  </div>
  
  <!-- Absolute positioning: positioned relative to its nearest positioned ancestor -->
  <div class="absolute-box">
    Absolute Positioning
  </div>
  
  <!-- Fixed positioning: stays in the same place relative to the viewport -->
  <div class="fixed-box">
    Fixed Positioning
  </div>
  
  <!-- Sticky positioning: behaves like relative until it reaches a threshold, then sticks -->
  <div class="sticky-box">
    Sticky Positioning
  </div>
</body>
</html>`
              },
              {
                title: 'Responsive Design',
                content: 'Responsive Design in CSS ensures that web pages adapt seamlessly to different screen sizes and devices using techniques like media queries and flexible layouts.',
                example: `**Key Concepts of Responsive Design:**
- **Fluid Layouts:** Use relative units like percentages instead of fixed units like pixels to ensure that the layout adapts to different screen sizes.
- **Media Queries:** Apply different styles based on the device's characteristics, such as screen width or orientation.
- **Flexible Images:** Ensure images resize within their containing elements to fit various screen sizes without distortion.

**Example Code:**
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Design Example</title>
  <style>
    /* Base styles for all devices */
    .container {
      width: 100%;
      padding: 20px;
      box-sizing: border-box;
    }
    
    .box {
      background-color: lightblue;
      text-align: center;
      padding: 20px;
      border: 1px solid #ccc;
    }

    /* Styles for devices with a maximum width of 600px */
    @media (max-width: 600px) {
      .box {
        background-color: lightcoral;
        font-size: 14px;
      }
    }

    /* Styles for devices with a minimum width of 601px */
    @media (min-width: 601px) {
      .box {
        background-color: lightblue;
        font-size: 18px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="box">
      This box changes color and font size based on screen width.
    </div>
  </div>
</body>
</html>`
              },
              {
                title: 'Flexbox and Grid',
                content: 'Flexbox and Grid are CSS layout models that simplify the creation of responsive and complex web layouts, with Flexbox handling one-dimensional layouts and Grid managing two-dimensional structures.',
                example: `**Key Concepts of Flexbox and Grid:**
**Flexbox:** A layout model that allows elements within a container to be aligned and distributed efficiently, both horizontally and vertically. Flexbox is useful for creating responsive layouts with flexible item sizes.
**Grid:** A powerful two-dimensional layout system that allows for the creation of complex web layouts using rows and columns. It provides more control over both horizontal and vertical alignment.

**Example Code:**
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flexbox and Grid Example</title>
  <style>
    /* Flexbox Example */
    .flex-container {
      display: flex;
      justify-content: space-between; /* Align items horizontally */
      align-items: center; /* Align items vertically */
      background-color: lightblue;
      padding: 20px;
    }
    .flex-item {
      background-color: lightcoral;
      padding: 10px;
      width: 100px;
      text-align: center;
    }

    /* Grid Example */
    .grid-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr); /* Create 3 equal columns */
      gap: 10px; /* Space between grid items */
      background-color: lightgreen;
      padding: 20px;
    }
    .grid-item {
      background-color: lightgoldenrodyellow;
      padding: 10px;
      text-align: center;
    }
  </style>
</head>
<body>
  <h2>Flexbox Example</h2>
  <div class="flex-container">
    <div class="flex-item">Item 1</div>
    <div class="flex-item">Item 2</div>
    <div class="flex-item">Item 3</div>
  </div>

  <h2>Grid Example</h2>
  <div class="grid-container">
    <div class="grid-item">Item 1</div>
    <div class="grid-item">Item 2</div>
    <div class="grid-item">Item 3</div>
    <div class="grid-item">Item 4</div>
    <div class="grid-item">Item 5</div>
    <div class="grid-item">Item 6</div>
  </div>
</body>
</html>
`
              }
            ]
          },
          {
            title: 'Responsive Web Design',
            content: `
  **Responsive Web Design**: This approach to web design ensures that a website functions well on a variety of devices and screen sizes. It involves using flexible grids and layouts, responsive images, and CSS media queries to create a seamless user experience across desktops, tablets, and smartphones.

**Flexible Grid Layouts**: Responsive web design employs fluid grids that adjust the layout of a webpage based on the screen size. This means that the design elements resize and rearrange themselves to fit different screen widths.

**Responsive Images**: Images and media are scaled appropriately to prevent them from being too large or too small on different devices. Techniques such as using percentage-based widths and the 'srcset' attribute in HTML are common practices.

**CSS Media Queries**: Media queries are a key part of responsive design, allowing developers to apply different styles based on the device's screen size, orientation, and resolution. This enables the creation of custom styles for mobile, tablet, and desktop views.
`,
            innersubtopics: [
              {
                title: 'Responsive Web Design',
                content: 'Responsive Web Design ensures that websites provide an optimal viewing experience across various devices by using flexible layouts, images, and CSS media queries.',
                example: `**Key Technologies:**
- **CSS Media Queries:** Apply different styles based on the screen size or device characteristics.
- **Flexible Grid Layouts:** Use percentage-based widths to create fluid and adaptable layouts.
- **Responsive Images:** Ensure images scale appropriately using techniques like 'srcset'.

**Example Code:**
html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Web Design</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    .responsive-image {
      width: 100%;
      height: auto;
    }
    @media (max-width: 768px) {
      .container {
        padding: 10px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Responsive Web Design Example</h1>
    <img src="example.jpg" alt="Example Image" class="responsive-image">
  </div>
</body>
</html>`
              },
              {
                title: 'Flexible Grid Layouts',
                content: 'Flexible Grid Layouts use fluid, percentage-based widths to create adaptable and responsive designs that adjust to various screen sizes.',
                example: `**Key Concepts:**
- **Fluid Grids:** Use relative units like percentages instead of fixed units like pixels to create layouts that adapt to different screen sizes.
- **Media Queries:** Apply different styles based on the screen size to adjust the grid layout for various devices.

**Example Code:**
html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flexible Grid Layout</title>
  <style>
    body { font-family: Arial, sans-serif; }
    .container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 10px;
    }
    .item {
      background-color: lightgray;
      padding: 20px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
  </div>
</body>
</html>`
              },
              {
                title: 'Responsive Images',
                content: 'Responsive Images: Techniques for adjusting image sizes and resolutions to ensure they display optimally across different devices and screen sizes.',
                example: `**Key Concepts:**
- **Fluid Images:** Use CSS properties like 'max-width: 100%' to ensure images scale with their container while maintaining aspect ratio.
- **'srcset' Attribute:** Specify different image sources for varying screen resolutions and sizes to provide the most appropriate image for each device.

**Example Code:**
html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Images</title>
  <style>
    body { font-family: Arial, sans-serif; }
    img {
      max-width: 100%;
      height: auto;
    }
  </style>
</head>
<body>
  <h1>Responsive Images Example</h1>
  <img 
    src="small.jpg" 
    srcset="small.jpg 480w, medium.jpg 768w, large.jpg 1200w" 
    sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw" 
    alt="Responsive Example Image"
  >
</body>
</html>`
              },
              {
                title: 'CSS Media Queries',
                content: 'CSS Media Queries: Techniques for applying different styles to a webpage based on the device’s screen size, resolution, or orientation.',
                example: `**Key Concepts:**
- **Breakpoints:** Define specific screen widths where different styles should be applied to adjust the layout for various devices.
- **Media Query Syntax:** Use the '@media' rule to specify conditions under which different CSS rules should be applied.

**Example Code:**
html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Media Queries Example</title>
  <style>
    body { font-family: Arial, sans-serif; }
    .container {
      background-color: lightgray;
      padding: 20px;
    }
    .text {
      font-size: 16px;
    }

    /* Media Query for tablets and up */
    @media (min-width: 600px) {
      .container {
        background-color: lightblue;
      }
      .text {
        font-size: 20px;
      }
    }

    /* Media Query for desktops and up */
    @media (min-width: 992px) {
      .container {
        background-color: lightgreen;
      }
      .text {
        font-size: 24px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <p class="text">Responsive Text Example</p>
  </div>
</body>
</html>`
              }
            ]
          },
          {
            title: 'JavaScript Basics',
            content: `
            **JavaScript Basics**: JavaScript is a versatile programming language primarily used for creating interactive and dynamic elements on web pages. Below are the key aspects of JavaScript:

**Syntax and Fundamentals**: JavaScript uses a syntax similar to other programming languages. It includes variables, data types, operators, and control structures like loops and conditionals. Understanding these fundamentals is crucial for writing effective JavaScript code.

**Functions and Scope**: Functions in JavaScript are blocks of code designed to perform specific tasks. They can be invoked multiple times and can take parameters. JavaScript also has different scopes (global and local) which determine the accessibility of variables.

**Events and DOM Manipulation**: JavaScript can interact with the Document Object Model (DOM), which represents the structure of a web page. It allows developers to manipulate HTML elements, handle user events (like clicks and key presses), and update the web page dynamically.

**Asynchronous JavaScript**: JavaScript supports asynchronous operations, allowing tasks such as data fetching and processing to occur without blocking the main thread. Techniques such as callbacks, promises, and async/await are used to manage asynchronous code.

**ES6 and Beyond**: ECMAScript 6 (ES6) introduced several new features to JavaScript, including arrow functions, template literals, destructuring, and modules. Keeping up with the latest ECMAScript versions helps developers write modern, efficient code.

**Debugging and Best Practices**: Debugging JavaScript code is essential for finding and fixing issues. Tools like browser developer consoles and debugging libraries aid in this process. Following best practices, such as writing clean and maintainable code, is crucial for effective JavaScript development.`,
            innersubtopics: [
              {
                title: 'JavaScript Basics',
                content: 'JavaScript Basics covers fundamental concepts and features of JavaScript, including syntax, functions, events, and asynchronous programming for creating dynamic web interactions.',
                example: `**Key Concepts:**
- **Variables and Data Types:** Store and manipulate data using different types such as strings, numbers, and objects.
- **Functions:** Define reusable blocks of code that perform specific tasks.
- **Events:** Handle user interactions such as clicks and form submissions.
- **DOM Manipulation:** Change the content and structure of web pages dynamically.

**Example Code:**
html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Basics</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    .hidden {
      display: none;
    }
  </style>
</head>
<body>
  <h1>JavaScript Basics Example</h1>
  <button id="showMessageButton">Show Message</button>
  <p id="message" class="hidden">Hello, JavaScript!</p>

  <script>
    // Variables and Data Types
    let messageElement = document.getElementById('message'); // Reference to the message paragraph
    const button = document.getElementById('showMessageButton'); // Reference to the button

    // Function to show the message
    function showMessage() {
      messageElement.classList.remove('hidden'); // Remove 'hidden' class to display the message
    }

    // Event Listener
    button.addEventListener('click', showMessage); // Call showMessage function when button is clicked
  </script>
</body>
</html>`
              },
              {
                title: 'Functions and Scope',
                content: 'Functions and Scope in JavaScript explore how to define reusable code blocks and manage variable accessibility within different scopes.',
                example: `**Key Concepts:**
- **Function Declaration:** Define reusable blocks of code using function declarations.
- **Local Scope:** Variables defined inside a function are local to that function.
- **Global Scope:** Variables defined outside any function are accessible globally.

**Example Code:**
javascript
// Function Declaration
function greet(name) {
  // Local variable inside the function
  let greeting = 'Hello, ${'name'}!';
  console.log(greeting); // Logs the greeting message
}

// Calling the function with an argument
greet('Alice');

// Global variable
let globalMessage = 'This is a global message.';

// Function accessing a global variable
function showGlobalMessage() {
  console.log(globalMessage); // Logs the global message
}

// Calling the function that uses the global variable
showGlobalMessage();

// Function with local scope variable
function calculateSum(a, b) {
  let sum = a + b; // Local variable inside the function
  return sum;
}

// Calling the function and logging the result
let result = calculateSum(5, 7);
console.log(result); // Logs the sum: 12`
              },
              {
                title: 'Events and DOM Manipulation',
                content: 'Events and DOM Manipulation: JavaScript enables interactive web pages by allowing developers to handle user actions and dynamically modify HTML elements through the Document Object Model (DOM).',
                example: `**Key Concepts:**
- **Event Listeners:** Attach functions to HTML elements that execute when certain events occur, such as clicks or key presses.
- **DOM Manipulation:** Change the structure, style, or content of HTML elements dynamically through JavaScript.

**Example Code:**
javascript
// HTML element with an ID of 'myButton' and a 'div' with an ID of 'myContent'
document.body.innerHTML = '
  <button id="myButton">Click Me</button>
  <div id="myContent">Hello, World!</div>
';

// Function to handle the button click event
function handleClick() {
  // Change the text content of the div with ID 'myContent'
  let contentDiv = document.getElementById('myContent');
  contentDiv.textContent = 'Button Clicked!';
}

// Attach the handleClick function as an event listener to the button with ID 'myButton'
document.getElementById('myButton').addEventListener('click', handleClick);`
              },
              {
                title: 'Asynchronous JavaScript',
                content: 'Asynchronous JavaScript: JavaScript&apos;s ability to execute operations like data fetching and processing without blocking the main thread, using techniques such as callbacks, promises, and async/await.',
                example: `**Key Concepts:**
- **Callbacks:** Functions passed as arguments to other functions, executed once a task is completed.
- **Promises:** Objects representing the eventual completion (or failure) of an asynchronous operation and its resulting value.
- **Async/Await:** Syntactic sugar over promises that makes asynchronous code easier to read and write.

**Example Code:**
javascript
// Example using a Callback
function fetchData(callback) {
  setTimeout(() => {
    let data = 'Data fetched with a callback';
    callback(data); // Execute the callback function with the fetched data
  }, 1000); // Simulate a delay of 1 second
}

// Using the fetchData function with a callback
fetchData(function(data) {
  console.log(data); // Logs: Data fetched with a callback
});

// Example using Promises
function fetchDataWithPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let data = 'Data fetched with a promise';
      resolve(data); // Resolve the promise with the fetched data
    }, 1000); // Simulate a delay of 1 second
  });
}

// Using the fetchDataWithPromise function with then
fetchDataWithPromise().then(data => {
  console.log(data); // Logs: Data fetched with a promise
});

// Example using Async/Await
async function fetchDataWithAsyncAwait() {
  let data = await fetchDataWithPromise(); // Wait for the promise to resolve
  console.log(data); // Logs: Data fetched with a promise
}

// Calling the async function
fetchDataWithAsyncAwait();`
              },
              {
                title: 'ES6 and Beyond',
                content: 'ES6 and Beyond: Modern JavaScript features introduced with ECMAScript 6 and later versions, including arrow functions, template literals, destructuring, and modules, which enhance code readability and functionality.',
                example: `**Key Concepts:**
              - **Arrow Functions:** A concise way to write functions using the '=>' syntax, which also lexically binds the 'this' keyword.
              - **Template Literals:** Allow for multi-line strings and embedded expressions using backticks (\\\`\`) instead of quotes.
              - **Destructuring:** A way to extract values from arrays or properties from objects into distinct variables.
              - **Modules:** A way to organize and encapsulate code into reusable pieces using 'import' and 'export' statements.
              
              **Example Code:**
              \`\`\`javascript
              // Arrow Function
              const greet = name => {
                return \`Hello, \${name}!\`; // Template literal to embed the variable
              };
              
              // Calling the arrow function with an argument
              console.log(greet('Alice')); // Logs: Hello, Alice!
              
              // Destructuring Assignment
              const user = {
                firstName: 'John',
                lastName: 'Doe',
                age: 30
              };
              
              // Extracting properties into variables
              const { firstName, lastName, age } = user;
              console.log(firstName); // Logs: John
              console.log(lastName); // Logs: Doe
              console.log(age); // Logs: 30
              
              // Module Example (Note: This needs to be in separate files to work properly)
              
              // In mathUtils.js
              export function add(a, b) {
                return a + b;
              }
              
              // In main.js
              import { add } from './mathUtils.js'; // Importing the add function from mathUtils.js
              
              const sum = add(5, 7);
              console.log(sum); // Logs: 12
              \`\`\``
              },
              {
                title: 'Debugging and Best Practices',
                content: 'Debugging and Best Practices: Techniques for identifying and fixing code issues efficiently, combined with principles for writing clean, maintainable, and effective code.',
                example: `**Key Concepts:**
- **Console Logging:** Use 'console.log' to output values and debug information at various points in the code.
- **Breakpoints:** Set breakpoints in the browser's developer tools to pause code execution and inspect variables.
- **Code Comments:** Add comments to explain complex logic and document the purpose of code sections.
- **Error Handling:** Use 'try...catch' blocks to handle potential errors gracefully and provide informative error messages.

**Example Code:**
javascript
// Function with Debugging and Best Practices
function divide(a, b) {
  try {
    // Debugging: Log the input values
    console.log('Inputs:', a, b);

    // Check for division by zero
    if (b === 0) {
      throw new Error('Cannot divide by zero'); // Error Handling
    }

    let result = a / b; // Perform the division

    // Debugging: Log the result
    console.log('Result:', result);

    return result;
  } catch (error) {
    // Error Handling: Log the error message
    console.error('Error:', error.message);
  }
}

// Calling the function with valid inputs
divide(10, 2); // Logs: Inputs: 10 2, Result: 5

// Calling the function with invalid input (division by zero)
divide(10, 0); // Logs: Inputs: 10 0, Error: Cannot divide by zero

// Function to illustrate code comments and best practices
function calculateTotal(price, taxRate) {
  // Calculate the total price including tax
  let taxAmount = price * taxRate; // Calculate tax amount
  let total = price + taxAmount; // Calculate total price

  // Debugging: Log the intermediate values
  console.log('Price:', price, 'Tax Amount:', taxAmount, 'Total:', total);

  return total;
}

// Calling the function and logging the result
let totalPrice = calculateTotal(100, 0.15); // Logs: Price: 100 Tax Amount: 15 Total: 115
console.log('Total Price:', totalPrice); // Logs: Total Price: 115`
              }
            ]
          }
        ],
      },
    }
  ],
  2: [
    {
      id: 2,
      name: 'Advanced Tailwind CSS and MongoDB',
      unit: 'Unit 2',
      status: 'Completed',
      description: {
        overview: 'Advanced Tailwind CSS and MongoDB: Advanced Tailwind CSS techniques involve creating complex, responsive designs with utility classes and customizing themes, while MongoDB skills include leveraging advanced queries, indexing, and schema design to efficiently handle and analyze large datasets. Combining both allows for building scalable, visually appealing web applications with robust data management.',
        subtopics: [
          {
            title: 'Advanced Tailwind CSS',
            content: `**Utility-First Approach:** Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without leaving your HTML. This approach encourages composing styles directly in the markup, which can lead to more manageable and scalable code.

**Responsive Design:** Tailwind offers a powerful set of responsive utilities that allow you to apply styles based on the viewport size. You can use responsive variants to design layouts that adapt seamlessly to different screen sizes, enhancing the user experience across devices.

**Custom Themes:** Tailwind enables you to create custom themes by extending the default configuration. You can define your color palette, spacing scale, typography, and more, to ensure that your design system is consistent and tailored to your project's needs.

**Plugins and Extensions:** Tailwind supports a rich ecosystem of plugins that extend its functionality. You can use plugins to add custom components, utilities, or even integrate with other libraries, making Tailwind a highly flexible tool for advanced design needs.

**Performance Optimization:** With Tailwind's Purge feature, you can remove unused CSS from your production build, significantly reducing the file size. This ensures that your application loads faster and performs better, especially in large projects.`,
            innersubtopics: [
              {
                title: 'Utility-First Approach',
                content: 'The "Utility-First Approach" in Tailwind CSS uses low-level utility classes to build custom designs directly in your HTML, promoting modular and reusable styling.',
                example: `**Key Concepts:**

**Utility Classes:** Use predefined utility classes to apply styles directly in your HTML elements.
**Responsive Design:** Leverage responsive utilities to adjust styles based on different screen sizes.
**Customization:** Extend the default Tailwind configuration to create a design system that fits your project's needs.
**Performance Optimization:** Utilize the Purge feature to remove unused CSS and keep your stylesheets lean.

**Example Code:**
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tailwind CSS Utility-First Example</title>
  <!-- Link to Tailwind CSS CDN -->
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 font-sans">
  <div class="container mx-auto p-4">
    <!-- Main heading with responsive text size and centered alignment -->
    <h1 class="text-2xl font-bold text-center mb-4">Utility-First Approach Example</h1>
    
    <!-- Button with utility classes for styling and hover/focus effects -->
    <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
      Click Me
    </button>
    
    <!-- Paragraph with margin-top and text color styling -->
    <p class="mt-4 text-gray-700">
      Tailwind CSS utility classes make it easy to apply styles directly in your HTML elements.
    </p>
  </div>
</body>
</html>
`
              },
              {
                title: 'Responsive Design',
                content: 'Responsive Design" in Tailwind CSS uses utilities to adjust styles based on screen size, ensuring your layout looks great on any device.',
                example: `**Key Concepts:**

**Breakpoints:** Define specific viewport widths where your design should adapt to different screen sizes.
**Responsive Utilities:** Use Tailwind's responsive utility classes to apply different styles based on the viewport size.
**Fluid Layouts:** Create layouts that adjust fluidly to the width of the container or screen.
**Media Queries:** Tailwind uses media queries under the hood to apply styles conditionally based on screen size.

**Example Code:**
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Design Example</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="font-sans bg-gray-100">
  <h1 class="text-xl text-center p-4">Responsive Design Example</h1>
  <div class="container mx-auto p-4">
    <!-- Card container with responsive padding and shadow -->
    <div class="bg-white p-6 shadow-lg rounded-lg">
      <!-- Paragraph with text color and size -->
      <p class="text-gray-800 text-lg">
        Resize the browser window to see the responsive design in action.
      </p>
      <div class="mt-4">
        <!-- Button with different background colors for various screen sizes -->
        <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600
                        md:bg-green-500 lg:bg-red-500">
          Responsive Button
        </button>
      </div>
    </div>
  </div>
</body>
</html>
`
              },
              {
                title: 'Custom Themes',
                content: 'Custom Themes in Advanced Tailwind CSS allow for tailored, reusable design systems by extending and modifying the default color palette, spacing, and other utilities to fit specific project requirements.',
                example: `**Key Concepts:**

**Theme Customization:** Tailwind CSS allows you to define your own design tokens such as colors, spacing, and typography in the tailwind.config.js file. 
**Extend and Override:** You can extend or override the default theme to include your custom styles, ensuring consistency across your project. 
**Utility Classes:** Custom themes enable you to create unique utility classes based on your design system.

**Example Code:**
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Custom Themes Example</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  </style>
  <script>
    // Tailwind configuration example
    module.exports = {
      theme: {
        extend: {
          colors: {
            primary: '#1D4ED8', // Custom primary color
            secondary: '#9333EA', // Custom secondary color
          },
          fontFamily: {
            sans: ['Roboto', 'sans-serif'], // Custom font family
          },
          spacing: {
            '128': '32rem', // Custom spacing
          },
        },
      },
    };
  </script>
</head>
<body class="font-sans bg-gray-100">
  <h1 class="text-2xl text-center p-4 text-primary">Custom Themes Example</h1>
  <div class="container mx-auto p-4">
    <!-- Card container with custom background color and spacing -->
    <div class="bg-white p-6 shadow-lg rounded-lg">
      <!-- Paragraph with custom text color and size -->
      <p class="text-secondary text-lg">
        Customize the theme using Tailwind CSS to define your design system.
      </p>
      <div class="mt-4">
        <!-- Button with custom background color -->
        <button class="bg-primary text-white py-2 px-4 rounded hover:bg-secondary">
          Custom Themed Button
        </button>
      </div>
    </div>
  </div>
</body>
</html>
`
              },
              {
                title: 'Plugins and Extensions',
                content: 'Tailwind CSS supports a range of plugins and extensions that enhance its capabilities, allowing you to add custom utilities, components, and more to your project.',
                example: `**Key Concepts:**
              
              **Plugins:** Extend Tailwind’s functionality by adding custom utilities or components through plugins.
              **Custom Components:** Create reusable components with Tailwind's plugin system for consistent styling.
              **Extendable Configuration:** Modify or extend the Tailwind configuration to include custom plugins and utilities.
              **Community Plugins:** Utilize community-developed plugins for additional features and utilities.
              
              **Example Code:**
              <!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Tailwind CSS Plugins and Extensions Example</title>
                <!-- Link to Tailwind CSS CDN -->
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
                <!-- Link to Tailwind CSS Plugin -->
                <link href="https://cdn.jsdelivr.net/npm/@tailwindcss/forms@0.3.3/dist/forms.min.css" rel="stylesheet">
              </head>
              <body class="bg-gray-100 font-sans">
                <div class="container mx-auto p-4">
                  <!-- Main heading with responsive text size and centered alignment -->
                  <h1 class="text-2xl font-bold text-center mb-4">Plugins and Extensions Example</h1>
                  
                  <!-- Form with utility classes and plugin enhancements -->
                  <form class="space-y-4">
                    <div>
                      <label for="name" class="block text-gray-700">Name</label>
                      <input id="name" type="text" class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="John Doe">
                    </div>
                    
                    <div>
                      <label for="email" class="block text-gray-700">Email</label>
                      <input id="email" type="email" class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="john@example.com">
                    </div>
                    
                    <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                      Submit
                    </button>
                  </form>
                </div>
              </body>
              </html>
              `
              },
              {
                title: 'Performance Optimization',
                content: 'Performance optimization in Tailwind CSS involves techniques to minimize the size of your CSS files and improve load times. By leveraging features such as Purge and customizing your Tailwind configuration, you can ensure that only the necessary styles are included in your final build.',
                example: `**Key Concepts:**
              
              **Purge:** Use the Purge feature to remove unused CSS classes from your final build, reducing file size.
              **Minification:** Ensure that your CSS is minified to decrease load times.
              **Custom Configuration:** Tailor your Tailwind configuration to include only the utilities and components you need.
              **Tree-Shaking:** Utilize tree-shaking to eliminate unused code in your JavaScript and CSS files.
              
              **Example Code:**
              <!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Tailwind CSS Performance Optimization Example</title>
                <!-- Link to minified Tailwind CSS CDN -->
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
              </head>
              <body class="bg-gray-100 font-sans">
                <div class="container mx-auto p-4">
                  <!-- Main heading with responsive text size and centered alignment -->
                  <h1 class="text-2xl font-bold text-center mb-4">Performance Optimization Example</h1>
                  
                  <!-- Button with utility classes for styling and hover/focus effects -->
                  <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    Click Me
                  </button>
                  
                  <!-- Paragraph with margin-top and text color styling -->
                  <p class="mt-4 text-gray-700">
                    Using the Purge feature and minified CSS can significantly reduce your stylesheet's size and improve performance.
                  </p>
                </div>
              </body>
              </html>
              `
              }
            ]
          },
          {
            title: "Building Components with Tailwind",
            content: `**Component-Based Design:** Tailwind CSS facilitates the creation of reusable and modular components by using utility classes to style each part of the component individually. This approach promotes consistency and maintainability in your design system.
            **Component Composition:** Tailwind's utility-first approach allows you to compose complex components from simple utility classes. You can build up a component’s design incrementally, making it easier to understand and adjust as needed.
            **Customization and Extensibility:** Tailwind makes it easy to customize and extend components. You can create component-specific styles by combining Tailwind utilities and custom classes, ensuring that components are tailored to fit your specific design needs.
            **Design Systems:** Tailwind CSS supports the development of design systems by allowing you to define a consistent set of design tokens and components that can be reused across your application, enhancing overall design consistency and efficiency.
            **Responsive Components:** Tailwind’s responsive utilities can be used to build components that adapt to different screen sizes. This ensures that your components remain functional and aesthetically pleasing on various devices.`,
            innersubtopics: [
              {
                title: "Component-Based Design",
                content: "In Tailwind CSS, the \"Component-Based Design\" approach involves creating reusable components by applying utility classes directly to HTML elements. This method promotes modular design and makes it easier to maintain and scale your styles.",
                example: `**Key Concepts:**
                
            **Reusable Components:** 
            Build components by combining Tailwind utility classes for consistent design.
            **Modularity:** Style individual components separately to ensure they can be reused across your project.
            **Maintainability:** Use utility classes to manage styles directly in your markup, making it easier to update and maintain.
                
            **Example Code:**
            <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Tailwind CSS Component-Based Design Example</title>
            <!-- Link to Tailwind CSS CDN -->
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
            </head>
            <body class="bg-gray-100 font-sans">
            <div class="container mx-auto p-4">
                <!-- Card component with reusable styles -->
                <div class="bg-white p-6 shadow-lg rounded-lg">
                    <h2 class="text-xl font-bold mb-4">Card Title</h2>
                    <p class="text-gray-700">This is a reusable card component styled with Tailwind CSS utilities.</p>
                    <button class="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600">Learn More</button>
                </div>
            </div>
            </body>
            </html>`
              },
              {
                title: "Component Composition",
                content: "The \"Component Composition\" in Tailwind CSS involves combining basic utility classes to build complex components. This approach allows you to incrementally develop and refine your components, ensuring that each piece is styled according to your design requirements.",
                example: `**Key Concepts:**
            **Incremental Development:** Start with basic utility classes and build up the component’s design step by step.
            **Combination:** Use different utility classes together to achieve complex styles and layouts.
            **Flexibility:** Easily adjust and tweak component styles by modifying utility classes.
                
            **Example Code:**
            <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Component Composition Example</title>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
            </head>
            <body class="font-sans bg-gray-100">
            <h1 class="text-xl text-center p-4">Component Composition Example</h1>
            <div class="container mx-auto p-4">
                <!-- Complex button with composed styles -->
                <button class="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    Composed Button
                </button>
            </div>
            </body>
            </html>`
              },
              {
                title: "Customization and Extensibility",
                content: "Tailwind CSS allows for extensive customization and extensibility of components by enabling you to define custom utility classes and styles. This flexibility ensures that components can be tailored to meet the specific needs of your project while maintaining a consistent design language.",
                example: `**Key Concepts:**
            **Custom Styles:** Define custom utility classes or extend existing ones to fit your design requirements.
            **Extended Configuration:** Modify the Tailwind configuration file to include additional or modified utilities.
            **Component-Specific Styles:** Create styles that are specific to individual components while still using Tailwind’s utility classes.
                
            **Example Code:**
            <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Customization and Extensibility Example</title>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
            <style>
                /* Tailwind configuration example */
                @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
                .custom-btn {
                    @apply bg-primary text-white py-2 px-4 rounded;
                }
            </style>
            <script>
                // Tailwind configuration
                module.exports = {
                    theme: {
                        extend: {
                            colors: {
                                primary: '#1D4ED8', // Custom primary color
                            },
                            fontFamily: {
                                sans: ['Roboto', 'sans-serif'], // Custom font family
                            },
                        },
                    },
                };
            </script>
            </head>
            <body class="font-sans bg-gray-100">
            <h1 class="text-2xl text-center p-4 text-primary">Customization and Extensibility Example</h1>
            <div class="container mx-auto p-4">
                <!-- Button with custom styles -->
                <button class="custom-btn hover:bg-secondary">
                    Custom Styled Button
                </button>
            </div>
            </body>
            </html>`
              },
              {
                title: "Design Systems",
                content: "Building Design Systems with Tailwind CSS involves creating a set of reusable components and design tokens that ensure consistency across your application. Tailwind’s utility-first approach allows you to define a comprehensive design system that can be applied throughout your project.",
                example: `**Key Concepts:**
            **Design Tokens:** Define colors, typography, spacing, and other design elements in a centralized configuration file.
            **Reusable Components:** Create and style components that adhere to your design system’s standards.
            **Consistency:** Ensure that all components follow the same design principles and styles.
                
            **Example Code:**
            <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Design Systems Example</title>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
            </head>
            <body class="bg-gray-100 font-sans">
            <h1 class="text-2xl text-center p-4 text-primary">Design Systems Example</h1>
            <div class="container mx-auto p-4">
                <!-- Card component adhering to design system -->
                <div class="bg-white p-6 shadow-lg rounded-lg">
                    <h2 class="text-xl font-bold mb-4">Design System Card</h2>
                    <p class="text-gray-700">This card component follows the design system's styling guidelines.</p>
                    <button class="bg-primary text-white py-2 px-4 rounded hover:bg-secondary">
                        Design System Button
                    </button>
                </div>
            </div>
            </body>
            </html>`
              },
              {
                title: "Responsive Components",
                content: "Creating Responsive Components with Tailwind CSS involves using responsive utility classes to ensure that components look good on different screen sizes. Tailwind’s responsive design utilities make it easy to adapt components for various devices, enhancing the overall user experience.",
                example: `**Key Concepts:**
            **Responsive Utilities:** Apply different styles based on screen size to ensure your components are adaptable.
            **Breakpoints:** Use predefined breakpoints to target specific viewport widths.
            **Fluid Layouts:** Design components that adjust fluidly to various screen sizes and container widths.
                
            **Example Code:**
            <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Responsive Components Example</title>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
            </head>
            <body class="font-sans bg-gray-100">
            <h1 class="text-2xl text-center p-4">Responsive Components Example</h1>
            <div class="container mx-auto p-4">
                <!-- Responsive card component -->
                <div class="bg-white p-6 shadow-lg rounded-lg md:w-1/2 lg:w-1/3">
                    <h2 class="text-xl font-bold mb-4">Responsive Card</h2>
                    <p class="text-gray-700">This card component adjusts its width based on the screen size.</p>
                </div>
            </div>
            </body>
            </html>`
              }
            ]
          },
          {
            title: "Introduction to MongoDB",
            content: `**What is MongoDB?** MongoDB is a document-oriented NoSQL database used for high volume data storage. Instead of using tables and rows like in traditional relational databases, MongoDB makes use of collections and documents. Documents consist of key-value pairs which are the basic unit of data in MongoDB.
      
      **NoSQL Database:** MongoDB is classified as a NoSQL database because it doesn’t store data in the traditional relational database format. It's designed for scalability and flexibility, making it a popular choice for large-scale applications.
      
      **Key Features:**
      - **Document-based:** Data is stored in JSON-like format known as BSON, which allows for complex data structures.
      - **Schema-less:** MongoDB doesn’t require a defined schema, enabling flexibility in data structure.
      - **Horizontal Scalability:** Supports sharding, allowing for distribution of data across many servers.
      - **Replication:** Ensures high availability through replica sets.
      `,
            innersubtopics: [
              {
                title: "Document-Based Storage",
                content: `MongoDB stores data in BSON (Binary JSON) format, which allows documents to be nested and include various data types. This flexibility enables MongoDB to efficiently store hierarchical relationships and arrays within documents, unlike traditional relational databases.`,
                example: `**Key Concepts:**
      
      **Document:** MongoDB stores data in flexible, JSON-like documents with key-value pairs.
      **Collection:** Documents are grouped into collections, which are similar to tables in relational databases.
      **BSON:** BSON is a binary representation of JSON-like documents, optimized for space and speed.
      **Schema Flexibility:** MongoDB does not enforce a specific schema, allowing documents in a collection to have varying structures.
      
      **Example Code:**
      \`\`\`javascript
      // Insert a document into MongoDB
      db.users.insertOne({
        name: "John Doe",
        age: 30,
        email: "johndoe@example.com",
        hobbies: ["Reading", "Traveling", "Coding"]
      });
      
      // Query a document from MongoDB
      db.users.findOne({ name: "John Doe" });
      \`\`\`
      `
              },
              {
                title: "NoSQL vs. SQL",
                content: `MongoDB, as a NoSQL database, is often compared to traditional SQL databases like MySQL or PostgreSQL. While SQL databases rely on structured tables and predefined schemas, MongoDB offers a more flexible, schema-less design.`,
                example: `**Key Concepts:**
      
      **SQL Databases:** Store data in tables with fixed columns and rows.
      **NoSQL Databases:** Store data in a variety of ways, including key-value pairs, documents, and graphs.
      **Scalability:** MongoDB excels in horizontal scaling across many machines, whereas SQL databases often require vertical scaling.
      **Data Relationships:** In SQL, relationships are defined using foreign keys, whereas MongoDB uses embedded documents or references.
      
      **Example Code:**
      \`\`\`javascript
      // SQL INSERT Example
      INSERT INTO users (name, age, email)
      VALUES ("John Doe", 30, "johndoe@example.com");
      
      // MongoDB INSERT Example
      db.users.insertOne({
        name: "John Doe",
        age: 30,
        email: "johndoe@example.com"
      });
      \`\`\`
      `
              },
              {
                title: "Data Modeling in MongoDB",
                content: `Data modeling in MongoDB differs significantly from traditional SQL databases. In MongoDB, you can embed documents within other documents to represent relationships, or reference related documents using object IDs.`,
                example: `**Key Concepts:**
      
      **Embedded Documents:** Store related data within the same document.
      **References:** Link separate documents by referencing ObjectIDs.
      **One-to-Many Relationships:** Can be represented either through embedding or referencing.
      **One-to-One Relationships:** Typically handled through embedding.
      **Many-to-Many Relationships:** Managed using an array of references.
      
      **Example Code:**
      \`\`\`javascript
      // Embedding Example
      db.users.insertOne({
        name: "John Doe",
        contact: {
          phone: "123-456-7890",
          email: "johndoe@example.com"
        }
      });
      
      // Referencing Example
      db.orders.insertOne({
        productId: ObjectId("60b8d865b591c01777d29093"),
        quantity: 3,
        customerId: ObjectId("60b8d865b591c01777d29092")
      });
      \`\`\`
      `
              },
              {
                title: "Sharding in MongoDB",
                content: `Sharding in MongoDB is a method for distributing data across multiple machines. This ensures that large datasets can be managed efficiently by spreading the load across multiple servers.`,
                example: `**Key Concepts:**
      
      **Shard:** A horizontal partition of data in a MongoDB collection.
      **Shard Key:** A key used to distribute documents across shards.
      **Balancer:** Ensures that data is evenly distributed across shards.
      **Replica Sets in Sharding:** Each shard is deployed as a replica set to ensure redundancy and high availability.
      
      **Example Code:**
      \`\`\`javascript
      // Enable sharding on the database
      sh.enableSharding("myDatabase");
      
      // Shard the users collection using the _id field as the shard key
      sh.shardCollection("myDatabase.users", { _id: "hashed" });
      \`\`\`
      `
              },
              {
                title: "Replication and High Availability",
                content: `MongoDB provides high availability through replica sets, which replicate data across multiple servers. In the event of a server failure, the system can automatically failover to another replica.`,
                example: `**Key Concepts:**
      
      **Replica Set:** A group of MongoDB servers that maintain the same data set.
      **Primary Node:** The main node that receives all write operations.
      **Secondary Nodes:** Nodes that replicate the primary's data and can step up if the primary fails.
      **Failover:** In case of a primary failure, a secondary is automatically promoted to primary.
      
      **Example Code:**
      \`\`\`javascript
      // Initialize a replica set
      rs.initiate({
        _id: "rs0",
        members: [
          { _id: 0, host: "mongodb0.example.net:27017" },
          { _id: 1, host: "mongodb1.example.net:27017" },
          { _id: 2, host: "mongodb2.example.net:27017" }
        ]
      });
      \`\`\`
      `
              }
            ]
          },
          {
            title: 'Advanced MongoDB',
            content: `**Sharding:** MongoDB's sharding allows the distribution of data across multiple servers to support horizontal scaling, ensuring high throughput for large datasets.
        
        **Replication:** MongoDB supports replication to provide high availability, creating copies of data across multiple servers (replica sets) for redundancy.
        
        **Aggregation Framework:** The aggregation framework in MongoDB is a powerful tool for performing data processing tasks, such as filtering, transforming, and summarizing large datasets in a pipeline approach.
        
        **Indexing:** MongoDB offers a variety of indexing options to optimize query performance, including compound indexes, geospatial indexes, and text indexes.
        
        **Transactions:** MongoDB's support for ACID transactions allows for multiple operations on a document or across documents to be executed as a single, atomic unit of work.
        
        **Schema Design Patterns:** MongoDB provides flexible schema design patterns tailored to various use cases, enabling optimal data modeling for performance and scalability.
        
        **Performance Tuning:** Various strategies, such as using appropriate indexes, configuring the working set size, and optimizing queries, help to enhance MongoDB's performance, especially for high-traffic applications.`,
            innersubtopics: [
              {
                title: 'Sharding',
                content: 'Sharding in MongoDB allows for the distribution of data across multiple servers (shards), ensuring scalability for large datasets by dividing data into smaller, manageable chunks.',
                example: `**Key Concepts:**
        
        **Shards:** Individual servers that hold a portion of the overall dataset.
        **Shard Keys:** A field used to distribute data evenly across shards.
        **Cluster:** A set of shards working together to process queries and distribute load.
        **Balancing:** MongoDB balances the distribution of data among shards to ensure uniform load.
        
        **Example Code:**
        \`\`\`bash
        # Enabling sharding on a MongoDB database
        use admin
        sh.enableSharding("myDatabase")
        
        # Choosing a shard key
        db.myCollection.createIndex({ user_id: 1 })
        sh.shardCollection("myDatabase.myCollection", { user_id: 1 })
        \`\`\`
        `
              },
              {
                title: 'Replication',
                content: 'Replication in MongoDB provides high availability by creating redundant copies of the data in a replica set. This ensures data is consistently available, even during server failures.',
                example: `**Key Concepts:**
        
        **Replica Set:** A group of MongoDB servers that maintain the same data set, providing redundancy.
        **Primary:** The main server in a replica set that receives all write operations.
        **Secondary:** Servers in the replica set that replicate data from the primary.
        **Failover:** In case the primary fails, one of the secondaries is automatically promoted to primary.
        
        **Example Code:**
        \`\`\`bash
        # Initiating a replica set
        rs.initiate({
          _id: "myReplicaSet",
          members: [
            { _id: 0, host: "localhost:27017" },
            { _id: 1, host: "localhost:27018" },
            { _id: 2, host: "localhost:27019" }
          ]
        })
        \`\`\`
        `
              },
              {
                title: 'Aggregation Framework',
                content: 'MongoDB’s aggregation framework allows for data processing and transformation tasks such as grouping, sorting, and filtering. It is highly optimized for large data sets.',
                example: `**Key Concepts:**
        
        **Pipelines:** A series of stages where documents are processed in sequence.
        **Stages:** Operations such as match, group, sort, limit, and project that transform documents.
        **Expressions:** Functions used within the stages to perform operations like summing, averaging, and concatenating fields.
        
        **Example Code:**
        \`\`\`js
        db.sales.aggregate([
          { $match: { status: "completed" } },  // Filtering stage
          { $group: { _id: "$product", totalSales: { $sum: "$amount" } } },  // Grouping stage
          { $sort: { totalSales: -1 } },  // Sorting stage
          { $limit: 5 }  // Limiting the results to top 5
        ])
        \`\`\`
        `
              },
              {
                title: 'Indexing',
                content: 'Indexes in MongoDB improve query performance by allowing the database to quickly locate data without scanning the entire collection.',
                example: `**Key Concepts:**
        
        **Single Field Index:** An index on a single field that optimizes queries based on that field.
        **Compound Index:** An index on multiple fields to optimize queries that filter by more than one field.
        **Geospatial Index:** Special indexes for querying geospatial data.
        **Text Index:** Index for text-search queries across multiple fields.
        
        **Example Code:**
        \`\`\`js
        // Creating a compound index
        db.products.createIndex({ category: 1, price: -1 })
        
        // Query using the index
        db.products.find({ category: "electronics" }).sort({ price: -1 })
        \`\`\`
        `
              },
              {
                title: 'Transactions',
                content: 'Transactions in MongoDB provide ACID guarantees, allowing multiple operations on a document or across multiple documents to be executed as a single atomic unit.',
                example: `**Key Concepts:**
        
        **ACID Transactions:** Ensure Atomicity, Consistency, Isolation, and Durability for multiple operations.
        **Multi-Document Transactions:** Operations across multiple documents can be grouped together in a transaction.
        **Start, Commit, Abort:** Transactions start with a session, and operations are committed or aborted depending on the success or failure of the operations.
        
        **Example Code:**
        \`\`\`js
        const session = db.getMongo().startSession();
        session.startTransaction();
        try {
          db.accounts.updateOne({ _id: 1 }, { $inc: { balance: -100 } }, { session });
          db.accounts.updateOne({ _id: 2 }, { $inc: { balance: 100 } }, { session });
          session.commitTransaction();
        } catch (error) {
          session.abortTransaction();
          throw error;
        } finally {
          session.endSession();
        }
        \`\`\`
        `
              },
              {
                title: 'Schema Design Patterns',
                content: 'MongoDB schema design patterns provide strategies to efficiently model data for different use cases, optimizing performance and flexibility.',
                example: `**Key Concepts:**
        
        **Denormalization:** Embedding related data in a document to reduce the need for joins.
        **Normalization:** Referencing related data by storing foreign keys to keep data normalized.
        **Bucket Pattern:** Grouping data that is frequently queried together in a single document.
        **Tree Structure:** Representing hierarchical data using parent-child relationships.
        
        **Example Code:**
        \`\`\`js
        // Denormalization: embedding orders in customer document
        {
          _id: 1,
          name: "John Doe",
          orders: [
            { product: "Laptop", amount: 1000 },
            { product: "Mouse", amount: 50 }
          ]
        }
        
        // Normalization: using references
        {
          _id: 1,
          customerName: "John Doe",
          orderIds: [101, 102]
        }
        \`\`\`
        `
              },
              {
                title: 'Performance Tuning',
                content: 'Performance tuning in MongoDB involves various techniques such as proper indexing, query optimization, and resource management to improve overall system performance.',
                example: `**Key Concepts:**
        
        **Working Set Size:** Ensure that frequently accessed data fits into RAM.
        **Query Optimization:** Use indexed fields in queries to avoid full collection scans.
        **Index Selection:** Ensure that queries use the correct index for optimal performance.
        **Replica Set Configuration:** Distribute read/write workloads across primary and secondary replicas.
        
        **Example Code:**
        \`\`\`bash
        # Analyzing query performance
        db.collection.explain("executionStats").find({ category: "electronics" })
        
        # Monitoring the working set size
        db.serverStatus().metrics.document.returned
        \`\`\`
        `
              }
            ]
          }
        ]
      },
    }
  ],
  3: [
    {
      id: 3,
      name: 'Introduction to Git and Version Control',
      unit: 'Unit 3',
      status: 'Completed',
      description: {
        overview: 'Introduction to Git and Version Control" covers the fundamentals of version control systems, focusing on Git for managing source code changes, collaboration, and tracking project history efficiently.',
        subtopics: [
          {
            title: 'Basics of Git',
            content: `**Version Control System (VCS):** Git is a distributed version control system used to track changes in files, enabling collaboration and version history management.
  
  **Repositories:** Git repositories store the history of all versions of a project. Repos can be local (on your machine) or remote (hosted on platforms like GitHub).
  
  **Commits:** A commit represents a snapshot of changes in the repository. Each commit has a unique ID, a message describing the changes, and metadata like the author and timestamp.
  
  **Branches:** Git allows the creation of branches to develop features independently. Each branch is an isolated workspace that can later be merged into the main project.
  
  **Merging:** Merging in Git combines the changes from different branches into a single branch, preserving the history of both branches.
  
  **Staging Area:** Before committing changes, files are added to the staging area to prepare them for the next commit.
  
  **Remotes:** Git remotes are versions of a repository hosted on a network or the internet. Common operations include pushing (uploading changes) and pulling (downloading changes).`,
            innersubtopics: [
              {
                title: 'Version Control System (VCS)',
                content: 'A version control system like Git helps developers track and manage changes to their code. It allows teams to collaborate efficiently by keeping a history of changes and supporting multiple contributors.',
                example: `**Key Concepts:**
  
  **Local VCS:** Tracks changes on a local machine.
  **Centralized VCS:** Uses a single central repository that all developers share.
  **Distributed VCS:** Git is a distributed VCS, meaning every developer has a full copy of the project history on their machine.
  
  **Example:**
  \`\`\`bash
  # Initializing a Git repository
  git init
  
  # Checking the status of the working directory
  git status
  \`\`\`
  `
              },
              {
                title: 'Repositories',
                content: 'A Git repository contains all the files of your project along with their entire revision history. A repo can either be local or linked to a remote repository on a platform like GitHub or GitLab.',
                example: `**Key Concepts:**
  
  **Local Repository:** A repo stored on your local machine.
  **Remote Repository:** A repository hosted on a remote server, used for collaboration.
  **Cloning:** Creates a copy of a remote repository on your local machine.
  
  **Example:**
  \`\`\`bash
  # Cloning a remote repository
  git clone https://github.com/user/repo.git
  
  # Viewing the remote repository URL
  git remote -v
  \`\`\`
  `
              },
              {
                title: 'Commits',
                content: 'A commit in Git captures a snapshot of the project’s currently staged changes. Each commit has a unique identifier (hash) and is linked to previous commits, forming a history.',
                example: `**Key Concepts:**
  
  **Commit Message:** Describes what changes the commit contains.
  **SHA Hash:** A unique identifier for each commit.
  **Amending:** Allows modifications to the last commit before pushing it to the remote.
  
  **Example:**
  \`\`\`bash
  # Adding files to the staging area
  git add .
  
  # Committing the changes with a message
  git commit -m "Initial commit"
  
  # Viewing the commit history
  git log
  \`\`\`
  `
              },
              {
                title: 'Branches',
                content: 'Branches in Git allow multiple lines of development within a project. You can create, switch, and merge branches to experiment with new features without affecting the main codebase.',
                example: `**Key Concepts:**
  
  **Master/Main Branch:** The default branch in a repository.
  **Feature Branch:** A branch created for adding a specific feature.
  **Branching Strategy:** Developers often use branches to isolate new development work.
  
  **Example:**
  \`\`\`bash
  # Creating a new branch
  git branch feature-branch
  
  # Switching to the new branch
  git checkout feature-branch
  
  # Merging the branch into the main branch
  git checkout main
  git merge feature-branch
  \`\`\`
  `
              },
              {
                title: 'Merging',
                content: 'Merging in Git is the process of integrating changes from one branch into another. Conflicts can arise if changes in the two branches overlap, which Git will prompt you to resolve.',
                example: `**Key Concepts:**
  
  **Fast-Forward Merge:** If the branch being merged has no divergent commits, Git performs a simple fast-forward.
  **Three-Way Merge:** When both branches have new commits, Git performs a three-way merge to combine changes.
  **Merge Conflicts:** If two branches modify the same part of a file, Git will ask for manual conflict resolution.
  
  **Example:**
  \`\`\`bash
  # Merging a feature branch into the main branch
  git checkout main
  git merge feature-branch
  
  # Resolving merge conflicts
  git status
  # Edit conflicting files, then
  git add .
  git commit
  \`\`\`
  `
              },
              {
                title: 'Staging Area',
                content: 'The staging area in Git is a temporary place where changes are listed before being committed. Only changes added to the staging area will be included in the next commit.',
                example: `**Key Concepts:**
  
  **Staging Files:** Before committing, changes need to be added to the staging area.
  **Unstaged Changes:** Modifications that haven’t been added to the staging area.
  **Staging Part of a File:** Git allows staging only parts of a file while leaving other changes unstaged.
  
  **Example:**
  \`\`\`bash
  # Adding all files to the staging area
  git add .
  
  # Staging a specific file
  git add index.html
  
  # Staging part of a file interactively
  git add -p index.html
  \`\`\`
  `
              },
              {
                title: 'Remotes',
                content: 'Remotes are versions of your repository that are hosted on another server, typically used for collaboration. You can push changes to the remote or pull updates from the remote repository.',
                example: `**Key Concepts:**
  
  **Push:** Uploads local commits to a remote repository.
  **Pull:** Downloads updates from a remote repository and applies them to the local copy.
  **Fetch:** Downloads commits from a remote repository without merging them.
  **Origin:** The default name for the remote repository when cloning.
  
  **Example:**
  \`\`\`bash
  # Adding a remote repository
  git remote add origin https://github.com/user/repo.git
  
  # Pushing local changes to the remote repository
  git push origin main
  
  # Pulling changes from the remote repository
  git pull origin main
  \`\`\`
  `
              }
            ]
          },
          {
            title: 'Working with Remote Repositories',
            content: `**Remote Repositories:** Remote repositories are versions of your project that are hosted on the internet or another network. They enable collaboration by allowing multiple developers to contribute to a project from different locations.
        
        **Fetching and Pulling:** Fetching retrieves changes from the remote repository without modifying your local files, while pulling fetches changes and merges them into your current branch.
        
        **Pushing:** Pushing uploads local commits to a remote repository, allowing others to access and review your changes.
        
        **Cloning:** Cloning creates a local copy of a remote repository, including all its history and branches.
        
        **Branch Tracking:** Remote branches track the state of branches in the remote repository, allowing you to see which commits are in sync.
        
        **Forking and Pull Requests:** Forking creates a personal copy of a remote repository, enabling contributors to work independently before submitting pull requests to merge their changes.`,
            innersubtopics: [
              {
                title: 'Remote Repositories',
                content: 'Remote repositories are hosted copies of your project, often stored on platforms like GitHub, GitLab, or Bitbucket. They allow teams to collaborate on codebases and share progress.',
                example: `**Key Concepts:**
        
        **Adding a Remote Repository:** Associate your local repository with a remote version hosted on a platform.
        **Removing a Remote Repository:** You can also remove unnecessary or obsolete remote links.
        **Viewing Remote Repositories:** Check the status of remotes linked to your local repo.
        
        **Example:**
        \`\`\`bash
        # Adding a new remote repository
        git remote add origin https://github.com/user/repo.git
        
        # Viewing remote repository information
        git remote -v
        
        # Removing a remote repository
        git remote remove origin
        \`\`\`
        `
              },
              {
                title: 'Fetching and Pulling',
                content: 'Fetching and pulling are used to synchronize your local repository with changes made in the remote repository. Fetch downloads commits from the remote, and pull integrates those changes into your local branch.',
                example: `**Key Concepts:**
        
        **Fetch:** Downloads changes without altering the local working directory.
        **Pull:** Fetches changes and merges them into the current branch.
        **Merge Conflicts:** Conflicts can occur during a pull if local changes conflict with remote changes, requiring resolution.
        
        **Example:**
        \`\`\`bash
        # Fetching changes from the remote repository
        git fetch origin
        
        # Pulling changes from the remote repository and merging them into the current branch
        git pull origin main
        
        # Handling merge conflicts
        git status
        # Resolve conflicts manually, then
        git add .
        git commit
        \`\`\`
        `
              },
              {
                title: 'Pushing',
                content: 'Pushing sends local commits to the remote repository. Only commits that have been made locally and are ready to be shared will be pushed to the remote, making them available to collaborators.',
                example: `**Key Concepts:**
        
        **Push:** Uploads the local commits to a remote repository.
        **Upstream Branch:** A branch in the remote repository that a local branch is tracking.
        **Force Push:** Overrides remote changes with local changes, potentially overwriting others’ work.
        
        **Example:**
        \`\`\`bash
        # Pushing local changes to the remote repository
        git push origin main
        
        # Force pushing changes (use with caution)
        git push --force origin main
        \`\`\`
        `
              },
              {
                title: 'Cloning',
                content: 'Cloning creates a local copy of a remote repository, including all branches, commits, and history. Once cloned, developers can work on the project locally and sync their changes with the remote.',
                example: `**Key Concepts:**
        
        **Clone:** Downloads the entire repository and its history.
        **Fork vs Clone:** Cloning creates a copy you can contribute to, while forking is often used to make an independent copy for proposing changes.
        
        **Example:**
        \`\`\`bash
        # Cloning a remote repository
        git clone https://github.com/user/repo.git
        
        # Cloning into a specific directory
        git clone https://github.com/user/repo.git my-directory
        \`\`\`
        `
              },
              {
                title: 'Branch Tracking',
                content: 'Git allows local branches to track remote branches, keeping them synchronized. You can see whether your local branch is ahead or behind the remote branch, allowing you to decide when to fetch, pull, or push changes.',
                example: `**Key Concepts:**
        
        **Tracking Branch:** A local branch that tracks a remote branch.
        **Upstream Branch:** A remote branch that the local branch pulls from and pushes to.
        **Branch Status:** Git shows whether your branch is ahead, behind, or up-to-date with the remote branch.
        
        **Example:**
        \`\`\`bash
        # Checking the status of branches
        git status
        
        # Setting an upstream branch for tracking
        git branch --set-upstream-to=origin/main main
        
        # Checking the commits ahead or behind the remote branch
        git status
        \`\`\`
        `
              },
              {
                title: 'Forking and Pull Requests',
                content: 'Forking creates a copy of a repository under your own account, typically used to propose changes to someone else’s repository. After making changes in your forked repo, you can submit a pull request to merge your changes into the original repository.',
                example: `**Key Concepts:**
        
        **Fork:** Creates a personal copy of a repository on GitHub or GitLab.
        **Pull Request:** A request to merge changes from one branch (usually a fork) into another repository.
        **Open Source Collaboration:** Forks and pull requests are commonly used in open-source projects to allow external contributions.
        
        **Example:**
        \`\`\`bash
        # Forking is done through GitHub UI, and no Git command is required for forking.
        # However, after forking, you can clone the forked repo:
        git clone https://github.com/yourusername/forked-repo.git
        
        # To submit a pull request, use the GitHub interface.
        \`\`\`
        `
              }
            ]
          },
          {
            title: 'Advanced Git Concepts',
            content: `**Advanced Git Concepts:** Moving beyond the basics of Git, there are several powerful tools and features that help with managing complex version control needs, resolving conflicts, and optimizing workflows.
        
        **Git Rebase:** Rebase allows you to move or combine commits from one branch onto another, streamlining the commit history.
        
        **Cherry-picking:** Cherry-picking lets you apply a specific commit from one branch into another without merging the entire branch.
        
        **Stashing:** Stashing temporarily saves uncommitted changes so you can switch branches or resolve other issues without committing incomplete work.
        
        **Reflog:** Git Reflog is a powerful tool that allows you to recover lost commits or changes in your repository.
        
        **Squashing Commits:** Squashing combines multiple commits into a single commit, cleaning up the commit history.
        
        **Git Hooks:** Git hooks are custom scripts that run during various stages of the Git lifecycle, allowing for automation of processes.`,
            innersubtopics: [
              {
                title: 'Git Rebase',
                content: 'Rebase is an advanced tool that allows you to change the base of a branch by integrating its commits onto another branch. This is useful for keeping a clean, linear commit history without merge commits.',
                example: `**Key Concepts:**
        
        **Interactive Rebase:** Allows you to re-arrange, squash, or edit commits before applying them.
        **Avoiding Merge Commits:** Rebase prevents merge commits from cluttering the history.
        **Rebase Conflicts:** Just like merges, rebasing can lead to conflicts that need to be resolved manually.
        
        **Example:**
        \`\`\`bash
        # Rebasing the current branch onto another branch
        git rebase main
        
        # Starting an interactive rebase
        git rebase -i HEAD~3  # Rebase the last 3 commits interactively
        
        # Resolving rebase conflicts
        git status
        # Resolve conflicts manually, then continue the rebase
        git rebase --continue
        \`\`\`
        `
              },
              {
                title: 'Cherry-picking',
                content: 'Cherry-picking allows you to apply specific commits from one branch to another. This is useful when you want to bring over just a few changes from another branch, without merging everything.',
                example: `**Key Concepts:**
        
        **Cherry-picking:** Applying specific commits without merging entire branches.
        **Useful for Hotfixes:** Cherry-picking can help with applying fixes from one branch into another without disturbing the whole history.
        
        **Example:**
        \`\`\`bash
        # Cherry-picking a commit into the current branch
        git cherry-pick <commit-hash>
        
        # Cherry-picking multiple commits
        git cherry-pick <commit1-hash> <commit2-hash>
        \`\`\`
        `
              },
              {
                title: 'Stashing',
                content: 'Stashing allows you to temporarily save your uncommitted changes so you can switch branches or resolve issues without committing incomplete work. You can reapply the stashed changes later when ready.',
                example: `**Key Concepts:**
        
        **Stashing:** Saves your uncommitted work and leaves the working directory clean.
        **Applying Stashes:** Reapply stashed changes when you're ready.
        **Stash Pop vs Apply:** Apply keeps the stash, while pop removes it after applying.
        
        **Example:**
        \`\`\`bash
        # Stashing your current changes
        git stash
        
        # Listing all stashes
        git stash list
        
        # Applying the latest stash without removing it
        git stash apply
        
        # Popping the latest stash (apply and remove it)
        git stash pop
        \`\`\`
        `
              },
              {
                title: 'Reflog',
                content: 'Git Reflog records changes made to the tip of branches and allows you to recover commits or branches that may have been lost, even if they aren’t part of the current branch history.',
                example: `**Key Concepts:**
        
        **Recover Lost Commits:** Reflog can restore changes or commits even after a hard reset.
        **Reflog Entries:** Every action (checkout, reset, commit, etc.) creates a Reflog entry.
        **Useful for Undoing Mistakes:** Reflog is invaluable when you accidentally lose commits or need to undo a hard reset.
        
        **Example:**
        \`\`\`bash
        # Viewing reflog entries
        git reflog
        
        # Recovering a lost commit
        git checkout <commit-hash-from-reflog>
        
        # Resetting to a previous commit from reflog
        git reset --hard <commit-hash>
        \`\`\`
        `
              },
              {
                title: 'Squashing Commits',
                content: 'Squashing combines multiple commits into a single commit. It is useful when you want to clean up your commit history, especially before merging a feature branch into the main branch.',
                example: `**Key Concepts:**
        
        **Squashing Commits:** Consolidate several commits into one.
        **Interactive Rebase:** The most common way to squash commits is by using an interactive rebase.
        **Clean History:** Squashing simplifies the commit history before merging into the main branch.
        
        **Example:**
        \`\`\`bash
        # Starting an interactive rebase to squash commits
        git rebase -i HEAD~4  # Squash the last 4 commits
        
        # In the editor, change 'pick' to 'squash' for the commits to be combined
        squash <commit2-hash>
        squash <commit3-hash>
        
        # Save and close the editor to finish squashing.
        \`\`\`
        `
              },
              {
                title: 'Git Hooks',
                content: 'Git hooks are custom scripts that are triggered by Git commands such as committing or merging. They allow you to automate tasks like code linting, formatting, and running tests before pushing code.',
                example: `**Key Concepts:**
        
        **Git Hooks:** Custom scripts run at key points in the Git workflow (e.g., before commit, after merge).
        **Common Use Cases:** Automating tests, enforcing code style, or updating documentation.
        **Client-Side vs Server-Side:** Hooks can be defined for both local repositories and Git servers.
        
        **Example:**
        \`\`\`bash
        # Example of a pre-commit hook to check code style
        # Place the following script in .git/hooks/pre-commit and make it executable
        
        #!/bin/sh
        # Pre-commit hook to check code formatting
        npm run lint
        if [ $? -ne 0 ]; then
          echo "Linting failed. Commit aborted."
          exit 1
        fi
        \`\`\`
        `
              }
            ]
          },
          {
            title: 'Project: Version Control for a Web Project',
            content: `**Project: Version Control for a Web Project:** This project covers how to implement Git for version control in a web development project, helping you manage code changes, collaborate with team members, and keep track of the project's history. You'll apply Git's core features such as branching, merging, and resolving conflicts, as well as advanced concepts like stashing and working with remote repositories.
        
        **Steps:**
        1. **Initial Setup**: Initialize a Git repository for the project, add a .gitignore file, and commit the first version of your project.
        2. **Branching**: Learn how to create feature branches to work on new features or bug fixes without disrupting the main project.
        3. **Merging**: Practice merging feature branches back into the main branch, including how to resolve conflicts if they occur.
        4. **Collaborating**: Push and pull changes to and from a remote repository, and collaborate with other developers through pull requests and code reviews.
        5. **Handling Conflicts**: Learn how to identify and resolve merge conflicts effectively.
        6. **Stashing**: Use Git stash to temporarily save your work if you need to switch branches without committing your changes.
        
        This project will reinforce your understanding of Git workflows in a real-world scenario.`,
            innersubtopics: [
              {
                title: 'Step 1: Initial Setup',
                content: 'Initialize a Git repository for your web project. This includes setting up a .gitignore file to exclude unnecessary files from version control and making your first commit.',
                example: `**Key Concepts:**
        
        **Git Initialization:** Start tracking your web project with Git.
        **.gitignore File:** Exclude files such as node_modules, environment files, or build directories from version control.
        
        **Example:**
        \`\`\`bash
        # Initialize a new Git repository
        git init
        
        # Create a .gitignore file and exclude files
        echo "node_modules/" >> .gitignore
        echo ".env" >> .gitignore
        
        # Add and commit the initial version of the project
        git add .
        git commit -m "Initial commit"
        \`\`\`
        `
              },
              {
                title: 'Step 2: Branching',
                content: 'Create and switch to new branches to work on different features of your project. This allows you to isolate your work until it’s ready to be merged back into the main branch.',
                example: `**Key Concepts:**
        
        **Branching:** Create separate branches for different features or fixes.
        **Isolated Development:** Work independently on features without affecting the main project.
        
        **Example:**
        \`\`\`bash
        # Create a new branch for a feature
        git branch feature/navbar
        
        # Switch to the new branch
        git checkout feature/navbar
        
        # Make changes and commit them
        git add .
        git commit -m "Implemented navbar feature"
        \`\`\`
        `
              },
              {
                title: 'Step 3: Merging',
                content: 'After completing a feature, merge your branch back into the main branch (e.g., master or main). Learn how to resolve conflicts if there are changes in both branches that overlap.',
                example: `**Key Concepts:**
        
        **Merging Branches:** Integrate the feature branch into the main branch after completing the work.
        **Merge Conflicts:** Resolve conflicts that arise when different changes are made to the same lines of code.
        
        **Example:**
        \`\`\`bash
        # Switch to the main branch
        git checkout main
        
        # Merge the feature branch into the main branch
        git merge feature/navbar
        
        # If there are conflicts, resolve them manually, then commit the merge
        git add .
        git commit -m "Merged navbar feature into main"
        \`\`\`
        `
              },
              {
                title: 'Step 4: Collaborating with Remote Repositories',
                content: 'Push your changes to a remote repository (e.g., GitHub) and pull changes made by others. This step includes collaborating through pull requests and code reviews.',
                example: `**Key Concepts:**
        
        **Remote Repositories:** Push and pull changes to and from a remote repository such as GitHub or GitLab.
        **Pull Requests and Code Reviews:** Collaborate with team members by submitting pull requests for review before merging changes.
        
        **Example:**
        \`\`\`bash
        # Add a remote repository
        git remote add origin https://github.com/username/web-project.git
        
        # Push your changes to the remote repository
        git push -u origin main
        
        # Pull changes from the remote repository
        git pull origin main
        \`\`\`
        `
              },
              {
                title: 'Step 5: Handling Conflicts',
                content: 'Merge conflicts are inevitable when working in a team. Learn how to identify conflicting changes, resolve them, and commit the final version.',
                example: `**Key Concepts:**
        
        **Merge Conflicts:** Occur when changes to the same file differ across branches.
        **Conflict Resolution:** Identify the conflicting lines, decide which version to keep or modify, and commit the resolved code.
        
        **Example:**
        \`\`\`bash
        # Check for conflicts during a merge
        git merge feature/footer
        
        # Git will mark the conflicting lines in the files
        # Edit the files to resolve the conflicts
        
        # After resolving, add the changes and commit
        git add .
        git commit -m "Resolved merge conflicts for footer"
        \`\`\`
        `
              },
              {
                title: 'Step 6: Stashing',
                content: 'Use Git stash to save your uncommitted changes if you need to switch to another branch or pull in the latest updates without committing your work.',
                example: `**Key Concepts:**
        
        **Stashing Work:** Temporarily save your uncommitted changes.
        **Applying Stashes:** Reapply your stashed work when you’re ready to continue.
        
        **Example:**
        \`\`\`bash
        # Stash your current changes
        git stash
        
        # Switch to another branch to pull updates
        git checkout main
        git pull origin main
        
        # Return to your previous branch and apply the stash
        git checkout feature/navbar
        git stash apply
        \`\`\`
        `
              }
            ]
          },
        ]
      },
    }
  ],
  4: [
    {
      id: 4,
      name: 'Deep Dive into JavaScript',
      unit: 'Unit 4',
      status: 'Completed',
      description: {
        overview: 'Deep Dive into JavaScript" provides an in-depth exploration of core JavaScript concepts, advanced techniques, and best practices for building dynamic and efficient applications.',
        subtopics: [
          {
            title: "Advanced JavaScript Concepts",
            content: `**Closures:** Closures are functions that retain access to variables from their lexical scope, even when the function is executed outside that scope. This enables powerful patterns like data encapsulation and private variables.
          
          **Asynchronous Programming:** JavaScript's asynchronous programming model allows for operations like I/O to be handled efficiently. Concepts such as callbacks, promises, and async/await are fundamental in managing asynchronous code.
          
          **Prototypes and Inheritance:** JavaScript uses prototypes for inheritance. Objects can inherit properties and methods from other objects, enabling flexible and dynamic object-oriented programming.
          
          **Event Loop and Concurrency Model:** The event loop is a core part of JavaScript's concurrency model. It handles asynchronous tasks and executes code in a non-blocking manner, ensuring smooth and efficient execution of tasks.
          
          **Functional Programming:** JavaScript supports functional programming concepts, such as higher-order functions, pure functions, and immutability, which can lead to more predictable and maintainable code.`,
            innersubtopics: [
              {
                title: "Closures",
                content: `Closures in JavaScript are functions that capture and remember the environment in which they were created, allowing them to access variables from their outer scope even after the outer function has finished executing.`,
                example: `**Key Concepts:**
          
          **Lexical Scope:** Closures capture variables from their surrounding scope.
          **Data Encapsulation:** Use closures to create private variables and functions.
          **Function Factories:** Closures can be used to generate functions with preset configurations.
          
          **Example Code:**
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>JavaScript Closures Example</title>
          </head>
          <body>
            <script>
              function makeCounter() {
                let count = 0;
                return function() {
                  count += 1;
                  return count;
                };
              }
          
              const counter = makeCounter();
              console.log(counter()); // 1
              console.log(counter()); // 2
            </script>
          </body>
          </html>
          `
              },
              {
                title: "Asynchronous Programming",
                content: `Asynchronous programming in JavaScript involves handling operations that take time to complete, such as network requests or file I/O. This is achieved using callbacks, promises, and the async/await syntax.`,
                example: `**Key Concepts:**
          
          **Callbacks:** Functions passed as arguments to handle results or errors once an operation completes.
          **Promises:** Objects representing the eventual completion (or failure) of an asynchronous operation.
          **Async/Await:** Syntactic sugar over promises for writing asynchronous code in a more synchronous manner.
          
          **Example Code:**
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Asynchronous Programming Example</title>
          </head>
          <body>
            <script>
              // Using Promises
              function fetchData() {
                return new Promise((resolve) => {
                  setTimeout(() => {
                    resolve('Data fetched');
                  }, 2000);
                });
              }
          
              fetchData().then(data => console.log(data)); // Data fetched
          
              // Using Async/Await
              async function fetchDataAsync() {
                const data = await fetchData();
                console.log(data); // Data fetched
              }
          
              fetchDataAsync();
            </script>
          </body>
          </html>
          `
              },
              {
                title: "Prototypes and Inheritance",
                content: `JavaScript's prototype-based inheritance allows objects to inherit properties and methods from other objects. This enables dynamic and flexible object-oriented programming.`,
                example: `**Key Concepts:**
          
          **Prototype Chain:** Objects can inherit properties from their prototype.
          **Constructor Functions:** Used to create instances with shared methods via prototypes.
          **Object.create:** Create new objects with a specified prototype.
          
          **Example Code:**
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Prototypes Example</title>
          </head>
          <body>
            <script>
              function Animal(name) {
                this.name = name;
              }
          
              Animal.prototype.speak = function() {
                console.log(name)
                 makes a noise.');
              };
          
              const dog = new Animal('Dog');
              dog.speak(); // Dog makes a noise.
            </script>
          </body>
          </html>
          `
              },
              {
                title: "Event Loop and Concurrency Model",
                content: `The JavaScript event loop manages asynchronous operations and ensures non-blocking execution of code. It processes events and tasks in a queue, allowing JavaScript to handle I/O and other operations efficiently.`,
                example: `**Key Concepts:**
          
          **Event Loop:** Handles the execution of code, events, and messages.
          **Callback Queue:** Holds the functions to be executed once the call stack is empty.
          **Microtasks and Macrotasks:** Different queues for tasks such as promises (microtasks) and setTimeout (macrotasks).
          
          **Example Code:**
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Event Loop Example</title>
          </head>
          <body>
            <script>
              console.log('Start');
          
              setTimeout(() => {
                console.log('Timeout');
              }, 0);
          
              Promise.resolve().then(() => {
                console.log('Promise');
              });
          
              console.log('End');
            </script>
          </body>
          </html>
          `
              },
              {
                title: "Functional Programming",
                content: `Functional programming in JavaScript emphasizes the use of functions as first-class citizens, enabling techniques such as higher-order functions, immutability, and pure functions.`,
                example: `**Key Concepts:**
          
          **Higher-Order Functions:** Functions that accept other functions as arguments or return functions.
          **Immutability:** Data structures that do not change after creation.
          **Pure Functions:** Functions that produce the same output for the same input without side effects.
          
          **Example Code:**
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Functional Programming Example</title>
          </head>
          <body>
            <script>
              // Higher-Order Function
              function applyOperation(x, operation) {
                return operation(x);
              }
          
              // Pure Function
              function double(x) {
                return x * 2;
              }
          
              console.log(applyOperation(5, double)); // 10
            </script>
          </body>
          </html>
          `
              }
            ]
          },
          {
            title: "JavaScript Asynchronous Programming",
            content: `**Asynchronous Programming Overview:** JavaScript's asynchronous programming model is designed to handle operations that take time to complete, such as network requests, file I/O, or timers. This allows JavaScript to perform other tasks while waiting for these operations to finish, ensuring efficient and smooth execution of code.
          
          **Callbacks:** Functions passed as arguments to handle the results or errors of asynchronous operations once they are completed. Callbacks can lead to callback hell if not managed properly.
          
          **Promises:** Objects representing the eventual completion (or failure) of an asynchronous operation. Promises provide a more structured approach than callbacks, allowing chaining and better error handling.
          
          **Async/Await:** Syntactic sugar over promises that makes asynchronous code easier to read and write. Async functions always return a promise, and await expressions pause the execution of the async function until the promise is resolved.
          
          **Error Handling:** Proper error handling is crucial in asynchronous programming to manage and debug failures effectively. Promises and async/await provide mechanisms to handle errors gracefully.`,
            innersubtopics: [
              {
                title: "Callbacks",
                content: `Callbacks are functions that are passed as arguments to other functions and are executed once a certain task is completed. While callbacks are a fundamental part of asynchronous programming, they can lead to nested code and callback hell if not managed well.`,
                example: `**Key Concepts:**
                
          **Callback Functions:** Functions passed to another function to be executed later.
          **Callback Hell:** Deeply nested callbacks can make code hard to read and maintain.
          
          **Example Code:**
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Callbacks Example</title>
          </head>
          <body>
            <script>
              function fetchData(callback) {
                setTimeout(() => {
                  callback('Data fetched');
                }, 2000);
              }
          
              fetchData((data) => {
                console.log(data); // Data fetched
              });
            </script>
          </body>
          </html>
          `
              },
              {
                title: "Promises",
                content: `Promises represent the result of an asynchronous operation that may complete or fail. They provide a cleaner and more manageable approach to handling asynchronous operations compared to callbacks.`,
                example: `**Key Concepts:**
                
          **Creating Promises:** Use the Promise constructor to create a new promise.
          **Promise States:** A promise can be in one of three states: pending, fulfilled, or rejected.
          **Chaining:** Use .then() and .catch() to handle results and errors.
          
          **Example Code:**
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Promises Example</title>
          </head>
          <body>
            <script>
              function fetchData() {
                return new Promise((resolve, reject) => {
                  setTimeout(() => {
                    resolve('Data fetched');
                  }, 2000);
                });
              }
          
              fetchData().then(data => {
                console.log(data); // Data fetched
              }).catch(error => {
                console.error(error);
              });
            </script>
          </body>
          </html>
          `
              },
              {
                title: "Async/Await",
                content: `Async/await is a syntactic sugar over promises that makes asynchronous code easier to write and understand. An async function always returns a promise, and await pauses the function execution until the promise is resolved.`,
                example: `**Key Concepts:**
                
          **Async Functions:** Functions defined with the async keyword that return a promise.
          **Await:** Pauses the execution of the async function until the promise is resolved.
          
          **Example Code:**
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Async/Await Example</title>
          </head>
          <body>
            <script>
              async function fetchData() {
                return new Promise((resolve) => {
                  setTimeout(() => {
                    resolve('Data fetched');
                  }, 2000);
                });
              }
          
              async function fetchDataAsync() {
                const data = await fetchData();
                console.log(data); // Data fetched
              }
          
              fetchDataAsync();
            </script>
          </body>
          </html>
          `
              },
              {
                title: "Error Handling",
                content: `Proper error handling is essential in asynchronous programming to ensure that errors are managed gracefully. Promises and async/await provide structured ways to catch and handle errors.`,
                example: `**Key Concepts:**
                
          **Error Propagation:** Ensure errors in asynchronous operations are caught and handled.
          **Try/Catch with Async/Await:** Use try/catch blocks to handle errors in async functions.
          
          **Example Code:**
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Error Handling Example</title>
          </head>
          <body>
            <script>
              function fetchData(success) {
                return new Promise((resolve, reject) => {
                  setTimeout(() => {
                    if (success) {
                      resolve('Data fetched');
                    } else {
                      reject('Error fetching data');
                    }
                  }, 2000);
                });
              }
          
              async function fetchDataAsync() {
                try {
                  const data = await fetchData(true);
                  console.log(data); // Data fetched
                } catch (error) {
                  console.error(error); // Error fetching data
                }
              }
          
              fetchDataAsync();
            </script>
          </body>
          </html>
          `
              }
            ]
          },
          {
            title: "JavaScript DOM Manipulation",
            content: `**Selecting Elements:** JavaScript provides methods to select and manipulate DOM elements. Methods such as 'getElementById', 'querySelector', and 'getElementsByClassName' are commonly used for this purpose.
        
        **Modifying Elements:** Once selected, DOM elements can be modified in various ways. You can change their content, attributes, and styles using properties and methods like 'innerHTML', 'setAttribute', and 'style'.
        
        **Event Handling:** JavaScript allows you to attach event listeners to elements to handle user interactions such as clicks, form submissions, and keyboard inputs. The 'addEventListener' method is used to listen for events and execute corresponding functions.
        
        **Creating and Removing Elements:** You can create new elements and remove existing ones from the DOM using methods like 'createElement', 'appendChild', and 'removeChild'. This allows for dynamic updates to the web page content.`,
            innersubtopics: [
              {
                title: "Selecting Elements",
                content: "Selecting elements is the first step in manipulating the DOM. JavaScript provides several methods to access DOM elements",
                example: `
        **getElementById:** Selects an element by its unique ID.
        **querySelector:** Selects the first element that matches a CSS selector.
        **getElementsByClassName:** Selects all elements with a given class name.
        
        **Example Code:**
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>DOM Selection Example</title>
        </head>
        <body>
            <div id=example class="box">Hello World</div>
            <script>
                const elementById = document.getElementById('example');
                const elementByClass = document.getElementsByClassName('box')[0];
                const elementByQuery = document.querySelector('#example');
        
                console.log(elementById.innerHTML); // Hello World
                console.log(elementByClass.innerHTML); // Hello World
                console.log(elementByQuery.innerHTML); // Hello World
            </script>
        </body>
        </html>`
              },
              {
                title: "Modifying Elements",
                content: "Once you've selected an element, you can modify its content, attributes, and styles.",
                example: `
        **innerHTML:** Changes the HTML content inside an element.
        **setAttribute:** Modifies the attributes of an element.
        **style:** Adjusts the CSS styles of an element.
        
        **Example Code:**
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>DOM Modification Example</title>
        </head>
        <body>
            <div id=example>Original Text</div>
            <script>
                const element = document.getElementById('example');
                element.innerHTML = 'Updated Text'; // Changes the content
                element.setAttribute('data-info', 'Some Data'); // Adds a new attribute
                element.style.color = 'red'; // Changes text color
            </script>
        </body>
        </html>`
              },
              {
                title: "Event Handling",
                content: "JavaScript allows you to handle user interactions by attaching event listeners to elements.",
                example: `
        **addEventListener:** Attaches an event handler to an element.
        **Event Object:** Provides details about the event, such as the target element and type of event.
        
        **Example Code:**
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Event Handling Example</title>
        </head>
        <body>
            <button id="clickMe">Click Me</button>
            <script>
                const button = document.getElementById('clickMe');
                button.addEventListener('click', function(event) {
                    alert('Button clicked!');
                });
            </script>
        </body>
        </html>`
              },
              {
                title: "Creating and Removing Elements",
                content: `JavaScript allows you to dynamically add or remove elements from the DOM.`,
                example: `
        **createElement:** Creates a new element.
        **appendChild:** Adds a new element as a child of an existing element.
        **removeChild:** Removes an element from its parent.
        
        **Example Code:**
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>DOM Manipulation Example</title>
        </head>
        <body>
            <div id="container"></div>
            <button id="addElement">Add Element</button>
            <button id="removeElement">Remove Element</button>
            <script>
                const container = document.getElementById('container');
                const addButton = document.getElementById('addElement');
                const removeButton = document.getElementById('removeElement');
        
                addButton.addEventListener('click', function() {
                    const newElement = document.createElement('p');
                    newElement.textContent = 'New Element';
                    container.appendChild(newElement);
                });
        
                removeButton.addEventListener('click', function() {
                    if (container.firstChild) {
                        container.removeChild(container.firstChild);
                    }
                });
            </script>
        </body>
        </html>`
              }
            ]
          },
          {
            title: "Interactive JavaScript Application",
            content: `**Selecting Elements:** JavaScript provides methods to select and manipulate DOM elements. For an interactive application, methods such as 'getElementById', 'querySelector', and 'getElementsByClassName' are essential for interacting with user interface components.
        
        **Modifying Elements:** After selecting elements, you can dynamically update their content, attributes, and styles to respond to user interactions. Properties and methods like 'innerHTML', 'setAttribute', and 'style' help you create a dynamic and responsive user experience.
        
        **Event Handling:** JavaScript event handling allows your application to respond to user actions, such as button clicks and form submissions. The 'addEventListener' method is used to listen for these events and trigger appropriate responses, making your application interactive.
        
        **Creating and Removing Elements:** For interactive applications, creating and removing elements on-the-fly is crucial. JavaScript methods like 'createElement', 'appendChild', and 'removeChild' enable dynamic changes to the content and structure of your web page based on user interactions.`,
            innersubtopics: [
              {
                title: "Selecting Elements",
                content: "In an interactive application, selecting elements is the first step to enable dynamic behavior. JavaScript provides several methods to access and manipulate DOM elements:",
                example: `
        **getElementById:** Selects an element by its unique ID.
        **querySelector:** Selects the first element that matches a CSS selector.
        **getElementsByClassName:** Selects all elements with a given class name.
        
        **Example Code:**
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Interactive Selection Example</title>
        </head>
        <body>
            <div id="interactiveElement" class="box">Interactive Content</div>
            <script>
                const elementById = document.getElementById('interactiveElement');
                const elementByClass = document.getElementsByClassName('box')[0];
                const elementByQuery = document.querySelector('#interactiveElement');
        
                console.log(elementById.innerHTML); // Interactive Content
                console.log(elementByClass.innerHTML); // Interactive Content
                console.log(elementByQuery.innerHTML); // Interactive Content
            </script>
        </body>
        </html>`
              },
              {
                title: "Modifying Elements",
                content: "In an interactive JavaScript application, modifying elements allows you to update the UI dynamically. Here’s how you can adjust elements:",
                example: `
        **innerHTML:** Changes the HTML content inside an element.
        **setAttribute:** Modifies or adds attributes of an element.
        **style:** Alters the CSS styles of an element to provide visual feedback.
        
        **Example Code:**
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Interactive Modification Example</title>
        </head>
        <body>
            <div id="interactiveElement">Original Text</div>
            <script>
                const element = document.getElementById('interactiveElement');
                element.innerHTML = 'Updated Interactive Text'; // Changes the content
                element.setAttribute('data-info', 'Updated Data'); // Adds a new attribute
                element.style.color = 'blue'; // Changes text color
            </script>
        </body>
        </html>`
              },
              {
                title: "Event Handling",
                content: "Handling events is crucial for making your application interactive. JavaScript allows you to attach event listeners to handle user actions:",
                example: `
        **addEventListener:** Attaches an event handler to an element to respond to user actions.
        **Event Object:** Provides details about the event, such as the target element and type of event.
        
        **Example Code:**
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Interactive Event Handling Example</title>
        </head>
        <body>
            <button id="interactiveButton">Click Me</button>
            <script>
                const button = document.getElementById('interactiveButton');
                button.addEventListener('click', function(event) {
                    alert('Button was clicked!');
                });
            </script>
        </body>
        </html>`
              },
              {
                title: "Creating and Removing Elements",
                content: "For interactive applications, dynamically adding and removing elements is essential to update the UI based on user interactions.",
                example: `
        **createElement:** Creates new elements to be added to the DOM.
        **appendChild:** Adds a newly created element as a child of an existing element.
        **removeChild:** Removes an element from its parent, allowing for dynamic content updates.
        
        **Example Code:**
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Interactive DOM Manipulation Example</title>
        </head>
        <body>
            <div id="dynamicContainer"></div>
            <button id="addElement">Add Element</button>
            <button id="removeElement">Remove Element</button>
            <script>
                const container = document.getElementById('dynamicContainer');
                const addButton = document.getElementById('addElement');
                const removeButton = document.getElementById('removeElement');
        
                addButton.addEventListener('click', function() {
                    const newElement = document.createElement('p');
                    newElement.textContent = 'New Interactive Element';
                    container.appendChild(newElement);
                });
        
                removeButton.addEventListener('click', function() {
                    if (container.firstChild) {
                        container.removeChild(container.firstChild);
                    }
                });
            </script>
        </body>
        </html>`
              }
            ]
          }
        ]
      },
    }
  ],
  5: [
    {
      id: 5,
      name: 'Introduction to TypeScript',
      unit: 'Unit 5',
      status: 'Completed',
      description: {
        overview: 'Introduction to TypeScript provides a foundational understanding of TypeScript static typing, enhanced tooling, and how it builds on JavaScript to improve code reliability and maintainability.',
        subtopics: [
          {
            title: "TypeScript Basics",
            content: `**Selecting Elements:** TypeScript enhances JavaScript with static types. When selecting DOM elements, TypeScript helps ensure type safety by allowing you to define types for your elements. Methods like 'getElementById', 'querySelector', and 'getElementsByClassName' are commonly used for selecting elements, with TypeScript providing type checking and autocompletion.
        
        **Modifying Elements:** TypeScript's type system can also be leveraged to modify DOM elements. By defining types for your elements, you ensure that you are using the correct properties and methods, reducing runtime errors. Properties like 'innerHTML', 'setAttribute', and 'style' can be safely manipulated with TypeScript.
        
        **Event Handling:** Handling events in TypeScript involves defining types for event objects and handlers. TypeScript helps ensure that your event handling code is robust and free from type-related errors, using the 'addEventListener' method and specifying event types.
        
        **Creating and Removing Elements:** TypeScript allows you to dynamically create and remove DOM elements with type safety. Using methods like 'createElement', 'appendChild', and 'removeChild', you can manage the DOM while benefiting from TypeScript’s static type checking.`,
            innersubtopics: [
              {
                title: "Selecting Elements",
                content: "In TypeScript, selecting elements is enhanced by type safety. By specifying types for DOM elements, you can avoid common errors and leverage TypeScript's features:",
                example: `
        **getElementById:** Selects an element by its unique ID with a specific type.
        **querySelector:** Selects the first element that matches a CSS selector with type safety.
        **getElementsByClassName:** Selects all elements with a given class name, ensuring correct types.
        
        **Example Code:**
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>TypeScript Selection Example</title>
        </head>
        <body>
            <div id=example class="box">TypeScript Content</div>
            <script>
                const elementById = document.getElementById('example') as HTMLDivElement;
                const elementByClass = document.getElementsByClassName('box')[0] as HTMLDivElement;
                const elementByQuery = document.querySelector('#example') as HTMLDivElement;
        
                console.log(elementById.innerHTML); // TypeScript Content
                console.log(elementByClass.innerHTML); // TypeScript Content
                console.log(elementByQuery.innerHTML); // TypeScript Content
            </script>
        </body>
        </html>`
              },
              {
                title: "Modifying Elements",
                content: "Modifying elements with TypeScript ensures that you are using correct types for element properties and methods. This helps avoid runtime errors and makes your code more robust:",
                example: `
        **innerHTML:** Safely changes the HTML content inside an element.
        **setAttribute:** Modifies or adds attributes of an element with type safety.
        **style:** Adjusts the CSS styles of an element using TypeScript’s type system.
        
        **Example Code:**
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>TypeScript Modification Example</title>
        </head>
        <body>
            <div id=example>Original Text</div>
            <script>
                const element = document.getElementById('example') as HTMLDivElement;
                element.innerHTML = 'Updated TypeScript Text'; // Changes the content
                element.setAttribute('data-info', 'Updated Data'); // Adds a new attribute
                element.style.color = 'green'; // Changes text color
            </script>
        </body>
        </html>`
              },
              {
                title: "Event Handling",
                content: "TypeScript improves event handling by adding type annotations to event objects and handlers. This helps catch errors at compile time and provides better developer support:",
                example: `
        **addEventListener:** Attaches an event handler to an element with specified event types.
        **Event Object:** Provides details about the event, ensuring type safety.
        
        **Example Code:**
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>TypeScript Event Handling Example</title>
        </head>
        <body>
            <button id="clickMe">Click Me</button>
            <script>
                const button = document.getElementById('clickMe') as HTMLButtonElement;
                button.addEventListener('click', (event: MouseEvent) => {
                    alert('Button clicked!');
                });
            </script>
        </body>
        </html>`
              },
              {
                title: "Creating and Removing Elements",
                content: "In TypeScript, dynamically creating and removing elements is done with type safety. This ensures that you are using the correct methods and properties for DOM manipulation:",
                example: `
        **createElement:** Creates a new element with type safety.
        **appendChild:** Adds a newly created element as a child of an existing element.
        **removeChild:** Removes an element from its parent, with TypeScript ensuring correct usage.
        
        **Example Code:**
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>TypeScript DOM Manipulation Example</title>
        </head>
        <body>
            <div id="container"></div>
            <button id="addElement">Add Element</button>
            <button id="removeElement">Remove Element</button>
            <script>
                const container = document.getElementById('container') as HTMLDivElement;
                const addButton = document.getElementById('addElement') as HTMLButtonElement;
                const removeButton = document.getElementById('removeElement') as HTMLButtonElement;
        
                addButton.addEventListener('click', () => {
                    const newElement = document.createElement('p');
                    newElement.textContent = 'New TypeScript Element';
                    container.appendChild(newElement);
                });
        
                removeButton.addEventListener('click', () => {
                    if (container.firstChild) {
                        container.removeChild(container.firstChild);
                    }
                });
            </script>
        </body>
        </html>`
              }
            ]
          },
          {
            title: "TypeScript with JavaScript Libraries",
            content: `**Selecting Elements:** With TypeScript, you can leverage strong typing to select and manipulate DOM elements more safely. JavaScript methods like 'getElementById', 'querySelector', and 'getElementsByClassName' can be used with TypeScript's type assertions for improved type safety.
      
      **Modifying Elements:** TypeScript allows you to modify DOM elements with type checking. You can use properties and methods like 'innerHTML', 'setAttribute', and 'style' with TypeScript to ensure that the elements you're working with are correctly typed.
      
      **Event Handling:** TypeScript enhances event handling by providing type definitions for event objects. This ensures that you handle events with correct types and avoid runtime errors. The 'addEventListener' method can be used to attach event handlers with type safety.
      
      **Creating and Removing Elements:** In TypeScript, dynamically creating and removing elements is similar to JavaScript but with type safety. Methods like 'createElement', 'appendChild', and 'removeChild' can be used to manipulate the DOM while TypeScript ensures the elements are correctly typed.`,
            innersubtopics: [
              {
                title: "Selecting Elements",
                content: "Using TypeScript to select elements allows for type-safe manipulation of the DOM. TypeScript's type assertions help in ensuring that the elements you work with are of the expected type:",
                example: `
      **getElementById:** Selects an element by its unique ID and can be asserted as an HTML element type.
      **querySelector:** Selects the first element matching a CSS selector and can be asserted as an HTML element type.
      **getElementsByClassName:** Selects all elements with a given class name and can be asserted as an HTMLCollection of a specific type.
      
      **Example Code:**
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>TypeScript DOM Selection Example</title>
      </head>
      <body>
          <div id="interactiveElement" class="box">Interactive Content</div>
          <script type="text/typescript">
              const elementById = document.getElementById('interactiveElement') as HTMLDivElement;
              const elementByClass = document.getElementsByClassName('box')[0] as HTMLDivElement;
              const elementByQuery = document.querySelector('#interactiveElement') as HTMLDivElement;
      
              console.log(elementById.innerHTML); // Interactive Content
              console.log(elementByClass.innerHTML); // Interactive Content
              console.log(elementByQuery.innerHTML); // Interactive Content
          </script>
      </body>
      </html>`
              },
              {
                title: "Modifying Elements",
                content: "In TypeScript, you can modify DOM elements with type safety. This ensures that operations on elements are correctly typed and reduce runtime errors:",
                example: `
      **innerHTML:** Changes the HTML content inside an element with type checking.
      **setAttribute:** Modifies the attributes of an element, with type safety.
      **style:** Adjusts the CSS styles of an element, ensuring the style properties are correctly typed.
      
      **Example Code:**
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>TypeScript DOM Modification Example</title>
      </head>
      <body>
          <div id="interactiveElement">Original Text</div>
          <script type="text/typescript">
              const element = document.getElementById('interactiveElement') as HTMLDivElement;
              element.innerHTML = 'Updated Interactive Text'; // Changes the content
              element.setAttribute('data-info', 'Updated Data'); // Adds a new attribute
              element.style.color = 'blue'; // Changes text color
          </script>
      </body>
      </html>`
              },
              {
                title: "Event Handling",
                content: "TypeScript enhances event handling by providing type definitions for event objects, which helps in handling events safely and avoiding runtime errors:",
                example: `
      **addEventListener:** Attaches an event handler to an element with type-safe event objects.
      **Event Object:** Provides details about the event, ensuring that event handling is correctly typed.
      
      **Example Code:**
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>TypeScript Event Handling Example</title>
      </head>
      <body>
          <button id="interactiveButton">Click Me</button>
          <script type="text/typescript">
              const button = document.getElementById('interactiveButton') as HTMLButtonElement;
              button.addEventListener('click', function(event: MouseEvent) {
                  alert('Button was clicked!');
              });
          </script>
      </body>
      </html>`
              },
              {
                title: "Creating and Removing Elements",
                content: "In TypeScript, creating and removing elements from the DOM is done with type safety. TypeScript ensures that the elements you manipulate are correctly typed:",
                example: `
      **createElement:** Creates new elements with type assertions.
      **appendChild:** Adds a newly created element as a child of an existing element, ensuring type safety.
      **removeChild:** Removes an element from its parent, with type checking.
      
      **Example Code:**
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>TypeScript DOM Manipulation Example</title>
      </head>
      <body>
          <div id="dynamicContainer"></div>
          <button id="addElement">Add Element</button>
          <button id="removeElement">Remove Element</button>
          <script type="text/typescript">
              const container = document.getElementById('dynamicContainer') as HTMLDivElement;
              const addButton = document.getElementById('addElement') as HTMLButtonElement;
              const removeButton = document.getElementById('removeElement') as HTMLButtonElement;
      
              addButton.addEventListener('click', function() {
                  const newElement = document.createElement('p');
                  newElement.textContent = 'New Interactive Element';
                  container.appendChild(newElement);
              });
      
              removeButton.addEventListener('click', function() {
                  if (container.firstChild) {
                      container.removeChild(container.firstChild);
                  }
              });
          </script>
      </body>
      </html>`
              }
            ]
          },
          {
            title: "Advanced TypeScript Features",
            content: `**TypeScript Basics:** TypeScript enhances JavaScript by adding static types, interfaces, and advanced features that make the code more predictable and maintainable. Key concepts include type annotations, interfaces, and generics.
    
    **Advanced Type Features:** TypeScript offers advanced features like union types, intersection types, and mapped types to create more flexible and powerful type definitions. These features help in writing more complex and type-safe code.
    
    **Type Inference:** TypeScript can automatically infer types based on the code context, reducing the need for explicit type annotations while still providing type safety.
    
    **Utility Types:** TypeScript includes built-in utility types such as Partial, Required, Readonly, and Record, which help manipulate and transform types easily.`,
            innersubtopics: [
              {
                title: "TypeScript Basics",
                content: "TypeScript adds static type-checking to JavaScript, improving code quality and developer productivity. Key basics include:",
                example: `
    **Type Annotations:** Explicitly declare the type of variables, parameters, and return values.
    **Interfaces:** Define the shape of objects and function signatures.
    **Generics:** Create reusable components with flexible types.
    
    **Example Code:**
    // TypeScript basics example
    interface Person {
        name: string;
        age: number;
    }
    
    function greet(person: Person): string {
        return \`Hello, \${person.name}! You are \${person.age} years old.\`;
    }
    
    const user: Person = { name: 'Alice', age: 30 };
    console.log(greet(user)); // Hello, Alice! You are 30 years old.
    `
              },
              {
                title: "Advanced Type Features",
                content: "TypeScript’s advanced type features provide greater flexibility and type safety:",
                example: `
    **Union Types:** Allow a value to be one of several types.
    **Intersection Types:** Combine multiple types into one.
    **Mapped Types:** Create new types by transforming existing ones.
    
    **Example Code:**
    // Advanced Type Features example
    type Status = 'active' | 'inactive';
    type User = { name: string } & { age: number };
    
    const activeUserStatus: Status = 'active'; // OK
    const user: User = { name: 'Bob', age: 25 }; // OK
    
    type ReadonlyUser = Readonly<User>;
    const readonlyUser: ReadonlyUser = { name: 'Charlie', age: 40 };
    // readonlyUser.age = 50; // Error: Cannot assign to 'age' because it is a read-only property.
    `
              },
              {
                title: "Type Inference",
                content: "TypeScript can automatically infer types based on the code context, which helps in reducing explicit type annotations while still ensuring type safety:",
                example: `
    **Automatic Type Inference:** TypeScript infers types from the values and expressions used.
    
    **Example Code:**
    // Type Inference example
    let message = 'Hello, TypeScript'; // TypeScript infers type as string
    message = 'Hello, World'; // OK
    // message = 123; // Error: Type 'number' is not assignable to type 'string'.
    
    function multiply(x: number, y: number) {
        return x * y; // TypeScript infers return type as number
    }
    
    const result = multiply(5, 10); // OK
    `
              },
              {
                title: "Utility Types",
                content: "TypeScript provides utility types that help in transforming and manipulating types easily:",
                example: `
    **Partial:** Makes all properties optional.
    **Required:** Makes all properties required.
    **Readonly:** Makes all properties read-only.
    **Record:** Creates an object type with specific properties.
    
    **Example Code:**
    // Utility Types example
    type User = {
        name: string;
        age: number;
        email?: string;
    };
    
    type PartialUser = Partial<User>; // All properties are optional
    type RequiredUser = Required<User>; // All properties are required
    type ReadonlyUser = Readonly<User>; // All properties are read-only
    type UserRecord = Record<string, User>; // Index signature with User type
    
    const partialUser: PartialUser = { name: 'Daisy' }; // OK
    const requiredUser: RequiredUser = { name: 'Daisy', age: 30, email: 'daisy@example.com' }; // OK
    const readonlyUser: ReadonlyUser = { name: 'Daisy', age: 30 };
    // readonlyUser.name = 'Rose'; // Error: Cannot assign to 'name' because it is a read-only property.
    const userRecord: UserRecord = {
        user1: { name: 'Eve', age: 22 },
        user2: { name: 'Mallory', age: 27 }
    };
    `
              }
            ]
          },
          {
            title: "TypeScript Application with DOM Manipulation",
            content: `**Selecting Elements:** TypeScript enhances JavaScript with type safety and autocompletion, making DOM manipulation more reliable. Use methods like 'getElementById', 'querySelector', and 'getElementsByClassName' to select and interact with elements in a strongly-typed manner.
  
  **Modifying Elements:** Once elements are selected, you can modify their content, attributes, and styles. TypeScript helps ensure that the operations you perform are valid by providing type checking for properties and methods like 'innerHTML', 'setAttribute', and 'style'.
  
  **Event Handling:** TypeScript provides type definitions for event handling, making it easier to work with events in a type-safe way. Use 'addEventListener' to attach event listeners and handle user interactions such as clicks and form submissions.
  
  **Creating and Removing Elements:** Dynamically adding and removing elements from the DOM is straightforward in TypeScript. Methods like 'createElement', 'appendChild', and 'removeChild' allow you to update the DOM based on user interactions while benefiting from TypeScript’s type checking.`,
            innersubtopics: [
              {
                title: "Selecting Elements",
                content: "In a TypeScript application, selecting elements involves type safety and autocompletion. Use the following methods to interact with DOM elements:",
                example: `
  **getElementById:** Selects an element by its unique ID.
  **querySelector:** Selects the first element that matches a CSS selector.
  **getElementsByClassName:** Selects all elements with a given class name.
  
  **Example Code:**
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>TypeScript DOM Selection Example</title>
  </head>
  <body>
      <div id="interactiveElement" class="box">Interactive Content</div>
      <script type="module">
          const elementById = document.getElementById('interactiveElement') as HTMLDivElement;
          const elementByClass = document.getElementsByClassName('box')[0] as HTMLDivElement;
          const elementByQuery = document.querySelector('#interactiveElement') as HTMLDivElement;
  
          console.log(elementById.innerHTML); // Interactive Content
          console.log(elementByClass.innerHTML); // Interactive Content
          console.log(elementByQuery.innerHTML); // Interactive Content
      </script>
  </body>
  </html>`
              },
              {
                title: "Modifying Elements",
                content: "TypeScript ensures that modifications to elements are type-safe. You can update content, attributes, and styles as follows:",
                example: `
  **innerHTML:** Changes the HTML content inside an element.
  **setAttribute:** Modifies or adds attributes of an element.
  **style:** Alters the CSS styles of an element.
  
  **Example Code:**
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>TypeScript DOM Modification Example</title>
  </head>
  <body>
      <div id="interactiveElement">Original Text</div>
      <script type="module">
          const element = document.getElementById('interactiveElement') as HTMLDivElement;
          element.innerHTML = 'Updated Interactive Text'; // Changes the content
          element.setAttribute('data-info', 'Updated Data'); // Adds a new attribute
          element.style.color = 'blue'; // Changes text color
      </script>
  </body>
  </html>`
              },
              {
                title: "Event Handling",
                content: "Handle user interactions with type safety using TypeScript. Attach event listeners to manage events like clicks and form submissions:",
                example: `
  **addEventListener:** Attaches an event handler to an element to respond to user actions.
  **Event Object:** Provides details about the event, with type safety for properties.
  
  **Example Code:**
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>TypeScript Event Handling Example</title>
  </head>
  <body>
      <button id="interactiveButton">Click Me</button>
      <script type="module">
          const button = document.getElementById('interactiveButton') as HTMLButtonElement;
          button.addEventListener('click', (event: MouseEvent) => {
              alert('Button was clicked!');
          });
      </script>
  </body>
  </html>`
              },
              {
                title: "Creating and Removing Elements",
                content: "Use TypeScript to create and remove DOM elements dynamically, ensuring type safety throughout:",
                example: `
  **createElement:** Creates a new element.
  **appendChild:** Adds a newly created element as a child of an existing element.
  **removeChild:** Removes an element from its parent.
  
  **Example Code:**
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>TypeScript DOM Manipulation Example</title>
  </head>
  <body>
      <div id="dynamicContainer"></div>
      <button id="addElement">Add Element</button>
      <button id="removeElement">Remove Element</button>
      <script type="module">
          const container = document.getElementById('dynamicContainer') as HTMLDivElement;
          const addButton = document.getElementById('addElement') as HTMLButtonElement;
          const removeButton = document.getElementById('removeElement') as HTMLButtonElement;
  
          addButton.addEventListener('click', () => {
              const newElement = document.createElement('p');
              newElement.textContent = 'New Interactive Element';
              container.appendChild(newElement);
          });
  
          removeButton.addEventListener('click', () => {
              if (container.firstChild) {
                  container.removeChild(container.firstChild);
              }
          });
      </script>
  </body>
  </html>`
              }
            ]
          }
        ]
      }
    }
  ],
  6: [
    {
      id: 6,
      name: 'React Fundamentals',
      unit: 'Unit 6',
      status: 'Completed',
      description: {
        overview: "React Fundamentals covers the essential concepts and practices of React, including components, JSX, state, and props, to build interactive and dynamic user interfaces.",
        subtopics: [
          {
            title: "Introduction to React",
            content: `**Selecting Elements:** In React, you manage elements using components rather than direct DOM manipulation. Components can be functional or class-based and are used to build the UI of your application. React uses a virtual DOM to optimize updates and rendering.
          
          **Modifying Elements:** React components manage their own state and props to dynamically update the UI. You use state to handle dynamic data and props to pass data between components. Methods like 'setState' in class components or the 'useState' hook in functional components help in managing state.
          
          **Event Handling:** React provides a declarative way to handle events. You can attach event handlers directly to JSX elements. React normalizes events so that they work consistently across different browsers. Event handlers are usually passed as props to components.
          
          **Creating and Removing Elements:** React allows you to conditionally render elements based on the state and props of components. This makes it easy to dynamically add or remove elements from the UI without directly manipulating the DOM.`,
            innersubtopics: [
              {
                title: "Selecting Elements",
                content: "In React, you manage elements using components rather than directly manipulating the DOM. Components represent the building blocks of your UI. React's virtual DOM efficiently updates and renders components based on state and props.",
                example: `
          **Functional Component:** A simple way to define a React component using a function.
          **Class Component:** An older way to define a React component using ES6 class syntax.
          
          **Example Code:**
          import React from 'react';
          
          function FunctionalComponent() {
              return <div>Functional Component Content</div>;
          }
          
          class ClassComponent extends React.Component {
              render() {
                  return <div>Class Component Content</div>;
              }
          }
          
          export { FunctionalComponent, ClassComponent };
          `
              },
              {
                title: "Modifying Elements",
                content: "In React, you modify elements by updating the state or props of components. Components re-render automatically when their state or props change.",
                example: `
          **useState Hook:** Allows you to add state to functional components.
          **setState Method:** Updates the state in class components.
          
          **Example Code:**
          import React, { useState } from 'react';
          
          function ExampleComponent() {
              const [text, setText] = useState('Original Text');
          
              return (
                  <div>
                      <p>{text}</p>
                      <button onClick={() => setText('Updated Text')}>Update Text</button>
                  </div>
              );
          }
          
          export default ExampleComponent;
          `
              },
              {
                title: "Event Handling",
                content: "Handling events in React is done by passing event handler functions as props to components. React's event system is cross-browser compatible and provides synthetic events.",
                example: `
          **Handling Click Events:** Attach event handlers to JSX elements to handle user interactions.
          
          **Example Code:**
          import React from 'react';
          
          function EventHandlingComponent() {
              const handleClick = () => {
                  alert('Button was clicked!');
              };
          
              return (
                  <button onClick={handleClick}>Click Me</button>
              );
          }
          
          export default EventHandlingComponent;
          `
              },
              {
                title: "Creating and Removing Elements",
                content: "In React, elements are created and removed by managing component state and conditional rendering. React components re-render based on state changes, which allows for dynamic content updates.",
                example: `
          **Conditional Rendering:** Render elements based on the state or props of components.
          
          **Example Code:**
          import React, { useState } from 'react';
          
          function DynamicElementsComponent() {
              const [isVisible, setIsVisible] = useState(true);
          
              return (
                  <div>
                      {isVisible && <p>Dynamic Element</p>}
                      <button onClick={() => setIsVisible(!isVisible)}>Toggle Element</button>
                  </div>
              );
          }
          
          export default DynamicElementsComponent;
          `
              }
            ]
          },
          {
            title: "React Hooks",
            content: `**Using React Hooks:** React Hooks allow you to use state and other React features without writing a class. Common hooks include 'useState', 'useEffect', and 'useContext', which are essential for managing state and side effects in functional components.
        
        **Managing State:** The 'useState' hook is used to add state to functional components. It provides a way to declare state variables and update them, facilitating dynamic rendering and interactions within your components.
        
        **Handling Side Effects:** The 'useEffect' hook manages side effects such as data fetching, subscriptions, and manual DOM manipulations. It allows you to synchronize your component with external systems and APIs.
        
        **Context Management:** The 'useContext' hook is used to access context values directly, making it easier to manage and consume context within functional components without the need for traditional context consumers.
        
        **Custom Hooks:** You can create custom hooks to encapsulate reusable logic and share it across multiple components. Custom hooks leverage built-in hooks to manage component state and side effects.`,
            innersubtopics: [
              {
                title: "Using useState",
                content: "The 'useState' hook is used to manage state in functional components. It returns a state variable and a function to update it.",
                example: `
        **useState:** Adds state to a functional component.
        
        **Example Code:**
        import React, { useState } from 'react';
        
        function Counter() {
            const [count, setCount] = useState(0);
        
            return (
                <div>
                    <p>Count: {count}</p>
                    <button onClick={() => setCount(count + 1)}>Increment</button>
                </div>
            );
        }
        
        export default Counter;`
              },
              {
                title: "Handling Side Effects with useEffect",
                content: "The 'useEffect' hook is used to handle side effects in functional components, such as data fetching or manual DOM manipulation.",
                example: `
        **useEffect:** Manages side effects and performs operations based on dependencies.
        
        **Example Code:**
        import React, { useState, useEffect } from 'react';
        
        function FetchData() {
            const [data, setData] = useState(null);
        
            useEffect(() => {
                fetch('https://api.example.com/data')
                    .then(response => response.json())
                    .then(data => setData(data));
            }, []); // Empty dependency array means this runs once after the initial render
        
            return (
                <div>
                    <h1>Data:</h1>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            );
        }
        
        export default FetchData;`
              },
              {
                title: "Using useContext",
                content: "The 'useContext' hook allows you to consume context directly without using Context.Consumer. It simplifies accessing context values within functional components.",
                example: `
        **useContext:** Provides access to context values.
        
        **Example Code:**
        import React, { createContext, useContext, useState } from 'react';
        
        const ThemeContext = createContext('light');
        
        function ThemeToggle() {
            const theme = useContext(ThemeContext);
        
            return (
                <div>
                    <p>Current theme: {theme}</p>
                </div>
            );
        }
        
        function App() {
            return (
                <ThemeContext.Provider value="dark">
                    <ThemeToggle />
                </ThemeContext.Provider>
            );
        }
        
        export default App;`
              },
              {
                title: "Creating Custom Hooks",
                content: "Custom hooks allow you to encapsulate reusable logic and share it across components. They are functions that use built-in hooks to manage state or side effects.",
                example: `
        **Custom Hooks:** Encapsulate and reuse logic across components.
        
        **Example Code:**
        import { useState, useEffect } from 'react';
        
        function useFetch(url) {
            const [data, setData] = useState(null);
            const [loading, setLoading] = useState(true);
        
            useEffect(() => {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        setData(data);
                        setLoading(false);
                    });
            }, [url]);
        
            return { data, loading };
        }
        
        function DataDisplay({ url }) {
            const { data, loading } = useFetch(url);
        
            if (loading) return <p>Loading...</p>;
            return <pre>{JSON.stringify(data, null, 2)}</pre>;
        }
        
        export default DataDisplay;`
              }
            ]
          },
          {
            title: "React Router DOM Manipulation",
            content: `**Selecting Elements:** In a React application using React Router, you'll often need to select and manipulate DOM elements within different routes. Methods like 'getElementById', 'querySelector', and 'getElementsByClassName' can be used within React components to interact with elements based on routing and user interactions.
      
      **Modifying Elements:** React allows you to modify component states and props, which in turn updates the DOM. Methods like 'innerHTML', 'setAttribute', and 'style' are replaced by React's state management and inline styles for dynamic updates.
      
      **Event Handling:** React Router integrates with React's event handling to manage user interactions across different routes. Event handlers are used to navigate between routes, handle form submissions, and manage user inputs.
      
      **Creating and Removing Elements:** React Router helps manage the addition and removal of components based on routing. You can dynamically add or remove components by changing routes and updating component states.`,
            innersubtopics: [
              {
                title: "Selecting Elements",
                content: "In a React application with React Router, selecting elements is handled within components using React's refs or state. JavaScript methods can be used inside components to interact with the DOM:",
                example: `
      **Using Refs:** React's 'useRef' hook allows you to directly access DOM elements.
      **State Management:** React's state management updates elements based on user interactions and routing changes.
      
      **Example Code:**
      import React, { useRef, useEffect } from 'react';
      import { useParams } from 'react-router-dom';
      
      function MyComponent() {
          const elementRef = useRef(null);
          const { id } = useParams();
      
          useEffect(() => {
              if (elementRef.current) {
                  console.log(elementRef.current.innerHTML); // Accessing element
              }
          }, [id]);
      
          return (
              <div ref={elementRef} id="interactiveElement" className="box">Interactive Content</div>
          );
      }
      
      export default MyComponent;`
              },
              {
                title: "Modifying Elements",
                content: "In React, modifying elements involves updating component states and props. This approach replaces direct DOM manipulation methods:",
                example: `
      **State Management:** Use React's 'useState' to manage component state and update the DOM.
      **Inline Styles:** Apply styles directly through JSX attributes.
      
      **Example Code:**
      import React, { useState } from 'react';
      
      function MyComponent() {
          const [text, setText] = useState('Original Text');
          const [color, setColor] = useState('black');
      
          return (
              <div>
                  <div style={{ color: color }}>{text}</div>
                  <button onClick={() => setText('Updated Interactive Text')}>Update Text</button>
                  <button onClick={() => setColor('blue')}>Change Color</button>
              </div>
          );
      }
      
      export default MyComponent;`
              },
              {
                title: "Event Handling",
                content: "React Router enables event handling for navigation and user interactions. Event handlers are used to manage routing and component updates:",
                example: `
      **useHistory:** Use the 'useHistory' hook to programmatically navigate between routes.
      **Event Handling:** Attach event handlers to elements to manage interactions and route changes.
      
      **Example Code:**
      import React from 'react';
      import { useHistory } from 'react-router-dom';
      
      function MyComponent() {
          const history = useHistory();
      
          const handleClick = () => {
              history.push('/new-route');
          };
      
          return (
              <button onClick={handleClick}>Go to New Route</button>
          );
      }
      
      export default MyComponent;`
              },
              {
                title: "Creating and Removing Elements",
                content: "React Router manages the rendering of components based on routing. You can dynamically add or remove components by changing routes:",
                example: `
      **Route Management:** Use 'Route' components to render different components based on the current route.
      **Conditional Rendering:** Render components conditionally based on the state or route.
      
      **Example Code:**
      import React from 'react';
      import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
      import Home from './Home';
      import About from './About';
      
      function App() {
          return (
              <Router>
                  <Switch>
                      <Route exact path="/" component={Home} />
                      <Route path="/about" component={About} />
                  </Switch>
              </Router>
          );
      }
      
      export default App;`
              }
            ]
          },
          {
            title: "Simple React Application",
            content: `**Selecting Elements:** In a React application, you typically use state and props to manage and access elements, rather than directly selecting them from the DOM. React's virtual DOM optimizes updates and re-renders components based on state changes.
    
    **Modifying Elements:** React allows you to update the UI by changing the component's state or props. When the state or props change, React re-renders the component to reflect the new data.
    
    **Event Handling:** React simplifies event handling with its synthetic event system. You can add event handlers directly to JSX elements using props like 'onClick', 'onChange', etc., to handle user interactions.
    
    **Creating and Removing Elements:** React components manage their own state and lifecycle, including creating and removing elements dynamically. Components can conditionally render elements based on their state or props.`,
            innersubtopics: [
              {
                title: "Selecting Elements",
                content: "In a React application, element selection is often managed through state and props. Here's how you can manage and access elements:",
                example: `
    **Using State:** React components can use state to manage and access data that affects the rendered output.
    
    **Example Code:**
    import React, { useState } from 'react';
    
    function App() {
        const [text, setText] = useState('Initial Text');
    
        return (
            <div>
                <p>{text}</p>
                <button onClick={() => setText('Updated Text')}>Update Text</button>
            </div>
        );
    }
    
    export default App;`
              },
              {
                title: "Modifying Elements",
                content: "To modify elements in React, update the component's state or props, which will trigger a re-render with the updated data.",
                example: `
    **Using State to Modify Content:** React re-renders components when state changes, updating the UI automatically.
    
    **Example Code:**
    import React, { useState } from 'react';
    
    function App() {
        const [text, setText] = useState('Original Text');
        const [color, setColor] = useState('black');
    
        return (
            <div>
                <p style={{ color }}>{text}</p>
                <button onClick={() => setText('Updated Text')}>Change Text</button>
                <button onClick={() => setColor('red')}>Change Color</button>
            </div>
        );
    }
    
    export default App;`
              },
              {
                title: "Event Handling",
                content: "React handles events using a synthetic event system that wraps around the native browser events. You can add event handlers directly in JSX.",
                example: `
    **Handling Events in React:** Attach event handlers to elements using JSX props like 'onClick'.
    
    **Example Code:**
    import React from 'react';
    
    function App() {
        const handleClick = () => {
            alert('Button clicked!');
        };
    
        return (
            <div>
                <button onClick={handleClick}>Click Me</button>
            </div>
        );
    }
    
    export default App;`
              },
              {
                title: "Creating and Removing Elements",
                content: "In React, elements are created and removed dynamically based on the component's state or props. Conditional rendering is used to display or hide elements.",
                example: `
    **Conditional Rendering:** Use conditional logic to render elements based on state or props.
    
    **Example Code:**
    import React, { useState } from 'react';
    
    function App() {
        const [isVisible, setIsVisible] = useState(true);
    
        return (
            <div>
                {isVisible && <p>Dynamic Element</p>}
                <button onClick={() => setIsVisible(!isVisible)}>
                    {isVisible ? 'Hide Element' : 'Show Element'}
                </button>
            </div>
        );
    }
    
    export default App;`
              }
            ]
          }
        ]
      }
    }
  ],
  7: [
    {
      id: 7,
      name: 'Introduction to Operating Systems',
      unit: 'Unit 7',
      status: 'Completed',
      description: {
        overview: 'Introduction to Operating Systems" provides a foundational understanding of how operating systems manage hardware and software resources to support user and application functionalities.',
        subtopics: [
          {
            title: "Basics of Operating Systems",
            content: `**Selecting Processes:** Operating systems provide methods to manage and manipulate processes. Functions such as 'getProcessById', 'queryProcessStatus', and 'getProcessList' are commonly used to interact with and manage running processes.
        
        **Modifying Processes:** Once selected, processes can be modified in various ways. You can change their state, adjust their priority, and manage their resources using properties and methods like 'setPriority', 'terminateProcess', and 'allocateMemory'.
        
        **Event Handling:** Operating systems handle events such as process creation, termination, and system interrupts. The 'addEventListener' method can be used in system programming to handle these events and execute corresponding actions.
        
        **Creating and Removing Processes:** You can create new processes and terminate existing ones using methods like 'createProcess', 'terminateProcess', and 'releaseResources'. This allows for dynamic management of system resources and execution of tasks.`,
            innersubtopics: [
              {
                title: "Selecting Processes",
                content: "In an operating system, selecting processes is crucial for managing system resources. Operating systems provide several methods to access and control processes:",
                example: `
        **getProcessById:** Selects a process by its unique ID.
        **queryProcessStatus:** Retrieves the status of a process.
        **getProcessList:** Provides a list of all currently running processes.
        
        **Example Code:**
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Process Selection Example</title>
        </head>
        <body>
            <div id="processInfo" class="box">Process Details</div>
            <script>
                // Example pseudo-code for process management
                const processId = 1234; // Assume this is a valid process ID
                const process = getProcessById(processId);
                const processStatus = queryProcessStatus(processId);
                const processList = getProcessList();
        
                console.log(process.name); // Process Name
                console.log(processStatus); // Process Status
                console.log(processList); // List of Processes
            </script>
        </body>
        </html>`
              },
              {
                title: "Modifying Processes",
                content: "Once you've selected a process, you can modify its state, priority, and resources.",
                example: `
        **setPriority:** Changes the priority level of a process.
        **terminateProcess:** Terminates a running process.
        **allocateMemory:** Allocates additional memory resources to a process.
        
        **Example Code:**
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Process Modification Example</title>
        </head>
        <body>
            <div id="processControl">Control Panel</div>
            <script>
                // Example pseudo-code for process modification
                const processId = 1234; // Assume this is a valid process ID
                setPriority(processId, 'high'); // Change priority
                terminateProcess(processId); // Terminate process
                allocateMemory(processId, 1024); // Allocate 1GB memory
            </script>
        </body>
        </html>`
              },
              {
                title: "Event Handling",
                content: "Operating systems handle various system events such as process creation and termination. Event listeners can be used to handle these events:",
                example: `
        **addEventListener:** Attaches an event handler to respond to system events.
        **Event Object:** Provides details about the event, such as the process ID and type of event.
        
        **Example Code:**
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Event Handling Example</title>
        </head>
        <body>
            <button id="createProcess">Create Process</button>
            <script>
                const button = document.getElementById('createProcess');
                button.addEventListener('click', function(event) {
                    createProcess(); // Function to create a new process
                    alert('Process created!');
                });
            </script>
        </body>
        </html>`
              },
              {
                title: "Creating and Removing Processes",
                content: "Operating systems allow for dynamic management of processes by creating and terminating them as needed.",
                example: `
        **createProcess:** Starts a new process.
        **terminateProcess:** Ends a running process.
        **releaseResources:** Frees resources used by a process.
        
        **Example Code:**
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Process Management Example</title>
        </head>
        <body>
            <div id="processContainer"></div>
            <button id="startProcess">Start Process</button>
            <button id="endProcess">End Process</button>
            <script>
                const container = document.getElementById('processContainer');
                const startButton = document.getElementById('startProcess');
                const endButton = document.getElementById('endProcess');
        
                startButton.addEventListener('click', function() {
                    createProcess(); // Start a new process
                    container.innerHTML = 'New process started.';
                });
        
                endButton.addEventListener('click', function() {
                    terminateProcess(); // End a running process
                    container.innerHTML = 'Process terminated.';
                });
            </script>
        </body>
        </html>`
              }
            ]
          },
          {
            title: "File Systems and Storage",
            content: `**Selecting Files:** JavaScript provides methods to interact with files in the context of file systems and storage. For instance, the File API allows you to read file content, handle file uploads, and access metadata.
      
      **Modifying File Content:** Once you have access to a file, you can manipulate its content, such as reading or modifying text or binary data. Techniques like using the FileReader API or manipulating Blob objects are commonly employed.
      
      **Handling File Events:** JavaScript enables handling file-related events, such as selecting files through file input fields. Event listeners can be used to respond to file uploads, changes, or errors, making file interactions more dynamic.
      
      **Creating and Removing Files:** In a browser environment, you can create and manage file-like objects using the Blob and File APIs. However, file removal and extensive manipulation are typically handled on the server side or with specific browser APIs for temporary files.`,
            innersubtopics: [
              {
                title: "Selecting Files",
                content: "Selecting files is a fundamental aspect of managing file systems and storage in web applications. JavaScript provides various methods to access and handle file inputs:",
                example: `
      **File API:** Allows access to file contents and metadata.
      
      **Example Code:**
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>File Selection Example</title>
      </head>
      <body>
          <input type="file" id="fileInput">
          <script>
              document.getElementById('fileInput').addEventListener('change', function(event) {
                  const file = event.target.files[0];
                  if (file) {
                      console.log('File name:', file.name);
                      console.log('File size:', file.size, 'bytes');
                  }
              });
          </script>
      </body>
      </html>`
              },
              {
                title: "Modifying File Content",
                content: "Manipulating file content involves reading from or writing to files. The FileReader API and Blob objects are commonly used for these tasks:",
                example: `
      **FileReader API:** Reads file content asynchronously.
      **Blob API:** Represents file-like objects of immutable raw data.
      
      **Example Code:**
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>File Modification Example</title>
      </head>
      <body>
          <input type="file" id="fileInput">
          <script>
              document.getElementById('fileInput').addEventListener('change', function(event) {
                  const file = event.target.files[0];
                  if (file) {
                      const reader = new FileReader();
                      reader.onload = function(e) {
                          console.log('File content:', e.target.result);
                      };
                      reader.readAsText(file); // Read file as text
                  }
              });
          </script>
      </body>
      </html>`
              },
              {
                title: "Handling File Events",
                content: "Handling events related to files allows your application to respond dynamically to user actions such as uploading files:",
                example: `
      **change Event:** Triggered when a file input field's value changes.
      **load Event:** Fired when the FileReader successfully reads a file.
      
      **Example Code:**
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>File Event Handling Example</title>
      </head>
      <body>
          <input type="file" id="fileInput">
          <script>
              document.getElementById('fileInput').addEventListener('change', function(event) {
                  const file = event.target.files[0];
                  if (file) {
                      console.log('File selected:', file.name);
                  }
              });
          </script>
      </body>
      </html>`
              },
              {
                title: "Creating and Removing Files",
                content: "While browser environments have limited file system access, you can create and handle file-like objects using JavaScript:",
                example: `
      **Blob API:** Creates file-like objects of raw data.
      **URL.createObjectURL:** Generates a URL for accessing the Blob object.
      
      **Example Code:**
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>File Creation Example</title>
      </head>
      <body>
          <button id="createFile">Create File</button>
          <script>
              document.getElementById('createFile').addEventListener('click', function() {
                  const blob = new Blob(['Hello, World!'], { type: 'text/plain' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'example.txt';
                  a.click();
                  URL.revokeObjectURL(url); // Clean up the URL
              });
          </script>
      </body>
      </html>`
              }
            ]
          },
          {
            title: "System Calls and APIs",
            content: `**Selecting Elements:** While selecting elements in JavaScript is essential for DOM manipulation, understanding system calls and APIs is crucial for interacting with backend systems and external services. Methods such as 'fetch' and 'XMLHttpRequest' are commonly used for making API requests and handling responses.
    
    **Modifying Elements:** Although you can modify DOM elements directly in JavaScript, integrating system calls and APIs allows you to dynamically update the UI based on data received from external sources. You can use APIs to fetch data and then update the content, attributes, and styles of your elements.
    
    **Event Handling:** Handling events in JavaScript enables your application to react to user interactions. By using system calls and APIs, you can also manage data from user inputs and server responses. The 'fetch' method or libraries like Axios can be used to send data to APIs and handle responses.
    
    **Creating and Removing Elements:** System calls and APIs can drive the dynamic creation and removal of elements. For instance, you can use API responses to determine which elements to add or remove from the DOM, based on the data retrieved from a backend service.`,
            innersubtopics: [
              {
                title: "Selecting Elements",
                content: "In the context of system calls and APIs, selecting elements in JavaScript is the first step to display data from external sources. JavaScript provides several methods to access DOM elements:",
                example: `
    **fetch:** Used to make network requests and retrieve data from an API.
    **XMLHttpRequest:** A legacy method for making HTTP requests.
    
    **Example Code:**
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>API Data Selection Example</title>
    </head>
    <body>
        <div id="apiData">Loading...</div>
        <script>
            // Fetching data from an API and selecting elements to display it
            fetch('https://api.example.com/data')
                .then(response => response.json())
                .then(data => {
                    const apiDataElement = document.getElementById('apiData');
                    apiDataElement.innerHTML = Data: data.info;
                })
                .catch(error => console.error('Error fetching data:', error));
        </script>
    </body>
    </html>`
              },
              {
                title: "Modifying Elements",
                content: "Modifying elements in response to system calls or API results allows you to dynamically update the UI based on the fetched data.",
                example: `
    **fetch:** Updates the content of elements based on API responses.
    **XMLHttpRequest:** Provides data to modify elements on the page.
    
    **Example Code:**
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>API Data Modification Example</title>
    </head>
    <body>
        <div id="apiData">Fetching data...</div>
        <script>
            // Fetch data and modify the element content
            fetch('https://api.example.com/data')
                .then(response => response.json())
                .then(data => {
                    const apiDataElement = document.getElementById('apiData');
                    apiDataElement.innerHTML = 'Updated Data: data.updatedInfo';
                    apiDataElement.setAttribute('data-info', data.additionalInfo);
                    apiDataElement.style.color = 'green';
                })
                .catch(error => console.error('Error modifying data:', error));
        </script>
    </body>
    </html>`
              },
              {
                title: "Event Handling",
                content: "Event handling in conjunction with system calls allows you to interact with APIs based on user actions, such as form submissions or button clicks.",
                example: `
    **fetch:** Sends data to APIs based on user events.
    **XMLHttpRequest:** Handles data sent from user interactions.
    
    **Example Code:**
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Event Handling with API Example</title>
    </head>
    <body>
        <button id="fetchDataButton">Fetch Data</button>
        <div id="apiResponse"></div>
        <script>
            const button = document.getElementById('fetchDataButton');
            button.addEventListener('click', function() {
                fetch('https://api.example.com/data')
                    .then(response => response.json())
                    .then(data => {
                        const responseElement = document.getElementById('apiResponse');
                        responseElement.innerHTML = Response: data.info;
                    })
                    .catch(error => console.error('Error handling event:', error));
            });
        </script>
    </body>
    </html>`
              },
              {
                title: "Creating and Removing Elements",
                content: "System calls and APIs can drive the dynamic creation and removal of elements based on the data you receive from the server.",
                example: `
    **fetch:** Creates new elements based on API data.
    **XMLHttpRequest:** Removes or updates elements based on server responses.
    
    **Example Code:**
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dynamic Elements with API Example</title>
    </head>
    <body>
        <div id="dynamicContainer"></div>
        <button id="fetchElements">Fetch and Add Elements</button>
        <button id="clearElements">Clear Elements</button>
        <script>
            const container = document.getElementById('dynamicContainer');
            const fetchButton = document.getElementById('fetchElements');
            const clearButton = document.getElementById('clearElements');
    
            fetchButton.addEventListener('click', function() {
                fetch('https://api.example.com/elements')
                    .then(response => response.json())
                    .then(data => {
                        data.elements.forEach(item => {
                            const newElement = document.createElement('p');
                            newElement.textContent = item.text;
                            container.appendChild(newElement);
                        });
                    })
                    .catch(error => console.error('Error fetching elements:', error));
            });
    
            clearButton.addEventListener('click', function() {
                while (container.firstChild) {
                    container.removeChild(container.firstChild);
                }
            });
        </script>
    </body>
    </html>`
              }
            ]
          },
          {
            title: "Operating System Concepts in Practice",
            content: `**Process Management:** Operating systems handle processes through creation, scheduling, and termination. Functions like 'fork', 'exec', and 'wait' are used to manage processes.
  
  **Memory Management:** Operating systems manage memory through allocation and deallocation, using techniques such as paging, segmentation, and virtual memory.
  
  **File Systems:** Operating systems handle file operations including creation, deletion, and modification. System calls such as 'open', 'read', 'write', and 'close' are commonly used.
  
  **Device Management:** Operating systems control hardware devices using drivers and system calls. Methods like 'ioctl' and 'read' enable interaction with hardware components.`,
            innersubtopics: [
              {
                title: "Process Management",
                content: "In operating systems, process management is crucial for executing programs efficiently. Key concepts include:",
                example: `
  **fork:** Creates a new process by duplicating the existing process.
  **exec:** Replaces the current process image with a new process image.
  **wait:** Waits for a process to terminate and retrieves its exit status.
  
  **Example Code:**
  #include <stdio.h>
  #include <unistd.h>
  #include <sys/wait.h>
  
  int main() {
      pid_t pid = fork();
      
      if (pid == 0) {
          // Child process
          execl("/bin/ls", "ls", NULL);
      } else {
          // Parent process
          wait(NULL); // Wait for child to finish
          printf("Child process completed.\n");
      }
      
      return 0;
  }
  `
              },
              {
                title: "Memory Management",
                content: "Effective memory management ensures that applications run efficiently and do not exceed their allocated memory.",
                example: `
  **Paging:** Divides memory into fixed-size pages and maps them to physical memory.
  **Segmentation:** Divides memory into variable-sized segments based on the type of data.
  **Virtual Memory:** Extends physical memory using disk space, allowing for larger processes.
  
  **Example Code:**
  #include <stdio.h>
  #include <stdlib.h>
  
  int main() {
      int *arr = (int *)malloc(100 * sizeof(int)); // Allocate memory
  
      for (int i = 0; i < 100; i++) {
          arr[i] = i; // Initialize array
      }
  
      free(arr); // Deallocate memory
      return 0;
  }
  `
              },
              {
                title: "File Systems",
                content: "File systems manage data storage and retrieval. Common system calls for file operations include:",
                example: `
  **open:** Opens a file descriptor for file operations.
  **read:** Reads data from a file descriptor.
  **write:** Writes data to a file descriptor.
  **close:** Closes the file descriptor.
  
  **Example Code:**
  #include <stdio.h>
  #include <fcntl.h>
  #include <unistd.h>
  
  int main() {
      int fd = open("example.txt", O_WRONLY | O_CREAT, 0644);
      if (fd < 0) {
          perror("open");
          return 1;
      }
      
      write(fd, "Hello, OS Concepts!", 20);
      close(fd);
      
      return 0;
  }
  `
              },
              {
                title: "Device Management",
                content: "Operating systems manage hardware devices using drivers and system calls to facilitate interaction with these devices.",
                example: `
  **ioctl:** Performs device-specific input/output operations.
  **read:** Reads data from a device.
  **write:** Writes data to a device.
  
  **Example Code:**
  #include <stdio.h>
  #include <fcntl.h>
  #include <unistd.h>
  #include <sys/ioctl.h>
  
  int main() {
      int fd = open("/dev/sda", O_RDWR);
      if (fd < 0) {
          perror("open");
          return 1;
      }
      
      // Perform device-specific operations
      ioctl(fd, /* IOCTL command */, /* Arguments */);
  
      close(fd);
      
      return 0;
  }
  `
              }
            ]
          }
        ]
      }
    }
  ],
  8: [
    {
      id: 8,
      name: 'Redux for State Management',
      unit: 'Unit 8',
      status: 'Completed',
      description: {
        overview: 'Redux is a predictable state container for JavaScript applications that helps manage and centralize the state of an app, making it easier to debug and test.',
        subtopics: [
          {
            title: "Introduction to Redux",
            content: `**Selecting Elements:** Redux is a state management library for JavaScript applications, often used with frameworks like React. It helps manage and select pieces of state across your application, ensuring consistent and predictable state changes.

**Modifying Elements:** In Redux, state modifications are handled through actions and reducers. Actions describe changes, while reducers update the state based on these actions, ensuring the application state remains predictable.

**Event Handling:** Redux handles events through actions, which are dispatched to update the state. Middleware can also be used to handle asynchronous events and side effects, providing a robust mechanism for managing complex interactions.

**Creating and Removing Elements:** While Redux itself doesn’t directly create or remove DOM elements, it manages the state that drives the UI. The state managed by Redux can trigger UI changes, which include adding or removing elements dynamically in response to state updates.`,
            innersubtopics: [
              {
                title: "Selecting State with Redux",
                content: "In Redux, selecting state involves accessing parts of the global state managed by the store. The `useSelector` hook (in React) or `mapStateToProps` function allows you to read state values and use them in your components:",
                example: `
**useSelector:** A React hook that allows you to extract data from the Redux store state.
**mapStateToProps:** A function used with React-Redux's 'connect' to map state to component props.

**Example Code:**
import { useSelector } from 'react-redux';

const MyComponent = () => {
    const myData = useSelector(state => state.myData);

    return <div>{myData}</div>;
};

export default MyComponent;
`
              },
              {
                title: "Modifying State with Redux",
                content: "Modifying state in Redux is done through actions and reducers. Actions describe the type of change, and reducers specify how the state should be updated in response:",
                example: `
**Action:** An object describing a change to the state.
**Reducer:** A function that takes the current state and an action, and returns a new state.

**Example Code:**
// Action
const updateData = (newData) => ({
    type: 'UPDATE_DATA',
    payload: newData
});

// Reducer
const myReducer = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_DATA':
            return { ...state, myData: action.payload };
        default:
            return state;
    }
};

export { updateData, myReducer };
`
              },
              {
                title: "Handling Events with Redux",
                content: "Handling events in Redux involves dispatching actions based on user interactions or other triggers. Middleware like Redux Thunk or Redux Saga can manage asynchronous operations:",
                example: `
**Dispatching Actions:** Sending actions to the store to update state.
**Middleware:** Enhances Redux with functionality such as asynchronous action handling.

**Example Code:**
import { useDispatch } from 'react-redux';
import { updateData } from './actions';

const MyComponent = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(updateData('New Data'));
    };

    return <button onClick={handleClick}>Update Data</button>;
};

export default MyComponent;
`
              },
              {
                title: "Dynamic State Updates with Redux",
                content: "While Redux doesn’t directly manipulate DOM elements, it drives the UI based on state. Dynamic updates are reflected in the UI as components re-render in response to state changes:",
                example: `
**Dynamic Updates:** UI components automatically re-render based on state changes.

**Example Code:**
import { useSelector } from 'react-redux';

const MyComponent = () => {
    const myData = useSelector(state => state.myData);

    return (
        <div>
            <p>Current Data: {myData}</p>
            {/* Dynamic updates based on state */}
        </div>
    );
};

export default MyComponent;
`
              }
            ]
          },
          {
            title: "Advanced Redux Concepts",
            content: `**Selecting State:** In Redux, selecting state is crucial for accessing data within your application. Using selectors and memoized selectors like 'createSelector' from Reselect can optimize performance by avoiding unnecessary re-renders.
        
        **Modifying State:** Redux relies on reducers to modify the state. Reducers are pure functions that handle actions and update the state immutably. You can use utilities like 'combineReducers' to manage multiple reducers in a large application.
        
        **Handling Side Effects:** Advanced Redux applications often need to manage side effects such as API calls or complex asynchronous logic. Libraries like 'redux-thunk' or 'redux-saga' help manage these side effects efficiently.
        
        **Dynamic Reducers:** In complex applications, you might need to dynamically add or remove reducers based on user actions or feature requirements. Techniques like reducer injection can help with this flexibility.`,
            innersubtopics: [
              {
                title: "Selecting State",
                content: "Selecting state is the process of retrieving and transforming state data to be used in components. Efficient state selection can be achieved using selectors and memoization:",
                example: `
        **createSelector:** Memoizes the result of a selector to prevent unnecessary recalculations.
        
        **Example Code:**
        import { createSelector } from 'reselect';
        
        const getUser = (state) => state.user;
        const getUserName = createSelector(
          [getUser],
          (user) => user.name
        );
        
        // Usage in a component
        const mapStateToProps = (state) => ({
          userName: getUserName(state)
        });
        `
              },
              {
                title: "Modifying State",
                content: "Reducers are responsible for updating the state in Redux. They handle actions and ensure that the state is updated immutably:",
                example: `
        **combineReducers:** Combines multiple reducers into a single reducer function.
        
        **Example Code:**
        import { combineReducers } from 'redux';
        
        const userReducer = (state = {}, action) => {
          switch (action.type) {
            case 'SET_USER':
              return { ...state, ...action.payload };
            default:
              return state;
          }
        };
        
        const rootReducer = combineReducers({
          user: userReducer,
          // other reducers
        });
        
        // Usage in store
        import { createStore } from 'redux';
        const store = createStore(rootReducer);
        `
              },
              {
                title: "Handling Side Effects",
                content: "Managing side effects such as API calls is crucial in Redux applications. Middleware libraries like 'redux-thunk' and 'redux-saga' can handle these effects:",
                example: `
        **redux-thunk:** Allows you to write action creators that return a function instead of an action.
        
        **Example Code:**
        import thunk from 'redux-thunk';
        import { createStore, applyMiddleware } from 'redux';
        
        const fetchUser = () => {
          return async (dispatch) => {
            const response = await fetch('/api/user');
            const data = await response.json();
            dispatch({ type: 'SET_USER', payload: data });
          };
        };
        
        const store = createStore(rootReducer, applyMiddleware(thunk));
        `
              },
              {
                title: "Dynamic Reducers",
                content: "In some applications, you might need to dynamically add or remove reducers. Techniques for dynamic reducer injection can be helpful:",
                example: `
        **Injecting Reducers Dynamically:** Allows you to add reducers at runtime.
        
        **Example Code:**
        import { createStore, combineReducers } from 'redux';
        
        const store = createStore(combineReducers({}));
        
        const injectReducer = (key, reducer) => {
          store.replaceReducer(
            combineReducers({
              ...store.getState(),
              [key]: reducer
            })
          );
        };
        
        // Usage
        const newReducer = (state = {}, action) => {
          // reducer logic
        };
        
        injectReducer('newFeature', newReducer);
        `
              }
            ]
          },
          {
            title: "Redux Toolkit",
            content: `**Selecting Elements:** In Redux Toolkit, selecting elements involves accessing specific parts of the state. Methods such as 'useSelector' from 'react-redux' are used to retrieve state data in your components.
      
      **Modifying Elements:** Redux Toolkit provides mechanisms to modify state through reducers and actions. Using the 'createSlice' function, you can define reducers that handle state updates in response to dispatched actions.
      
      **Event Handling:** Event handling in Redux Toolkit often involves dispatching actions to modify state. Components use 'useDispatch' to dispatch actions and 'useSelector' to select and display state data.
      
      **Creating and Removing Elements:** In the context of Redux Toolkit, creating and removing elements often refers to updating state in response to user interactions. Actions and reducers are used to dynamically update the state of your application.`,
            innersubtopics: [
              {
                title: "Selecting State",
                content: "Selecting state in a Redux Toolkit application involves using the 'useSelector' hook to access specific parts of the state from your React components.",
                example: `
      **useSelector:** Retrieves data from the Redux store.
      
      **Example Code:**
      import { useSelector } from 'react-redux';
      import { RootState } from './store';
      
      const MyComponent = () => {
          const data = useSelector((state: RootState) => state.mySlice.data);
      
          return <div>{data}</div>;
      };
      `
              },
              {
                title: "Modifying State",
                content: "To modify state in a Redux Toolkit application, you use the 'createSlice' function to define reducers and actions that handle state updates.",
                example: `
      **createSlice:** Defines a slice of the state, including reducers and actions.
      
      **Example Code:**
      import { createSlice, PayloadAction } from '@reduxjs/toolkit';
      
      interface MyState {
          data: string;
      }
      
      const initialState: MyState = {
          data: 'Initial data',
      };
      
      const mySlice = createSlice({
          name: 'mySlice',
          initialState,
          reducers: {
              setData(state, action: PayloadAction<string>) {
                  state.data = action.payload;
              },
          },
      });
      
      export const { setData } = mySlice.actions;
      export default mySlice.reducer;
      `
              },
              {
                title: "Event Handling",
                content: "In a Redux Toolkit application, event handling typically involves dispatching actions in response to user interactions.",
                example: `
      **useDispatch:** Dispatches actions to the Redux store.
      
      **Example Code:**
      import { useDispatch } from 'react-redux';
      import { setData } from './mySlice';
      
      const MyComponent = () => {
          const dispatch = useDispatch();
      
          const handleClick = () => {
              dispatch(setData('New data'));
          };
      
          return <button onClick={handleClick}>Update Data</button>;
      };
      `
              },
              {
                title: "Creating and Removing State",
                content: "To manage creating and removing state in Redux Toolkit, you update state based on actions dispatched from user interactions or other events.",
                example: `
      **Reducers:** Handle creating and removing state based on dispatched actions.
      
      **Example Code:**
      import { createSlice, PayloadAction } from '@reduxjs/toolkit';
      
      interface MyState {
          items: string[];
      }
      
      const initialState: MyState = {
          items: [],
      };
      
      const mySlice = createSlice({
          name: 'mySlice',
          initialState,
          reducers: {
              addItem(state, action: PayloadAction<string>) {
                  state.items.push(action.payload);
              },
              removeItem(state, action: PayloadAction<number>) {
                  state.items.splice(action.payload, 1);
              },
          },
      });
      
      export const { addItem, removeItem } = mySlice.actions;
      export default mySlice.reducer;
      `
              }
            ]
          },
          {
            title: "React Application with Redux",
            content: `**Selecting Elements:** In a React application with Redux, selecting elements often involves interacting with component states and props. While direct DOM manipulation is less common, you can still use React's ref system to access DOM nodes when needed.
    
    **Modifying Elements:** React components are updated through state and props rather than direct DOM manipulation. Redux helps manage the state across the application, allowing you to modify and render elements based on global state changes.
    
    **Event Handling:** Event handling in React involves defining event handlers as component methods or functional component hooks. Redux is often used to dispatch actions that update the global state in response to user interactions.
    
    **Creating and Removing Elements:** Dynamic rendering of elements based on state and props is common in React. Redux can manage state changes to control which elements are displayed or removed from the UI based on global state.`,
            innersubtopics: [
              {
                title: "Selecting Elements",
                content: "In a React application, selecting elements is typically done through component states and refs. While you rarely manipulate the DOM directly, you might use refs for specific cases:",
                example: `
    **Using Refs:** Allows direct access to a DOM node within a React component.
    
    **Example Code:**
    import React, { useRef } from 'react';
    
    function App() {
        const elementRef = useRef(null);
    
        React.useEffect(() => {
            console.log(elementRef.current.innerHTML); // Access DOM node
        }, []);
    
        return (
            <div ref={elementRef}>React Content</div>
        );
    }
    
    export default App;
    `
              },
              {
                title: "Modifying Elements",
                content: "Modifying elements in React is handled through state and props. Redux helps manage and synchronize global state across components:",
                example: `
    **Using State:** React's state system updates components.
    
    **Example Code:**
    import React, { useState } from 'react';
    import { useDispatch } from 'react-redux';
    import { updateText } from './actions';
    
    function App() {
        const [text, setText] = useState('Original Text');
        const dispatch = useDispatch();
    
        const handleChange = () => {
            setText('Updated Text'); // Update local state
            dispatch(updateText('Updated Text')); // Dispatch action to update global state
        };
    
        return (
            <div>
                <div>{text}</div>
                <button onClick={handleChange}>Update Text</button>
            </div>
        );
    }
    
    export default App;
    `
              },
              {
                title: "Event Handling",
                content: "Handling events in React involves using event handlers within components. Redux can be used to dispatch actions that update the global state in response to user interactions:",
                example: `
    **Event Handling with Redux:** Dispatch actions to update the global state.
    
    **Example Code:**
    import React from 'react';
    import { useDispatch } from 'react-redux';
    import { triggerAlert } from './actions';
    
    function App() {
        const dispatch = useDispatch();
    
        const handleClick = () => {
            dispatch(triggerAlert('Button clicked!')); // Dispatch action
        };
    
        return (
            <button onClick={handleClick}>Click Me</button>
        );
    }
    
    export default App;
    `
              },
              {
                title: "Creating and Removing Elements",
                content: "In React applications, creating and removing elements is managed through component state and props. Redux can be used to handle global state changes that determine which elements are rendered:",
                example: `
    **Dynamic Rendering with State:** Conditional rendering based on state.
    
    **Example Code:**
    import React, { useState } from 'react';
    
    function App() {
        const [showElement, setShowElement] = useState(true);
    
        const handleAdd = () => {
            setShowElement(true); // Show element
        };
    
        const handleRemove = () => {
            setShowElement(false); // Hide element
        };
    
        return (
            <div>
                {showElement && <p>Dynamic Element</p>}
                <button onClick={handleAdd}>Add Element</button>
                <button onClick={handleRemove}>Remove Element</button>
            </div>
        );
    }
    
    export default App;
    `
              }
            ]
          }
        ]
      }
    }
  ],
  9: [
    {
      id: 9,
      name: 'Introduction to Node.JS and Express.JS',
      unit: 'Unit 9',
      status: 'Completed',
      description: {
        overview: 'Introduction to Node.js and Express.js: Learn how Node.js provides a powerful JavaScript runtime for server-side development, and how Express.js simplifies building robust web applications with a minimalist framework.',
        subtopics: [
          {
            title: "Basics of Node.js",
            content: `**Selecting and Handling Elements in Node.js:** Node.js is a runtime environment for executing JavaScript on the server side. It does not handle DOM elements directly, but it allows you to work with server-side objects and modules for file manipulation, HTTP requests, and more.
        
        **Modifying Server-Side Data:** Node.js enables you to modify server-side data using modules like 'fs' (File System) and 'http'. You can read and write files, handle HTTP requests, and dynamically alter the server's behavior.
        
        **Event Handling in Node.js:** Node.js uses an event-driven architecture. The 'events' module allows you to handle asynchronous events, such as handling HTTP requests and responses, with event emitters and listeners.
        
        **Creating and Removing Files and Directories:** Node.js provides modules such as 'fs' for creating and deleting files and directories. This is useful for managing server-side resources dynamically.`,
            innersubtopics: [
              {
                title: "Selecting and Handling Server-Side Data",
                content: "In Node.js, interacting with server-side resources involves using various modules and methods:",
                example: `
        **fs (File System) Module:** Provides methods to interact with the file system, such as reading and writing files.
        **http Module:** Allows you to create HTTP servers and handle requests.
        
        **Example Code:**
        const fs = require('fs');
        const http = require('http');
        
        // Reading a file
        fs.readFile('example.txt', 'utf8', (err, data) => {
            if (err) throw err;
            console.log(data);
        });
        
        // Creating an HTTP server
        const server = http.createServer((req, res) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Hello World\n');
        });
        
        server.listen(3000, () => {
            console.log('Server running at http://127.0.0.1:3000/');
        });
        `
              },
              {
                title: "Modifying Server-Side Data",
                content: "Node.js allows you to modify server-side data by interacting with files and handling HTTP requests:",
                example: `
        **fs Module:** You can use the 'fs' module to write to files or update their contents.
        **http Module:** You can handle different HTTP methods (GET, POST) to modify data based on client requests.
        
        **Example Code:**
        const fs = require('fs');
        
        // Writing to a file
        fs.writeFile('example.txt', 'Hello, Node.js!', (err) => {
            if (err) throw err;
            console.log('File has been saved!');
        });
        `
              },
              {
                title: "Event Handling in Node.js",
                content: "Node.js uses event-driven programming to handle asynchronous operations. The 'events' module allows you to work with event emitters:",
                example: `
        **EventEmitter Class:** Used to create and handle custom events.
        
        **Example Code:**
        const EventEmitter = require('events');
        const eventEmitter = new EventEmitter();
        
        // Listener
        eventEmitter.on('event', () => {
            console.log('An event occurred!');
        });
        
        // Emitting an event
        eventEmitter.emit('event');
        `
              },
              {
                title: "Creating and Removing Files and Directories",
                content: "Node.js provides methods to dynamically create and delete files and directories using the 'fs' module:",
                example: `
        **fs Module:** Allows you to manage files and directories.
        
        **Example Code:**
        const fs = require('fs');
        
        // Creating a directory
        fs.mkdir('newDirectory', (err) => {
            if (err) throw err;
            console.log('Directory created!');
        });
        
        // Removing a directory
        fs.rmdir('newDirectory', (err) => {
            if (err) throw err;
            console.log('Directory removed!');
        });
        `
              }
            ]
          },
          {
            title: "Introduction to Express.js",
            content: `**Routing:** Express.js provides methods for defining routes in a web application. The 'app.get', 'app.post', 'app.put', and 'app.delete' methods are used to handle HTTP requests and define the behavior for different routes.
      
      **Middleware:** Middleware functions in Express.js are used to handle requests and responses. They can perform operations such as logging, authentication, and modifying request and response objects before reaching route handlers.
      
      **Request and Response Handling:** Express.js simplifies handling requests and sending responses. The 'req' object represents the HTTP request, and the 'res' object is used to send responses back to the client.
      
      **Serving Static Files:** Express.js allows you to serve static files like HTML, CSS, and JavaScript. The 'express.static' middleware is used to specify the directory where static files are located.`,
            innersubtopics: [
              {
                title: "Routing",
                content: "In Express.js, routing is used to define how an application responds to client requests for different endpoints.",
                example: `
      **app.get:** Handles GET requests for a specific route.
      **app.post:** Handles POST requests for a specific route.
      **app.put:** Handles PUT requests for a specific route.
      **app.delete:** Handles DELETE requests for a specific route.
      
      **Example Code:**
      const express = require('express');
      const app = express();
      
      // GET request
      app.get('/', (req, res) => {
          res.send('Hello, World!');
      });
      
      // POST request
      app.post('/submit', (req, res) => {
          res.send('Form submitted!');
      });
      
      // PUT request
      app.put('/update/:id', (req, res) => {
          res.send('Updated resource with ID: req.params.id');
      });
      
      // DELETE request
      app.delete('/delete/:id', (req, res) => {
          res.send('Deleted resource with ID: req.params.id');
      });
      
      app.listen(3000, () => {
          console.log('Server is running on port 3000');
      });
      `
              },
              {
                title: "Middleware",
                content: "Middleware functions in Express.js are used to perform operations on requests and responses.",
                example: `
      **app.use:** Registers middleware to be used in the application.
      **Custom Middleware:** Define functions to handle specific tasks like logging or authentication.
      
      **Example Code:**
      const express = require('express');
      const app = express();
      
      // Logging middleware
      app.use((req, res, next) => {
          console.log('Request Method: req.method, Request URL: req.url');
          next();
      });
      
      // Route handler
      app.get('/', (req, res) => {
          res.send('Hello with Middleware!');
      });
      
      app.listen(3000, () => {
          console.log('Server is running on port 3000');
      });
      `
              },
              {
                title: "Request and Response Handling",
                content: "Express.js simplifies request and response handling with convenient methods.",
                example: `
      **req:** Represents the HTTP request and provides access to request data.
      **res:** Represents the HTTP response and provides methods to send responses.
      
      **Example Code:**
      const express = require('express');
      const app = express();
      
      // Route handler
      app.get('/', (req, res) => {
          res.status(200).json({
              message: 'Request received',
              query: req.query,
              params: req.params
          });
      });
      
      app.listen(3000, () => {
          console.log('Server is running on port 3000');
      });
      `
              },
              {
                title: "Serving Static Files",
                content: "Express.js allows you to serve static files like HTML, CSS, and JavaScript using middleware.",
                example: `
      **express.static:** Middleware for serving static files from a directory.
      
      **Example Code:**
      const express = require('express');
      const path = require('path');
      const app = express();
      
      // Serve static files from the 'public' directory
      app.use(express.static(path.join(__dirname, 'public')));
      
      app.listen(3000, () => {
          console.log('Server is running on port 3000');
      });
      `
              }
            ]
          },
          {
            title: "Building RESTful APIs with Express",
            content: `**Selecting Data:** Express provides methods to handle requests and interact with data. You use routes and middleware to manage incoming requests and responses.
    
    **Modifying Data:** Once data is selected, you can modify it through various HTTP methods like POST, PUT, and DELETE. These methods allow you to create, update, and delete resources.
    
    **Event Handling:** Express allows you to handle various HTTP methods and routes, effectively managing different types of requests (GET, POST, PUT, DELETE). Middleware functions help you process these requests.
    
    **Creating and Removing Resources:** With Express, you can dynamically create and remove resources using routes and controllers. This enables you to build a flexible API that can manage resources as required by your application.`,
            innersubtopics: [
              {
                title: "Selecting Data",
                content: "In a RESTful API, selecting data is done through various HTTP methods and routes. Express provides ways to define these routes and handle requests:",
                example: `
    **GET Request:** Retrieves data from the server.
    **POST Request:** Sends data to the server to create a new resource.
    **GET /api/items:** Retrieves a list of items.
    **GET /api/items/:id:** Retrieves a specific item by ID.
    
    **Example Code:**
    const express = require('express');
    const app = express();
    const port = 3000;
    
    app.get('/api/items', (req, res) => {
        res.send('List of items');
    });
    
    app.get('/api/items/:id', (req, res) => {
        const id = req.params.id;
        res.send('Item with ID id');
    });
    
    app.listen(port, () => {
        console.log('Server running at http://localhost:port');
    });
    `
              },
              {
                title: "Modifying Data",
                content: "Modifying data in a RESTful API involves handling various HTTP methods to update or delete resources. Express makes it easy to define these routes:",
                example: `
    **POST Request:** Adds new data to the server.
    **PUT Request:** Updates existing data on the server.
    **DELETE Request:** Removes data from the server.
    
    **Example Code:**
    const express = require('express');
    const app = express();
    app.use(express.json()); // Middleware to parse JSON bodies
    
    app.post('/api/items', (req, res) => {
        const newItem = req.body;
        res.send('Created new item: JSON.stringify(newItem)');
    });
    
    app.put('/api/items/:id', (req, res) => {
        const id = req.params.id;
        const updatedItem = req.body;
        res.send('Updated item with ID id: JSON.stringify(updatedItem)');
    });
    
    app.delete('/api/items/:id', (req, res) => {
        const id = req.params.id;
        res.send('Deleted item with ID id');
    });
    
    app.listen(3000, () => {
        console.log('Server running on port 3000');
    });
    `
              },
              {
                title: "Event Handling",
                content: "Handling different types of HTTP requests and responses is crucial for a RESTful API. Express uses middleware to process these requests:",
                example: `
    **Middleware:** Functions that run before your request handler.
    
    **Example Code:**
    const express = require('express');
    const app = express();
    app.use(express.json()); // Middleware to parse JSON bodies
    
    app.use((req, res, next) => {
        console.log('req.method} request to req.url');
        next(); // Passes control to the next middleware or route handler
    });
    
    app.get('/api/items', (req, res) => {
        res.send('List of items');
    });
    
    app.listen(3000, () => {
        console.log('Server running on port 3000');
    });
    `
              },
              {
                title: "Creating and Removing Resources",
                content: "Creating and removing resources dynamically is a key feature of RESTful APIs. Express handles this with route definitions and controller functions:",
                example: `
    **POST Request:** Creates new resources.
    **DELETE Request:** Removes resources.
    
    **Example Code:**
    const express = require('express');
    const app = express();
    app.use(express.json()); // Middleware to parse JSON bodies
    
    app.post('/api/resources', (req, res) => {
        const newResource = req.body;
        res.status(201).send('Created resource: 'JSON.stringify(newResource)');
    });
    
    app.delete('/api/resources/:id', (req, res) => {
        const id = req.params.id;
        res.status(200).send('Removed resource with ID id');
    });
    
    app.listen(3000, () => {
        console.log('Server running on port 3000');
    });
    `
              }
            ]
          },
          {
            title: "RESTful API with Node.js and Express",
            content: `**Selecting Elements:** In a RESTful API context, you often need to manage and manipulate data from the API requests. JavaScript methods like 'fetch', 'axios', or native HTTP clients are used to interact with API endpoints and handle the response data.
        
        **Modifying Elements:** Once you receive data from an API, you might need to process and modify it before sending it back to the client or storing it in a database. This can involve transforming data, validating inputs, and adjusting responses.
        
        **Event Handling:** While RESTful APIs don’t handle UI events directly, the server-side code listens for HTTP requests and performs actions based on those requests. This includes handling GET, POST, PUT, and DELETE requests and sending appropriate responses.
        
        **Creating and Removing Elements:** In a RESTful API, creating and removing elements typically refers to managing resources. This involves defining routes to create new resources (e.g., a new record in a database) and delete existing resources based on client requests.`,
            innersubtopics: [
              {
                title: "Selecting Elements",
                content: "In a RESTful API project, selecting and managing data from API requests is crucial. Here’s how you can handle data retrieval:",
                example: `
        **GET Request:** Fetches data from the server. 
        **axios.get:** Makes a GET request to the specified URL and retrieves data.
        
        **Example Code:**
        const axios = require('axios');
        
        axios.get('https://api.example.com/data')
            .then(response => {
                console.log(response.data); // Data received from API
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        `
              },
              {
                title: "Modifying Elements",
                content: "Processing and modifying data before storing or sending it is essential for RESTful APIs. Here’s how to handle data modification:",
                example: `
        **PUT Request:** Updates existing data on the server.
        **axios.put:** Sends updated data to the specified URL.
        
        **Example Code:**
        const axios = require('axios');
        
        const updatedData = { key: 'value' };
        
        axios.put('https://api.example.com/data/1', updatedData)
            .then(response => {
                console.log('Data updated:', response.data);
            })
            .catch(error => {
                console.error('Error updating data:', error);
            });
        `
              },
              {
                title: "Event Handling",
                content: "Handling HTTP requests and responses is a fundamental part of working with RESTful APIs. Here’s how to manage these events on the server side:",
                example: `
        **Express.js Routes:** Define routes to handle HTTP requests.
        **app.get, app.post, app.put, app.delete:** Handle GET, POST, PUT, and DELETE requests respectively.
        
        **Example Code:**
        const express = require('express');
        const app = express();
        
        app.use(express.json());
        
        app.get('/api/data', (req, res) => {
            res.send('Data retrieved');
        });
        
        app.post('/api/data', (req, res) => {
            const data = req.body;
            res.send('Data created');
        });
        
        app.listen(3000, () => {
            console.log('Server running on port 3000');
        });
        `
              },
              {
                title: "Creating and Removing Elements",
                content: "In the context of a RESTful API, creating and removing elements refer to managing resources in a database or storage system. Here’s how you can implement these operations:",
                example: `
        **POST Request:** Creates a new resource.
        **DELETE Request:** Removes an existing resource.
        
        **Example Code:**
        const express = require('express');
        const app = express();
        
        app.use(express.json());
        
        app.post('/api/resources', (req, res) => {
            const newResource = req.body;
            // Logic to create a new resource
            res.status(201).send('Resource created');
        });
        
        app.delete('/api/resources/:id', (req, res) => {
            const { id } = req.params;
            // Logic to delete the resource with the given ID
            res.send('Resource deleted');
        });
        
        app.listen(3000, () => {
            console.log('Server running on port 3000');
        });
        `
              }
            ]
          }
        ]
      }
    }
  ],
  10: [
    {
      id: 10,
      name: 'Integrating Next.JS with the MERN Stack',
      unit: 'Unit 10',
      status: 'Completed',
      description: {
        overview: 'Integrating Next.js with the MERN Stack combines the server-side rendering capabilities of Next.js with MongoDB, Express, React, and Node.js to build high-performance, full-stack web applications.',
        subtopics: [
          {
            title: "Getting Started with Next.js",
            content: `**Selecting Elements:** Next.js, built on React, provides a robust way to handle and render elements on the server and client sides. Methods like 'getElementById', 'querySelector', and 'getElementsByClassName' are used within React components to manipulate the DOM.
        
        **Modifying Elements:** After selecting elements, you can update their content, attributes, and styles dynamically in your Next.js application. Use React’s state and props to manage changes, similar to how you would use 'innerHTML', 'setAttribute', and 'style' in vanilla JavaScript.
        
        **Event Handling:** React’s event handling system allows you to attach handlers to elements to manage user interactions. Use React’s synthetic event system to handle events like clicks and form submissions in a declarative manner.
        
        **Creating and Removing Elements:** In Next.js, you can dynamically create and remove elements by managing component states and rendering conditions. React provides methods to manage component trees and conditional rendering effectively.`,
            innersubtopics: [
              {
                title: "Selecting Elements",
                content: "In Next.js, selecting elements for manipulation is typically done within React components. JavaScript methods can be used as part of the component lifecycle:",
                example: `
        **getElementById:** Selects an element by its unique ID.
        **querySelector:** Selects the first element that matches a CSS selector.
        **getElementsByClassName:** Selects all elements with a given class name.
        
        **Example Code:**
        import { useEffect } from 'react';
        
        const ElementSelection = () => {
            useEffect(() => {
                const elementById = document.getElementById('example');
                const elementByClass = document.getElementsByClassName('box')[0];
                const elementByQuery = document.querySelector('#example');
        
                console.log(elementById.innerHTML); // Should log the content
                console.log(elementByClass.innerHTML); // Should log the content
                console.log(elementByQuery.innerHTML); // Should log the content
            }, []);
        
            return (
                <div id=example className="box">Interactive Content</div>
            );
        };
        
        export default ElementSelection;`
              },
              {
                title: "Modifying Elements",
                content: "In Next.js, you use React state and props to dynamically modify elements within your components:",
                example: `
        **innerHTML:** Changes the HTML content inside an element.
        **setAttribute:** Modifies the attributes of an element.
        **style:** Adjusts the CSS styles of an element.
        
        **Example Code:**
        import { useState } from 'react';
        
        const ElementModification = () => {
            const [content, setContent] = useState('Original Text');
        
            const updateContent = () => {
                setContent('Updated Interactive Text');
            };
        
            return (
                <div>
                    <div id=example>{content}</div>
                    <button onClick={updateContent}>Update Content</button>
                </div>
            );
        };
        
        export default ElementModification;`
              },
              {
                title: "Event Handling",
                content: "React in Next.js provides a declarative way to handle events. Attach event handlers directly to your JSX elements:",
                example: `
        **onClick:** Handles click events.
        **onChange:** Handles change events for form elements.
        
        **Example Code:**
        const EventHandling = () => {
            const handleClick = () => {
                alert('Button was clicked!');
            };
        
            return (
                <button onClick={handleClick}>Click Me</button>
            );
        };
        
        export default EventHandling;`
              },
              {
                title: "Creating and Removing Elements",
                content: "Managing dynamic elements in Next.js is done through React’s state and conditional rendering. Add or remove elements based on state changes:",
                example: `
        **React State:** Manages dynamic content and visibility.
        **Conditional Rendering:** Controls whether elements are rendered based on state.
        
        **Example Code:**
        import { useState } from 'react';
        
        const DynamicElements = () => {
            const [elements, setElements] = useState([]);
        
            const addElement = () => {
                setElements([...elements, 'New Interactive Element']);
            };
        
            const removeElement = () => {
                setElements(elements.slice(0, -1));
            };
        
            return (
                <div>
                    <div id="dynamicContainer">
                        {elements.map((text, index) => (
                            <p key={index}>{text}</p>
                        ))}
                    </div>
                    <button onClick={addElement}>Add Element</button>
                    <button onClick={removeElement}>Remove Element</button>
                </div>
            );
        };
        
        export default DynamicElements;`
              }
            ]
          },
          {
            title: "Integrating Next.js with MERN Stack",
            content: `**Selecting Elements:** When integrating Next.js with the MERN stack, selecting DOM elements is fundamental for client-side interactions. Methods such as 'getElementById', 'querySelector', and 'getElementsByClassName' are used in client-side JavaScript to interact with the rendered components.
      
      **Modifying Elements:** After selecting elements, you can dynamically update their content, attributes, and styles based on the application's state. This is crucial for creating dynamic interfaces in Next.js, which can fetch data from a MongoDB database through API routes.
      
      **Event Handling:** Event handling in a Next.js application involves attaching event listeners to handle user interactions. With MERN, these interactions often involve updating the state or making API calls to the Express backend to perform CRUD operations on MongoDB data.
      
      **Creating and Removing Elements:** In Next.js, creating and removing elements dynamically can be managed through React's state and lifecycle methods. This allows you to update the user interface based on data from the MERN stack backend.`,
            innersubtopics: [
              {
                title: "Selecting Elements",
                content: "In a Next.js application, selecting elements is done in React components. JavaScript provides methods for DOM manipulation, but React often handles these through state and props:",
                example: `
      **getElementById:** Selects an element by its unique ID.
      **querySelector:** Selects the first element that matches a CSS selector.
      **getElementsByClassName:** Selects all elements with a given class name.
      
      **Example Code in a React Component:**
      import { useEffect } from 'react';
      
      const MyComponent = () => {
          useEffect(() => {
              const elementById = document.getElementById('interactiveElement');
              const elementByClass = document.getElementsByClassName('box')[0];
              const elementByQuery = document.querySelector('#interactiveElement');
      
              console.log(elementById.innerHTML); // Dynamic Content
              console.log(elementByClass.innerHTML); // Dynamic Content
              console.log(elementByQuery.innerHTML); // Dynamic Content
          }, []);
      
          return <div id="interactiveElement" className="box">Interactive Content</div>;
      };
      
      export default MyComponent;`
              },
              {
                title: "Modifying Elements",
                content: "In a Next.js application, modifying elements is often handled through React's state management rather than direct DOM manipulation. However, understanding DOM methods is useful for advanced interactions:",
                example: `
      **innerHTML:** Changes the HTML content inside an element.
      **setAttribute:** Modifies or adds attributes of an element.
      **style:** Alters the CSS styles of an element.
      
      **Example Code in a React Component:**
      import { useEffect } from 'react';
      
      const MyComponent = () => {
          useEffect(() => {
              const element = document.getElementById('interactiveElement');
              if (element) {
                  element.innerHTML = 'Updated Interactive Text'; // Changes the content
                  element.setAttribute('data-info', 'Updated Data'); // Adds a new attribute
                  element.style.color = 'blue'; // Changes text color
              }
          }, []);
      
          return <div id="interactiveElement">Original Text</div>;
      };
      
      export default MyComponent;`
              },
              {
                title: "Event Handling",
                content: "Event handling in Next.js is managed using React’s event system. This often involves making API calls to an Express backend and updating the MongoDB database. Here’s how you handle events in a React component:",
                example: `
      **addEventListener:** Attaches an event handler to an element.
      **Event Object:** Provides details about the event, such as the target element and type of event.
      
      **Example Code in a React Component:**
      import React from 'react';
      
      const MyComponent = () => {
          const handleClick = () => {
              alert('Button clicked!');
              // You can make API calls to the backend here
          };
      
          return <button onClick={handleClick}>Click Me</button>;
      };
      
      export default MyComponent;`
              },
              {
                title: "Creating and Removing Elements",
                content: "In Next.js, dynamic updates to the UI, such as creating and removing elements, are typically managed through React state and effects. This allows for efficient updates based on user interactions or data changes from the MERN stack:",
                example: `
      **createElement:** Creates new elements.
      **appendChild:** Adds a new element as a child of an existing element.
      **removeChild:** Removes an element from its parent.
      
      **Example Code in a React Component:**
      import React, { useState } from 'react';
      
      const DynamicComponent = () => {
          const [elements, setElements] = useState([]);
      
          const addElement = () => {
              setElements([...elements, 'New Interactive Element']);
          };
      
          const removeElement = () => {
              setElements(elements.slice(0, -1));
          };
      
          return (
              <div>
                  <button onClick={addElement}>Add Element</button>
                  <button onClick={removeElement}>Remove Element</button>
                  <div id="dynamicContainer">
                      {elements.map((el, index) => (
                          <p key={index}>{el}</p>
                      ))}
                  </div>
              </div>
          );
      };
      
      export default DynamicComponent;`
              }
            ]
          },
          {
            title: "Advanced Next.js Features",
            content: `**Selecting Elements:** In Next.js, interacting with DOM elements directly is often handled using React components. You might use methods like 'useRef' and 'useEffect' to select and manipulate elements within your components.
    
    **Modifying Elements:** Next.js applications often modify elements by updating state or props. React hooks such as 'useState' and 'useEffect' allow you to dynamically change content, attributes, and styles.
    
    **Event Handling:** Handling events in Next.js involves attaching event handlers to React components. React’s synthetic event system helps manage events like clicks and form submissions efficiently.
    
    **Creating and Removing Elements:** In Next.js, you can dynamically render elements based on state or props. Techniques include conditional rendering and utilizing the React Context API for managing dynamic content.`,
            innersubtopics: [
              {
                title: "Selecting Elements",
                content: "In a Next.js application, selecting and interacting with elements is typically done using React features like refs and hooks.",
                example: `
    **useRef:** Provides a way to directly access DOM elements.
    **useEffect:** Used to perform side effects, including DOM manipulation, after a component renders.
    
    **Example Code:**
    import { useRef, useEffect } from 'react';
    
    const ExampleComponent = () => {
        const elementRef = useRef(null);
    
        useEffect(() => {
            if (elementRef.current) {
                console.log(elementRef.current.innerHTML); // Access element's content
            }
        }, []);
    
        return (
            <div ref={elementRef}>Interactive Content</div>
        );
    };
    
    export default ExampleComponent`
              },
              {
                title: "Modifying Elements",
                content: "Modifying elements in Next.js often involves using React’s state management and styling techniques.",
                example: `
    **useState:** Manages component state to update content dynamically.
    **Inline Styles:** Adjust styles directly within the component.
    
    **Example Code:**
    import { useState } from 'react';
    
    const ModificationComponent = () => {
        const [text, setText] = useState('Original Text');
        const [color, setColor] = useState('black');
    
        return (
            <div>
                <p style={{ color }}>{text}</p>
                <button onClick={() => setText('Updated Text')}>Update Text</button>
                <button onClick={() => setColor('red')}>Change Color</button>
            </div>
        );
    };
    
    export default ModificationComponent`
              },
              {
                title: "Event Handling",
                content: "Event handling in Next.js is managed through React event handlers. These handlers are used to respond to user interactions within your components.",
                example: `
    **onClick:** React’s way of handling click events.
    **Event Handlers:** Functions that respond to user interactions.
    
    **Example Code:**
    const EventHandlingComponent = () => {
        const handleClick = () => {
            alert('Button clicked!');
        };
    
        return (
            <button onClick={handleClick}>Click Me</button>
        );
    };
    
    export default EventHandlingComponent`
              },
              {
                title: "Creating and Removing Elements",
                content: "Dynamic rendering of elements in Next.js can be managed through conditional rendering and state management.",
                example: `
    **Conditional Rendering:** Render elements based on component state or props.
    **useState:** Used to manage and toggle the presence of elements.
    
    **Example Code:**
    import { useState } from 'react';
    
    const DynamicElementsComponent = () => {
        const [showElement, setShowElement] = useState(false);
    
        return (
            <div>
                {showElement && <p>New Interactive Element</p>}
                <button onClick={() => setShowElement(true)}>Add Element</button>
                <button onClick={() => setShowElement(false)}>Remove Element</button>
            </div>
        );
    };
    
    export default DynamicElementsComponent`
              }
            ]
          },
          {
            title: "MERN Stack with Next.js",
            content: `**Selecting Elements:** In a MERN Stack application using Next.js, selecting and manipulating DOM elements is crucial for creating dynamic user interfaces. Methods such as 'getElementById', 'querySelector', and 'getElementsByClassName' are used in client-side code to interact with the DOM.
  
  **Modifying Elements:** After selecting elements, you can modify their content, attributes, and styles to respond to user interactions or server-side data updates. Methods like 'innerHTML', 'setAttribute', and 'style' are used in client-side React components.
  
  **Event Handling:** Handling events is essential for creating interactive web applications. JavaScript event handling allows you to manage user interactions in React components, such as button clicks and form submissions. The 'onClick', 'onChange', and other event handlers are used in Next.js components.
  
  **Creating and Removing Elements:** In a Next.js application, elements are dynamically created and removed based on user interactions and application state. Methods such as 'createElement', 'appendChild', and 'removeChild' are often replaced by React’s declarative rendering methods.`,
            innersubtopics: [
              {
                title: "Selecting Elements",
                content: "In a MERN Stack with Next.js project, selecting elements is part of managing client-side interactions. JavaScript methods for element selection are still applicable:",
                example: `
  **getElementById:** Selects an element by its unique ID.
  **querySelector:** Selects the first element that matches a CSS selector.
  **getElementsByClassName:** Selects all elements with a given class name.
  
  **Example Code:**
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>MERN Stack Selection Example</title>
  </head>
  <body>
      <div id="interactiveElement" class="box">Interactive Content</div>
      <script>
          const elementById = document.getElementById('interactiveElement');
          const elementByClass = document.getElementsByClassName('box')[0];
          const elementByQuery = document.querySelector('#interactiveElement');
  
          console.log(elementById.innerHTML); // Interactive Content
          console.log(elementByClass.innerHTML); // Interactive Content
          console.log(elementByQuery.innerHTML); // Interactive Content
      </script>
  </body>
  </html>`
              },
              {
                title: "Modifying Elements",
                content: "In Next.js, elements are typically modified through React state and props. However, for client-side scripts, modifying elements directly involves methods like:",
                example: `
  **innerHTML:** Changes the HTML content inside an element.
  **setAttribute:** Modifies or adds attributes of an element.
  **style:** Alters the CSS styles of an element.
  
  **Example Code:**
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>MERN Stack Modification Example</title>
  </head>
  <body>
      <div id="interactiveElement">Original Text</div>
      <script>
          const element = document.getElementById('interactiveElement');
          element.innerHTML = 'Updated Interactive Text'; // Changes the content
          element.setAttribute('data-info', 'Updated Data'); // Adds a new attribute
          element.style.color = 'blue'; // Changes text color
      </script>
  </body>
  </html>`
              },
              {
                title: "Event Handling",
                content: "In a Next.js application, handling user events is typically done through React’s event handling system. However, JavaScript event handling methods are also used for custom interactions:",
                example: `
  **addEventListener:** Attaches an event handler to an element to respond to user actions.
  **Event Object:** Provides details about the event, such as the target element and type of event.
  
  **Example Code:**
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>MERN Stack Event Handling Example</title>
  </head>
  <body>
      <button id="interactiveButton">Click Me</button>
      <script>
          const button = document.getElementById('interactiveButton');
          button.addEventListener('click', function(event) {
              alert('Button was clicked!');
          });
      </script>
  </body>
  </html>`
              },
              {
                title: "Creating and Removing Elements",
                content: "In a Next.js project, dynamic UI updates are handled through React’s rendering lifecycle. Direct DOM manipulation is less common but still applicable in certain scenarios:",
                example: `
  **createElement:** Creates new elements to be added to the DOM.
  **appendChild:** Adds a newly created element as a child of an existing element.
  **removeChild:** Removes an element from its parent.
  
  **Example Code:**
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>MERN Stack DOM Manipulation Example</title>
  </head>
  <body>
      <div id="dynamicContainer"></div>
      <button id="addElement">Add Element</button>
      <button id="removeElement">Remove Element</button>
      <script>
          const container = document.getElementById('dynamicContainer');
          const addButton = document.getElementById('addElement');
          const removeButton = document.getElementById('removeElement');
  
          addButton.addEventListener('click', function() {
              const newElement = document.createElement('p');
              newElement.textContent = 'New Interactive Element';
              container.appendChild(newElement);
          });
  
          removeButton.addEventListener('click', function() {
              if (container.firstChild) {
                  container.removeChild(container.firstChild);
              }
          });
      </script>
  </body>
  </html>`
              }
            ]
          }
        ]
      }
    }
  ],
  11: [
    {
      id: 11,
      name: 'React Native Basics',
      unit: 'Unit 11',
      status: 'Completed',
      description: {
        overview: 'React Native Basics" covers fundamental concepts and techniques for building mobile applications using React Native, including component creation, state management, and navigation.',
        subtopics: [
          {
            title: "Introduction to React Native",
            content: `**Selecting Components:** In React Native, you work with components rather than DOM elements. You use methods like 'find', 'findAll', and 'queryBy' from testing libraries or hooks to access components and their properties.
        
        **Modifying Components:** Once you have selected a component, you can update its state or props to modify its content, styles, and behavior. React Native provides mechanisms like 'setState', 'useState', and 'style' for dynamic updates.
        
        **Event Handling:** React Native allows you to handle user interactions through event handlers attached to components. Methods like 'onPress', 'onChangeText', and 'onSubmitEditing' are used to handle touch events, text input, and form submissions.
        
        **Creating and Removing Components:** You can dynamically create and remove components in React Native by conditionally rendering them based on the application's state. This involves using components like 'View', 'Text', and 'Button', and managing their visibility through state changes.`,
            innersubtopics: [
              {
                title: "Selecting Components",
                content: "In React Native, selecting components is key to managing UI and interactions. React Native uses a different approach compared to traditional DOM manipulation:",
                example: `
        **findByTestId:** Selects a component by its test ID for testing purposes.
        **queryBy:** Queries a component based on its props or text for testing or conditional rendering.
        
        **Example Code:**
        import React from 'react';
        import { render } from '@testing-library/react-native';
        import { Text } from 'react-native';
        
        const ExampleComponent = () => (
          <Text testID="exampleText">Hello React Native</Text>
        );
        
        const { getByTestId } = render(<ExampleComponent />);
        const exampleText = getByTestId('exampleText');
        
        console.log(exampleText.props.children); // Hello React Native
        `
              },
              {
                title: "Modifying Components",
                content: "In React Native, you can update component properties and styles dynamically. Here’s how to modify components:",
                example: `
        **setState:** Updates the state of a component, triggering a re-render with new data.
        **useState:** Hook that manages state in functional components.
        **style:** Applies or updates styles for React Native components.
        
        **Example Code:**
        import React, { useState } from 'react';
        import { View, Text, Button, StyleSheet } from 'react-native';
        
        const ExampleComponent = () => {
          const [text, setText] = useState('Original Text');
          const [color, setColor] = useState('black');
        
          return (
            <View style={styles.container}>
              <Text style={{ color }}>{text}</Text>
              <Button title="Change Text" onPress={() => setText('Updated Text')} />
              <Button title="Change Color" onPress={() => setColor('red')} />
            </View>
          );
        };
        
        const styles = StyleSheet.create({
          container: {
            padding: 20,
          },
        });
        `
              },
              {
                title: "Event Handling",
                content: "Handling events in React Native involves attaching event handlers to components to respond to user actions:",
                example: `
        **onPress:** Handles touch events on components like buttons.
        **onChangeText:** Handles text input changes.
        **onSubmitEditing:** Handles form submission.
        
        **Example Code:**
        import React from 'react';
        import { View, Button, Alert } from 'react-native';
        
        const ExampleComponent = () => (
          <View>
            <Button
              title="Press Me"
              onPress={() => Alert.alert('Button Pressed')}
            />
          </View>
        );
        `
              },
              {
                title: "Creating and Removing Components",
                content: "In React Native, you can create and remove components based on the application's state. This allows for dynamic UI updates:",
                example: `
        **Conditional Rendering:** Renders components based on state or props.
        **Dynamic Component Creation:** Adds or removes components dynamically.
        
        **Example Code:**
        import React, { useState } from 'react';
        import { View, Button, Text } from 'react-native';
        
        const ExampleComponent = () => {
          const [showComponent, setShowComponent] = useState(true);
        
          return (
            <View>
              {showComponent && <Text>Dynamic Component</Text>}
              <Button
                title={showComponent ? 'Hide Component' : 'Show Component'}
                onPress={() => setShowComponent(!showComponent)}
              />
            </View>
          );
        };
        `
              }
            ]
          },
          {
            title: "React Native Layouts",
            content: `**Selecting Components:** In React Native, selecting and manipulating components is key to creating dynamic layouts. Components like 'View', 'Text', and 'Image' are used to build and structure your app's interface.
      
      **Modifying Components:** After selecting components, you can adjust their properties and styles to fit your app’s design. Props and style properties allow you to modify attributes, appearance, and layout of components.
      
      **Event Handling:** React Native allows you to handle user interactions with components using event handlers. Methods like 'onPress' and 'onChangeText' are used to respond to user actions, making the app interactive.
      
      **Creating and Removing Components:** React Native supports dynamic creation and removal of components to update the UI based on user interactions. Components can be conditionally rendered or removed using state and conditional rendering techniques.`,
            innersubtopics: [
              {
                title: "Selecting Components",
                content: "In React Native, selecting components involves using built-in components to structure your layout. React Native provides components such as 'View', 'Text', and 'Image' to create your app's interface:",
                example: `
      **View:** A container component used for layout and styling.
      **Text:** A component used for displaying text.
      **Image:** A component used for displaying images.
      
      **Example Code:**
      import React from 'react';
      import { View, Text, StyleSheet } from 'react-native';
      
      const App = () => {
          return (
              <View style={styles.container}>
                  <Text style={styles.text}>React Native Layout Example</Text>
              </View>
          );
      };
      
      const styles = StyleSheet.create({
          container: {
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff',
          },
          text: {
              fontSize: 20,
              color: '#000',
          },
      });
      
      export default App;
      `
              },
              {
                title: "Modifying Components",
                content: "You can modify components' appearance and behavior using props and styles. This allows for dynamic updates to your app's layout and presentation:",
                example: `
      **style:** Adjusts the layout and appearance of components.
      **props:** Passes data and configuration to components.
      
      **Example Code:**
      import React from 'react';
      import { View, Text, StyleSheet } from 'react-native';
      
      const App = () => {
          return (
              <View style={styles.container}>
                  <Text style={styles.text}>Updated Text</Text>
              </View>
          );
      };
      
      const styles = StyleSheet.create({
          container: {
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#f0f0f0',
          },
          text: {
              fontSize: 24,
              color: 'blue',
          },
      });
      
      export default App;
      `
              },
              {
                title: "Event Handling",
                content: "React Native allows you to handle user interactions by attaching event handlers to components. This makes your app responsive to user actions:",
                example: `
      **onPress:** Handles button press events.
      **onChangeText:** Handles text input changes.
      
      **Example Code:**
      import React, { useState } from 'react';
      import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
      
      const App = () => {
          const [text, setText] = useState('');
      
          return (
              <View style={styles.container}>
                  <TextInput
                      style={styles.input}
                      placeholder="Type here"
                      onChangeText={setText}
                  />
                  <Button
                      title="Submit"
                      onPress={() => alert('Button pressed!')}
                  />
                  <Text>{text}</Text>
              </View>
          );
      };
      
      const styles = StyleSheet.create({
          container: {
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff',
          },
          input: {
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              marginBottom: 10,
              width: '80%',
          },
      });
      
      export default App;
      `
              },
              {
                title: "Creating and Removing Components",
                content: "React Native allows you to dynamically create and remove components based on user interactions. This is achieved through state and conditional rendering:",
                example: `
      **State:** Manages the component’s state to conditionally render components.
      **Conditional Rendering:** Displays components based on certain conditions.
      
      **Example Code:**
      import React, { useState } from 'react';
      import { View, Text, Button, StyleSheet } from 'react-native';
      
      const App = () => {
          const [isVisible, setIsVisible] = useState(true);
      
          return (
              <View style={styles.container}>
                  {isVisible && <Text style={styles.text}>This is a dynamic element</Text>}
                  <Button
                      title={isVisible ? "Remove Element" : "Add Element"}
                      onPress={() => setIsVisible(!isVisible)}
                  />
              </View>
          );
      };
      
      const styles = StyleSheet.create({
          container: {
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff',
          },
          text: {
              fontSize: 18,
              color: 'green',
              marginBottom: 10,
          },
      });
      
      export default App;
      `
              }
            ]
          },
          {
            title: "Working with APIs in React Native",
            content: `**Fetching Data:** React Native provides methods to fetch and interact with APIs. Using the 'fetch' function, you can retrieve data from remote servers and display it in your application.
    
    **Handling API Responses:** Once data is fetched from an API, you can handle the responses by parsing JSON data, managing state, and updating the UI accordingly. Methods like '.json()' are used to process the response data.
    
    **Posting Data:** In addition to fetching data, you can use APIs to send data to a server. The 'fetch' method allows you to specify HTTP methods like 'POST' to create or update resources on the server.
    
    **Error Handling:** Proper error handling is crucial when working with APIs. Handling errors ensures that your application can gracefully manage failed requests and provide feedback to the user.`,
            innersubtopics: [
              {
                title: "Fetching Data",
                content: "In React Native, you can fetch data from APIs to display dynamic content. Here's how to use the 'fetch' function:",
                example: `
    **fetch:** Retrieves data from a remote API.
    **.then() and .catch():** Handle the response and potential errors.
    
    **Example Code:**
    import React, { useState, useEffect } from 'react';
    import { View, Text, ActivityIndicator } from 'react-native';
    
    const FetchExample = () => {
        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
    
        useEffect(() => {
            fetch('https://api.example.com/data')
                .then(response => response.json())
                .then(data => {
                    setData(data);
                    setLoading(false);
                })
                .catch(error => {
                    setError(error);
                    setLoading(false);
                });
        }, []);
    
        if (loading) return <ActivityIndicator />;
        if (error) return <Text>Error: {error.message}</Text>;
    
        return (
            <View>
                <Text>Data: {JSON.stringify(data)}</Text>
            </View>
        );
    };
    
    export default FetchExample;`
              },
              {
                title: "Handling API Responses",
                content: "Once data is fetched, you need to handle and display it in your React Native app. This involves parsing the response and updating the component state:",
                example: `
    **.json():** Parses the response as JSON.
    **useState:** Manages component state to reflect the data.
    
    **Example Code:**
    import React, { useState, useEffect } from 'react';
    import { View, Text, Button } from 'react-native';
    
    const ResponseHandlingExample = () => {
        const [data, setData] = useState(null);
        const [error, setError] = useState(null);
    
        const fetchData = () => {
            fetch('https://api.example.com/data')
                .then(response => response.json())
                .then(data => setData(data))
                .catch(error => setError(error));
        };
    
        return (
            <View>
                <Button title="Fetch Data" onPress={fetchData} />
                {error && <Text>Error: {error.message}</Text>}
                {data && <Text>Data: {JSON.stringify(data)}</Text>}
            </View>
        );
    };
    
    export default ResponseHandlingExample;`
              },
              {
                title: "Posting Data",
                content: "You can send data to an API using HTTP methods like 'POST'. This is useful for creating or updating resources on the server:",
                example: `
    **fetch with POST:** Sends data to the server.
    **Headers:** Specify content type and other parameters.
    
    **Example Code:**
    import React from 'react';
    import { View, Button, TextInput, Alert } from 'react-native';
    
    const PostExample = () => {
        const postData = () => {
            fetch('https://api.example.com/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ key: 'value' }),
            })
            .then(response => response.json())
            .then(data => Alert.alert('Success', 'Data posted successfully'))
            .catch(error => Alert.alert('Error', 'Failed to post data'));
        };
    
        return (
            <View>
                <Button title="Post Data" onPress={postData} />
            </View>
        );
    };
    
    export default PostExample;`
              },
              {
                title: "Error Handling",
                content: "Handling errors is crucial when interacting with APIs to ensure a smooth user experience. React Native provides ways to manage errors gracefully:",
                example: `
    **.catch():** Catches errors during fetch.
    **Error Boundaries:** Use React Native's error boundaries to handle errors in a user-friendly way.
    
    **Example Code:**
    import React, { useState } from 'react';
    import { View, Button, Text, Alert } from 'react-native';
    
    const ErrorHandlingExample = () => {
        const [error, setError] = useState(null);
    
        const fetchData = () => {
            fetch('https://api.example.com/data')
                .then(response => response.json())
                .catch(error => setError(error));
        };
    
        return (
            <View>
                <Button title="Fetch Data" onPress={fetchData} />
                {error && <Text>Error: {error.message}</Text>}
            </View>
        );
    };
    
    export default ErrorHandlingExample;`
              }
            ]
          },
          {
            title: "Simple React Native App",
            content: `**Selecting Components:** In a React Native app, you can use components to build your user interface. Components such as 'View', 'Text', and 'TouchableOpacity' are commonly used to create and manage UI elements.
  
  **Modifying Components:** Once components are rendered, you can modify their properties and styles dynamically. This includes updating their text, styles, and attributes using state and props.
  
  **Event Handling:** React Native allows you to handle user interactions such as taps and gestures. You can attach event handlers to components to respond to these interactions, enhancing the interactivity of your app.
  
  **Creating and Removing Components:** React Native components can be dynamically created or removed based on user actions or app state. This is achieved through state management and conditional rendering.`,
            innersubtopics: [
              {
                title: "Selecting Components",
                content: "In a React Native app, selecting and rendering components is the first step to building your user interface. Here’s how you can manage components:",
                example: `
  **View:** A basic container that supports layout with flexbox.
  **Text:** Displays text elements.
  **TouchableOpacity:** A button-like component that responds to user taps.
  
  **Example Code:**
  import React from 'react';
  import { View, Text, StyleSheet } from 'react-native';
  
  const App = () => {
      return (
          <View style={styles.container}>
              <Text style={styles.text}>Hello World</Text>
          </View>
      );
  };
  
  const styles = StyleSheet.create({
      container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
      },
      text: {
          fontSize: 20,
      },
  });
  
  export default App;`
              },
              {
                title: "Modifying Components",
                content: "Modifying components in React Native involves updating their state and style dynamically. Here’s how you can achieve this:",
                example: `
  **State:** Use React's state to manage and update component data.
  **Style:** Adjust styles using the StyleSheet API for dynamic styling.
  
  **Example Code:**
  import React, { useState } from 'react';
  import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
  
  const App = () => {
      const [text, setText] = useState('Original Text');
      const [color, setColor] = useState('black');
  
      return (
          <View style={styles.container}>
              <Text style={[styles.text, { color: color }]}>{text}</Text>
              <TouchableOpacity onPress={() => { setText('Updated Text'); setColor('blue'); }}>
                  <Text style={styles.button}>Change Text</Text>
              </TouchableOpacity>
          </View>
      );
  };
  
  const styles = StyleSheet.create({
      container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
      },
      text: {
          fontSize: 20,
      },
      button: {
          fontSize: 18,
          color: 'blue',
          marginTop: 20,
      },
  });
  
  export default App;`
              },
              {
                title: "Event Handling",
                content: "React Native handles user interactions with event handlers. You can attach these handlers to components to make your app interactive:",
                example: `
  **onPress:** Handles tap events for TouchableOpacity and other touchable components.
  
  **Example Code:**
  import React from 'react';
  import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
  
  const App = () => {
      const handlePress = () => {
          Alert.alert('Button pressed!');
      };
  
      return (
          <View style={styles.container}>
              <TouchableOpacity onPress={handlePress}>
                  <Text style={styles.button}>Press Me</Text>
              </TouchableOpacity>
          </View>
      );
  };
  
  const styles = StyleSheet.create({
      container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
      },
      button: {
          fontSize: 20,
          color: 'blue',
      },
  });
  
  export default App;`
              },
              {
                title: "Creating and Removing Components",
                content: "For dynamic content updates in React Native, you can create or remove components based on app state or user actions. This involves managing state and conditionally rendering components:",
                example: `
  **State Management:** Use state to manage which components should be displayed.
  **Conditional Rendering:** Render components based on state or props.
  
  **Example Code:**
  import React, { useState } from 'react';
  import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
  
  const App = () => {
      const [showComponent, setShowComponent] = useState(true);
  
      return (
          <View style={styles.container}>
              {showComponent && <Text style={styles.text}>Dynamic Component</Text>}
              <TouchableOpacity onPress={() => setShowComponent(!showComponent)}>
                  <Text style={styles.button}>Toggle Component</Text>
              </TouchableOpacity>
          </View>
      );
  };
  
  const styles = StyleSheet.create({
      container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
      },
      text: {
          fontSize: 20,
      },
      button: {
          fontSize: 18,
          color: 'blue',
          marginTop: 20,
      },
  });
  
  export default App;`
              }
            ]
          }
        ]
      }
    }
  ],
  12: [
    {
      id: 12,
      name: 'Android Development with React Native',
      unit: 'Unit 12',
      status: 'Completed',
      description: {
        overview: 'Android Development with React Native enables developers to build high-performance, cross-platform mobile applications using JavaScript and React, delivering native-like experiences on Android devices.',
        subtopics: [
          {
            title: "Android-Specific Development",
            content: `**Selecting Views:** In Android development, you use methods to select and manipulate UI components within your layout files. Methods such as 'findViewById' and the View Binding library are commonly used for this purpose.
        
        **Modifying Views:** Once selected, Android views can be modified in various ways. You can change their content, attributes, and styles using properties and methods like 'setText', 'setBackgroundColor', and 'setVisibility'.
        
        **Event Handling:** Android allows you to handle user interactions by setting up event listeners on views. Methods such as 'setOnClickListener' are used to respond to user actions like button clicks and touch events.
        
        **Creating and Removing Views:** You can dynamically create and remove views within your Android application using methods like 'addView' and 'removeView'. This enables you to update your app’s UI in response to user interactions or data changes.`,
            innersubtopics: [
              {
                title: "Selecting Views",
                content: "In Android development, selecting views is crucial for interacting with the user interface components. You can use the following methods to access views defined in your layout XML files:",
                example: `
        **findViewById:** Retrieves a view by its ID defined in the layout XML.
        **View Binding:** Provides a type-safe way to access views without needing to use 'findViewById'.
        
        **Example Code:**
        <!-- layout/activity_main.xml -->
        <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:orientation="vertical">
        
            <TextView
                android:id="@+id/textView"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="Hello World" />
        
        </LinearLayout>
        
        <!-- MainActivity.java -->
        import android.os.Bundle;
        import android.widget.TextView;
        import androidx.appcompat.app.AppCompatActivity;
        
        public class MainActivity extends AppCompatActivity {
            @Override
            protected void onCreate(Bundle savedInstanceState) {
                super.onCreate(savedInstanceState);
                setContentView(R.layout.activity_main);
        
                TextView textView = findViewById(R.id.textView);
                textView.setText("Updated Text"); // Updates the text content
            }
        }
        `
              },
              {
                title: "Modifying Views",
                content: "Modifying views in Android allows you to change their appearance and behavior dynamically. Here’s how you can adjust views:",
                example: `
        **setText:** Changes the text displayed in a TextView.
        **setBackgroundColor:** Alters the background color of a view.
        **setVisibility:** Controls the visibility of a view (visible, invisible, or gone).
        
        **Example Code:**
        <!-- layout/activity_main.xml -->
        <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:orientation="vertical">
        
            <TextView
                android:id="@+id/textView"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="Original Text" />
        
        </LinearLayout>
        
        <!-- MainActivity.java -->
        import android.graphics.Color;
        import android.os.Bundle;
        import android.widget.TextView;
        import androidx.appcompat.app.AppCompatActivity;
        
        public class MainActivity extends AppCompatActivity {
            @Override
            protected void onCreate(Bundle savedInstanceState) {
                super.onCreate(savedInstanceState);
                setContentView(R.layout.activity_main);
        
                TextView textView = findViewById(R.id.textView);
                textView.setText("Updated Text"); // Changes the text
                textView.setBackgroundColor(Color.RED); // Changes background color
                textView.setVisibility(View.INVISIBLE); // Hides the view
            }
        }
        `
              },
              {
                title: "Event Handling",
                content: "Handling events in Android allows your application to respond to user actions. You can set up event listeners to handle different types of interactions:",
                example: `
        **setOnClickListener:** Sets a listener to handle click events on a view.
        **OnTouchListener:** Handles touch events on a view, such as swipes or taps.
        
        **Example Code:**
        <!-- layout/activity_main.xml -->
        <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:orientation="vertical">
        
            <Button
                android:id="@+id/buttonClickMe"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="Click Me" />
        
        </LinearLayout>
        
        <!-- MainActivity.java -->
        import android.os.Bundle;
        import android.view.View;
        import android.widget.Button;
        import android.widget.Toast;
        import androidx.appcompat.app.AppCompatActivity;
        
        public class MainActivity extends AppCompatActivity {
            @Override
            protected void onCreate(Bundle savedInstanceState) {
                super.onCreate(savedInstanceState);
                setContentView(R.layout.activity_main);
        
                Button button = findViewById(R.id.buttonClickMe);
                button.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        Toast.makeText(MainActivity.this, "Button clicked!", Toast.LENGTH_SHORT).show();
                    }
                });
            }
        }
        `
              },
              {
                title: "Creating and Removing Views",
                content: "Dynamically creating and removing views allows you to update the UI based on user interactions or data changes in Android applications.",
                example: `
        **addView:** Adds a new view to a container view programmatically.
        **removeView:** Removes an existing view from its parent view.
        
        **Example Code:**
        <!-- layout/activity_main.xml -->
        <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
            android:id="@+id/container"
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:orientation="vertical">
        
            <Button
                android:id="@+id/buttonAddView"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="Add View" />
        
            <Button
                android:id="@+id/buttonRemoveView"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="Remove View" />
        
        </LinearLayout>
        
        <!-- MainActivity.java -->
        import android.os.Bundle;
        import android.view.View;
        import android.widget.Button;
        import android.widget.LinearLayout;
        import android.widget.TextView;
        import androidx.appcompat.app.AppCompatActivity;
        
        public class MainActivity extends AppCompatActivity {
            @Override
            protected void onCreate(Bundle savedInstanceState) {
                super.onCreate(savedInstanceState);
                setContentView(R.layout.activity_main);
        
                LinearLayout container = findViewById(R.id.container);
                Button addButton = findViewById(R.id.buttonAddView);
                Button removeButton = findViewById(R.id.buttonRemoveView);
        
                addButton.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        TextView newView = new TextView(MainActivity.this);
                        newView.setText("New Dynamic View");
                        container.addView(newView);
                    }
                });
        
                removeButton.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        if (container.getChildCount() > 0) {
                            container.removeViewAt(0);
                        }
                    }
                });
            }
        }
        `
              }
            ]
          },
          {
            title: "Advanced React Native Concepts",
            content: `**Component Lifecycle:** In React Native, understanding the lifecycle of components is crucial for managing state and side effects effectively. Key lifecycle methods include 'componentDidMount', 'componentDidUpdate', and 'componentWillUnmount'.
      
      **State Management:** React Native applications often use state management libraries like Redux or Context API to handle complex state across components. Proper state management ensures predictable and maintainable code.
      
      **Navigation:** React Native offers several ways to handle navigation within your app, including React Navigation and React Native Navigation. Understanding how to implement stack, tab, and drawer navigation is essential for building seamless user experiences.
      
      **Performance Optimization:** For optimal performance, React Native applications should be optimized by techniques such as lazy loading, memoization, and avoiding unnecessary re-renders. Tools like the React Native Debugger and performance profiling can help in this process.
      
      **Native Modules:** React Native allows you to write native code for iOS and Android to access platform-specific features. Creating and using native modules can extend the functionality of your React Native app.`,
            innersubtopics: [
              {
                title: "Component Lifecycle",
                content: "Managing component lifecycle is crucial for handling side effects and state in React Native. Key lifecycle methods include:",
                example: `
      **componentDidMount:** Invoked immediately after a component is mounted. Ideal for initializing data.
      **componentDidUpdate:** Invoked after a component is updated. Useful for responding to prop or state changes.
      **componentWillUnmount:** Invoked immediately before a component is unmounted and destroyed. Perfect for cleanup tasks.
      
      **Example Code:**
      import React, { Component } from 'react';
      import { View, Text } from 'react-native';
      
      class LifecycleExample extends Component {
          componentDidMount() {
              console.log('Component did mount');
          }
      
          componentDidUpdate(prevProps, prevState) {
              console.log('Component did update');
          }
      
          componentWillUnmount() {
              console.log('Component will unmount');
          }
      
          render() {
              return (
                  <View>
                      <Text>Lifecycle Example</Text>
                  </View>
              );
          }
      }
      
      export default LifecycleExample;`
              },
              {
                title: "State Management",
                content: "Effective state management is essential for handling complex applications in React Native. Common approaches include:",
                example: `
      **Redux:** A state management library that uses a global store and reducers to manage application state.
      **Context API:** A React API that allows you to pass state through the component tree without props drilling.
      
      **Example Code (Redux):**
      import { createStore } from 'redux';
      import { Provider } from 'react-redux';
      import rootReducer from './reducers';
      import App from './App';
      
      const store = createStore(rootReducer);
      
      const Root = () => (
          <Provider store={store}>
              <App />
          </Provider>
      );
      
      export default Root;`
              },
              {
                title: "Navigation",
                content: "Implementing navigation in React Native can be done using various libraries. Key types of navigation include:",
                example: `
      **React Navigation:** A popular library for stack, tab, and drawer navigation.
      **React Native Navigation:** A library for native navigation experiences.
      
      **Example Code (React Navigation):**
      import { createAppContainer } from 'react-navigation';
      import { createStackNavigator } from 'react-navigation-stack';
      import HomeScreen from './HomeScreen';
      import DetailsScreen from './DetailsScreen';
      
      const AppNavigator = createStackNavigator({
          Home: HomeScreen,
          Details: DetailsScreen,
      });
      
      export default createAppContainer(AppNavigator);`
              },
              {
                title: "Performance Optimization",
                content: "Optimizing performance in React Native involves various techniques to ensure smooth user experiences. Key methods include:",
                example: `
      **Lazy Loading:** Dynamically load components as needed to improve initial load times.
      **Memoization:** Use React.memo and useCallback to prevent unnecessary re-renders.
      **Profiling:** Use tools like React Native Debugger to identify performance bottlenecks.
      
      **Example Code (Memoization):**
      import React, { useCallback } from 'react';
      import { View, Text, Button } from 'react-native';
      
      const MemoizedComponent = React.memo(({ onPress }) => (
          <Button title="Press me" onPress={onPress} />
      ));
      
      const ParentComponent = () => {
          const handlePress = useCallback(() => {
              console.log('Button pressed');
          }, []);
      
          return (
              <View>
                  <MemoizedComponent onPress={handlePress} />
              </View>
          );
      };
      
      export default ParentComponent;`
              },
              {
                title: "Native Modules",
                content: "Creating and using native modules in React Native allows you to access platform-specific features that are not available through JavaScript alone.",
                example: `
      **Creating a Native Module:** Write native code in Java (Android) or Objective-C/Swift (iOS) and expose it to React Native.
      
      **Example Code (iOS - Swift):**
      import React from 'react';
      import { NativeModules } from 'react-native';
      
      const { MyNativeModule } = NativeModules;
      
      class MyComponent extends React.Component {
          componentDidMount() {
              MyNativeModule.myNativeMethod()
                  .then(result => console.log(result))
                  .catch(error => console.error(error));
          }
      
          render() {
              return (
                  <Text>Native Module Example</Text>
              );
          }
      }
      
      export default MyComponent;`
              }
            ]
          },
          {
            title: "Publishing Android Apps",
            content: `**Selecting Elements:** In Android development, selecting and manipulating UI elements is done using methods provided by Android’s framework. Methods like 'findViewById', 'getSupportFragmentManager', and 'getResources' are commonly used to interact with and manage UI components.

**Modifying Elements:** Once you have selected UI elements, you can modify their properties, such as text, colors, and visibility. Methods like 'setText', 'setBackgroundColor', and 'setVisibility' are used to update the user interface dynamically.

**Event Handling:** Handling user interactions in Android apps involves attaching event listeners to UI components. Methods like 'setOnClickListener' are used to respond to user actions, such as button clicks and other gestures, providing an interactive experience.

**Creating and Removing Elements:** Android allows for dynamic management of UI components, including creating new views and removing existing ones. Methods such as 'addView' and 'removeView' are used to update the layout based on user interactions or other events.`,
            innersubtopics: [
              {
                title: "Selecting Elements",
                content: "In Android development, selecting UI elements is a fundamental task. Android provides several methods for accessing and interacting with UI components:",
                example: `
**findViewById:** Retrieves a view by its unique ID defined in the XML layout.
**getSupportFragmentManager:** Accesses the fragment manager for managing fragments.
**getResources:** Provides access to application resources like strings, colors, and dimensions.

**Example Code:**
java
// In an Activity
TextView textView = findViewById(R.id.textViewId);
Button button = findViewById(R.id.buttonId);

// In a Fragment
FragmentManager fragmentManager = getSupportFragmentManager();


}, { title: "Modifying Elements", content: "After selecting UI elements, you can modify their properties to reflect changes based on user interactions or app logic.", example: setText: Updates the text displayed in a TextView. setBackgroundColor: Changes the background color of a view. setVisibility: Controls the visibility of a view (VISIBLE, INVISIBLE, or GONE).


TextView textView = findViewById(R.id.textViewId);
textView.setText("Updated Text"); // Changes the text
textView.setBackgroundColor(Color.BLUE); // Changes the background color
textView.setVisibility(View.VISIBLE); // Makes the view visible

}, { title: "Event Handling", content: "Handling user interactions is crucial for creating responsive and interactive Android applications. Android provides mechanisms for attaching event listeners to UI components:", example: setOnClickListener: Attaches a click event listener to a Button or other clickable view. OnTouchListener: Handles touch events on a view.

Button button = findViewById(R.id.buttonId);
button.setOnClickListener(new View.OnClickListener() {
    @Override
    public void onClick(View v) {
        Toast.makeText(getApplicationContext(), "Button clicked!", Toast.LENGTH_SHORT).show();
    }
});
}, { title: "Creating and Removing Elements", content: "Android allows for dynamic manipulation of the user interface, such as adding and removing views programmatically:", example: addView: Adds a new view to a ViewGroup. removeView: Removes an existing view from a ViewGroup.
      }
// Adding a new view dynamically
LinearLayout layout = findViewById(R.id.layoutId);
TextView newTextView = new TextView(this);
newTextView.setText("New Dynamic View");
layout.addView(newTextView);

// Removing a view dynamically
layout.removeView(newTextView);
` }]
          },
          {
            title: "Advanced React Native Application",
            content: `**Selecting Components:** In React Native, you select and manipulate components using methods such as 'ref' for direct access or by managing component state and props. Key methods and hooks like 'useRef', 'useState', and 'useEffect' are used to interact with and update components.
        
        **Modifying Components:** After selecting components, you can update their properties, styles, and state to create a dynamic user interface. Use props and state to control component behavior and appearance.
        
        **Event Handling:** React Native provides a way to handle user interactions through event handlers. Components like 'Button' and 'TouchableOpacity' use event handlers like 'onPress' to respond to user inputs.
        
        **Creating and Removing Components:** React Native allows for dynamic component management by conditionally rendering components based on state or props. This is achieved using state management techniques and conditional rendering.`,
            innersubtopics: [
              {
                title: "Selecting Components",
                content: "In an advanced React Native application, selecting and managing components is crucial. React Native uses 'ref' and hooks to access and manipulate components:",
                example: `
        **useRef:** Provides a way to reference a React component or DOM element.
        **useState:** Manages state within functional components.
        **useEffect:** Performs side effects in functional components, such as data fetching or subscriptions.
        
        **Example Code:**
        import React, { useRef, useState } from 'react';
        import { View, Text, Button } from 'react-native';
        
        const App = () => {
            const textRef = useRef(null);
            const [text, setText] = useState('Hello World');
        
            return (
                <View>
                    <Text ref={textRef}>{text}</Text>
                    <Button title="Change Text" onPress={() => setText('Updated Text')} />
                </View>
            );
        };
        
        export default App;`
              },
              {
                title: "Modifying Components",
                content: "Modifying components in React Native involves updating props, state, and styles dynamically to reflect changes in the user interface:",
                example: `
        **props:** Pass data and functions to components to customize their behavior.
        **state:** Use the 'useState' hook to manage component state and trigger re-renders.
        **styles:** Apply and update styles using the 'StyleSheet' API or inline styles.
        
        **Example Code:**
        import React, { useState } from 'react';
        import { View, Text, Button, StyleSheet } from 'react-native';
        
        const App = () => {
            const [color, setColor] = useState('black');
        
            return (
                <View style={styles.container}>
                    <Text style={[styles.text, { color: color }]}>Dynamic Text Color</Text>
                    <Button title="Change Color" onPress={() => setColor('red')} />
                </View>
            );
        };
        
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            },
            text: {
                fontSize: 20,
            },
        });
        
        export default App;`
              },
              {
                title: "Event Handling",
                content: "Handling events in React Native allows you to make your application interactive. Use event handlers provided by components to respond to user actions:",
                example: `
        **onPress:** A common event handler for buttons and touchable components.
        **Event Object:** React Native provides event objects to handle user inputs effectively.
        
        **Example Code:**
        import React from 'react';
        import { View, Button, Alert } from 'react-native';
        
        const App = () => {
            const handlePress = () => {
                Alert.alert('Button pressed!');
            };
        
            return (
                <View>
                    <Button title="Press Me" onPress={handlePress} />
                </View>
            );
        };
        
        export default App;`
              },
              {
                title: "Creating and Removing Components",
                content: "React Native allows dynamic component management based on state or props. You can conditionally render components to add or remove them from the UI:",
                example: `
        **Conditional Rendering:** Use state to control which components are displayed.
        **List Management:** Dynamically create lists of components based on data.
        
        **Example Code:**
        import React, { useState } from 'react';
        import { View, Button, Text } from 'react-native';
        
        const App = () => {
            const [showElement, setShowElement] = useState(true);
        
            return (
                <View>
                    {showElement && <Text>Conditional Component</Text>}
                    <Button title={showElement ? "Remove Component" : "Add Component"} onPress={() => setShowElement(!showElement)} />
                </View>
            );
        };
        
        export default App;`
              }
            ]
          },
          {
            title: "Advanced React Native Application",
            content: `**Selecting Elements:** In React Native, elements are typically components such as Views, Text, and Buttons. These elements can be accessed and manipulated through state management and props, enabling dynamic interactions and updates to the UI.
        
        **Modifying Elements:** React Native allows developers to modify components dynamically through state changes and props updates. For example, using React's setState or the useState hook, you can modify the properties of elements, such as text, style, or even their visibility.
        
        **Event Handling:** React Native supports event handling through various built-in components like Button, TextInput, and TouchableOpacity. You can use the 'onPress', 'onChangeText', or other event handlers to capture user interactions and trigger application logic.
        
        **Creating and Removing Components:** In advanced React Native applications, components can be dynamically rendered or removed based on user interaction or application state. By conditionally rendering components using JavaScript logic (like ternary operators or if statements), you can control the visibility and structure of your app.`,
            innersubtopics: [
              {
                title: "Selecting Components",
                content: "In an advanced React Native application, you select and manipulate components based on props, state, and references (Refs). This allows for dynamic and interactive UI updates.",
                example: `
        **Example of Using State to Control a Component:**
        
        \`\`\`javascript
        import React, { useState } from 'react';
        import { View, Text, Button, StyleSheet } from 'react-native';
        
        const App = () => {
          const [message, setMessage] = useState('Welcome to React Native!');
        
          return (
            <View style={styles.container}>
              <Text>{message}</Text>
              <Button
                title="Update Message"
                onPress={() => setMessage('Message Updated!')}
              />
            </View>
          );
        };
        
        const styles = StyleSheet.create({
          container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }
        });
        
        export default App;
        \`\`\`
        In this example, the text component updates based on the state, offering dynamic content changes in response to user actions.`
              },
              {
                title: "Modifying Components",
                content: "In advanced React Native applications, modifying components often involves updating their state, styles, or properties. React's setState or useState hooks are central for handling these updates.",
                example: `
        **Example of Modifying a Component's Style and Content Dynamically:**
        
        \`\`\`javascript
        import React, { useState } from 'react';
        import { View, Text, Button, StyleSheet } from 'react-native';
        
        const App = () => {
          const [color, setColor] = useState('blue');
          const [text, setText] = useState('Initial Text');
        
          const updateColor = () => {
            setColor(color === 'blue' ? 'red' : 'blue');
          };
        
          return (
            <View style={styles.container}>
              <Text style={{ color: color }}>{text}</Text>
              <Button title="Change Color" onPress={updateColor} />
              <Button title="Update Text" onPress={() => setText('Updated Text')} />
            </View>
          );
        };
        
        const styles = StyleSheet.create({
          container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },
        });
        
        export default App;
        \`\`\`
        This example demonstrates how both text and styles can be modified in response to user interaction.`
              },
              {
                title: "Event Handling",
                content: "Handling events such as user input, gestures, and button presses is essential in an advanced React Native application. React Native provides event handlers like 'onPress', 'onChangeText', and 'onSubmitEditing' for managing user interactions.",
                example: `
        **Example of Handling Button Presses and Text Input:**
        
        \`\`\`javascript
        import React, { useState } from 'react';
        import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
        
        const App = () => {
          const [input, setInput] = useState('');
        
          return (
            <View style={styles.container}>
              <Text>Enter Your Name:</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setInput(text)}
                placeholder="Type here"
              />
              <Button title="Submit" onPress={() => alert('Hello, ' + input)} />
            </View>
          );
        };
        
        const styles = StyleSheet.create({
          container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },
          input: {
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            margin: 10,
            padding: 10,
            width: '80%',
          },
        });
        
        export default App;
        \`\`\`
        This example shows how user input is handled through TextInput and how button presses can trigger actions, making the app interactive.`
              },
              {
                title: "Creating and Removing Components",
                content: "React Native allows dynamic rendering of components, essential for advanced applications that adjust their UI based on state, props, or user interactions.",
                example: `
        **Example of Conditionally Rendering Components Based on State:**
        
        \`\`\`javascript
        import React, { useState } from 'react';
        import { View, Text, Button, StyleSheet } from 'react-native';
        
        const App = () => {
          const [isVisible, setIsVisible] = useState(true);
        
          return (
            <View style={styles.container}>
              {isVisible && <Text>This component is visible</Text>}
              <Button
                title="Toggle Visibility"
                onPress={() => setIsVisible(!isVisible)}
              />
            </View>
          );
        };
        
        const styles = StyleSheet.create({
          container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },
        });
        
        export default App;
        \`\`\`
        This example demonstrates conditional rendering, a powerful way to create interactive, state-driven applications in React Native. Components are added or removed from the UI based on the application's state.`
              }
            ]
          }
        ]
      }
    }
  ],
  13: [
    {
      id: 13,
      name: 'Introduction to Data Structure and Algorithms',
      unit: 'Unit 13',
      status: 'Completed',
      description: {
        overview: 'Introduction to Data Structure and Algorithms" provides a foundational understanding of organizing and processing data efficiently using various structures and techniques for problem-solving and optimization.',
        subtopics: [
          {
            title: "Basics of Data Structures",
            content: `**Introduction to Data Structures:** Data structures are fundamental to organizing, managing, and storing data efficiently in computer science. Understanding common data structures like arrays, linked lists, stacks, queues, and trees is essential for solving complex problems.
        
        **Arrays:** An array is a collection of elements, each identified by an index or a key. Arrays are used to store multiple values in a single variable.
        
        **Linked Lists:** A linked list is a linear data structure where elements are stored in nodes, and each node points to the next one. Linked lists allow for efficient insertion and deletion of elements.
        
        **Stacks and Queues:** Stacks follow a Last In, First Out (LIFO) principle, whereas queues follow a First In, First Out (FIFO) principle. Both are important for handling tasks that require ordering.
        
        **Trees:** A tree is a hierarchical data structure with nodes representing elements. Each node has child nodes, except the root, which has no parent. Trees are used in scenarios like representing hierarchical data and searching algorithms.`,
            innersubtopics: [
              {
                title: "Arrays",
                content: "Arrays are one of the simplest data structures, allowing you to store a fixed number of elements of the same type.",
                example: `
        **Array Declaration:** Arrays are usually declared with a fixed size, and elements are accessed using indices.
        **Accessing Elements:** You can retrieve an array element by referencing its index.
        
        **Example Code (JavaScript):**
        \`\`\`javascript
        // Declaring an array
        const numbers = [1, 2, 3, 4, 5];
        
        // Accessing elements
        console.log(numbers[0]); // Outputs: 1
        console.log(numbers[3]); // Outputs: 4
        
        // Updating an element
        numbers[2] = 10;
        console.log(numbers); // Outputs: [1, 2, 10, 4, 5]
        \`\`\``
              },
              {
                title: "Linked Lists",
                content: "A linked list consists of nodes, where each node contains data and a reference (or link) to the next node in the sequence.",
                example: `
        **Node Structure:** Each node contains data and a pointer to the next node.
        **Advantages:** Linked lists allow efficient insertion and deletion of elements compared to arrays.
        
        **Example Code (JavaScript):**
        \`\`\`javascript
        // Node constructor
        class Node {
            constructor(data) {
                this.data = data;
                this.next = null;
            }
        }
        
        // Creating a linked list
        class LinkedList {
            constructor() {
                this.head = null;
            }
        
            // Adding a node
            add(data) {
                const newNode = new Node(data);
                if (this.head === null) {
                    this.head = newNode;
                } else {
                    let current = this.head;
                    while (current.next) {
                        current = current.next;
                    }
                    current.next = newNode;
                }
            }
        
            // Displaying the list
            printList() {
                let current = this.head;
                while (current) {
                    console.log(current.data);
                    current = current.next;
                }
            }
        }
        
        // Using the linked list
        const list = new LinkedList();
        list.add(1);
        list.add(2);
        list.add(3);
        list.printList(); // Outputs: 1, 2, 3
        \`\`\``
              },
              {
                title: "Stacks and Queues",
                content: "Stacks and queues are abstract data types used for organizing data in a specific order. Stacks follow LIFO (Last In, First Out) and queues follow FIFO (First In, First Out).",
                example: `
        **Stack:** A stack allows you to push and pop elements from the top.
        **Queue:** A queue allows you to enqueue elements at the back and dequeue elements from the front.
        
        **Example Code (JavaScript - Stack):**
        \`\`\`javascript
        // Stack implementation using array
        const stack = [];
        
        // Push elements
        stack.push(10);
        stack.push(20);
        console.log(stack); // Outputs: [10, 20]
        
        // Pop element
        const poppedElement = stack.pop();
        console.log(poppedElement); // Outputs: 20
        console.log(stack); // Outputs: [10]
        \`\`\`
        
        **Example Code (JavaScript - Queue):**
        \`\`\`javascript
        // Queue implementation using array
        const queue = [];
        
        // Enqueue elements
        queue.push(10);
        queue.push(20);
        console.log(queue); // Outputs: [10, 20]
        
        // Dequeue element
        const dequeuedElement = queue.shift();
        console.log(dequeuedElement); // Outputs: 10
        console.log(queue); // Outputs: [20]
        \`\`\``
              },
              {
                title: "Trees",
                content: "Trees are hierarchical data structures composed of nodes. Each node contains data and links to its child nodes. The root node has no parent, and the nodes at the bottom are called leaf nodes.",
                example: `
        **Binary Tree:** A binary tree is a tree data structure where each node has at most two children (left and right).
        **Use Cases:** Trees are used in search algorithms, file system hierarchies, and more.
        
        **Example Code (JavaScript - Binary Tree):**
        \`\`\`javascript
        // Node structure for binary tree
        class TreeNode {
            constructor(data) {
                this.data = data;
                this.left = null;
                this.right = null;
            }
        }
        
        // Binary tree implementation
        class BinaryTree {
            constructor() {
                this.root = null;
            }
        
            // Inserting nodes
            insert(data) {
                const newNode = new TreeNode(data);
                if (this.root === null) {
                    this.root = newNode;
                } else {
                    this.insertNode(this.root, newNode);
                }
            }
        
            insertNode(node, newNode) {
                if (newNode.data < node.data) {
                    if (node.left === null) {
                        node.left = newNode;
                    } else {
                        this.insertNode(node.left, newNode);
                    }
                } else {
                    if (node.right === null) {
                        node.right = newNode;
                    } else {
                        this.insertNode(node.right, newNode);
                    }
                }
            }
        
            // In-order traversal
            inOrder(node) {
                if (node !== null) {
                    this.inOrder(node.left);
                    console.log(node.data);
                    this.inOrder(node.right);
                }
            }
        }
        
        // Using the binary tree
        const tree = new BinaryTree();
        tree.insert(10);
        tree.insert(5);
        tree.insert(20);
        tree.inOrder(tree.root); // Outputs: 5, 10, 20
        \`\`\``
              }
            ]
          },
          {
            title: "Basic Algorithms",
            content: `**Understanding Algorithms:** Algorithms are a set of instructions designed to perform a specific task or solve a problem. In programming, algorithms are implemented using various data structures and control flows.
      
      **Types of Algorithms:** Some common algorithm types include searching, sorting, and mathematical operations. Algorithms are often evaluated based on their time and space complexity.
      
      **Pseudo Code Representation:** Algorithms are often represented using pseudocode, which helps in visualizing their steps without worrying about the syntax of a particular programming language.
      
      **Implementing Algorithms in JavaScript:** JavaScript provides several built-in methods and functions that help in implementing algorithms, particularly for tasks like searching and sorting arrays.`,
            innersubtopics: [
              {
                title: "Understanding Algorithms",
                content: "An algorithm is a step-by-step procedure used for solving a problem or performing a task. It’s crucial to have a solid understanding of algorithms to improve the efficiency and performance of your programs.",
                example: `
      **Example of a Simple Algorithm:**
      Consider an algorithm to find the sum of two numbers.
      
      **Steps:**
      1. Take two numbers as input.
      2. Add the two numbers.
      3. Return the result.
      
      **Example Code:**
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Basic Algorithm Example</title>
      </head>
      <body>
          <script>
              function addTwoNumbers(a, b) {
                  return a + b;
              }
      
              console.log(addTwoNumbers(5, 3)); // Output: 8
          </script>
      </body>
      </html>`
              },
              {
                title: "Types of Algorithms",
                content: "There are various types of algorithms, each suited to different kinds of tasks. Here are a few important categories of algorithms:",
                example: `
      **Sorting Algorithms:** These algorithms arrange data in a particular order (e.g., ascending or descending). Common sorting algorithms include Bubble Sort, Merge Sort, and Quick Sort.
      
      **Searching Algorithms:** These are used to search for specific elements within a data structure. Popular ones include Linear Search and Binary Search.
      
      **Example Code (Bubble Sort):**
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Sorting Algorithm Example</title>
      </head>
      <body>
          <script>
              function bubbleSort(arr) {
                  let n = arr.length;
                  for (let i = 0; i < n-1; i++) {
                      for (let j = 0; j < n-i-1; j++) {
                          if (arr[j] > arr[j+1]) {
                              // Swap arr[j] and arr[j+1]
                              let temp = arr[j];
                              arr[j] = arr[j+1];
                              arr[j+1] = temp;
                          }
                      }
                  }
                  return arr;
              }
      
              const numbers = [5, 2, 9, 1, 5, 6];
              console.log(bubbleSort(numbers)); // Output: [1, 2, 5, 5, 6, 9]
          </script>
      </body>
      </html>`
              },
              {
                title: "Pseudo Code Representation",
                content: "Before writing actual code, algorithms are often described using pseudocode to visualize the step-by-step process. This helps break down complex problems into simpler parts.",
                example: `
      **Example Pseudo Code for Finding the Largest Number in an Array:**
      
      1. Initialize a variable max with the value of the first element in the array.
      2. Loop through the array.
      3. If the current element is greater than max, update max.
      4. Return max after the loop ends.
      
      **Corresponding JavaScript Code:**
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Pseudo Code Example</title>
      </head>
      <body>
          <script>
              function findMax(arr) {
                  let max = arr[0];
                  for (let i = 1; i < arr.length; i++) {
                      if (arr[i] > max) {
                          max = arr[i];
                      }
                  }
                  return max;
              }
      
              const numbers = [1, 3, 7, 2, 8];
              console.log(findMax(numbers)); // Output: 8
          </script>
      </body>
      </html>`
              },
              {
                title: "Implementing Algorithms in JavaScript",
                content: "JavaScript provides several built-in methods to help implement algorithms, particularly for arrays and strings. Below is an example of a searching algorithm using JavaScript.",
                example: `
      **Linear Search:** This algorithm checks each element of the array until the target element is found.
      
      **Example Code:**
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Algorithm Implementation Example</title>
      </head>
      <body>
          <script>
              function linearSearch(arr, target) {
                  for (let i = 0; i < arr.length; i++) {
                      if (arr[i] === target) {
                          return i;
                      }
                  }
                  return -1; // Target not found
              }
      
              const numbers = [10, 20, 30, 40, 50];
              console.log(linearSearch(numbers, 30)); // Output: 2
          </script>
      </body>
      </html>`
              }
            ]
          },
          {
            title: "Time and Space Complexity",
            content: `**Time Complexity:** Time complexity refers to the computational time that an algorithm takes to complete based on the input size. Common time complexities include O(1), O(log n), O(n), O(n^2), and O(2^n), each representing how the runtime grows as the input size increases.
    
    **Space Complexity:** Space complexity measures the amount of memory an algorithm needs to run as the input size increases. It includes both the space required by the inputs and the auxiliary space (extra space used by the algorithm).
    
    **Trade-offs:** Often, there are trade-offs between time and space complexity. For example, improving the time complexity may require more memory, and optimizing memory usage may slow down the runtime.
    
    **Big-O Notation:** Big-O notation is used to describe the upper bound of time and space complexity, focusing on the worst-case scenario. It simplifies the complexity analysis by focusing on the dominant term.`,
            innersubtopics: [
              {
                title: "Time Complexity",
                content: "Time complexity describes how the runtime of an algorithm grows as the input size increases. Understanding this helps in determining how efficiently an algorithm will scale.",
                example: `
    **O(1):** Constant time, the runtime does not change with the size of the input.
    **O(n):** Linear time, where the runtime grows linearly with the input size.
    **O(n^2):** Quadratic time, where the runtime grows exponentially as the input size increases.
    
    **Example Code:**
    \`\`\`js
    // O(1) - Constant time
    function accessFirstElement(arr) {
        return arr[0]; // Always takes constant time
    }
    
    // O(n) - Linear time
    function sumArray(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]; // The runtime grows with the input size
        }
        return sum;
    }
    
    // O(n^2) - Quadratic time
    function printPairs(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                console.log(arr[i], arr[j]); // Nested loops lead to quadratic time
            }
        }
    }
    \`\`\``
              },
              {
                title: "Space Complexity",
                content: "Space complexity refers to the amount of memory used by an algorithm in terms of input size. It's important to consider both the input space and any additional auxiliary space used.",
                example: `
    **O(1):** Constant space, where the algorithm uses a fixed amount of memory regardless of the input size.
    **O(n):** Linear space, where the memory usage grows linearly with the input size.
    
    **Example Code:**
    \`\`\`js
    // O(1) - Constant space
    function checkFirstElement(arr) {
        if (arr[0] === 0) {
            return true;
        }
        return false; // The space required does not depend on input size
    }
    
    // O(n) - Linear space
    function createArray(n) {
        let arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(i); // Memory usage grows with the input size
        }
        return arr;
    }
    \`\`\``
              },
              {
                title: "Trade-offs Between Time and Space Complexity",
                content: "In algorithm design, there are often trade-offs between time and space complexity. Optimizing one might increase the other. Striking a balance is essential depending on the use case.",
                example: `
    **Time-Space Trade-off:** If an algorithm has a higher time complexity but low space complexity, it might take longer to run but will use less memory. Conversely, using extra memory (space) can often lead to faster computations.
    
    **Example Code:**
    \`\`\`js
    // Time-space trade-off
    function fibonacci(n) {
        if (n <= 1) return n;
        
        // Higher space complexity, but faster (O(n) time and space)
        let fib = [0, 1];
        for (let i = 2; i <= n; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }
        return fib[n];
    }
    
    // Lower space complexity, but slower (O(n) time, O(1) space)
    function fibonacciOptimized(n) {
        if (n <= 1) return n;
        
        let a = 0, b = 1;
        for (let i = 2; i <= n; i++) {
            let temp = a + b;
            a = b;
            b = temp;
        }
        return b;
    }
    \`\`\``
              },
              {
                title: "Big-O Notation",
                content: "Big-O notation provides an abstract measure of the time and space complexity of an algorithm, particularly focusing on the worst-case scenario. It's used to describe the upper limit of the growth rate of an algorithm's runtime or space usage.",
                example: `
    **Big-O Example:**
    
    - **O(1):** No matter how large the input, the algorithm takes the same amount of time or space.
    - **O(n):** The performance grows linearly with the input size.
    - **O(n^2):** Performance grows quadratically as the input size increases.
    
    **Example Code:**
    \`\`\`js
    // O(1) - Constant time
    function checkIfEven(n) {
        return n % 2 === 0; // Constant time operation
    }
    
    // O(n) - Linear time
    function printElements(arr) {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]); // Time grows with the size of the array
        }
    }
    
    // O(n^2) - Quadratic time
    function printAllPairs(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                console.log(arr[i], arr[j]); // Nested loops lead to quadratic growth
            }
        }
    }
    \`\`\``
              }
            ]
          },
          {
            title: "Implementing Basic Data Structures and Algorithms",
            content: `**Selecting Elements:** In the context of algorithms and data structures, selecting elements can be thought of as accessing data in various structures like arrays, linked lists, or trees. JavaScript provides methods to retrieve and manipulate data from these structures using methods like 'getElementById', 'querySelector', and 'getElementsByClassName'.
  
  **Modifying Elements:** Modifying elements in algorithms often involves altering the state of data structures, like updating the value at a specific index in an array or node in a tree. JavaScript allows you to modify the content, attributes, and styles of elements dynamically, similar to updating data structures during algorithm execution.
  
  **Event Handling:** In algorithm implementation, event handling can be associated with triggering actions or functions when specific conditions are met, like sorting an array or finding an element in a list. JavaScript's 'addEventListener' method can be used to execute algorithms in response to user input, such as clicks or keyboard events.
  
  **Creating and Removing Elements:** Creating and removing elements dynamically in data structures is essential in algorithms, especially in tasks like managing linked lists or trees. JavaScript provides methods like 'createElement', 'appendChild', and 'removeChild' to perform such tasks, similar to adding or deleting nodes in a tree or list.`,
            innersubtopics: [
              {
                title: "Selecting Elements (Accessing Data)",
                content: "In data structures, accessing elements is the first step in many algorithms. JavaScript provides several methods for selecting elements in the DOM, similar to accessing elements in arrays or lists.",
                example: `
  **getElementById:** Accesses an element by its unique ID, similar to accessing an array element by index.
  **querySelector:** Selects the first element matching a CSS selector, akin to finding the first match in a list.
  **getElementsByClassName:** Retrieves all elements with a specific class name, much like filtering data in an array.
  
  **Example Code:**
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Data Access Example</title>
  </head>
  <body>
      <div id="dataElement" class="dataNode">Node Data</div>
      <script>
          const elementById = document.getElementById('dataElement');
          const elementByClass = document.getElementsByClassName('dataNode')[0];
          const elementByQuery = document.querySelector('#dataElement');
  
          console.log(elementById.innerHTML); // Node Data
          console.log(elementByClass.innerHTML); // Node Data
          console.log(elementByQuery.innerHTML); // Node Data
      </script>
  </body>
  </html>`
              },
              {
                title: "Modifying Elements (Updating Data Structures)",
                content: "In algorithms, modifying elements can be compared to updating nodes in a data structure. You might update an array index, modify a linked list node, or adjust a binary tree node during algorithm execution.",
                example: `
  **innerHTML:** Updates the content inside an element, similar to updating a value in a data structure.
  **setAttribute:** Modifies an attribute of an element, akin to changing properties in a node or object.
  **style:** Changes the appearance of an element, analogous to marking nodes as visited or processed during an algorithm.
  
  **Example Code:**
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Data Structure Update Example</title>
  </head>
  <body>
      <div id="dataNode">Original Data</div>
      <script>
          const element = document.getElementById('dataNode');
          element.innerHTML = 'Updated Data'; // Updates the content
          element.setAttribute('data-status', 'processed'); // Adds or updates an attribute
          element.style.color = 'green'; // Marks the node visually as processed
      </script>
  </body>
  </html>`
              },
              {
                title: "Event Handling (Triggering Algorithms)",
                content: "In data structure projects, events can trigger algorithm execution, like sorting an array or searching for a value. Event handling allows you to execute these algorithms based on user interaction.",
                example: `
  **addEventListener:** Triggers an algorithm when an event occurs.
  **Event Object:** Provides information about the event, which can be used to determine which data structure operation to execute.
  
  **Example Code:**
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Event Driven Algorithm Example</title>
  </head>
  <body>
      <button id="sortArray">Sort Array</button>
      <script>
          const button = document.getElementById('sortArray');
          button.addEventListener('click', function() {
              const array = [5, 3, 8, 1, 2];
              array.sort((a, b) => a - b);
              alert('Array Sorted: ' + array);
          });
      </script>
  </body>
  </html>`
              },
              {
                title: "Creating and Removing Elements (Managing Data Structures)",
                content: "In algorithms, adding and removing elements is common when dealing with dynamic data structures like linked lists, trees, or queues. You can think of creating and removing DOM elements in JavaScript as similar to managing nodes in a data structure.",
                example: `
  **createElement:** Creates new elements dynamically, similar to creating nodes in a data structure.
  **appendChild:** Adds an element to a parent, like inserting a new node into a linked list or tree.
  **removeChild:** Removes an element, analogous to deleting a node from a data structure.
  
  **Example Code:**
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Dynamic Data Structure Example</title>
  </head>
  <body>
      <div id="listContainer"></div>
      <button id="addNode">Add Node</button>
      <button id="removeNode">Remove Node</button>
      <script>
          const container = document.getElementById('listContainer');
          const addButton = document.getElementById('addNode');
          const removeButton = document.getElementById('removeNode');
  
          addButton.addEventListener('click', function() {
              const newNode = document.createElement('div');
              newNode.textContent = 'Node ' + (container.childElementCount + 1);
              container.appendChild(newNode);
          });
  
          removeButton.addEventListener('click', function() {
              if (container.firstChild) {
                  container.removeChild(container.firstChild);
              }
          });
      </script>
  </body>
  </html>`
              }
            ]
          }
        ]
      }
    }
  ],
  14: [
    {
      id: 14,
      name: 'Advanced Data Structure',
      unit: 'Unit 14',
      status: 'Completed',
      description: {
        overview: 'Advanced Data Structures involve complex organization methods like trees, graphs, and hash tables to efficiently manage and process large volumes of data.',
        subtopics: [
          {
            title: "Trees and Graphs",
            content: `**Trees:** Trees are hierarchical data structures consisting of nodes connected by edges. Each tree has a root node and child nodes, forming a structure where each node can have multiple children but only one parent.
        
        **Graphs:** Graphs are collections of nodes (vertices) connected by edges. Unlike trees, graphs can have cycles and can be either directed or undirected, representing various relationships and structures.
        
        **Tree Operations:** Common operations on trees include traversals (pre-order, in-order, post-order), insertion, deletion, and searching for elements.
        
        **Graph Operations:** Operations on graphs include traversals (BFS and DFS), shortest path algorithms (Dijkstra's, Bellman-Ford), and cycle detection.`,
            innersubtopics: [
              {
                title: "Trees",
                content: "A tree is a fundamental data structure that represents hierarchical relationships. Key concepts include:",
                example: `
        **Binary Tree:** A tree where each node has at most two children.
        **Binary Search Tree (BST):** A binary tree where the left child contains nodes with values less than the parent node, and the right child contains nodes with values greater than the parent node.
        
        **Example Code:**
        class TreeNode {
            constructor(value) {
                this.value = value;
                this.left = null;
                this.right = null;
            }
        }
        
        class BinaryTree {
            constructor() {
                this.root = null;
            }
        
            insert(value) {
                const newNode = new TreeNode(value);
                if (!this.root) {
                    this.root = newNode;
                    return;
                }
                let current = this.root;
                while (true) {
                    if (value < current.value) {
                        if (!current.left) {
                            current.left = newNode;
                            return;
                        }
                        current = current.left;
                    } else {
                        if (!current.right) {
                            current.right = newNode;
                            return;
                        }
                        current = current.right;
                    }
                }
            }
        }
        
        const tree = new BinaryTree();
        tree.insert(10);
        tree.insert(5);
        tree.insert(15);
        console.log(tree); // Displays the structure of the binary tree
        `
              },
              {
                title: "Graphs",
                content: "Graphs are versatile data structures used to represent various relationships. They can be directed or undirected and can include cycles or be acyclic.",
                example: `
        **Adjacency List:** A common representation of graphs where each node points to a list of adjacent nodes.
        **Adjacency Matrix:** A 2D array where the cell at (i, j) indicates whether there is an edge between nodes i and j.
        
        **Example Code:**
        class Graph {
            constructor() {
                this.adjacencyList = {};
            }
        
            addVertex(vertex) {
                if (!this.adjacencyList[vertex]) {
                    this.adjacencyList[vertex] = [];
                }
            }
        
            addEdge(vertex1, vertex2) {
                if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
                    this.adjacencyList[vertex1].push(vertex2);
                    this.adjacencyList[vertex2].push(vertex1); // For undirected graph
                }
            }
        }
        
        const graph = new Graph();
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addEdge('A', 'B');
        console.log(graph.adjacencyList); // Displays the adjacency list of the graph
        `
              },
              {
                title: "Tree Traversals",
                content: "Traversing a tree allows you to visit all nodes in a specific order. Common traversal methods include:",
                example: `
        **Pre-order Traversal:** Visits the root node first, then recursively visits the left and right subtrees.
        **In-order Traversal:** Visits the left subtree first, then the root node, and finally the right subtree.
        **Post-order Traversal:** Visits the left and right subtrees first, then the root node.
        
        **Example Code:**
        class TreeNode {
            constructor(value) {
                this.value = value;
                this.left = null;
                this.right = null;
            }
        }
        
        class BinaryTree {
            constructor() {
                this.root = null;
            }
        
            preOrder(node) {
                if (node) {
                    console.log(node.value); // Process the root node
                    this.preOrder(node.left); // Recursively process left subtree
                    this.preOrder(node.right); // Recursively process right subtree
                }
            }
        
            inOrder(node) {
                if (node) {
                    this.inOrder(node.left); // Recursively process left subtree
                    console.log(node.value); // Process the root node
                    this.inOrder(node.right); // Recursively process right subtree
                }
            }
        
            postOrder(node) {
                if (node) {
                    this.postOrder(node.left); // Recursively process left subtree
                    this.postOrder(node.right); // Recursively process right subtree
                    console.log(node.value); // Process the root node
                }
            }
        }
        `
              },
              {
                title: "Graph Traversals",
                content: "Traversing graphs allows you to explore nodes and edges. Key traversal algorithms include:",
                example: `
        **Breadth-First Search (BFS):** Explores nodes level by level, starting from the source node.
        **Depth-First Search (DFS):** Explores as far down a branch as possible before backtracking.
        
        **Example Code:**
        class Graph {
            constructor() {
                this.adjacencyList = {};
            }
        
            addVertex(vertex) {
                if (!this.adjacencyList[vertex]) {
                    this.adjacencyList[vertex] = [];
                }
            }
        
            addEdge(vertex1, vertex2) {
                if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
                    this.adjacencyList[vertex1].push(vertex2);
                    this.adjacencyList[vertex2].push(vertex1); // For undirected graph
                }
            }
        
            bfs(start) {
                const queue = [start];
                const visited = new Set();
                visited.add(start);
        
                while (queue.length > 0) {
                    const vertex = queue.shift();
                    console.log(vertex);
        
                    for (const neighbor of this.adjacencyList[vertex]) {
                        if (!visited.has(neighbor)) {
                            visited.add(neighbor);
                            queue.push(neighbor);
                        }
                    }
                }
            }
        
            dfs(start) {
                const stack = [start];
                const visited = new Set();
                visited.add(start);
        
                while (stack.length > 0) {
                    const vertex = stack.pop();
                    console.log(vertex);
        
                    for (const neighbor of this.adjacencyList[vertex]) {
                        if (!visited.has(neighbor)) {
                            visited.add(neighbor);
                            stack.push(neighbor);
                        }
                    }
                }
            }
        }
        `
              }
            ]
          },
          {
            title: "Advanced Algorithms and Data Structures",
            content: `**Selecting Data Structures:** In advanced algorithms, choosing the appropriate data structure is crucial. Data structures such as trees, graphs, and hash tables are commonly used for optimizing performance and managing complex data efficiently.
      
      **Modifying Data Structures:** Advanced algorithms often involve modifying data structures, including operations like inserting, deleting, and updating elements. Methods for balancing trees, rehashing hash tables, and updating graphs are essential for maintaining efficiency.
      
      **Algorithmic Complexity:** Understanding the time and space complexity of algorithms is critical in advanced data structures. Analyzing how operations affect performance helps in selecting and designing algorithms that handle large datasets effectively.
      
      **Dynamic Data Management:** Advanced algorithms often require dynamic updates to data structures, such as adding or removing nodes in trees, updating graph weights, or resizing hash tables. These operations ensure that data remains consistent and accessible as the application evolves.`,
            innersubtopics: [
              {
                title: "Selecting Data Structures",
                content: "Choosing the right data structure for a specific problem can significantly impact the performance of an algorithm. Here are some advanced data structures:",
                example: `
      **Binary Search Tree (BST):** Efficient for dynamic set operations like insertion, deletion, and lookup.
      **Graph:** Useful for representing networks, such as social networks or routing paths.
      **Hash Table:** Provides fast access to data using hash functions.
      
      **Example Code:**
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Data Structure Selection Example</title>
      </head>
      <body>
          <script>
              class Node {
                  constructor(value) {
                      this.value = value;
                      this.left = null;
                      this.right = null;
                  }
              }
      
              class BinarySearchTree {
                  constructor() {
                      this.root = null;
                  }
      
                  insert(value) {
                      const newNode = new Node(value);
                      if (this.root === null) {
                          this.root = newNode;
                      } else {
                          this.insertNode(this.root, newNode);
                      }
                  }
      
                  insertNode(node, newNode) {
                      if (newNode.value < node.value) {
                          if (node.left === null) {
                              node.left = newNode;
                          } else {
                              this.insertNode(node.left, newNode);
                          }
                      } else {
                          if (node.right === null) {
                              node.right = newNode;
                          } else {
                              this.insertNode(node.right, newNode);
                          }
                      }
                  }
              }
      
              const bst = new BinarySearchTree();
              bst.insert(5);
              bst.insert(3);
              bst.insert(7);
              console.log(bst);
          </script>
      </body>
      </html>`
              },
              {
                title: "Modifying Data Structures",
                content: "Advanced algorithms often involve modifying data structures to maintain performance. Here’s how you can perform various modifications:",
                example: `
      **Balancing a Binary Search Tree:** Ensures that the tree remains balanced for efficient operations.
      **Rehashing a Hash Table:** Involves resizing the hash table and rehashing existing elements when the load factor changes.
      **Updating Graph Weights:** Adjusting weights of edges in a graph for algorithms like Dijkstra's or Bellman-Ford.
      
      **Example Code:**
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Data Structure Modification Example</title>
      </head>
      <body>
          <script>
              class Graph {
                  constructor() {
                      this.adjacencyList = {};
                  }
      
                  addVertex(vertex) {
                      if (!this.adjacencyList[vertex]) {
                          this.adjacencyList[vertex] = [];
                      }
                  }
      
                  addEdge(vertex1, vertex2) {
                      if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
                          this.adjacencyList[vertex1].push(vertex2);
                          this.adjacencyList[vertex2].push(vertex1);
                      }
                  }
      
                  removeEdge(vertex1, vertex2) {
                      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
                      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
                  }
      
                  removeVertex(vertex) {
                      while (this.adjacencyList[vertex].length) {
                          const adjacentVertex = this.adjacencyList[vertex].pop();
                          this.removeEdge(vertex, adjacentVertex);
                      }
                      delete this.adjacencyList[vertex];
                  }
              }
      
              const graph = new Graph();
              graph.addVertex('A');
              graph.addVertex('B');
              graph.addEdge('A', 'B');
              graph.removeEdge('A', 'B');
              console.log(graph);
          </script>
      </body>
      </html>`
              },
              {
                title: "Algorithmic Complexity",
                content: "Analyzing the complexity of algorithms helps in optimizing performance and resource usage. Here’s how to approach algorithmic complexity:",
                example: `
      **Big O Notation:** Describes the upper bound of an algorithm's time or space complexity.
      **Space Complexity:** Measures the amount of memory an algorithm uses.
      **Time Complexity:** Measures the amount of time an algorithm takes to complete.
      
      **Example Code:**
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Algorithm Complexity Example</title>
      </head>
      <body>
          <script>
              // Example of O(n) time complexity
              function linearSearch(arr, target) {
                  for (let i = 0; i < arr.length; i++) {
                      if (arr[i] === target) {
                          return i;
                      }
                  }
                  return -1;
              }
      
              // Example of O(log n) time complexity (Binary Search)
              function binarySearch(arr, target) {
                  let left = 0;
                  let right = arr.length - 1;
                  while (left <= right) {
                      const mid = Math.floor((left + right) / 2);
                      if (arr[mid] === target) {
                          return mid;
                      } else if (arr[mid] < target) {
                          left = mid + 1;
                      } else {
                          right = mid - 1;
                      }
                  }
                  return -1;
              }
      
              console.log(linearSearch([1, 2, 3, 4, 5], 3)); // 2
              console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
          </script>
      </body>
      </html>`
              },
              {
                title: "Dynamic Data Management",
                content: "Managing data dynamically involves performing operations such as adding or removing elements, and updating data structures on-the-fly:",
                example: `
      **Resizing a Hash Table:** Expanding or shrinking the table size based on the load factor.
      **Balancing a Tree:** Rotating nodes to keep the tree balanced for efficient operations.
      **Updating Graph Edges:** Modifying the weights or connections in a graph as needed.
      
      **Example Code:**
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Dynamic Data Management Example</title>
      </head>
      <body>
          <script>
              class HashTable {
                  constructor(size = 10) {
                      this.size = size;
                      this.table = new Array(size);
                  }
      
                  hash(key) {
                      let hash = 0;
                      for (let i = 0; i < key.length; i++) {
                          hash = (hash + key.charCodeAt(i) * i) % this.size;
                      }
                      return hash;
                  }
      
                  set(key, value) {
                      const index = this.hash(key);
                      if (!this.table[index]) {
                          this.table[index] = [];
                      }
                      this.table[index].push([key, value]);
                  }
      
                  get(key) {
                      const index = this.hash(key);
                      if (this.table[index]) {
                          for (let [storedKey, value] of this.table[index]) {
                              if (storedKey === key) {
                                  return value;
                              }
                          }
                      }
                      return undefined;
                  }
              }
      
              const hashTable = new HashTable();
              hashTable.set('name', 'Alice');
              hashTable.set('age', 30);
              console.log(hashTable.get('name')); // Alice
              console.log(hashTable.get('age')); // 30
          </script>
      </body>
      </html>`
              }
            ]
          },
          {
            title: "Heaps and Hashing",
            content: `**Heaps:** A heap is a specialized tree-based data structure that satisfies the heap property. It can be a max heap (where each parent node is greater than or equal to its child nodes) or a min heap (where each parent node is less than or equal to its child nodes). Heaps are commonly used to implement priority queues.
    
    **Hashing:** Hashing is a technique used to map data to a fixed-size table using a hash function. This allows for efficient data retrieval, insertion, and deletion operations. Hash tables are the data structure that uses hashing to achieve constant time complexity for these operations, assuming a good hash function and low collision rate.`,
            innersubtopics: [
              {
                title: "Heaps",
                content: "Heaps are used to maintain a partial order in a set of elements. They are often implemented as binary heaps and are useful for algorithms that repeatedly access the smallest or largest element, such as heap sort and priority queues.",
                example: `
    **Max Heap:** A binary heap where the value of each node is greater than or equal to the values of its children.
    
    **Min Heap:** A binary heap where the value of each node is less than or equal to the values of its children.
    
    **Example Code for Max Heap:**
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Heap Example</title>
    </head>
    <body>
        <script>
            class MaxHeap {
                constructor() {
                    this.heap = [];
                }
    
                insert(value) {
                    this.heap.push(value);
                    this.bubbleUp();
                }
    
                bubbleUp() {
                    let index = this.heap.length - 1;
                    const element = this.heap[index];
                    while (index > 0) {
                        let parentIndex = Math.floor((index - 1) / 2);
                        let parent = this.heap[parentIndex];
                        if (element <= parent) break;
                        this.heap[index] = parent;
                        this.heap[parentIndex] = element;
                        index = parentIndex;
                    }
                }
    
                extractMax() {
                    const max = this.heap[0];
                    const end = this.heap.pop();
                    if (this.heap.length > 0) {
                        this.heap[0] = end;
                        this.sinkDown();
                    }
                    return max;
                }
    
                sinkDown() {
                    let index = 0;
                    const length = this.heap.length;
                    const element = this.heap[0];
                    while (true) {
                        let leftChildIndex = 2 * index + 1;
                        let rightChildIndex = 2 * index + 2;
                        let leftChild, rightChild;
                        let swap = null;
    
                        if (leftChildIndex < length) {
                            leftChild = this.heap[leftChildIndex];
                            if (leftChild > element) swap = leftChildIndex;
                        }
                        if (rightChildIndex < length) {
                            rightChild = this.heap[rightChildIndex];
                            if (
                                (swap === null && rightChild > element) ||
                                (swap !== null && rightChild > leftChild)
                            )
                                swap = rightChildIndex;
                        }
                        if (swap === null) break;
                        this.heap[index] = this.heap[swap];
                        this.heap[swap] = element;
                        index = swap;
                    }
                }
            }
    
            const maxHeap = new MaxHeap();
            maxHeap.insert(10);
            maxHeap.insert(20);
            maxHeap.insert(5);
            console.log(maxHeap.extractMax()); // 20
        </script>
    </body>
    </html>`
              },
              {
                title: "Hashing",
                content: "Hashing involves using a hash function to map data to a fixed-size table, known as a hash table. This technique helps in achieving efficient data operations such as retrieval, insertion, and deletion.",
                example: `
    **Hash Function:** A function that converts an input (or 'key') into a fixed-size string of bytes, typically an integer.
    
    **Collision Resolution:** Techniques like chaining (using linked lists) or open addressing (probing) are used to handle situations where multiple keys hash to the same index.
    
    **Example Code:**
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hashing Example</title>
    </head>
    <body>
        <script>
            class HashTable {
                constructor(size) {
                    this.size = size;
                    this.table = new Array(size);
                }
    
                hash(key) {
                    let hash = 0;
                    for (let i = 0; i < key.length; i++) {
                        hash = (hash << 5) + hash + key.charCodeAt(i);
                    }
                    return hash % this.size;
                }
    
                set(key, value) {
                    const index = this.hash(key);
                    if (!this.table[index]) {
                        this.table[index] = [];
                    }
                    this.table[index].push([key, value]);
                }
    
                get(key) {
                    const index = this.hash(key);
                    if (this.table[index]) {
                        for (let i = 0; i < this.table[index].length; i++) {
                            if (this.table[index][i][0] === key) {
                                return this.table[index][i][1];
                            }
                        }
                    }
                    return undefined;
                }
    
                delete(key) {
                    const index = this.hash(key);
                    if (this.table[index]) {
                        for (let i = 0; i < this.table[index].length; i++) {
                            if (this.table[index][i][0] === key) {
                                const value = this.table[index][i][1];
                                this.table[index].splice(i, 1);
                                return value;
                            }
                        }
                    }
                    return undefined;
                }
            }
    
            const hashTable = new HashTable(10);
            hashTable.set('name', 'Alice');
            hashTable.set('age', 25);
            console.log(hashTable.get('name')); // Alice
            console.log(hashTable.delete('age')); // 25
            console.log(hashTable.get('age')); // undefined
        </script>
    </body>
    </html>`
              }
            ]
          },
          {
            title: "Advanced Data Structures Implementation",
            content: `**Selecting Elements:** JavaScript provides methods to select and manipulate DOM elements, which is foundational for implementing advanced data structures in web applications. Methods such as 'getElementById', 'querySelector', and 'getElementsByClassName' are utilized to interact with UI components that represent complex data structures.
  
  **Modifying Elements:** In an advanced data structures project, manipulating elements allows you to dynamically update visual representations of data structures. Using properties and methods like 'innerHTML', 'setAttribute', and 'style' helps in reflecting changes in data structures, such as trees or graphs, directly in the UI.
  
  **Event Handling:** Handling events is critical for interactive visualization and manipulation of advanced data structures. JavaScript's 'addEventListener' method is used to manage user interactions, such as node selection or edge creation, which are essential for manipulating data structures.
  
  **Creating and Removing Elements:** For visualizing data structures, creating and removing elements dynamically is important. Methods like 'createElement', 'appendChild', and 'removeChild' are used to update the representation of data structures, such as adding new nodes or removing them from a tree or graph visualization.`,
            innersubtopics: [
              {
                title: "Selecting Elements",
                content: "In projects involving advanced data structures, selecting elements is crucial for rendering and interacting with complex structures. JavaScript provides several methods to access and manipulate DOM elements that represent these structures:",
                example: `
  **getElementById:** Selects an element by its unique ID, useful for targeting specific data nodes.
  **querySelector:** Selects the first element that matches a CSS selector, useful for finding elements in a complex structure.
  **getElementsByClassName:** Selects all elements with a given class name, useful for bulk operations on multiple nodes.
  
  **Example Code:**
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Advanced Data Structures Example</title>
  </head>
  <body>
      <div id="dataNode" class="node">Data Node</div>
      <script>
          const elementById = document.getElementById('dataNode');
          const elementByClass = document.getElementsByClassName('node')[0];
          const elementByQuery = document.querySelector('#dataNode');
  
          console.log(elementById.innerHTML); // Data Node
          console.log(elementByClass.innerHTML); // Data Node
          console.log(elementByQuery.innerHTML); // Data Node
      </script>
  </body>
  </html>`
              },
              {
                title: "Modifying Elements",
                content: "Modifying elements allows you to update the visualization of advanced data structures. You can dynamically adjust attributes and styles to reflect changes in data structures:",
                example: `
  **innerHTML:** Changes the HTML content inside an element, useful for updating node values or labels.
  **setAttribute:** Modifies attributes, such as adding data attributes for metadata or state.
  **style:** Adjusts CSS styles to visually differentiate elements, such as changing colors or sizes.
  
  **Example Code:**
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Advanced Modification Example</title>
  </head>
  <body>
      <div id="dataNode">Original Node</div>
      <script>
          const element = document.getElementById('dataNode');
          element.innerHTML = 'Updated Node'; // Updates node content
          element.setAttribute('data-id', 'node1'); // Adds a unique identifier
          element.style.backgroundColor = 'lightblue'; // Changes node background color
      </script>
  </body>
  </html>`
              },
              {
                title: "Event Handling",
                content: "Event handling is essential for interactive manipulation of data structures. You can use JavaScript to respond to user actions such as adding or deleting nodes:",
                example: `
  **addEventListener:** Attaches event handlers to manage interactions like node selection or edge creation.
  **Event Object:** Provides details about the event, including target elements and event types.
  
  **Example Code:**
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Event Handling for Data Structures</title>
  </head>
  <body>
      <button id="addNode">Add Node</button>
      <script>
          const button = document.getElementById('addNode');
          button.addEventListener('click', function(event) {
              alert('Add Node button clicked!');
          });
      </script>
  </body>
  </html>`
              },
              {
                title: "Creating and Removing Elements",
                content: "Creating and removing elements dynamically helps in visualizing and manipulating data structures. JavaScript provides methods to update the DOM based on data structure changes:",
                example: `
  **createElement:** Creates new elements to represent nodes or edges in a data structure.
  **appendChild:** Adds new elements to the DOM, useful for inserting new nodes into a visualization.
  **removeChild:** Removes elements from the DOM, useful for deleting nodes or edges.
  
  **Example Code:**
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Dynamic Data Structures</title>
  </head>
  <body>
      <div id="structureContainer"></div>
      <button id="addNode">Add Node</button>
      <button id="removeNode">Remove Node</button>
      <script>
          const container = document.getElementById('structureContainer');
          const addButton = document.getElementById('addNode');
          const removeButton = document.getElementById('removeNode');
  
          addButton.addEventListener('click', function() {
              const newElement = document.createElement('div');
              newElement.textContent = 'New Node';
              newElement.className = 'node';
              container.appendChild(newElement);
          });
  
          removeButton.addEventListener('click', function() {
              if (container.firstChild) {
                  container.removeChild(container.firstChild);
              }
          });
      </script>
  </body>
  </html>`
              }
            ]
          }

        ]
      }
    }
  ],
  15: [
    {
      id: 15,
      name: 'Introduction to AWS',
      unit: 'Unit 15',
      status: 'Completed',
      description: {
        overview: 'Introduction to AWS provides a foundational understanding of Amazon Web Services, focusing on its cloud computing solutions, services, and deployment strategies.',
        subtopics: [
          {
            title: "AWS Fundamentals",
            content: `**Introduction to AWS:** Amazon Web Services (AWS) provides a range of cloud computing services that include storage, compute power, and networking capabilities. Understanding how to interact with AWS services is essential for cloud-based applications.
        
        **AWS SDKs and APIs:** AWS provides SDKs (Software Development Kits) and APIs (Application Programming Interfaces) for various programming languages to interact with its services. This enables developers to manage resources and perform operations programmatically.
        
        **Managing AWS Resources:** AWS offers tools for creating, managing, and monitoring cloud resources. Key services include Amazon EC2 for virtual servers, Amazon S3 for object storage, and AWS IAM for identity and access management.
        
        **Event Handling and Automation:** AWS supports event-driven architecture and automation through services like AWS Lambda and Amazon CloudWatch. This allows for serverless computing and automated responses to system events.`,
            innersubtopics: [
              {
                title: "Introduction to AWS",
                content: "AWS provides a comprehensive suite of cloud services that cater to various computing needs. Here's how you can start exploring AWS:",
                example: `
        **Amazon EC2:** Provides scalable virtual servers in the cloud.
        **Amazon S3:** Offers scalable object storage.
        **AWS IAM:** Manages user permissions and access to AWS services.
        
        **Example Code:**
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>AWS Introduction Example</title>
        </head>
        <body>
            <h1>Welcome to AWS Fundamentals</h1>
            <p>Explore various AWS services and their capabilities.</p>
            <script>
                // AWS SDK example initialization (Node.js)
                const AWS = require('aws-sdk');
                AWS.config.update({ region: 'us-east-1' });
        
                const s3 = new AWS.S3();
                console.log('S3 Service Initialized');
            </script>
        </body>
        </html>`
              },
              {
                title: "AWS SDKs and APIs",
                content: "AWS SDKs and APIs allow you to interact with AWS services programmatically. Here's how to use them:",
                example: `
        **AWS SDK for JavaScript:** Provides methods to interact with AWS services from JavaScript applications.
        **AWS CLI:** Command-line tool to interact with AWS services.
        
        **Example Code:**
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>AWS SDK Example</title>
        </head>
        <body>
            <h1>Using AWS SDK for JavaScript</h1>
            <script>
                // Initialize AWS SDK (browser version)
                AWS.config.update({ region: 'us-west-2' });
                AWS.config.credentials = new AWS.Credentials('accessKeyId', 'secretAccessKey');
        
                const s3 = new AWS.S3();
                s3.listBuckets(function(err, data) {
                    if (err) {
                        console.log('Error:', err);
                    } else {
                        console.log('Bucket List:', data.Buckets);
                    }
                });
            </script>
        </body>
        </html>`
              },
              {
                title: "Managing AWS Resources",
                content: "AWS offers various tools to manage cloud resources. Learn how to utilize these services for your needs:",
                example: `
        **AWS Management Console:** Web-based interface for managing AWS resources.
        **AWS CloudFormation:** Tool for defining and provisioning AWS infrastructure using code.
        
        **Example Code:**
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>AWS Resource Management Example</title>
        </head>
        <body>
            <h1>Managing AWS Resources</h1>
            <script>
                // Example of creating an S3 bucket using AWS CLI
                // Command: aws s3 mb s3://my-new-bucket --region us-west-2
            </script>
        </body>
        </html>`
              },
              {
                title: "Event Handling and Automation",
                content: "AWS supports event-driven architecture and automation for efficient cloud operations. Here's how to utilize these features:",
                example: `
        **AWS Lambda:** Executes code in response to events without provisioning or managing servers.
        **Amazon CloudWatch:** Monitors AWS resources and applications, and triggers alarms based on metrics.
        
        **Example Code:**
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>AWS Event Handling Example</title>
        </head>
        <body>
            <h1>Event Handling with AWS Lambda</h1>
            <script>
                // AWS Lambda function example (Node.js)
                exports.handler = async (event) => {
                    console.log('Event:', event);
                    return 'Lambda function executed successfully';
                };
            </script>
        </body>
        </html>`
              }
            ]
          },
          {
            title: "Core AWS Services",
            content: `**Selecting AWS Resources:** AWS provides methods to select and interact with various services. You can use tools such as the AWS Management Console, AWS CLI, and SDKs to manage and configure resources.
      
      **Modifying AWS Resources:** Once you've selected your AWS resources, you can modify their configurations, policies, and permissions. AWS provides interfaces and APIs for tasks such as updating instance types, modifying security groups, and configuring auto-scaling.
      
      **Event Handling in AWS:** AWS services support event-driven architectures. Services like AWS Lambda and Amazon SNS can be triggered by various events, such as S3 object uploads or DynamoDB changes, to execute code or send notifications.
      
      **Creating and Removing AWS Resources:** AWS allows you to create and delete resources programmatically or via the management console. Services like AWS CloudFormation and the AWS CLI can automate the provisioning and deprovisioning of resources.`,
            innersubtopics: [
              {
                title: "Selecting AWS Resources",
                content: "Selecting AWS resources is the first step in managing your cloud infrastructure. AWS provides several tools to access and manage resources:",
                example: `
      **AWS Management Console:** A web-based interface for managing AWS resources.
      **AWS CLI (Command Line Interface):** A tool for interacting with AWS services via the command line.
      **AWS SDKs (Software Development Kits):** Libraries for various programming languages to interact with AWS services.
      
      **Example Code:**
      # Using AWS CLI to list S3 buckets
      aws s3 ls
      
      # Using AWS SDK for JavaScript to list EC2 instances
      const AWS = require('aws-sdk');
      const ec2 = new AWS.EC2();
      ec2.describeInstances({}, (err, data) => {
          if (err) console.log(err, err.stack);
          else console.log(data);
      });
      `
              },
              {
                title: "Modifying AWS Resources",
                content: "Once you've selected AWS resources, you may need to modify their configurations and settings:",
                example: `
      **AWS Management Console:** Update instance types, adjust security group rules, or change resource configurations.
      **AWS CLI:** Use commands to modify resource attributes, such as updating EC2 instances or changing RDS database configurations.
      
      **Example Code:**
      # Using AWS CLI to modify an EC2 instance type
      aws ec2 modify-instance-attribute --instance-id i-1234567890abcdef0 --instance-type t2.medium
      
      # Using AWS SDK for Python (boto3) to update an S3 bucket's versioning status
      import boto3
      s3 = boto3.client('s3')
      s3.put_bucket_versioning(
          Bucket='my-bucket',
          VersioningConfiguration={
              'Status': 'Enabled'
          }
      )
      `
              },
              {
                title: "Event Handling in AWS",
                content: "AWS supports event-driven architectures for real-time processing and automation:",
                example: `
      **AWS Lambda:** Execute code in response to events from services like S3 or DynamoDB.
      **Amazon SNS (Simple Notification Service):** Publish notifications to topics that trigger Lambda functions or send messages.
      
      **Example Code:**
      # AWS Lambda function triggered by an S3 event
      exports.handler = async (event) => {
          console.log("Event:", JSON.stringify(event, null, 2));
          // Your code here
      };
      
      # Using AWS CLI to create an SNS topic
      aws sns create-topic --name my-topic
      `
              },
              {
                title: "Creating and Removing AWS Resources",
                content: "Managing AWS resources involves creating and deleting them based on your needs:",
                example: `
      **AWS CloudFormation:** Define and provision AWS infrastructure using configuration files.
      **AWS CLI:** Create or delete resources programmatically.
      
      **Example Code:**
      # Using AWS CLI to create an S3 bucket
      aws s3api create-bucket --bucket my-new-bucket --region us-west-2
      
      # Using AWS CLI to delete an EC2 instance
      aws ec2 terminate-instances --instance-ids i-1234567890abcdef0
      `
              }
            ]
          },
          {
            title: "Advanced AWS Services",
            content: `**Selecting AWS Services:** AWS provides a range of services for various needs. Key services include EC2 for compute capacity, S3 for object storage, and RDS for managed relational databases. AWS services can be accessed and managed using the AWS Management Console, AWS CLI, and SDKs.
    
    **Modifying AWS Resources:** Once you've selected your AWS resources, you can modify their configurations to suit your needs. This includes adjusting instance types, changing storage configurations, and updating security settings using the AWS Management Console or CLI.
    
    **Event Handling with AWS:** AWS services support event-driven architectures. For example, AWS Lambda can be triggered by events from other AWS services like S3, DynamoDB, and CloudWatch. This allows for automated responses and workflows based on specific triggers.
    
    **Creating and Removing AWS Resources:** AWS enables you to dynamically create and remove resources based on your application needs. Using services like CloudFormation, you can define and deploy infrastructure as code, managing resource creation and deletion through templates.`,
            innersubtopics: [
              {
                title: "Selecting AWS Services",
                content: "Selecting the appropriate AWS services is crucial for building robust solutions. AWS provides various services for different purposes:",
                example: `
    **EC2 (Elastic Compute Cloud):** Provides scalable compute capacity in the cloud.
    **S3 (Simple Storage Service):** Scalable object storage for backup, archiving, and big data.
    **RDS (Relational Database Service):** Managed relational databases for various database engines.
    
    **Example Code:**
    # To list all EC2 instances using AWS CLI
    aws ec2 describe-instances
    
    # To list all S3 buckets using AWS CLI
    aws s3 ls
    
    # To list all RDS instances using AWS CLI
    aws rds describe-db-instances`
              },
              {
                title: "Modifying AWS Resources",
                content: "Modifying AWS resources allows you to adjust configurations to meet your needs. Here’s how you can manage and modify resources:",
                example: `
    **Changing EC2 Instance Type:** Modify the instance type to adjust compute power.
    **Updating S3 Bucket Policies:** Modify bucket policies to control access.
    **Adjusting RDS Storage:** Change the storage type or size for a database instance.
    
    **Example Code:**
    # To modify an EC2 instance type using AWS CLI
    aws ec2 modify-instance-attribute --instance-id i-1234567890abcdef0 --instance-type t2.micro
    
    # To update an S3 bucket policy using AWS CLI
    aws s3api put-bucket-policy --bucket my-bucket --policy file://policy.json
    
    # To modify RDS instance storage using AWS CLI
    aws rds modify-db-instance --db-instance-identifier mydbinstance --allocated-storage 100`
              },
              {
                title: "Event Handling with AWS",
                content: "AWS supports event-driven architectures, allowing you to trigger functions and workflows based on specific events:",
                example: `
    **AWS Lambda:** Serverless compute service that runs code in response to events.
    **S3 Event Notifications:** Triggers Lambda functions or SQS messages when objects are created or deleted.
    **CloudWatch Events:** Triggers Lambda functions or Step Functions based on schedule or event patterns.
    
    **Example Code:**
    # AWS Lambda function triggered by S3 events
    {
      "eventSource": "aws:s3",
      "s3": {
        "bucket": "my-bucket",
        "event": "s3:ObjectCreated:*"
      }
    }
    
    # AWS CLI command to create a CloudWatch Event Rule
    aws events put-rule --schedule-expression "rate(5 minutes)" --name MyRule`
              },
              {
                title: "Creating and Removing AWS Resources",
                content: "AWS allows you to manage resources dynamically using infrastructure as code tools and management services:",
                example: `
    **AWS CloudFormation:** Defines and deploys infrastructure using code templates.
    **Terraform:** An open-source tool for managing AWS resources using configuration files.
    **AWS CLI:** Command-line interface for managing AWS resources.
    
    **Example Code:**
    # AWS CloudFormation template snippet for creating an S3 bucket
    {
      "Resources": {
        "MyBucket": {
          "Type": "AWS::S3::Bucket",
          "Properties": {
            "BucketName": "my-new-bucket"
          }
        }
      }
    }
    
    # AWS CLI command to delete an EC2 instance
    aws ec2 terminate-instances --instance-ids i-1234567890abcdef0`
              }
            ]
          },
          {
            title: "Deploying a Web App on AWS",
            content: `**Selecting AWS Services:** When deploying a web app on AWS, it's important to select the appropriate services. Commonly used services include Amazon EC2 for virtual servers, Amazon S3 for static file storage, and Amazon RDS for managed databases.
  
  **Modifying AWS Resources:** After provisioning AWS resources, you may need to configure and modify them to meet your application’s requirements. This involves updating settings, managing security groups, and configuring load balancers.
  
  **Event Handling on AWS:** AWS offers various tools for handling events and notifications. Services like AWS Lambda can be used to respond to changes in AWS resources or to execute code in response to HTTP requests through Amazon API Gateway.
  
  **Creating and Removing AWS Resources:** AWS allows you to dynamically create and delete resources. This includes launching new EC2 instances, setting up new S3 buckets, or deleting unused resources to manage costs and maintain an efficient infrastructure.`,
            innersubtopics: [
              {
                title: "Selecting AWS Services",
                content: "In the context of deploying a web app, selecting the right AWS services is crucial for setting up a scalable and reliable environment. Here are some key services you might use:",
                example: `
  **Amazon EC2:** Provides scalable compute capacity in the cloud.
  **Amazon S3:** Offers scalable storage for static assets like images, CSS, and JavaScript files.
  **Amazon RDS:** Provides managed relational database services.
  
  **Example Setup:**
  1. **Amazon EC2:** Launch an EC2 instance to host your web server.
  2. **Amazon S3:** Create an S3 bucket to store and serve static files.
  3. **Amazon RDS:** Set up a database instance to manage application data.
  `
              },
              {
                title: "Modifying AWS Resources",
                content: "Once you have provisioned AWS resources, you might need to make adjustments to optimize performance and security. Here’s how you can manage your resources:",
                example: `
  **Security Groups:** Configure inbound and outbound rules to control access to your instances.
  **Load Balancers:** Set up load balancers to distribute incoming traffic across multiple instances.
  **Auto Scaling:** Adjust the number of instances based on traffic to ensure high availability.
  
  **Example Configuration:**
  1. **Security Groups:** Open port 80 for HTTP traffic and port 443 for HTTPS traffic.
  2. **Load Balancer:** Create an Application Load Balancer to handle HTTP requests and direct them to EC2 instances.
  3. **Auto Scaling Group:** Set up rules to add or remove instances based on CPU utilization.
  `
              },
              {
                title: "Event Handling on AWS",
                content: "AWS provides several ways to handle events and notifications, enabling automation and responsive actions based on various triggers:",
                example: `
  **AWS Lambda:** Execute code in response to events such as changes in S3 buckets or DynamoDB tables.
  **Amazon SNS:** Send notifications to users or systems in response to specific events.
  **Amazon API Gateway:** Create REST APIs to handle HTTP requests and integrate with AWS Lambda functions.
  
  **Example Workflow:**
  1. **AWS Lambda Function:** Trigger a Lambda function to process data when a new file is uploaded to S3.
  2. **Amazon SNS Notification:** Send a notification to a subscribed topic when a new instance is launched.
  3. **API Gateway:** Expose a REST API endpoint to handle incoming requests and invoke Lambda functions.
  `
              },
              {
                title: "Creating and Removing AWS Resources",
                content: "To manage your AWS infrastructure efficiently, you need to create and remove resources as required by your application’s lifecycle:",
                example: `
  **AWS CloudFormation:** Use CloudFormation templates to define and provision AWS infrastructure as code.
  **Terraform:** Utilize Terraform for infrastructure as code to create and manage AWS resources.
  **AWS Management Console:** Manually create or delete resources through the AWS Management Console.
  
  **Example Tasks:**
  1. **Create EC2 Instance:** Use CloudFormation to define and launch a new EC2 instance.
  2. **Create S3 Bucket:** Use the AWS Management Console to set up a new S3 bucket for static content.
  3. **Remove Unused Resources:** Regularly review and delete unused EC2 instances and S3 buckets to optimize costs.
  `
              }
            ]
          }
        ]
      }
    }
  ],
  16: [
    {
      id: 16,
      name: 'DevOps and Security',
      unit: 'Unit 16',
      status: 'Completed',
      description: {
        overview: 'DevOps and security focus on integrating continuous development and operations practices with robust security measures to ensure reliable, scalable, and secure software delivery.',
        subtopics: [
          {
            title: "Introduction to DevOps",
            content: `**Selecting Elements:** In the context of DevOps, selecting and managing resources in your infrastructure is crucial. Tools and methods for this purpose include cloud service management consoles and command-line interfaces (CLI) to interact with various components of your system.
        
        **Modifying Elements:** DevOps involves configuring and modifying infrastructure and applications to ensure optimal performance. This includes updating configurations, scaling resources, and applying patches using configuration management tools and deployment pipelines.
        
        **Event Handling:** DevOps emphasizes monitoring and responding to system events. Event handling in DevOps involves setting up alerts, logs, and monitoring systems to detect issues and automate responses to events such as deployment failures or system outages.
        
        **Creating and Removing Elements:** In DevOps, creating and removing infrastructure elements dynamically is key to managing scalable systems. This includes provisioning new servers, deploying applications, and decommissioning resources using infrastructure-as-code (IaC) tools and automation scripts.`,
            innersubtopics: [
              {
                title: "Selecting Resources",
                content: "In DevOps, selecting resources refers to managing and interacting with various infrastructure components.",
                example: `
        **Cloud Service Management:** Use cloud service dashboards to select and manage resources like virtual machines, databases, and storage.
        **Command-Line Interfaces (CLI):** Use CLI tools like AWS CLI or Azure CLI to select and configure resources programmatically.
        
        **Example Code:**
        # AWS CLI command to list EC2 instances
        aws ec2 describe-instances
        
        # Azure CLI command to list virtual machines
        az vm list --output table`
              },
              {
                title: "Modifying Infrastructure",
                content: "Modifying infrastructure in DevOps involves updating configurations and applying changes to ensure the system operates smoothly.",
                example: `
        **Configuration Management:** Use tools like Ansible, Chef, or Puppet to apply configuration changes.
        **Scaling:** Adjust the number of instances or resources based on load using auto-scaling features.
        
        **Example Code:**
        # Ansible playbook to update configuration
        - name: Update configuration
          hosts: all
          tasks:
            - name: Update application configuration
              lineinfile:
                path: /etc/myapp/config.yml
                line: 'new_configuration_value: true'
                state: present
        
        # AWS CLI command to scale an Auto Scaling group
        aws autoscaling update-auto-scaling-group --auto-scaling-group-name my-auto-scaling-group --desired-capacity 3`
              },
              {
                title: "Event Handling",
                content: "Handling events in DevOps involves setting up systems to monitor and respond to various operational events.",
                example: `
        **Monitoring and Alerts:** Use tools like Prometheus, Grafana, or CloudWatch to monitor system health and set up alerts.
        **Automated Responses:** Implement automated scripts or workflows to handle common events such as deployment failures or scaling needs.
        
        **Example Code:**
        # Prometheus query to monitor CPU usage
        rate(node_cpu_seconds_total[5m])
        
        # CloudWatch alarm for high CPU usage
        aws cloudwatch put-metric-alarm --alarm-name HighCPUUsage --metric-name CPUUtilization --namespace AWS/EC2 --statistic Average --period 300 --threshold 80 --comparison-operator GreaterThanOrEqualToThreshold --evaluation-periods 2 --alarm-actions arn:aws:sns:us-east-1:123456789012:MyTopic`
              },
              {
                title: "Creating and Removing Resources",
                content: "Creating and removing resources dynamically is essential for managing infrastructure in a scalable and efficient manner.",
                example: `
        **Infrastructure-as-Code (IaC):** Use IaC tools like Terraform or AWS CloudFormation to define and provision infrastructure.
        **Automation Scripts:** Use scripts to automate the creation and removal of resources based on system needs.
        
        **Example Code:**
        # Terraform configuration to create an EC2 instance
        resource "aws_instance" example {
          ami           = "ami-0c55b159cbfafe1f0"
          instance_type = "t2.micro"
        }
        
        # AWS CLI command to terminate an EC2 instance
        aws ec2 terminate-instances --instance-ids i-1234567890abcdef0`
              }
            ]
          },
          {
            title: "Advanced DevOps Practices",
            content: `**Selecting Elements:** In DevOps, selecting elements often refers to configuring and managing different components of the system. For instance, tools like 'Terraform', 'Ansible', and 'Kubernetes' can be used to select and configure infrastructure components.
        
        **Modifying Elements:** After selecting the elements, you might need to modify configurations, update infrastructure, and manage deployments. Tools and practices such as 'Infrastructure as Code (IaC)', 'Continuous Integration (CI)', and 'Continuous Deployment (CD)' play a crucial role in this.
        
        **Event Handling:** Event handling in DevOps involves managing and responding to system events, such as build failures, deployment successes, and infrastructure alerts. Implementing effective logging, monitoring, and alerting mechanisms is key to ensuring that your system remains resilient and responsive.
        
        **Creating and Removing Elements:** Creating and removing elements in a DevOps context involves provisioning new infrastructure or decommissioning outdated resources. Tools like 'Docker', 'Kubernetes', and 'CloudFormation' allow you to manage resources dynamically and efficiently.`,
            innersubtopics: [
              {
                title: "Selecting Infrastructure Components",
                content: "In advanced DevOps practices, selecting infrastructure components involves choosing the right tools and configurations for your deployment and management needs:",
                example: `
        **Terraform:** Used for infrastructure provisioning with IaC.
        **Ansible:** Manages configuration and deployment tasks.
        **Kubernetes:** Orchestrates containerized applications and services.
        
        **Example Code:**
        # Terraform Configuration
        provider "aws" {
          region = "us-west-2"
        }
        
        resource "aws_instance" example {
          ami           = "ami-0c55b159cbfafe1f0"
          instance_type = "t2.micro"
        }
        
        # Ansible Playbook
        - hosts: servers
          tasks:
            - name: Install nginx
              apt:
                name: nginx
                state: present
        
        # Kubernetes Deployment
        apiVersion: apps/v1
        kind: Deployment
        metadata:
          name: example-deployment
        spec:
          replicas: 2
          selector:
            matchLabels:
              app: example
          template:
            metadata:
              labels:
                app: example
            spec:
              containers:
                - name: example
                  image: nginx:latest
                  ports:
                    - containerPort: 80`
              },
              {
                title: "Modifying Configurations",
                content: "Modifying configurations in a DevOps context involves updating infrastructure and deployment configurations to adapt to changing needs and improvements:",
                example: `
        **Infrastructure as Code (IaC):** Update infrastructure configurations using IaC tools.
        **Continuous Integration (CI):** Modify build and test configurations for better efficiency.
        **Continuous Deployment (CD):** Adjust deployment pipelines to streamline releases.
        
        **Example Code:**
        # Terraform Configuration Update
        resource "aws_instance" example {
          ami           = "ami-0c55b159cbfafe1f1"
          instance_type = "t2.small"
        }
        
        # Jenkins Pipeline Configuration
        pipeline {
            agent any
            stages {
                stage('Build') {
                    steps {
                        script {
                            // Build steps
                        }
                    }
                }
                stage('Deploy') {
                    steps {
                        script {
                            // Deployment steps
                        }
                    }
                }
            }
        }
        
        # Dockerfile Modification
        FROM node:14
        WORKDIR /app
        COPY . .
        RUN npm install
        CMD ["node", "index.js"]`
              },
              {
                title: "Event Handling and Monitoring",
                content: "Handling events and monitoring in DevOps involves setting up systems to respond to and report on various events, such as system health, performance metrics, and alert notifications:",
                example: `
        **Logging:** Implement structured logging to capture and analyze system events.
        **Monitoring:** Use monitoring tools to track system performance and health.
        **Alerting:** Set up alerts for critical events or thresholds.
        
        **Example Code:**
        # Logging Configuration (example with ELK stack)
        output {
          elasticsearch {
            hosts => ["http://localhost:9200"]
          }
        }
        
        # Monitoring Setup (example with Prometheus)
        scrape_configs:
          - job_name: 'node_exporter'
            static_configs:
              - targets: ['localhost:9100']
        
        # Alerting Rule (example with Prometheus Alertmanager)
        groups:
          - name: example
            rules:
              - alert: HighCpuUsage
                expr: node_cpu_seconds_total{job="node_exporter"} > 0.9
                for: 2m
                labels:
                  severity: critical
                annotations:
                  summary: "High CPU usage detected"`
              },
              {
                title: "Creating and Removing Resources",
                content: "Creating and removing resources efficiently is a key aspect of advanced DevOps. This involves provisioning new resources and decommissioning outdated ones to maintain an optimized infrastructure:",
                example: `
        **Provisioning Resources:** Use tools to automate the creation of new infrastructure.
        **Decommissioning Resources:** Safely remove outdated or unused resources.
        
        **Example Code:**
        # AWS CloudFormation Template
        Resources:
          ExampleInstance:
            Type: "AWS::EC2::Instance"
            Properties:
              InstanceType: "t2.micro"
              ImageId: "ami-0c55b159cbfafe1f0"
        
        # Docker Container Management
        # Create a new container
        docker run -d --name my-app nginx:latest
        
        # Remove an existing container
        docker rm -f my-app`
              }
            ]
          },
          {
            title: "Security Fundamentals",
            content: `**Selecting Elements:** In security-focused applications, it's important to be cautious when selecting and manipulating DOM elements to avoid security vulnerabilities like Cross-Site Scripting (XSS). Methods such as 'getElementById', 'querySelector', and 'getElementsByClassName' should be used with care to ensure that user input is properly sanitized and validated.
      
      **Modifying Elements:** When modifying DOM elements, always ensure that the changes are secure and do not introduce vulnerabilities. Use methods like 'innerHTML', 'setAttribute', and 'style' responsibly to prevent attacks such as injection and data leakage.
      
      **Event Handling:** Event handling must be done securely to prevent attacks such as Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF). The 'addEventListener' method should be used to securely handle user interactions and ensure that any data received from events is properly validated and sanitized.
      
      **Creating and Removing Elements:** Creating and removing elements dynamically can be a potential security risk if not handled properly. Use methods like 'createElement', 'appendChild', and 'removeChild' with careful validation to prevent security issues such as DOM-based XSS attacks.`,
            innersubtopics: [
              {
                title: "Selecting Elements",
                content: "Secure element selection is critical to prevent security vulnerabilities. JavaScript provides methods to access DOM elements, but it's essential to avoid exposing your application to XSS attacks:",
                example: `
      **getElementById:** Selects an element by its unique ID. Ensure IDs are not derived from user input.
      **querySelector:** Selects the first element that matches a CSS selector. Validate any user input used in selectors.
      **getElementsByClassName:** Selects all elements with a given class name. Ensure class names are not manipulated by users.
      
      **Example Code:**
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Security Selection Example</title>
      </head>
      <body>
          <div id="secureElement" class="box">Secure Content</div>
          <script>
              const elementById = document.getElementById('secureElement');
              const elementByClass = document.getElementsByClassName('box')[0];
              const elementByQuery = document.querySelector('#secureElement');
      
              console.log(elementById.innerHTML); // Secure Content
              console.log(elementByClass.innerHTML); // Secure Content
              console.log(elementByQuery.innerHTML); // Secure Content
          </script>
      </body>
      </html>`
              },
              {
                title: "Modifying Elements",
                content: "When modifying elements, it's crucial to ensure that changes do not introduce security risks. Use methods like 'innerHTML', 'setAttribute', and 'style' with caution:",
                example: `
      **innerHTML:** Avoid using 'innerHTML' with untrusted data to prevent XSS attacks. Consider using textContent instead.
      **setAttribute:** Ensure that attribute values are sanitized and validated before setting.
      **style:** Validate any styles applied to prevent injection attacks.
      
      **Example Code:**
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Security Modification Example</title>
      </head>
      <body>
          <div id="secureElement">Original Text</div>
          <script>
              const element = document.getElementById('secureElement');
              element.textContent = 'Updated Secure Text'; // Safer than innerHTML
              element.setAttribute('data-info', 'Secure Data'); // Ensure data is validated
              element.style.color = 'blue'; // Adjust styles safely
          </script>
      </body>
      </html>`
              },
              {
                title: "Event Handling",
                content: "Handling events securely is essential to protect against attacks such as XSS and CSRF. Attach event listeners using 'addEventListener' and validate any data received:",
                example: `
      **addEventListener:** Attach event handlers carefully to avoid introducing security vulnerabilities.
      **Event Object:** Validate any event data to prevent injection attacks and other vulnerabilities.
      
      **Example Code:**
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Security Event Handling Example</title>
      </head>
      <body>
          <button id="secureButton">Click Me</button>
          <script>
              const button = document.getElementById('secureButton');
              button.addEventListener('click', function(event) {
                  // Ensure event data is safe and validated
                  alert('Button clicked securely!');
              });
          </script>
      </body>
      </html>`
              },
              {
                title: "Creating and Removing Elements",
                content: "Dynamically creating and removing elements must be done with security in mind to avoid vulnerabilities like DOM-based XSS. Use 'createElement', 'appendChild', and 'removeChild' with proper validation:",
                example: `
      **createElement:** Ensure the newly created elements are safe and not prone to injection attacks.
      **appendChild:** Validate any data added to the DOM to avoid exposing the application to security risks.
      **removeChild:** Safely remove elements without leaving potential security gaps.
      
      **Example Code:**
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Security DOM Manipulation Example</title>
      </head>
      <body>
          <div id="secureContainer"></div>
          <button id="addElement">Add Element</button>
          <button id="removeElement">Remove Element</button>
          <script>
              const container = document.getElementById('secureContainer');
              const addButton = document.getElementById('addElement');
              const removeButton = document.getElementById('removeElement');
      
              addButton.addEventListener('click', function() {
                  const newElement = document.createElement('p');
                  newElement.textContent = 'New Secure Element'; // Avoid using innerHTML with untrusted data
                  container.appendChild(newElement);
              });
      
              removeButton.addEventListener('click', function() {
                  if (container.firstChild) {
                      container.removeChild(container.firstChild);
                  }
              });
          </script>
      </body>
      </html>`
              }
            ]
          },
          {
            title: "Implementing DevOps and Security Practices",
            content: `**Selecting Elements:** In a DevOps and security context, selecting and monitoring system elements and configurations is crucial. Tools and methods such as monitoring dashboards, logging systems, and configuration management tools help in overseeing and securing applications.
    
    **Modifying Elements:** Effective modification of system components, configurations, and security settings ensures optimal performance and protection. This includes adjusting application settings, updating system configurations, and applying security patches.
    
    **Event Handling:** Handling events in DevOps involves monitoring system events, logs, and alerts. Setting up appropriate triggers and responses for system changes or security incidents ensures that you can address issues promptly.
    
    **Creating and Removing Elements:** Creating and removing system components or configurations should be managed carefully to maintain system stability and security. Automation tools and scripts are used to handle these tasks while adhering to best practices in deployment and security management.`,
            innersubtopics: [
              {
                title: "Selecting Elements",
                content: "In a DevOps and security context, selecting and monitoring key elements is crucial for system integrity. This involves using various tools to track system performance, security status, and configurations:",
                example: `
    **Monitoring Dashboards:** Tools like Grafana or Prometheus for visualizing system metrics.
    **Logging Systems:** Centralized logging systems such as ELK Stack (Elasticsearch, Logstash, Kibana) or Splunk for analyzing logs.
    **Configuration Management Tools:** Tools like Ansible, Puppet, or Chef for managing system configurations.
    
    **Example Code:**
    # This is a conceptual example and not a code snippet.
    Monitor system performance using Grafana:
    1. Set up data sources and create dashboards.
    2. Add panels to display metrics such as CPU usage, memory usage, and network traffic.
    3. Configure alerts based on thresholds for critical metrics.
    `
              },
              {
                title: "Modifying Elements",
                content: "Modifying system configurations, application settings, and security parameters is essential for maintaining a secure and efficient environment. Here’s how you can handle these modifications:",
                example: `
    **Configuration Management:** Use tools to apply configuration changes across environments.
    **Security Patches:** Regularly apply security updates and patches to protect against vulnerabilities.
    **Performance Tuning:** Adjust application and system settings to optimize performance.
    
    **Example Code:**
    # This is a conceptual example and not a code snippet.
    Update system configuration with Ansible:
    1. Define the desired configuration in an Ansible playbook.
    2. Apply the playbook to update system settings on all targeted servers.
    3. Validate the changes and ensure they are applied correctly.
    `
              },
              {
                title: "Event Handling",
                content: "In DevOps, handling events involves monitoring and responding to system changes and security incidents. Implementing effective event handling helps in maintaining system stability and security:",
                example: `
    **Event Monitoring:** Use monitoring tools to detect and log system events and security incidents.
    **Alerting:** Configure alerts to notify teams of critical events, such as system failures or security breaches.
    **Incident Response:** Establish procedures for responding to and resolving incidents promptly.
    
    **Example Code:**
    # This is a conceptual example and not a code snippet.
    Set up alerts with Prometheus and Alertmanager:
    1. Configure Prometheus to collect metrics from your applications.
    2. Define alerting rules in Prometheus based on these metrics.
    3. Set up Alertmanager to send notifications via email or messaging platforms when alerts are triggered.
    `
              },
              {
                title: "Creating and Removing Elements",
                content: "In a DevOps and security context, creating and removing system components should be managed with care. Automation and best practices are key to ensuring stability and security:",
                example: `
    **Automated Deployments:** Use CI/CD pipelines to automate the creation and deployment of application components.
    **Configuration Management:** Manage and apply changes to system configurations using automation tools.
    **System Clean-up:** Remove obsolete or unused components to maintain system hygiene.
    
    **Example Code:**
    # This is a conceptual example and not a code snippet.
    Automate deployments with a CI/CD pipeline:
    1. Define deployment pipelines in a CI/CD tool like Jenkins or GitHub Actions.
    2. Use scripts to build, test, and deploy applications automatically.
    3. Ensure rollback procedures are in place in case of deployment failures.
    `
              }
            ]
          }
        ]
      }
    }
  ],
  17: [
    {
      id: 17,
      name: 'System Design and Architecture',
      unit: 'Unit 17',
      status: 'Completed',
      description: {
        overview: 'System Design and Architecture involves creating a structured framework for building scalable, reliable, and maintainable systems by defining their components, interactions, and data flow.',
        subtopics: [
          {
            title: "Introduction to System Design",
            content: `**Selecting Components:** System design involves selecting and integrating various system components. Methods such as defining system architecture, choosing appropriate technologies, and establishing communication protocols are essential for building robust systems.
        
        **Modifying Components:** Once components are selected, they can be configured and optimized in various ways. You can adjust their configurations, integrate with other systems, and optimize performance using various design patterns and principles.
        
        **Event Handling:** In system design, handling events involves setting up appropriate response mechanisms for various system events, such as data changes, user interactions, or system failures. Implementing event listeners and response handlers is crucial for ensuring system reliability and responsiveness.
        
        **Creating and Removing Components:** System design also involves the creation and removal of system components, whether it’s adding new services, scaling infrastructure, or decommissioning outdated parts. This requires careful planning and execution to maintain system integrity and performance.`,
            innersubtopics: [
              {
                title: "Selecting Components",
                content: "In system design, selecting the right components is crucial for building an effective system. This involves choosing the appropriate technologies, defining system architecture, and ensuring compatibility between components:",
                example: `
        **System Architecture:** Defines the high-level structure of the system, including its components and their interactions.
        **Technology Stack:** Involves selecting technologies and frameworks that meet the system's requirements.
        **Communication Protocols:** Establishes how different components will communicate with each other.
        
        **Example Code (Conceptual):**
        <!-- This is a conceptual example, not executable code. -->
        System Design Components:
        - Database: MySQL
        - Backend Framework: Node.js
        - Frontend Framework: React
        - Communication Protocol: REST API
        
        The system architecture includes a frontend application interacting with a backend server, which communicates with a database using a REST API.`
              },
              {
                title: "Modifying Components",
                content: "Once components are selected, they need to be configured and optimized for performance and integration. This involves adjusting configurations, optimizing system interactions, and implementing design patterns:",
                example: `
        **Configuration Management:** Adjusting settings to fit the specific needs of the system.
        **Performance Optimization:** Enhancing the efficiency and speed of system components.
        **Design Patterns:** Applying patterns such as Singleton, Factory, or Observer to solve common design problems.
        
        **Example Code (Conceptual):**
        <!-- This is a conceptual example, not executable code. -->
        Configuration Settings:
        - Database Connection Pool Size: 20
        - Caching Strategy: LRU Cache
        
        Design Pattern Example:
        - Singleton Pattern for Database Connection
        - Factory Pattern for creating different service instances`
              },
              {
                title: "Event Handling",
                content: "Handling events in system design involves setting up mechanisms to respond to system events and user interactions. This includes implementing event listeners and response strategies for various scenarios:",
                example: `
        **Event Listeners:** Set up to respond to specific events, such as data updates or system errors.
        **Response Handlers:** Define actions to be taken when events occur, such as notifying users or updating system status.
        
        **Example Code (Conceptual):**
        <!-- This is a conceptual example, not executable code. -->
        Event Handling Example:
        - Data Change Event: Notify the frontend application of updates.
        - System Failure Event: Trigger an alert and log the error.
        
        Event Listener Implementation:
        - On Data Change: Call updateUI() to refresh the user interface.
        - On System Failure: Call logError() and notifyAdmin() to handle the issue.`
              },
              {
                title: "Creating and Removing Components",
                content: "Creating and removing components involves adding new services, scaling infrastructure, or decommissioning outdated parts. This requires planning to ensure system stability and performance:",
                example: `
        **Adding New Services:** Integrate new services into the system as required.
        **Scaling Infrastructure:** Increase or decrease resources based on system load.
        **Decommissioning Components:** Remove outdated or unnecessary components without affecting system functionality.
        
        **Example Code (Conceptual):**
        <!-- This is a conceptual example, not executable code. -->
        Component Management Example:
        - Adding a New Service: Deploy a new microservice to handle additional functionality.
        - Scaling: Increase the number of instances for the web server based on traffic.
        - Decommissioning: Remove legacy code and services as they become obsolete.`
              }
            ]
          },
          {
            title: "Designing Scalable Systems",
            content: `**Selecting Components:** Designing scalable systems involves choosing components that can handle increased load and maintain performance. Methods include selecting scalable databases, load balancers, and distributed systems to manage growth effectively.
      
      **Modifying Components:** Once components are selected, they need to be configured to scale efficiently. This includes optimizing system performance, tuning resource allocation, and ensuring that components can handle increased traffic and data volume.
      
      **Event Handling:** In scalable system design, handling events efficiently is crucial. Implementing asynchronous processing, distributed messaging, and scalable event listeners helps ensure that the system can handle a high volume of events without bottlenecks.
      
      **Creating and Removing Components:** Scalable systems require the ability to dynamically add or remove components based on demand. This involves provisioning new resources, scaling infrastructure horizontally or vertically, and decommissioning resources when they are no longer needed.`,
            innersubtopics: [
              {
                title: "Selecting Components",
                content: "When designing scalable systems, selecting the right components is essential for handling increased load and ensuring performance:",
                example: `
      **Scalable Databases:** Choose databases that support sharding and replication, such as MongoDB or Cassandra.
      **Load Balancers:** Use load balancers to distribute incoming traffic across multiple servers.
      **Distributed Systems:** Implement distributed architectures to manage large-scale data and services.
      
      **Example Code (Conceptual):**
      <!-- This is a conceptual example, not executable code. -->
      Scalable System Components:
      - Database: MongoDB with sharding enabled
      - Load Balancer: AWS Elastic Load Balancing
      - Application Servers: Multiple instances managed by Kubernetes
      
      The system design includes a load balancer to distribute requests to a pool of application servers, which interact with a sharded database to manage large volumes of data.`
              },
              {
                title: "Modifying Components",
                content: "After selecting components, they must be configured for scalability. This involves optimizing performance, resource allocation, and ensuring efficient operation under increased load:",
                example: `
      **Performance Tuning:** Adjust system parameters to optimize performance under high load.
      **Resource Allocation:** Allocate resources dynamically based on demand, such as using auto-scaling groups.
      **Efficient Operation:** Implement caching and data partitioning to enhance performance.
      
      **Example Code (Conceptual):**
      <!-- This is a conceptual example, not executable code. -->
      Performance Tuning Example:
      - Database Indexing: Create indexes to speed up query performance.
      - Caching: Use Redis to cache frequently accessed data.
      
      Auto-Scaling Configuration:
      - Auto-Scale Application Servers: Configure scaling policies to add or remove server instances based on CPU utilization.`
              },
              {
                title: "Event Handling",
                content: "Efficient event handling is crucial for scalable systems. Implementing asynchronous processing and distributed messaging ensures that the system can handle high volumes of events without performance degradation:",
                example: `
      **Asynchronous Processing:** Use message queues to process tasks asynchronously and avoid blocking operations.
      **Distributed Messaging:** Implement distributed messaging systems like Kafka for handling large volumes of events.
      **Scalable Event Listeners:** Ensure event listeners can scale horizontally to manage increased event traffic.
      
      **Example Code (Conceptual):**
      <!-- This is a conceptual example, not executable code. -->
      Event Handling Example:
      - Message Queue: Use RabbitMQ to manage background tasks.
      - Event Processing: Process events asynchronously using worker nodes.
      
      Asynchronous Processing:
      - Publish events to a message queue.
      - Worker nodes consume and process events from the queue, scaling up as needed.`
              },
              {
                title: "Creating and Removing Components",
                content: "Creating and removing components dynamically is essential for maintaining scalability. This involves provisioning resources, scaling infrastructure, and decommissioning outdated components to match system demand:",
                example: `
      **Dynamic Provisioning:** Automatically provision new resources based on system load.
      **Horizontal and Vertical Scaling:** Scale infrastructure horizontally by adding more instances, or vertically by upgrading existing instances.
      **Decommissioning:** Remove resources that are no longer needed to optimize costs and system performance.
      
      **Example Code (Conceptual):**
      <!-- This is a conceptual example, not executable code. -->
      Dynamic Scaling Example:
      - Auto-Scaling Groups: Configure auto-scaling policies to add or remove instances based on traffic patterns.
      - Resource Provisioning: Use cloud services like AWS or Azure to provision additional resources as needed.
      
      Decommissioning:
      - Terminate unused instances to reduce costs.
      - Clean up resources that are no longer required.`
              }
            ]
          },
          {
            title: "Real-World System Design Patterns",
            content: `**Selecting Design Patterns:** In system design, choosing the right design patterns is crucial for building scalable and maintainable systems. Patterns such as Singleton, Factory, and Observer are commonly used to address specific challenges in system architecture and design.
    
    **Modifying Design Patterns:** Once design patterns are selected, they need to be adapted and fine-tuned according to the specific requirements of the system. This involves customizing patterns to fit different contexts and optimizing their implementation for performance.
    
    **Event Handling Patterns:** Handling events effectively involves applying design patterns that manage system interactions and responses. Patterns like Event-Driven Architecture and Publish-Subscribe can be used to manage and respond to system events efficiently.
    
    **Creating and Removing Patterns:** Integrating and removing design patterns requires careful planning to ensure that the system remains consistent and effective. This involves applying patterns for new features, scaling existing ones, or deprecating outdated patterns while maintaining system integrity.`,
            innersubtopics: [
              {
                title: "Selecting Design Patterns",
                content: "Selecting appropriate design patterns is a key aspect of system design. Patterns help solve common problems and provide reusable solutions:",
                example: `
    **Singleton Pattern:** Ensures a class has only one instance and provides a global point of access to it.
    **Factory Pattern:** Defines an interface for creating objects but allows subclasses to alter the type of objects that will be created.
    **Observer Pattern:** Defines a dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
    
    **Example Code (Conceptual):**
    <!-- This is a conceptual example, not executable code. -->
    Design Pattern Examples:
    - Singleton for Database Connection: Ensures a single connection instance.
    - Factory for Service Creation: Creates different service types based on input parameters.
    - Observer for Notification System: Updates users when data changes.`
              },
              {
                title: "Modifying Design Patterns",
                content: "Modifying design patterns involves adapting their implementation to fit specific system requirements and optimizing their use:",
                example: `
    **Configuration Adjustments:** Tailor the design pattern to fit specific system needs or constraints.
    **Performance Optimization:** Enhance the efficiency of the pattern's implementation.
    **Customization:** Adapt the pattern to address unique requirements or challenges in the system.
    
    **Example Code (Conceptual):**
    <!-- This is a conceptual example, not executable code. -->
    Modifying Patterns:
    - Custom Singleton Implementation: Adjust the instantiation logic based on system constraints.
    - Enhanced Factory Method: Include additional parameters or configurations for object creation.
    - Optimized Observer: Implement more efficient notification mechanisms to handle large volumes of updates.`
              },
              {
                title: "Event Handling Patterns",
                content: "Effective event handling in system design often involves using patterns that manage how events are processed and responded to:",
                example: `
    **Event-Driven Architecture:** Uses events to trigger actions and manage system responses.
    **Publish-Subscribe Pattern:** Allows components to subscribe to events published by other components without tight coupling.
    
    **Example Code (Conceptual):**
    <!-- This is a conceptual example, not executable code. -->
    Event Handling Patterns:
    - Event-Driven: Process events as they occur and trigger appropriate responses.
    - Publish-Subscribe: Components publish events and subscribers react to those events independently.
    
    Event Handling Example:
    - Implement an event bus to manage and distribute events throughout the system.
    - Use subscribers to handle specific events and update system state accordingly.`
              },
              {
                title: "Creating and Removing Patterns",
                content: "Creating and removing design patterns involves integrating new patterns into the system or deprecating old ones while ensuring system stability and consistency:",
                example: `
    **Integrating New Patterns:** Introduce and implement new patterns as needed for additional features or improvements.
    **Scaling Patterns:** Adjust patterns to handle increased load or complexity.
    **Deprecating Old Patterns:** Safely remove outdated patterns and ensure that system functionality is maintained.
    
    **Example Code (Conceptual):**
    <!-- This is a conceptual example, not executable code. -->
    Pattern Management Example:
    - Adding New Pattern: Implement a new pattern to handle emerging requirements.
    - Scaling Existing Patterns: Modify existing patterns to improve scalability and performance.
    - Removing Deprecated Patterns: Refactor the system to remove obsolete patterns and update code accordingly.`
              }
            ]
          },
          {
            title: "Case Study: Designing a Scalable Application",
            content: `**Selecting Components:** Designing a scalable application requires careful selection of components that can handle growth and increased load. Key considerations include choosing scalable databases, distributed systems, and efficient communication methods.
  
  **Modifying Components:** After initial setup, components may need modifications to enhance scalability and performance. This involves tuning configurations, optimizing data flow, and implementing load balancing techniques.
  
  **Event Handling:** In scalable applications, effective event handling is crucial for maintaining performance and responsiveness. This involves setting up mechanisms to handle high volumes of events and ensuring system stability under load.
  
  **Creating and Removing Components:** Scalable applications often require the ability to dynamically create and remove components based on demand. This includes scaling infrastructure, adding new services, and decommissioning outdated parts as needed.`,
            innersubtopics: [
              {
                title: "Selecting Components",
                content: "When designing a scalable application, selecting the right components is essential for handling growth and maintaining performance. Considerations include:",
                example: `
  **Scalable Databases:** Choose databases that support horizontal scaling, such as NoSQL databases or distributed SQL databases.
  **Distributed Systems:** Use microservices or distributed architectures to handle different parts of the application independently.
  **Efficient Communication:** Implement message queues or API gateways to manage communication between services and ensure reliability.
  
  **Example Code (Conceptual):**
  <!-- This is a conceptual example, not executable code. -->
  Components for Scalability:
  - Database: MongoDB for horizontal scaling.
  - Microservices: Independent services for user management, payments, etc.
  - Communication: RabbitMQ for message queuing.
  
  Architecture Overview:
  - Frontend interacts with API Gateway.
  - API Gateway routes requests to appropriate microservices.
  - Microservices interact with a scalable database and message queues.`
              },
              {
                title: "Modifying Components",
                content: "As your application scales, you may need to modify components to handle increased load and optimize performance. Key strategies include:",
                example: `
  **Configuration Tuning:** Adjust settings such as connection pool sizes and cache parameters to optimize performance under load.
  **Data Flow Optimization:** Implement efficient data access patterns and indexing to improve query performance.
  **Load Balancing:** Use load balancers to distribute incoming traffic across multiple instances of services.
  
  **Example Code (Conceptual):**
  <!-- This is a conceptual example, not executable code. -->
  Configuration Tuning Example:
  - Increase connection pool size for database connections.
  - Adjust cache expiration times to balance load.
  
  Data Flow Optimization:
  - Index frequently queried fields in the database.
  - Use denormalization or caching for high-read operations.
  
  Load Balancing:
  - Configure a load balancer to distribute traffic between web servers.`
              },
              {
                title: "Event Handling",
                content: "Handling events effectively is crucial for maintaining performance in a scalable application. Strategies include:",
                example: `
  **Event Management:** Use asynchronous processing and message queues to handle high volumes of events.
  **Monitoring and Alerts:** Set up monitoring to track system performance and alerts to respond to issues quickly.
  
  **Example Code (Conceptual):**
  <!-- This is a conceptual example, not executable code. -->
  Event Handling Example:
  - Use a message queue like Kafka to process events asynchronously.
  - Implement monitoring tools like Prometheus to track system metrics.
  
  Asynchronous Processing:
  - Events are pushed to a message queue.
  - Workers process events from the queue and update the system.
  
  Monitoring and Alerts:
  - Set up Prometheus to collect metrics.
  - Configure alerts to notify administrators of performance issues or errors.`
              },
              {
                title: "Creating and Removing Components",
                content: "Dynamic creation and removal of components is essential for maintaining a scalable application. Strategies include:",
                example: `
  **Scaling Infrastructure:** Automatically scale infrastructure based on demand using cloud services or container orchestration platforms.
  **Service Management:** Add or remove services as needed to handle changes in load or functionality.
  
  **Example Code (Conceptual):**
  <!-- This is a conceptual example, not executable code. -->
  Scaling Infrastructure Example:
  - Use Kubernetes to manage containerized services and automatically scale based on resource usage.
  
  Service Management:
  - Deploy new microservices using a container orchestration platform.
  - Decommission services that are no longer needed.
  
  Container Orchestration:
  - Define scaling rules in Kubernetes.
  - Monitor service performance and adjust the number of instances as needed.`
              }
            ]
          }
        ]
      }
    }
  ],
  18: [
    {
      id: 18,
      name: 'Projection, Capstone, and Live Project',
      unit: 'Unit 18',
      status: 'Completed',
      description: {
        overview: 'Projection, Capstone, and Live Project involve applying theoretical knowledge to real-world scenarios, with Projection focusing on forecasting future trends, Capstone serving as a comprehensive final project integrating all learned concepts, and Live Project offering practical experience through hands-on work with actual clients or industry problems.',
        subtopics: [
          {
            title: "Capstone Project Planning",
            content: `**Project Selection:** Planning a capstone project begins with selecting a relevant and impactful project idea. This involves identifying a problem or opportunity, defining project objectives, and outlining the scope and deliverables.
        
        **Project Design:** Once the project idea is selected, the next step is designing the project plan. This includes defining the project scope, creating a timeline, and allocating resources. Detailed design work is essential for ensuring project feasibility and success.
        
        **Implementation and Testing:** During the implementation phase, the project plan is executed. This involves developing the project components, integrating them, and testing the system to ensure it meets the defined requirements and objectives.
        
        **Evaluation and Presentation:** After implementation, the project is evaluated to ensure it meets the objectives and deliverables. The final step involves preparing and delivering a presentation or report to communicate the results and impact of the project.`,
            innersubtopics: [
              {
                title: "Project Selection",
                content: "Selecting a project involves identifying a suitable topic that aligns with your goals and interests. This process includes defining the project scope and objectives:",
                example: `
        **Identify a Problem or Opportunity:** Choose a project that addresses a real-world issue or explores a new opportunity.
        **Define Objectives:** Set clear goals and outcomes for what you want to achieve with your project.
        **Outline Scope and Deliverables:** Determine what will be included in the project and what will be delivered upon completion.
        
        **Example Outline:**
        - Project Topic: Developing a Web Application for Community Engagement
        - Objectives: Improve community communication and participation
        - Deliverables: Functional web application, user manual, and project report`
              },
              {
                title: "Project Design",
                content: "Designing the project plan involves creating a roadmap for how the project will be executed. This includes defining tasks, setting deadlines, and allocating resources:",
                example: `
        **Define Project Scope:** Outline the specific tasks and boundaries of the project.
        **Create a Timeline:** Develop a project timeline with milestones and deadlines.
        **Allocate Resources:** Identify and allocate the necessary resources, such as team members, tools, and budget.
        
        **Example Plan:**
        - Project Scope: Develop, test, and deploy the web application
        - Timeline: 6 months with key milestones at 1 month, 3 months, and 6 months
        - Resources: 3 developers, 1 designer, project management tools, and a budget of $5,000`
              },
              {
                title: "Implementation and Testing",
                content: "During implementation, the project plan is put into action. This involves developing the project components, integrating them, and performing testing to ensure quality and functionality:",
                example: `
        **Develop Project Components:** Build the various parts of the project according to the design specifications.
        **Integrate Components:** Ensure that all parts of the project work together seamlessly.
        **Perform Testing:** Conduct thorough testing to identify and fix any issues.
        
        **Example Implementation Steps:**
        - Development: Code the application features as outlined in the design.
        - Integration: Integrate the front-end and back-end components.
        - Testing: Perform unit testing, integration testing, and user acceptance testing to ensure functionality.`
              },
              {
                title: "Evaluation and Presentation",
                content: "After implementation, evaluate the project to ensure it meets the goals and objectives. Prepare a presentation or report to communicate the results and impact of the project:",
                example: `
        **Evaluate Project:** Assess the project against the defined objectives and deliverables.
        **Prepare Presentation:** Create a presentation or report summarizing the project outcomes and impact.
        **Deliver Presentation:** Present the results to stakeholders, including team members, advisors, or project sponsors.
        
        **Example Evaluation:**
        - Review project performance against objectives.
        - Gather feedback from users and stakeholders.
        - Document lessons learned and areas for improvement.
        
        **Example Presentation Outline:**
        - Introduction: Overview of the project and objectives.
        - Implementation: Description of the development and testing processes.
        - Results: Summary of outcomes and impact.
        - Conclusion: Final thoughts and recommendations for future work.`
              }
            ]
          },
          {
            title: "Development and Implementation",
            content: `**Planning Development:** Development and implementation involve planning the development phases, setting milestones, and defining deliverables. Effective planning ensures that all project requirements are met and resources are allocated efficiently.
      
      **Implementation Strategies:** During implementation, various strategies are employed to turn development plans into a working system. This includes coding, integrating components, and following best practices to ensure quality and performance.
      
      **Testing and Debugging:** Testing and debugging are crucial steps in the development process. Implementing thorough testing strategies and debugging techniques helps identify and resolve issues before the system goes live.
      
      **Deployment and Maintenance:** Once development is complete, the system is deployed and undergoes regular maintenance. This includes deploying to production environments, monitoring performance, and applying updates or fixes as needed.`,
            innersubtopics: [
              {
                title: "Planning Development",
                content: "Effective planning is the foundation of successful development and implementation. This involves setting clear objectives, timelines, and resource allocation:",
                example: `
      **Project Planning:** Define project goals, deliverables, and timelines.
      **Milestones:** Set key milestones to track progress and ensure timely completion.
      **Resource Allocation:** Allocate resources such as team members, tools, and technologies.
      
      **Example Code (Conceptual):**
      <!-- This is a conceptual example, not executable code. -->
      Project Plan:
      - Goal: Develop a new feature for the application.
      - Milestones: Design phase, Development phase, Testing phase, Deployment phase.
      - Resources: Development team, project management tools, testing tools.
      
      Planning Tools:
      - Gantt Chart: Visualize project timelines and milestones.
      - Task Management Software: Track tasks and assignments.`
              },
              {
                title: "Implementation Strategies",
                content: "Implementation involves applying strategies to transform development plans into a functioning system. This includes coding, integration, and adhering to best practices:",
                example: `
      **Coding:** Write clean and efficient code following coding standards.
      **Integration:** Integrate various components and ensure they work together seamlessly.
      **Best Practices:** Follow best practices for code quality, performance, and security.
      
      **Example Code (Conceptual):**
      <!-- This is a conceptual example, not executable code. -->
      Implementation Strategy:
      - Code Structure: Organize code into modules and components.
      - Integration Testing: Test interactions between integrated components.
      - Code Review: Conduct peer reviews to ensure code quality.
      
      Coding Standards:
      - Use consistent naming conventions.
      - Follow the DRY (Don't Repeat Yourself) principle.`
              },
              {
                title: "Testing and Debugging",
                content: "Testing and debugging are essential for ensuring that the system works correctly and efficiently. Implementing effective testing strategies and debugging techniques helps identify and fix issues:",
                example: `
      **Testing:** Conduct various types of testing, such as unit testing, integration testing, and system testing.
      **Debugging:** Use debugging tools and techniques to identify and fix code issues.
      
      **Example Code (Conceptual):**
      <!-- This is a conceptual example, not executable code. -->
      Testing Strategy:
      - Unit Tests: Test individual components or functions.
      - Integration Tests: Test the interactions between components.
      - System Tests: Test the entire system to ensure it meets requirements.
      
      Debugging Tools:
      - Use IDE debugging features to set breakpoints and inspect variables.
      - Employ logging to track application behavior and identify issues.`
              },
              {
                title: "Deployment and Maintenance",
                content: "Deployment and maintenance involve releasing the system to production and ensuring its ongoing functionality. This includes managing deployments, monitoring performance, and performing updates:",
                example: `
      **Deployment:** Deploy the system to production environments and ensure a smooth release process.
      **Monitoring:** Monitor system performance and user feedback to identify any issues.
      **Maintenance:** Apply updates, fix bugs, and make improvements based on user feedback and performance metrics.
      
      **Example Code (Conceptual):**
      <!-- This is a conceptual example, not executable code. -->
      Deployment Strategy:
      - Deployment Pipeline: Automate the deployment process using CI/CD pipelines.
      - Rollback Plan: Have a plan in place to revert changes if issues arise.
      
      Monitoring Tools:
      - Use monitoring tools to track system performance and availability.
      - Implement alerting systems to notify the team of critical issues.
      
      Maintenance Tasks:
      - Regularly update dependencies and libraries.
      - Address security vulnerabilities and apply patches.`
              }
            ]
          },
          {
            title: "Finalizing and Presentation",
            content: `**Finalizing Content:** Finalizing content involves reviewing and refining the information to ensure accuracy and clarity. This includes making sure that all elements are properly aligned, formatted, and meet the required standards for presentation.
    
    **Presentation Design:** Effective presentation design is key to communicating information clearly and engagingly. This includes choosing appropriate visuals, organizing content logically, and applying consistent styling.
    
    **Review and Feedback:** Gathering feedback and making necessary revisions are crucial for polishing the final presentation. This involves reviewing the content with stakeholders, incorporating their input, and ensuring that all aspects meet the expected quality.
    
    **Delivering the Presentation:** The final step is delivering the presentation in a professional manner. This includes preparing for potential questions, rehearsing the delivery, and using presentation tools effectively.`,
            innersubtopics: [
              {
                title: "Finalizing Content",
                content: "Finalizing content involves ensuring that all information is accurate, well-organized, and polished for presentation. Key aspects include:",
                example: `
    **Reviewing Accuracy:** Verify all facts, figures, and details.
    **Formatting:** Ensure consistent formatting across the entire presentation.
    **Alignment:** Check that all elements are aligned and properly placed.
    
    **Example Steps:**
    1. Proofread the content to correct any grammatical errors.
    2. Adjust text alignment and spacing for a professional look.
    3. Confirm that all data is up-to-date and accurate.`
              },
              {
                title: "Presentation Design",
                content: "Designing an effective presentation involves choosing the right visuals and organizing content for clarity and impact. Key design elements include:",
                example: `
    **Visuals:** Use images, charts, and graphs to enhance understanding.
    **Organization:** Structure content logically with clear headings and subheadings.
    **Styling:** Apply a consistent color scheme and font style.
    
    **Example Design Elements:**
    - Title Slide: Includes the presentation title and speaker name.
    - Content Slides: Use bullet points, charts, and visuals to convey information.
    - Summary Slide: Recaps key points and includes a call to action or conclusion.`
              },
              {
                title: "Review and Feedback",
                content: "Gathering feedback and making revisions is essential to ensure that the presentation meets the desired quality. Key steps include:",
                example: `
    **Solicit Feedback:** Get input from colleagues, stakeholders, or target audience.
    **Revise Content:** Make changes based on feedback to improve clarity and effectiveness.
    **Quality Check:** Perform a final review to ensure all aspects are polished.
    
    **Example Feedback Process:**
    1. Share the draft presentation with a small group for initial feedback.
    2. Incorporate suggestions and make necessary adjustments.
    3. Conduct a final review to ensure the presentation is ready for delivery.`
              },
              {
                title: "Delivering the Presentation",
                content: "Delivering the presentation effectively involves preparation and practice. Key aspects include:",
                example: `
    **Prepare for Questions:** Anticipate possible questions and prepare answers.
    **Rehearse Delivery:** Practice the presentation to ensure smooth delivery.
    **Use Tools Effectively:** Utilize presentation tools and technology to enhance the delivery.
    
    **Example Preparation Steps:**
    - Rehearse in front of a mirror or with a colleague to build confidence.
    - Ensure all technical equipment (projector, microphone) is working properly.
    - Prepare handouts or supplementary materials if needed.`
              }
            ]
          },
          {
            title: "Live Project and Career Preparation",
            content: `**Project Experience:** Engaging in live projects provides practical experience and skills that are crucial for career advancement. Real-world projects help in understanding the workflow, team dynamics, and project management, which are essential for a successful career.
  
  **Skill Development:** Working on live projects allows you to develop and refine various skills, including technical skills related to coding and development, as well as soft skills like communication, problem-solving, and teamwork.
  
  **Career Planning:** Preparing for a career involves understanding industry requirements, building a strong portfolio, and networking with professionals. Live project experience plays a significant role in making your resume stand out and showcasing your capabilities to potential employers.
  
  **Professional Growth:** Participating in live projects and preparing for your career helps in setting clear goals, gaining industry insights, and staying updated with the latest trends and technologies. This continuous growth is vital for long-term career success.`,
            innersubtopics: [
              {
                title: "Project Experience",
                content: "Working on live projects provides hands-on experience that is invaluable for career development. It involves:",
                example: `
  **Real-World Application:** Applying theoretical knowledge to solve actual problems.
  **Team Collaboration:** Working with a team to complete projects, simulating a real-world work environment.
  **Project Management:** Understanding project timelines, task management, and deliverable tracking.
  
  **Example Scenario:**
  - **Project Title:** E-Commerce Web Application
  - **Team Role:** Frontend Developer
  - **Responsibilities:** Implementing user interfaces, integrating APIs, and ensuring responsiveness.
  - **Outcome:** Successfully launched the application with positive user feedback and improved skills in frontend development.`
              },
              {
                title: "Skill Development",
                content: "Live projects are a great way to develop both technical and soft skills. Key areas include:",
                example: `
  **Technical Skills:** Enhancing programming, debugging, and problem-solving skills.
  **Soft Skills:** Improving communication, teamwork, and adaptability.
  
  **Example Scenario:**
  - **Skill Acquired:** Advanced proficiency in React.js for frontend development.
  - **Soft Skill Developed:** Effective communication through regular team meetings and presentations.
  - **Outcome:** Improved ability to handle complex coding tasks and collaborate effectively with team members.`
              },
              {
                title: "Career Planning",
                content: "Effective career planning involves understanding industry demands and preparing yourself accordingly. This includes:",
                example: `
  **Building a Portfolio:** Showcasing your live project work and achievements.
  **Networking:** Connecting with industry professionals and attending career events.
  **Resume Preparation:** Highlighting your project experience and skills effectively.
  
  **Example Scenario:**
  - **Portfolio Development:** Created a portfolio website showcasing completed projects, skills, and contributions.
  - **Networking:** Attended industry conferences and meetups to expand professional connections.
  - **Resume:** Updated resume with detailed project descriptions and skills gained during live projects.`
              },
              {
                title: "Professional Growth",
                content: "Continuous professional growth is essential for career advancement. This involves:",
                example: `
  **Goal Setting:** Defining career objectives and working towards achieving them.
  **Industry Insights:** Staying informed about industry trends, tools, and technologies.
  **Skill Enhancement:** Continuously improving skills through learning and practice.
  
  **Example Scenario:**
  - **Career Goal:** Transitioning to a full-stack developer role.
  - **Industry Insight:** Followed blogs and news related to full-stack development and emerging technologies.
  - **Skill Enhancement:** Enrolled in online courses to learn backend development alongside current frontend skills.`
              }
            ]
          }
        ]
      }
    }
  ]
}

