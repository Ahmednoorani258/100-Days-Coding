// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Explain & TIP: The spread operator can be used in conjunction with array methods like sort() to combine and manipulate arrays efficiently.
var prices1 = [25000, 2000, 3800];
var prices2 = [3500, 1500, 5500];
// let combineprice = prices1.concat(prices2).sort((a, b) => a - b);
var combinePrices = __spreadArray(__spreadArray([], prices1, true), prices2, true).sort(function (a, b) { return a - b; });
console.log(combinePrices);
