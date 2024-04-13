// Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.

// Explain & TIP: In traditional functions, this refers to the object that called the function, which can vary depending on the context. In arrow functions, this is lexically bound, meaning it uses this from the code that contains the arrow function.


const traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {console.log(this.value)},
    arrowFunction: () => {console.log(this.value)},
  };
  
  let FvsAFunc = {
      names:'ahmed',
      nfunc:function () {console.log(this.names)},
      Afunc:() => {console.log(this.names)} 
    }
    
    FvsAFunc.nfunc()
    FvsAFunc.Afunc()
    
    traditionalVsArrow.traditionalFunction(); 
    traditionalVsArrow.arrowFunction(); 
    