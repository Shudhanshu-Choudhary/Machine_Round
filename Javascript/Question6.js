//6. Write a program to sort the array
// objects according to date (descending order)Given Array :[{id:1,date:2022/09/02},
// {id:2,date:2001/03/22},{id:3,date:1993/11/01},{id:4,date:2005/04/20}]

const getMiliSecond = (date) => {
    // convert the date string into JS DATE
    const newDate = new Date(date).getTime();

    // get miliSecond from date
    return newDate;
}

const comparisonFunction = (firstDate, secondDate) => {
    const firstDateMilliSecond = getMiliSecond(firstDate.date);
    const secondDateMilliSecond = getMiliSecond(secondDate.date);
    return secondDateMilliSecond - firstDateMilliSecond;
}

const sortArrayInDescendingOrder = (dateArray) => {
    dateArray.sort(comparisonFunction);
    console.log('Result', dateArray)
}

let array = [{id:1,date:'2022/09/02'},
{id:2,date:'2001/03/22'},{id:3,date:'1993/11/01'},{id:4,date:'2005/04/20'}]

sortArrayInDescendingOrder(array);