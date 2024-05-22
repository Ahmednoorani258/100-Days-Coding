REACT Foundation


Building blocks of a web application
There are a few things you need to consider when building modern applications. Such as:

User Interface - how users will consume and interact with your application.
Routing - how users navigate between different parts of your application.
Data Fetching - where your data lives and how to get it.
Rendering - when and where you render static or dynamic content.
Integrations - what third-party services you use (for CMS, auth, payments, etc.) and how you connect to them.
Infrastructure - where you deploy, store, and run your application code (serverless, CDN, edge, etc.).
Performance - how to optimize your application for end-users.
Scalability - how your application adapts as your team, data, and traffic grow.
Developer Experience - your team's experience building and maintaining your application.
For each part of your application, you will need to decide whether you will build a solution yourself or use other tools, such as packages, libraries, and frameworks.


What is React?
React is a JavaScript library for building interactive user interfaces.

By user interfaces (UI), we mean the elements that users see and interact with on-screen.

User Interface example showing a browser window with a navigation, a sidebar, and a list of posts
By library, we mean React provides helpful functions (APIs) to build UI, but leaves it up to the developer where to use those functions in their application.

Part of React's success is that it is relatively unopinionated about the other aspects of building applications. This has resulted in a flourishing ecosystem of third-party tools and solutions, including Next.js.

It also means, however, that building a complete React application from the ground up requires some effort. Developers need to spend time configuring tools and reinventing solutions for common application requirements.


What is Next.js?
Next.js is a React framework that gives you building blocks to create web applications.

By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application.

Diagram showing how Next.js spans the server and client, and provides additional features such as routing, data fetching, and rendering.
You can use React to build your UI, then incrementally adopt Next.js features to solve common application requirements such as routing, data fetching, and caching - all while improving the developer and end-user experience.

Whether you're an individual developer or part of a larger team, you can use React and Next.js to build fully interactive, highly dynamic, and performant web applications.

In the next chapters, we will discuss how you can get started with React and Next.js.




Rendering User Interfaces (UI)

To understand how React works, we first need a basic understanding of how browsers interpret your code to create (or render) user interfaces (UI).

When a user visits a web page, the server returns an HTML file to the browser that may look like this:



html => body => div => h1,button,ul   ul=> li,li,li



The browser then reads the HTML and constructs the Document Object Model (DOM).

What is the DOM?
The DOM is an object representation of the HTML elements. It acts as a bridge between your code and the user interface, and has a tree-like structure with parent and child relationships.


You can use DOM methods and JavaScript, to listen to user events and manipulate the DOM by selecting, adding, updating, and deleting specific elements in the user interface. DOM manipulation allows you to not only target specific elements, but also change their style and content.

In the next section you'll learn how to use JavaScript and DOM methods.