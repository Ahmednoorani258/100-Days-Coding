CSS Styling
Currently, your home page doesn't have any styles. Let's look at the different ways you can style your Next.js application.

In this chapter...

Here are the topics we’ll cover

How to add a global CSS file to your application.

Two different ways of styling: Tailwind and CSS modules.

How to conditionally add class names with the clsx utility package.

Global styles
If you look inside the /app/ui folder, you'll see a file called global.css. You can use this file to add CSS rules to all the routes in your application - such as CSS reset rules, site-wide styles for HTML elements like links, and more.

You can import global.css in any component in your application, but it's usually good practice to add it to your top-level component. In Next.js, this is the root layout (more on this later).

Add global styles to your application by navigating to /app/layout.tsx and importing the global.css file:

/app/layout.tsx

import '@/app/ui/global.css';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
With the development server still running, save your changes and preview them in the browser. Your home page should now look like this:

Styled page with the logo 'Acme', a description, and login link.
But wait a second, you didn't add any CSS rules, where did the styles come from?

If you take a look inside global.css, you'll notice some @tailwind directives:

/app/ui/global.css

@tailwind base;
@tailwind components;
@tailwind utilities;
Tailwind
Tailwind is a CSS framework that speeds up the development process by allowing you to quickly write utility classes directly in your TSX markup.

In Tailwind, you style elements by adding class names. For example, adding the class "text-blue-500" will turn the <h1> text blue:


<h1 className="text-blue-500">I'm blue!</h1>
Although the CSS styles are shared globally, each class is singularly applied to each element. This means if you add or delete an element, you don't have to worry about maintaining separate stylesheets, style collisions, or the size of your CSS bundle growing as your application scales.

When you use create-next-app to start a new project, Next.js will ask if you want to use Tailwind. If you select yes, Next.js will automatically install the necessary packages and configure Tailwind in your application.

If you look at /app/page.tsx, you'll see that we're using Tailwind classes in the example.

/app/page.tsx

import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
 
export default function Page() {
  return (
    // These are Tailwind classes:
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
    // ...
  )
}
Don't worry if this is your first time using Tailwind. To save time, we've already styled all the components you'll be using.

Let's play with Tailwind! Copy the code below and paste it above the <p> element in /app/page.tsx:

/app/page.tsx

<div
  className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"
/>
It’s time to take a quiz!
Test your knowledge and see what you’ve just learned.

What shape do you see when using the code snippet above?


A
A yellow star

B
A blue triangle

C
A black triangle

D
A red circle
If you prefer writing traditional CSS rules or keeping your styles separate from your JSX - CSS Modules are a great alternative.

CSS Modules
CSS Modules allow you to scope CSS to a component by automatically creating unique class names, so you don't have to worry about style collisions as well.

We'll continue using Tailwind in this course, but let's take a moment to see how you can achieve the same results from the quiz above using CSS modules.

Inside /app/ui, create a new file called home.module.css and add the following CSS rules:

/app/ui/home.module.css

.shape {
  height: 0;
  width: 0;
  border-bottom: 30px solid black;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
}
Then, inside your /app/page.tsx file import the styles and replace the Tailwind class names from the <div> you've added with styles.shape:

/app/page.tsx

import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
 
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className={styles.shape} />
    // ...
  )
}
Save your changes and preview them in the browser. You should see the same shape as before.

Tailwind and CSS modules are the two most common ways of styling Next.js applications. Whether you use one or the other is a matter of preference - you can even use both in the same application!

It’s time to take a quiz!
Test your knowledge and see what you’ve just learned.

What is one benefit of using CSS modules?


A
Increase the global scope of CSS classes, making them easier to manage across different files.

B
Provide a way to make CSS classes locally scoped to components by default, reducing the risk of styling conflicts.

C
Automatically compress and minify CSS files for faster page loading.
Using the clsx library to toggle class names
There may be cases where you may need to conditionally style an element based on state or some other condition.

clsx is a library that lets you toggle class names easily. We recommend taking a look at documentation for more details, but here's the basic usage:

Suppose that you want to create an InvoiceStatus component which accepts status. The status can be 'pending' or 'paid'.
If it's 'paid', you want the color to be green. If it's 'pending', you want the color to be gray.
You can use clsx to conditionally apply the classes, like this:

/app/ui/invoices/status.tsx

import clsx from 'clsx';
 
export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-sm',
        {
          'bg-gray-100 text-gray-500': status === 'pending',
          'bg-green-500 text-white': status === 'paid',
        },
      )}
    >
    // ...
)}



























Optimizing Fonts and Images
In the previous chapter, you learned how to style your Next.js application. Let's continue working on your home page by adding a custom font and a hero image.

In this chapter...

Here are the topics we’ll cover

How to add custom fonts with next/font.

How to add images with next/image.

