// Question 87: Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.

// Explain & TIP: .substring() can be used to get a specific part of a string, by specifying the start and end positions.

function extracter(str:string,istart:number,istop:number){
    console.log(str.substring(istart,istop))
}

extracter(`ahmed is beautiful name`,0,5)//ahmed