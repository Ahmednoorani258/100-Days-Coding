// Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.

// Explain & TIP: Classes can be modularized in the same way as functions. This encapsulation and reusability is a cornerstone of modern JavaScript application structure.

import { user } from "./131.2";

let Ahmed = new user('Ahmed',567891,'PIB Colony')

Ahmed.greet()