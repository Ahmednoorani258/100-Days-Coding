Learn Next.js
Welcome to the Next.js App Router course! In this free interactive course, you'll learn the main features of Next.js by building a full-stack web application.

What we'll be building
Screenshots of the dashboard project showing desktop and mobile versions.
For this course, we'll be building a simplified version of the financial dashboard that has:

A public home page.
A login page.
Dashboard pages that are protected by authentication.
The ability for users to add, edit, and delete invoices.
The dashboard will also have an accompanying database, which you'll set up in a later chapter.

By the end of the course, you'll have the essential skills needed to start building full-stack Next.js applications.

Overview
Here's an overview of features you'll learn about in this course:

Styling: The different ways to style your application in Next.js.
Optimizations: How to optimize images, links, and fonts.
Routing: How to create nested layouts and pages using file-system routing.
Data Fetching: How to set up a database on Vercel, and best practices for fetching and streaming.
Search and Pagination: How to implement search and pagination using URL Search Params.
Mutating Data: How to mutate data using React Server Actions, and revalidate the Next.js cache.
Error Handling: How to handle general and 404 not found errors.
Form Validation and Accessibility: How to do server-side form validation and tips for improving accessibility.
Authentication: How to add authentication to your application using NextAuth.js and Middleware.
Metadata: How to add metadata and prepare your application for social sharing.
Prerequisite knowledge
This course assumes you have a basic understanding of React and JavaScript. If you're new to React, we recommend going through our React Foundations course first to learn the fundamentals of React, such as components, props, state, and hooks, and newer features like Server Components and Suspense.

System requirements
Before you start this course, make sure your system meets the following requirements:

Node.js 18.17.0 or later installed. Download here.
Operating systems: macOS, Windows (including WSL), or Linux.
In addition, you'll also need a GitHub Account and a Vercel Account.




















Getting Started
Creating a new project
To create a Next.js app, open your terminal, cd into the folder you'd like to keep your project, and run the following command:

Terminal

npx create-next-app@latest nextjs-dashboard --use-npm --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example"
This command uses create-next-app, a Command Line Interface (CLI) tool that sets up a Next.js application for you. In the command above, you're also using the --example flag with the starter example for this course.

Exploring the project
Unlike tutorials that have you write code from scratch, much of the code for this course is already written for you. This better reflects real-world development, where you'll likely be working with existing codebases.

Our goal is to help you focus on learning the main features of Next.js, without having to write all the application code.

After installation, open the project in your code editor and navigate to nextjs-dashboard.

Terminal

cd nextjs-dashboard
Let's spend some time exploring the project.

Folder structure
You'll notice that the project has the following folder structure:

Folder structure of the dashboard project, showing the main folders and files: app, public, and config files.
/app: Contains all the routes, components, and logic for your application, this is where you'll be mostly working from.
/app/lib: Contains functions used in your application, such as reusable utility functions and data fetching functions.
/app/ui: Contains all the UI components for your application, such as cards, tables, and forms. To save time, we've pre-styled these components for you.
/public: Contains all the static assets for your application, such as images.
/scripts: Contains a seeding script that you'll use to populate your database in a later chapter.
Config Files: You'll also notice config files such as next.config.js at the root of your application. Most of these files are created and pre-configured when you start a new project using create-next-app. You will not need to modify them in this course.
Feel free to explore these folders, and don't worry if you don't understand everything the code is doing yet.

Placeholder data
When you're building user interfaces, it helps to have some placeholder data. If a database or API is not yet available, you can:

Use placeholder data in JSON format or as JavaScript objects.
Use a 3rd party service like mockAPI.
For this project, we've provided some placeholder data in app/lib/placeholder-data.js. Each JavaScript object in the file represents a table in your database. For example, for the invoices table:

/app/lib/placeholder-data.js

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  // ...
];
In the chapter on setting up your database, you'll use this data to seed your database (populate it with some initial data).

TypeScript
You may also notice most files have a .ts or .tsx suffix. This is because the project is written in TypeScript. We wanted to create a course that reflects the modern web landscape.

It's okay if you don't know TypeScript - we'll provide the TypeScript code snippets when required.

For now, take a look at the /app/lib/definitions.ts file. Here, we manually define the types that will be returned from the database. For example, the invoices table has the following types:

/app/lib/definitions.ts

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};
By using TypeScript, you can ensure you don't accidentally pass the wrong data format to your components or database, like passing a string instead of a number to invoice amount.

If you're a TypeScript developer:

We're manually declaring the data types, but for better type-safety, we recommend Prisma, which automatically generates types based on your database schema.
Next.js detects if your project uses TypeScript and automatically installs the necessary packages and configuration. Next.js also comes with a TypeScript plugin for your code editor, to help with auto-completion and type-safety.
Running the development server
Run npm i to install the project's packages.

Terminal

npm i
Followed by npm run dev to start the development server.

Terminal

npm run dev
npm run dev starts your Next.js development server on port 3000. Let's check to see if it's working. Open http://localhost:3000 on your browser. Your home page should look like this:

Unstyled page with the title 'Acme', a description, and login link.