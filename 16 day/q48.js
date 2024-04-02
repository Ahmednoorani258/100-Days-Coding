"use strict";
// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: The spread operator can be used in conjunction with array methods like sort() to combine and manipulate arrays efficiently.
let prices1 = [25000, 2000, 3800];
let prices2 = [3500, 1500, 5500];
// let combineprice = prices1.concat(prices2).sort((a, b) => a - b);
let combinePrices = [...prices1, ...prices2].sort((a, b) => a - b);
console.log(combinePrices);
