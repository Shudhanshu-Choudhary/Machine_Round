//3.Write a program to find a year is leap year or not?

// Defining The Function
function leapYear(year){
    if(year == 0){
        console.log("Please Give Valid Year");
    }

    if(year %400== 0 || year%4==0){
        console.log(`${year} is a leap year.`);
    }else{
        console.log(`${year} is not a leap year.`);
    }
};

 let year = 2024;
 
 //Calling The Function
 leapYear(year);