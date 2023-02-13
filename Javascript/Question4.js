//4.Find a longest word in this sentence:"i am a good boy"?

// Defining The Function​
function getLongestWord(str) {
  if (str.length == 0) {
    console.log("Please Provide Valid Sentence");
  }

  // Spliting The Sentence From Space
  let newArray = str.split(" ");

  let maxLen=0
  let word;
  //Itterating The Array Using For Loop
  for (let i = 0; i < newArray.length; i++) {

    if(newArray[i].length >maxLen){
        maxLen =newArray[i].length;
        word =newArray[i];
    }
  }
  return word;
}

let sentence="I Am Cool Shudhanshu";
let data = getLongestWord(sentence);
console.log("The Longest Word:-",data);