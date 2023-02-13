// let array=[1,1,2,2,3,3,4,4,5,5,1,2,3,4,2]
// find count of each element in obj ?(ex:-{1:2,2:3,3:4})

// Definig The Function
function countElement(arr) {
    // Calculating The Element Of Array
    let len = arr.length;
  
    // Declaring The Object
    let obj = {};
  
    // Cheking The Lenght Of Array
    if (len == 0) {
      return obj;
    }
  
    // Itterating The Array Using For Loop
    for (let i = 0; i < len; i++) {
       if(!obj[arr[i]]){
          obj[arr[i]]=1;
       }
       else{
          obj[arr[i]] +=1
       }
    }

    return obj;
  };
  
  let arr=[1,1,1,2,2,4,4,2,2,5,5,9,9,4,9,3]
  let data = countElement(arr);
  
  console.log(data);