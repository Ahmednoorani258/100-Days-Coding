Building UI with Components


React core concepts
There are three core concepts of React that you'll need to be familiar with to start building React applications. These are:

Components
Props
State
In the next chapters, we will go through these concepts and provide resources where you can continue learning them. After you're familiar with these concepts, we'll then show you how to install Next.js and use newer React features such as Server and Client Components.

Components
User interfaces can be broken down into smaller building blocks called components.

Components allow you to build self-contained, reusable snippets of code. If you think of components as LEGO bricks, you can take these individual bricks and combine them together to form larger structures. If you need to update a piece of the UI, you can update the specific component or brick.

Example of a Media Component made up of 3 smaller components: image, text, and button
This modularity allows your code to be more maintainable as it grows because you can add, update, and delete components without touching the rest of our application.

The nice thing about React components is that they are just JavaScript. Let's see how you can write a React component, from a JavaScript perspective:

Creating components
In React, components are functions. Inside your script tag, create a new function called header:

index.html

<script type="text/jsx">
  const app = document.getElementById("app")
 
  function header() {
  }
 
  const root = ReactDOM.createRoot(app);
  root.render(<h1>Develop. Preview. Ship.</h1>);
</script>
A component is a function that returns UI elements. Inside the return statement of the function, you can write JSX:

index.html

<script type="text/jsx">
  const app = document.getElementById("app")
 
  function header() {
     return (<h1>Develop. Preview. Ship.</h1>)
   }
 
  const root = ReactDOM.createRoot(app);
  root.render(<h1>Develop. Preview. Ship.</h1>);
</script>
To render this component to the DOM, pass it as the first argument in the root.render() method:

index.html

<script type="text/jsx">
  const app = document.getElementById("app")
 
  function header() {
     return (<h1>Develop. Preview. Ship.</h1>)
   }
 
  const root = ReactDOM.createRoot(app);
  root.render(header);
</script>
But, wait a second. If you try to run the code above in your browser, you'll get an error. To get this to work, there are two things you have to do:

First, React components should be capitalized to distinguish them from plain HTML and JavaScript:

index.html

function Header() {
  return <h1>Develop. Preview. Ship.</h1>;
}
 
const root = ReactDOM.createRoot(app);
// Capitalize the React Component
root.render(Header);
Second, you use React components the same way you'd use regular HTML tags, with angle brackets <>:

index.html

function Header() {
  return <h1>Develop. Preview. Ship.</h1>;
}
 
const root = ReactDOM.createRoot(app);
root.render(<Header />);
If you try to run the code in your browser again, you'll see your changes.

Nesting components
Applications usually include more content than a single component. You can nest React components inside each other like you would regular HTML elements.

In your example, create a new component called HomePage:

index.html

function Header() {
  return <h1>Develop. Preview. Ship.</h1>;
}
 
function HomePage() {
  return <div></div>;
}
 
const root = ReactDOM.createRoot(app);
root.render(<Header />);
Then nest the <Header> component inside the new <HomePage>component:

index.html

function Header() {
  return <h1>Develop. Preview. Ship.</h1>;
}
 
function HomePage() {
  return (
    <div>
      {/* Nesting the Header component */}
      <Header />
    </div>
  );
}
 
const root = ReactDOM.createRoot(app);
root.render(<Header />);
Component trees
You can keep nesting React components this way to form component trees.

Component tree showing how components can be nested inside each other
For example, your top-level HomePage component could hold a Header, an Article, and a Footer Component. And each of those components could in turn have their own child components and so on. For example, the Header component could contain a Logo, Title and Navigation component.

This modular format allows you to reuse components in different places inside your app.

In your project, since <HomePage> is now your top-level component, you can pass it to the root.render() method:

index.html

function Header() {
  return <h1>Develop. Preview. Ship.</h1>;
}
 
function HomePage() {
  return (
    <div>
      <Header />
    </div>
  );
}
 
const root = ReactDOM.createRoot(app);
root.render(<HomePage />);



Getting Started with React
To use React in your newly created project, load two React scripts from an external website called unpkg.com:

react is the core React library.
react-dom provides DOM-specific methods that enable you to use React with the DOM.
index.html

<html>
  <body>
    <div id="app"></div>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script type="text/javascript">
      const app = document.getElementById('app');
      const header = document.createElement('h1');
      const text = 'Develop. Preview. Ship.';
      const headerContent = document.createTextNode(text);
      header.appendChild(headerContent);
      app.appendChild(header);
    </script>
  </body>
</html>
Instead of directly manipulating the DOM with plain JavaScript, remove the DOM methods that you had added previously, and add the ReactDOM.createRoot() method to target a specific DOM element and create a root to display your React Components in. Then, add the root.render() method to render your React code to the DOM.

This will tell React to render our <h1> title inside our #app element.

index.html

<html>
  <body>
    <div id="app"></div>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/jsx">
      const app = document.getElementById('app');
      const root = ReactDOM.createRoot(app);
      root.render(<h1>Develop. Preview. Ship.</h1>);
    </script>
  </body>
</html>
If you try to run this code in the browser, you will get a syntax error:

Terminal

Uncaught SyntaxError: expected expression, got '<'
This is because <h1>...</h1> is not valid Javascript. This piece of code is JSX.

What is JSX?
JSX is a syntax extension for JavaScript that allows you to describe your UI in a familiar HTML-like syntax. The nice thing about JSX is that apart from following three JSX rules, you don't need to learn any new symbols or syntax outside of HTML and JavaScript.

But browsers don't understand JSX out of the box, so you'll need a JavaScript compiler, such as a Babel, to transform your JSX code into regular JavaScript.

Adding Babel to your project
To add Babel to your project, copy and paste the following script in your index.html file:

index.html

<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
In addition, you will need to inform Babel what code to transform by changing the script type to type=text/jsx.

index.html

<html>
  <body>
    <div id="app"></div>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <!-- Babel Script -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/jsx">
      const domNode = document.getElementById('app');
      const root = ReactDOM.createRoot(domNode);
      root.render(<h1>Develop. Preview. Ship.</h1>);
    </script>
  </body>
</html>
To confirm it's working correctly, open your HTML file in the browser.

Comparing the declarative React code you just wrote:

index.html

<script type="text/jsx">
  const domNode = document.getElementById("app")
  const root = ReactDOM.createRoot(domNode);
  root.render(<h1>Develop. Preview. Ship.</h1>);
</script>
to the imperative JavaScript code you wrote in the previous section:

index.html

<script type="text/javascript">
  const app = document.getElementById('app');
  const header = document.createElement('h1');
  const text = 'Develop. Preview. Ship.';
  const headerContent = document.createTextNode(text);
  header.appendChild(headerContent);
  app.appendChild(header);
</script>
You can start to see how using React enables you to cut down a lot of repetitive code.

And this is exactly what React does, it's a library that contains reusable snippets of code that perform tasks on your behalf - in this case, updating the UI.

Additional Resources:

You don't need to know exactly how React updates the UI to start using it, but if you'd like to learn more, here are some additional resources:

UI trees
Writing markup with JSX
react-dom/server sections in the React Documentation.
Essen