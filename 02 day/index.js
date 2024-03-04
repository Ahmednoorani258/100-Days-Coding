//                              #100 DAYS CODING CHALLENGE
//==================================DAY 02 =========================================
//Q4)Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
console.log("Allama Iqbal once said,\u201CThe sun conveyed this message to its rays,\n                    What wonder great, the change of nights and days!\u201D");
//Q5)Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famouspersonname = "Allama Iqbal";
var message = "".concat(famouspersonname, " once said,\t                                                                                                  \u201CThe sun conveyed this message to its rays,\n\t             What wonder great, the change of nights and days!\u201D\n");
console.log(message);
//Q6)Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var personname = "\t                Ahmed Noorani     \n";
console.log(personname);
var trimname = personname.trim();
console.log(trimname + "is a very famous person.");