How fonts and images are optimized in Next.js.

Why optimize fonts?
Fonts play a significant role in the design of a website, but using custom fonts in your project can affect performance if the font files need to be fetched and loaded.

Cumulative Layout Shift is a metric used by Google to evaluate the performance and user experience of a website. With fonts, layout shift happens when the browser initially renders text in a fallback or system font and then swaps it out for a custom font once it has loaded. This swap can cause the text size, spacing, or layout to change, shifting elements around it.

Mock UI showing initial load of a page, followed by a layout shift as the custom font loads.
Next.js automatically optimizes fonts in the application when you use the next/font module. It downloads font files at build time and hosts them with your other static assets. This means when a user visits your application, there are no additional network requests for fonts which would impact performance.

It’s time to take a quiz!
Test your knowledge and see what you’ve just learned.

How does Next.js optimize fonts?


A
It causes additional network requests which improve performance.

B
It disables all custom fonts.

C
It preloads all fonts at runtime.

D
It hosts font files with other static assets so that there are no additional network requests.
Adding a primary font
Let's add a custom Google font to your application to see how this works!

In your /app/ui folder, create a new file called fonts.ts. You'll use this file to keep the fonts that will be used throughout your application.

Import the Inter font from the next/font/google module - this will be your primary font. Then, specify what subset you'd like to load. In this case, 'latin':

/app/ui/fonts.ts

import { Inter } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
Finally, add the font to the <body> element in /app/layout.tsx:

/app/layout.tsx

import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
By adding Inter to the <body> element, the font will be applied throughout your application. Here, you're also adding the Tailwind antialiased class which smooths out the font. It's not necessary to use this class, but it adds a nice touch.

Navigate to your browser, open dev tools and select the body element. You should see Inter and Inter_Fallback are now applied under styles.

Practice: Adding a secondary font
You can also add fonts to specific elements of your application.

Now it's your turn! In your fonts.ts file, import a secondary font called Lusitana and pass it to the <p> element in your /app/page.tsx file. In addition to specifying a subset like you did before, you'll also need to specify the font weight.

Once you're ready, expand the code snippet below to see the solution.

Hints:

If you're unsure what weight options to pass to a font, check the TypeScript errors in your code editor.
Visit the Google Fonts website and search for Lusitana to see what options are available.
See the documentation for adding multiple fonts and the full list of options.
Finally, the <AcmeLogo /> component also uses Lusitana. It was commented out to prevent errors, you can now uncomment it:

/app/page.tsx

// ...
 
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
        {/* ... */}
      </div>
    </main>
  );
}
Great, you've added two custom fonts to your application! Next, let's add a hero image to the home page.

Why optimize images?
Next.js can serve static assets, like images, under the top-level /public folder. Files inside /public can be referenced in your application.

With regular HTML, you would add an image as follows:


<img
  src="/hero.png"
  alt="Screenshots of the dashboard project showing desktop version"
/>
However, this means you have to manually:

Ensure your image is responsive on different screen sizes.
Specify image sizes for different devices.
Prevent layout shift as the images load.
Lazy load images that are outside the user's viewport.
Image Optimization is a large topic in web development that could be considered a specialization in itself. Instead of manually implementing these optimizations, you can use the next/image component to automatically optimize your images.

The <Image> component
The <Image> Component is an extension of the HTML <img> tag, and comes with automatic image optimization, such as:

Preventing layout shift automatically when images are loading.
Resizing images to avoid shipping large images to devices with a smaller viewport.
Lazy loading images by default (images load as they enter the viewport).
Serving images in modern formats, like WebP and AVIF, when the browser supports it.
Adding the desktop hero image
Let's use the <Image> component. If you look inside the /public folder, you'll see there are two images: hero-desktop.png and hero-mobile.png. These two images are completely different, and they'll be shown depending if the user's device is a desktop or mobile.

In your /app/page.tsx file, import the component from next/image. Then, add the image under the comment:

/app/page.tsx

import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
 
export default function Page() {
  return (
    // ...
    <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
      {/* Add Hero Images Here */}
      <Image
        src="/hero-desktop.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
    </div>
    //...
  );
}
Here, you're setting the width to 1000 and height to 760 pixels. It's good practice to set the width and height of your images to avoid layout shift, these should be an aspect ratio identical to the source image.

You'll also notice the class hidden to remove the image from the DOM on mobile screens, and md:block to show the image on desktop screens.

This is what your home page should look like now:

Styled home page with a custom font and hero image
Practice: Adding the mobile hero image
Now it's your turn! Under the image you've just added, add another <Image> component for hero-mobile.png.

The image should have a width of 560 and height of 620 pixels.
It should be shown on mobile screens, and hidden on desktop - you can use dev tools to check if the desktop and mobile images are swapped correctly.
Once you're ready, expand the code snippet below to see the solution.