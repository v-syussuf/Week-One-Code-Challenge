/**The output should align with the appropriate grade, as displayed below:
 * A - >  79
 * B - 60 to 79 
 * C - 59 to 49 
 * D - 40 to 49 
 * E - <  40
 */
 
//Function responsible for outputting the grade
 function studentMarks(grade){

//Conditional expression for the input to fall within the range of 0 to 100.
    if (grade >= 0 && grade <= 100){
      
       if(grade > 79){
        console.log("A");
       }
       else if(grade <= 79 && grade >= 60){
        console.log("B");
       }
       else if(grade <= 59 && grade > 49){
        console.log("C");
       }
       else if(grade <= 49 && grade >= 40){
        console.log("D")
       }
       else {
        console.log("E");
       }
     }
    }
    //Call the function providing the marks as arguments.
    studentMarks(47);