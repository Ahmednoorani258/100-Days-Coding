Imperative vs. declarative programming
The code above is a good example of imperative programming. You're writing the steps for how the user interface should be updated. But when it comes to building user interfaces, a declarative approach is often preferred because it can speed up the development process. Instead of having to write DOM methods, it would be helpful if developers were able to declare what they want to show (in this case, an h1 tag with some text).

In other words, imperative programming is like giving a chef step-by-step instructions on how to make a pizza. Declarative programming is like ordering a pizza without being concerned about the steps it takes to make the pizza. 🍕

React is a popular declarative library that you can use build user interfaces.

React: A declarative UI library
As a developer, you can tell React what you want to happen to the user interface, and React will figure out the steps of how to update the DOM on your behalf.

In the next section, we'll explore how you can get started with React.



To use React in your newly created project, load two React scripts from an external website called [unpkg.com:](https://unpkg.com/)

react is the core React library.
react-dom provides DOM-specific methods that enable you to use React with the DOM.


//this is the we write only with js

            // const app = document.getElementById("app")
            // const header = document.createElement('h1')
            // const text = 'Develop.preview.ship'
            // const headerContent = document.createTextNode(text);

            // // Append the text to the H1 element
            // header.appendChild(headerContent);
 
            // // Place the H1 element inside the div
            // app.appendChild(header);


What is JSX?
JSX is a syntax extension for JavaScript that allows you to describe your UI in a familiar HTML-like syntax. The nice thing about JSX is that apart from following three JSX rules, you don't need to learn any new symbols or syntax outside of HTML and JavaScript.

But browsers don't understand JSX out of the box, so you'll need a JavaScript compiler, such as a Babel, to transform your JSX code into regular JavaScript.


<!-- Babel Script -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/jsx">

    we use this babel to compile jsx to js

